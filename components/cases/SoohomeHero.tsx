"use client";
import { motion } from "framer-motion";

const feathersData = [
  { src: "/images/soohome/feather1.png", delay: 0, size: 80 },
  { src: "/images/soohome/feather2.png", delay: 2.5, size: 60 },
];

export default function SoohomeHero({ mainImage }: { mainImage: string }) {
  return (
    <div className="relative flex items-center justify-center">

      {/* 1. 核心 Mockup 图片 */}
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

      {/* 2. 羽毛飘落动画 */}
      {feathersData.map((feather, index) => (
        <motion.img
          key={index}
          src={feather.src}
          className="absolute z-20 pointer-events-none"
          style={{
            width: feather.size,
            left: "10%",
            top: "-10%"
          }}
          animate={{
            x: [0, 150, 400, 700, 1000],
            y: [0, 200, 250, 350, 1000],
            translateX: [0, 50, -30, 60, 0],
            rotate: [0, 45, 10, 60, 20],
            opacity: [0, 1, 1, 1, 0],
            scale: [2.0, 1.2, 1.0, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: feather.delay,
          }}
        />
      ))}
    </div>
  );
}