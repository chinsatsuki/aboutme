"use client";
import { motion, Variants } from "framer-motion";

const elements = [
  { src: "/images/marine/fish.svg", side: "left" },
  { src: "/images/marine/jellyfish.svg", side: "right" },
  { src: "/images/marine/bubble.svg", side: "left" },
  { src: "/images/marine/Aplysina.svg", side: "right" },
  { src: "/images/marine/Dolphin.svg", side: "left" },
  { src: "/images/marine/bubble.svg", side: "right" },
];

export default function MarineHero({ mainImage }: { mainImage: string }) {
  // 定义膨胀动画序列：1倍 -> 1.5倍 -> 2倍(渐隐)
  const pulseVariants : Variants = {
    animate: (i: number) => ({
      scale: [1, 1.5, 2.2],
      opacity: [1, 0.8, 0],
      transition: {
        duration: 3, // 整个过程3秒
        repeat: Infinity,
        delay: i * 0.4, // 每个元素错开出现
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="relative flex items-center justify-center">
      {/* 核心 Mockup 图片：保持在正中央 */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="relative z-10"
>
  <img
    src={mainImage}
    className="h-[70vh] w-auto rounded-[3rem] object-contain"
    alt="Mockup"
  />
</motion.div>

      {/* 两侧的漂浮元素 */}
      {elements.map((item, index) => (
        <motion.img
          key={index}
          src={item.src}
          custom={index}
          variants={pulseVariants}
          animate="animate"
          className="absolute z-0 w-12 h-12 pointer-events-none"
          style={{
            // 随机分布在左右两侧
            left: item.side === "left" ? `${-20 - Math.random() * 50}px` : "auto",
            right: item.side === "right" ? `${-20 - Math.random() * 40}px` : "auto",
            top: `${(index - 0.2) * 100}px`, // 纵向错开排布
          }}
        />
      ))}
    </div>
  );
}