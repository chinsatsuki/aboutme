"use client";
import { motion } from "framer-motion";

const foodItems = [
  { src: "/images/washoku/sushi.png", alt: "Sushi" },
  { src: "/images/washoku/ramen.png", alt: "Ramen" },
  { src: "/images/washoku/jelly.png", alt: "Jelly" },
];

export default function WashokuHero({ mainImage }: { mainImage: string }) {
  return (
    <div className="relative flex items-center justify-center">
      {/* 核心 Mockup 图片 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
        style={{ zIndex: 10 }}
      >
        <img
          src={mainImage}
          className="h-[70vh] w-auto rounded-[3rem] object-contain"
          alt="Mockup"
        />
      </motion.div>

      {/* 环绕动画元素 */}
      {foodItems.map((item, index) => (
        <motion.img
          key={index}
          src={item.src}
          alt={item.alt}
          className="absolute w-18 h-18 object-contain pointer-events-none"
          style={{ top: "1%" }}
          initial={{ opacity: 0 }}
          animate={{
            // X 轴：路径跨度稍微缩小，让视觉更聚焦
            x: [-300, 0, 300, 0, -300],
            // Y 轴：向上偏移（负值），并增加跳动感 [0, -60, 0, 40, 0]
            y: [0, -80, 0, 40, 0],
            // 缩放：正中时不仅变大，还带有可爱的膨胀感
            scale: [0.5, 1.4, 0.5, 0.3, 0.5],
            // 旋转：增加一点倾斜，看起来更俏皮
            rotate: [-15, 0, 15, 0, -15],
            zIndex: [15, 50, 15, 0, 15],
            opacity: [0.8, 1, 0.8, 0.2, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            // 3. 使用 easeInOut 营造“中间快、两头灵动”的节奏
            ease: "easeInOut",
            delay: index * (5 / foodItems.length),
          }}
        />
      ))}
    </div>
  );
}