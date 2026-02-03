"use client";
import { motion } from "framer-motion";

interface BookHeroProps {
  mainImage: string;    // 默认图（封面）
  hoverImage?: string;  // 悬停图（内页）
}

export default function BookHero({ mainImage, hoverImage }: BookHeroProps) {
  return (
    <div className="relative flex items-center justify-center min-h-[80vh] w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        whileHover="hover"
        className="relative cursor-pointer group" // 增加 group 方便调试
      >
        {/* 第一张图：封面 */}
        <motion.img
          src={mainImage}
          variants={{
            hover: {
              opacity: 0,
              scale: 0.95, // 稍微缩小，增加消失时的空间感
              transition: { duration: 0.4 }
            }
          }}
          className="h-[70vh] w-auto z-10"
          alt="Front Cover"
        />

        {/* 第二张图：只有在有 hoverImage 时才渲染 */}
        {hoverImage && (
          <motion.img
            src={hoverImage}
            initial={{ opacity: 0, scale: 1.05 }} // 初始稍微放大
            variants={{
              hover: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, delay: 0.1 } // 延迟显现，效果更自然
              }
            }}
            // 关键：这里必须强制 absolute 且 inset-0 确保完美重叠
            className="absolute inset-0 h-[70vh] w-auto z-0"
            alt="Inside View"
          />
        )}
      </motion.div>
    </div>
  );
}