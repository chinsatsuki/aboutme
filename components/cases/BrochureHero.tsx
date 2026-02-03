"use client";
import { motion } from "framer-motion";

export default function BrochureHero({ mainImage }: { mainImage: string }) {
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

    </div>
  );
}