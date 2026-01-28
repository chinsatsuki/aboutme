"use client";
import { motion } from "framer-motion";

export const Disk = () => (
  <motion.img
    src="/images/record-disk.png"
    className="w-full h-full object-contain"
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
    style={{ filter: "drop-shadow(4px 4px 10px rgba(0,0,0,0.3))" }}
  />
);