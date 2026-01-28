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
          initial={{ width: 0 }}
          animate={{ width: isExpanded ? "var(--base-height)" : 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.1, 1] }}
          className={`${styles.textureBase} overflow-hidden`}
        >
          {/* 这里必须包裹一层固定宽度的容器，防止内容在宽度变小时被挤压裁剪 */}
          <div style={{ width: "var(--base-height)", height: "100%" }}>
            <DetailsContent />
          </div>
        </motion.div>

        {/* 4. 右侧封面 (材质背景) */}
        <div className={`${styles.textureBase} aspect-square flex items-center justify-center`}>
          <div className={styles.bookFold} />
          <CoverImage />
        </div>
      </motion.div>
    </div>
  );
}