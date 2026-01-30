"use client";
import Link from "next/link";
import { CaseData } from "@/types/case";
import HeroSection from "./case-study/HeroSection";
import AnalysisSection from "./case-study/AnalysisSection";
import ProcessSection from "./case-study/ProcessSection";
import ThankSection from "./case-study/ThankSection";

export default function CaseStudyTemplate({ data }: { data: CaseData }) {
  const { themeColor } = data;

  return (
    <div
      className="min-h-screen w-full font-sans text-black"
      style={{ backgroundImage: "url('/images/bg-case.jpg')", backgroundRepeat: "repeat" }}
    >
      {/* 始终显示的关闭按钮 */}
      <Link href="/" className="fixed top-[90px] right-[75px] z-[100] group">
        <div className="relative w-18 h-18 flex items-center justify-center transition-all hover:rotate-90">
          <span className="absolute w-full h-[6px] bg-white rotate-45 shadow-[0_2px_6px_rgba(0,0,0,0.2)]"></span>
          <span className="absolute w-full h-[6px] bg-white -rotate-45 shadow-[0_2px_6px_rgba(0,0,0,0.2)]"></span>
        </div>
      </Link>

      <HeroSection data={data} />

      {/* 原型展示（逻辑简单可保留在此，或单独拆分） */}
      {data.prototypeUrl && (
        <section className="relative py-20 bg-white/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h3 className="text-2xl font-bold mb-10" style={{ color: themeColor }}>INTERACTIVE PROTOTYPE</h3>
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <iframe src={data.prototypeUrl} className="w-full h-full border-none" allowFullScreen />
            </div>
          </div>
        </section>
      )}

      <AnalysisSection data={data} />

      <ProcessSection steps={data.steps} themeColor={themeColor} />

      <ThankSection data={data} />
    </div>
  );
}