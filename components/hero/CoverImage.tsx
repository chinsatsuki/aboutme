import { motion } from "framer-motion";

interface CoverImageProps {
  isExpanded: boolean;
}

export const CoverImage = ({ isExpanded }: CoverImageProps) => {
  return (
    <div className="relative w-[85%] h-[85%] flex flex-col items-center justify-between">
      {/* 顶部文字：展开后显示 */}
      <motion.div 
        className="text-black tracking-[0.8em] text-xs font-bold pb-[10px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        CHIN SATSUKI
      </motion.div>

      {/* 中间拍立得照片 */}
      <div className="w-[85%] shadow-lg border-[12px] border-white bg-white pb-8">
         <img
            src="/images/cover-art.png"
            alt="Cover"
            className="w-full h-auto grayscale-[20%] contrast-125"
          />
      </div>

      {/* 底部文字：展开后显示 */}
      <motion.div 
        className="text-black tracking-[1.2em] text-xs font-bold opacity-60 mt-[20px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isExpanded ? 0.6 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        PORTFOLIO
      </motion.div>
    </div>
  );
};
