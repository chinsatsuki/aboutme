"use client";

import { useEffect, useState, useCallback } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  // 1. 初始化 state 为 initialValue，避免服务端渲染不匹配
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  // 辅助函数：安全解析 JSON
  const parseJSON = (value: string | null): T | null => {
    if (value === null) return null;
    try {
      return JSON.parse(value);
    } catch (e) {
      console.warn(`Error parsing localStorage key "${key}":`, e);
      return null;
    }
  };

  // 2. 挂载后从 localStorage 读取真实值
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const item = window.localStorage.getItem(key);
      if (item !== null) {
        const parsed = parseJSON(item);
        // 只有解析成功且不为 null 时才覆盖，或者根据需求策略调整
        // 这里我们简单处理：如果有值（哪怕解析失败返回 null），就用解析结果；
        // 但如果解析失败，可能希望保留 initialValue？
        // 更稳妥的做法：如果 item 存在但解析失败，可能是旧的非 JSON 数据，或者是坏数据。
        // 我们这里选择：如果解析结果不为 null，则更新；否则保持 initialValue
        if (parsed !== null) {
          setStoredValue(parsed);
        }
      }
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
    }
  }, [key]);

  // 3. 封装 setValue
  const setValue = useCallback(
    (value: T | ((val: T) => T)) => {
      try {
        setStoredValue((prev) => {
          const valueToStore = value instanceof Function ? value(prev) : value;
          
          if (typeof window !== "undefined") {
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
            window.dispatchEvent(new Event("local-storage"));
          }
          return valueToStore;
        });
      } catch (error) {
        console.error(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key]
  );

  // 4. 监听 storage 事件
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent | Event) => {
      if ((event as StorageEvent)?.key && (event as StorageEvent).key !== key) {
        return;
      }
      
      try {
        const item = window.localStorage.getItem(key);
        if (item === null) {
            // 如果被删除了，恢复初始值
            setStoredValue(initialValue);
        } else {
            const parsed = parseJSON(item);
            if (parsed !== null) setStoredValue(parsed);
        }
      } catch (error) {
        console.error(error);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("local-storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("local-storage", handleStorageChange);
    };
  }, [key, initialValue]);

  return [storedValue, setValue] as const;
}
