import { DesignStep } from "@/types/case";
import { SectionHeading, ProcessStepHeader, ProcessContentCard, SectionDescription } from "@/components/ui/CaseStudyUI";

export default function ProcessSection({ steps, themeColor }: { steps: DesignStep[], themeColor: string }) {
  return (
    <section className="relative overflow-hidden" style={{ padding: "90px 75px" }}>
      <div className="absolute inset-0 z-0" style={{ backgroundColor: `${themeColor}0D` }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionHeading en="DESIGN PROCESS" jp="デザインプロセス" />

        <div className="space-y-40">
          {steps.map((step, index) => {
            const isReversed = index % 2 !== 0; // 0, 2, 4 为左，1, 3, 5 为右

            return (
              <div key={index} className="flex flex-col">
                {/* 渲染修正后的头部 */}
                <ProcessStepHeader
                  number={step.number}
                  title={step.title}
                  jpTitle={step.jpTitle || "内容"}
                  points={step.points || []}
                  themeColor={themeColor}
                  isReversed={isReversed}
                />

                {/* 内容卡片层 */}
                <ProcessContentCard>
                  <h5 className="text-[24px] font-bold">{step.subTitle || step.title}</h5>
                  <SectionDescription>{step.description}</SectionDescription>
                  <div className="w-full">
                    {step.image}
                  </div>

                  {/* 如果有 SWOT 等额外内容在此渲染 */}
                  {step.extraContent}
                </ProcessContentCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

