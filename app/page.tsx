"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/components/hero/Hero.module.css";
import { Disk } from "@/components/hero/Disk";
import { DetailsContent } from "@/components/hero/DetailsContent";
import { CoverImage } from "@/components/hero/CoverImage";

export default function HeroSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
<motion.div
  className={styles.mainWrapper}
  onMouseEnter={() => setIsExpanded(true)}
  onMouseLeave={() => setIsExpanded(false)}
  // 💡 添加以下三行来实现整体左移效果
  initial={{ marginLeft: "20%" }}
  animate={{
    marginLeft: isExpanded ? "10%" : "20%"
  }}
  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
>
        {/* 1. 唱片底层 */}
<motion.div
          className={styles.diskWrapper}
          initial={{ left: "-35%" }}
          animate={{
            left: isExpanded ? "-10%" : "-35%"
          }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <Disk />
        </motion.div>

{/* 2. 左侧绿色板块 (书脊) */}
<div className={styles.greenSection}>
  {/* 顶部橙色标题 */}
  <div className="absolute top-8 left-0 w-full text-center">
    <h2 className="text-[var(--brand-orange)] text-2xl font-bold tracking-widest">
      ABOUT ME
    </h2>
  </div>

  {/* 中间个人信息 (白色文字) */}
  <div className="flex flex-col items-end pr-6 w-full text-white space-y-1 text-[12px] font-medium leading-relaxed opacity-70">
    <p>名前　陳彩月</p>
    <p>(CHIN SATSUKI)</p>
    <p>所在地　東京</p>
    <p>出身地　中国</p>
    <p>九州大学MBA</p>
    <p className="pt-1">Tel　81 09095660863</p>
    <p>hnyz0303@gmail.com</p>
  </div>
  {/* 新增：动态渐隐的名字 */}
  <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: isExpanded ? 0 : 1 }}
transition={{ duration: 0.4, ease: "easeInOut" }}
    className={styles.heroName}
  >
    CHIN<br />SATSUKI
  </motion.div>
</div>

        {/* 3. 中间详情页 (材质背景) */}
        <motion.div
          initial={{ width: 0, opacity: 0}}
          animate={{
    width: isExpanded ? "var(--base-height)" : 0,
    opacity: isExpanded ? 1 : 0
  }}
  transition={{
    duration: 0.7,
    ease: [0.4, 0, 0.1, 1],
    opacity: { duration: isExpanded ? 0.4 : 0.3 }
  }}
          className={`${styles.textureBase1} overflow-hidden`}
        >
          {/* 这里必须包裹一层固定宽度的容器，防止内容在宽度变小时被挤压裁剪 */}
          <div style={{ width: "var(--base-height)", height: "100%" }}>
            <DetailsContent />
          </div>
        </motion.div>

        {/* 4. 右侧封面 (材质背景) */}
        <div className={`${styles.textureBase} aspect-square flex items-center justify-center`}>
          <div className={styles.bookFold} />
          <CoverImage isExpanded={isExpanded} />
        </div>
      </motion.div>
    </div>
  );
}