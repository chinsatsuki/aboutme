// components/case-study/ProcessSection.tsx
import React from 'react';
import { DesignStep } from "@/types/case";
import { SectionHeading, ProcessStepHeader, ProcessContentCard, SectionDescription } from "@/components/ui/CaseStudyUI";

export default function ProcessSection({ steps, themeColor, learningData, figmaUrl }: {
  steps: DesignStep[], themeColor: string,
  learningData?: { title: string; desc: string }[],
  figmaUrl?: string
}) {

  // 辅助函数：处理 description 可能是 ReactNode 或 字符串数组的情况
  const renderDescription = (desc: React.ReactNode | string[]) => {
    if (Array.isArray(desc)) {
      // 过滤掉空字符串，防止渲染多余间距
      const validParagraphs = desc.filter(p => p && p.trim() !== "");
      if (validParagraphs.length === 0) return null;
      return (
        <div className="flex flex-col gap-4">
          {validParagraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      );
    }
    return desc;
  };

  return (
    <section className="relative overflow-hidden" style={{ padding: "90px 75px" }}>
      {/* 确保总结部分也共享此背景 */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: `${themeColor}0D` }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading en="DESIGN PROCESS" jp="デザインプロセス" />

        <div className="space-y-40">
          {steps.map((step, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div key={index} className="flex flex-col">
                <ProcessStepHeader
                  number={step.number || ""}
                  title={step.title || ""}
                  jpTitle={step.jpTitle || ""}
                  points={step.points || []}
                  themeColor={themeColor}
                  isReversed={isReversed}
                />

                <ProcessContentCard>
                  {step.sections && step.sections.length > 0 ? (
                    <div className="flex flex-col gap-20">
                      {step.sections.map((section, sIdx) => (
                        <div key={sIdx} className="flex flex-col gap-6">
                          {section.subTitle && (
                            <h5 className="text-[24px] font-bold">{section.subTitle}</h5>
                          )}
                          {/* 关键修正：使用辅助函数渲染描述 */}
                          <SectionDescription>
                            {renderDescription(section.description)}
                          </SectionDescription>
                          <div className="w-full">
                            {section.image}
                          </div>

                        </div>
                      ))}
                    </div>
                  ) : (
                    <>
                      <h5 className="text-[24px] font-bold">{step.subTitle || step.title}</h5>
                      <SectionDescription>
                        {renderDescription(step.description)}
                      </SectionDescription>
                      <div className="w-full">
                        {step.image}
                      </div>
                    </>
                  )}

                  {step.extraContent}
                </ProcessContentCard>
              </div>
            );
          })}
        </div>

        {/* ：Figma 演示按钮 */}
        {figmaUrl && (
          <div className="mt-20 flex justify-center">
            <a
              href={figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full font-bold text-white transition-all duration-300 hover:brightness-125 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] "
              style={{ backgroundColor: themeColor }}
            >
              プロトタイプ or ウェブサイト
            </a>
          </div>
        )}

        {/* 2. 新增：WHAT I HAVE LEARNED 部分 */}
        <div id="thanks">
          {learningData && learningData.length > 0 && (
            <div className="mt-40 pt-32 border-t" style={{ borderColor: `${themeColor}22` }}>
              <div className="flex items-baseline">
                <h3 className="text-[40px] font-bold tracking-[0.1em] uppercase flex items-center gap-4 mb-8">
                  WHAT I HAVE LEARNED <span className="font-light opacity-30">|</span> <span>勉強になったこと</span>
                </h3>
              </div>

              <div className="space-y-16 max-w-4xl">
                {/* 根据你的要求，限制最多两点 */}
                {learningData.slice(0, 2).map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-4 text-left">
                    <h4 className="text-[22px] font-bold" style={{ color: themeColor }}>
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed text-[16px]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>


      </div>
    </section>
  );
}