export const CoverImage = () => {
  return (
    <div className="relative w-[85%] h-[85%] flex flex-col items-center justify-between py-4">
      {/* 顶部文字：展开后显示 */}
      <div className="text-black tracking-[0.4em] text-xs font-bold">
        CHIN SATSUKI
      </div>

      {/* 中间拍立得照片 */}
      <div className="w-[85%] shadow-lg border-[12px] border-white bg-white pb-8">
         <img 
            src="/images/cover-art.png"
            alt="Cover"
            className="w-full h-auto grayscale-[20%] contrast-125" 
          />
      </div>

      {/* 底部文字：展开后显示 */}
      <div className="text-black tracking-[0.6em] text-xs font-bold opacity-60">
        PORTFOLIO
      </div>
    </div>
  );
};