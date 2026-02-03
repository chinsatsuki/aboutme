import { CaseData } from "@/types/case";
import { SectionHeading, SectionDescription, DetailItem } from "@/components/ui/CaseStudyUI";

export default function AnalysisSection({ data }: { data: CaseData }) {
  const { themeColor, analysis, title, titleEn } = data;
  if (!analysis) return null;

  return (
    <section className="relative overflow-hidden" style={{ padding: "90px 75px" }}>
      {/* 背景遮罩层 */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: `${themeColor}0D` }} />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-24">

        {/* --- PRODUCT 板块 --- */}
        <div>
          <SectionHeading en="PRODUCT" jp="プロダクト" />
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1 flex flex-col gap-8 w-full">
              <DetailItem
                title={`WHAT is ${titleEn || 'APP'}?`}
                jp={`${title}って何`}
                color={themeColor}
                content={analysis.product || ""}
              />
              {analysis.role && <DetailItem title="MY ROLE" jp="私の役割" color={themeColor} content={analysis.role} />}
              {analysis.timeline && <DetailItem title="TIMELINE" jp="タイムライン" color={themeColor} content={analysis.timeline} />}

              {/* TOOL 渲染 */}
              <div>
                <h4 className="text-[16px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: themeColor }}>
                  TOOL <span className="opacity-60">|</span> <span>ツール</span>
                </h4>
                <div className="flex flex-wrap gap-4">
                  {analysis.tools.split(',').map((tool) => (
                    <ToolIcon key={tool} name={tool.trim()} />
                  ))}
                </div>
              </div>
            </div>

            {/* 右侧：图片展示 (占据约 40% 宽度) */}
            {data.firstViewImage && (
              <div className="flex-1 w-full max-w-[450px]">
                <img
                  src={data.firstViewImage}
                  alt="Product Screenshot"
                  className="max-w-[400px] h-auto object-cover"
                />
              </div>
            )}

          </div>
        </div>

        {/* --- PROBLEM 板块 --- */}
        {analysis.problem && (
          <div>
            <SectionHeading en="PROBLEM" jp="課題" />
            <SectionDescription>{analysis.problem}</SectionDescription>
          </div>
        )}

        {/* --- GOAL 板块 --- */}
        {analysis.goal && (
          <div>
            <SectionHeading en="GOAL" jp="目標" />
            <SectionDescription>{analysis.goal}</SectionDescription>
          </div>
        )}

      </div>
    </section>
  );
}

// 内部小组件：保持整洁
function InfoRow({ title, jp, color, content }: any) {
  return (
    <div>
      <h4 className="text-[14px] font-bold uppercase tracking-[0.2em] mb-3 flex items-center gap-2" style={{ color }}>
        {title} <span className="opacity-60">|</span> <span>{jp}</span>
      </h4>
      <p className="text-[16px] leading-[1.8] font-medium max-w-3xl">{content}</p>
    </div>
  );
}

function ToolIcon({ name }: { name: string }) {
  return (
    <div className="w-12 h-12 flex items-center justify-center border border-black/10 rounded-lg p-2 bg-white/50 shadow-sm">
      <img
        src={`/images/tools/${name.toLowerCase()}.svg`}
        alt={name}
        className="w-full h-full object-contain"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = `<span class="text-[10px] font-bold">${name}</span>`;
        }}
      />
    </div>
  );
}

function SectionBlock({ title, content }: { title: string; content: string }) {
  return (
    <div>
      <h3 className="text-[40px] font-bold uppercase mb-6">{title}</h3>
      <p className="text-[16px] leading-[1.8] font-medium max-w-3xl">{content}</p>
    </div>
  );
}