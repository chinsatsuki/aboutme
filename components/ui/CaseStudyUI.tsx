import React from "react";

// 1. 大标题组件：PRODUCT, PROBLEM, GOAL 专用
export const SectionHeading = ({ en, jp }: { en: string; jp: string }) => (
  <h3 className="text-[40px] font-bold tracking-[0.1em] uppercase flex items-center gap-4 mb-8">
    {en} <span className="font-light opacity-30">|</span> <span>{jp}</span>
  </h3>
);

// 2. 正文段落组件：确保所有板块文字样式一致
export const SectionDescription = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[16px] leading-[1.8] font-medium text-black/80">
    {children}
  </p>
);

// 3. 详情项组件：WHAT is, MY ROLE 等专用
export const DetailItem = ({ title, jp, color, content }: { title: string; jp: string; color: string; content: string }) => (
  <div>
    <h4 className="text-[16px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center gap-2" style={{ color }}>
      {title} <span className="opacity-60">|</span> <span>{jp}</span>
    </h4>
    <SectionDescription>{content}</SectionDescription>
  </div>
);


// Design process
// 2. 步骤头部组件：严格按照三层 div 结构调整
export const ProcessStepHeader = ({
  number,
  title,
  jpTitle,
  points,
  themeColor,
  isReversed
}: {
  number: string;
  title: string;
  jpTitle: string;
  points: string[];
  themeColor: string;
  isReversed: boolean;
}) => (
  // 最外层容器：垂直排列三部分内容，gap 为 20px
  <div className={`flex flex-col gap-[20px] mb-[-40px] relative z-20 ${isReversed ? 'items-end' : 'items-start'}`}>

    {/* 第一部分：DESIGN PROCESS | デザインプロセス (由父组件渲染，此处外层已处理) */}

    {/* 第二部分：UNDERSTAND | 理解 (独立 div) */}
    <div
      className="text-[40px] font-bold flex items-baseline gap-4 leading-none"
      style={{ color: themeColor }}
    >
      <span className="uppercase tracking-tight">{title}</span>
      <span className="text-[28px] opacity-60 font-medium">| {jpTitle}</span>
    </div>

    {/* 第三部分：数字 01 和 分点文字 (水平 div，向上对齐) */}
    <div className={`flex items-start gap-10 ${isReversed ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* 200px 巨大数字：去掉 absolute，改为自然流 */}
      <span
        className="text-[200px] font-black leading-[0.75] opacity-20 select-none"
        style={{ color: themeColor }}
      >
        {number}
      </span>

      {/* 分点文字区：向上对齐 (items-start) */}
      <ul className={`pt-4 space-y-1 text-[14px] font-bold opacity-70 list-none min-w-[200px] ${isReversed ? 'text-right' : 'text-left'}`}>
        {points.map((p, i) => (
          <li key={i}>
            {isReversed ? `${p} ${['①', '②', '③', '④', '⑤'][i]}` : `${['①', '②', '③', '④', '⑤'][i]} ${p}`}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// 3. 展开详情卡片 (左右 135px padding)
export const ProcessContentCard = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white/60 backdrop-blur-md rounded-[30px] shadow-xl p-[60px] px-[60px] flex flex-col items-center text-center gap-10 w-full">
    {children}
  </div>
);