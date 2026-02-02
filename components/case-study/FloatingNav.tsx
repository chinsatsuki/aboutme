"use client";
import React, { useEffect, useState } from 'react';

const navItems = [
  { id: 'hero', label: 'Top', jp: 'トップ' },
  { id: 'analysis', label: 'Analysis', jp: '課題特定' },
  { id: 'process', label: 'Design Process', jp: 'デザインプロセス' },
  { id: 'thanks', label: 'Conclusion', jp: 'まとめ' },
];

export default function FloatingNav({ themeColor }: { themeColor: string }) {
  const [hiddenBySection, setHiddenBySection] = useState(false);

  // ==== 🟡 监听 OTHER RELATED CASES section =====
  useEffect(() => {
    const target = document.getElementById("other-cases");
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setHiddenBySection(entry.isIntersecting); // true → 隐藏 FloatingNav
      },
      {
        root: null,
        threshold: 0.15, // 15% 可见时隐藏
      }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={`
        fixed right-[75px] top-1/2 -translate-y-1/2 z-[100] group 
        flex items-center justify-end pointer-events-none
        transition-all duration-500

        ${hiddenBySection ? "opacity-0 translate-x-6 pointer-events-none" : "opacity-100 translate-x-0"}
      `}
    >

      {/* 🟡 唱片部分（保留你的样式） */}
      <div
        className="
          relative w-[650px] h-[650px] rounded-full flex items-center justify-center right-[-90%]
          transition-all duration-500 ease-out
          pointer-events-auto cursor-pointer
          group-hover:translate-x-[-4px] group-hover:rotate-[15deg]
        "
        style={{
          background: `repeating-radial-gradient(
            circle,
            transparent 0,
            transparent 2px,
            ${themeColor}33 3px,
            ${themeColor}33 4px
          )`,
          border: `1px solid ${themeColor}44`,
        }}
      >
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            boxShadow: `0 0 30px ${themeColor}66, inset 0 0 20px ${themeColor}33`,
          }}
        />

        <div
          className="w-4 h-4 rounded-full border shadow-inner z-10"
          style={{ borderColor: themeColor }}
        />

        <div
          className="absolute inset-0 rounded-full opacity-10 group-hover:opacity-25 transition-opacity"
          style={{
            background:
              "conic-gradient(from 0deg, transparent, white, transparent, white, transparent)",
          }}
        />
      </div>

      {/* 🟡 菜单部分 */}
      <div
        className="
          absolute right-0 top-1/2 -translate-y-1/2
          opacity-0 translate-x-12
          group-hover:opacity-100 group-hover:translate-x-0
          pointer-events-none group-hover:pointer-events-auto
          transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
        "
      >
        <ul className="flex flex-col gap-8 items-end">
          {navItems.map((item, index) => (
            <li
              key={item.id}
              className="transform transition-all duration-500 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
              style={{ transitionDelay: `${index * 60 + 100}ms` }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className="flex flex-col items-end group/item pointer-events-auto"
              >
                <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 group-hover/item:opacity-100 transition-all">
                  {item.label}
                </span>
                <span className="text-[20px] font-bold" style={{ color: themeColor }}>
                  {item.jp}
                </span>
                <div
                  className="w-0 h-[2px] mt-1 group-hover/item:w-full transition-all duration-300 origin-right"
                  style={{ backgroundColor: themeColor }}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
