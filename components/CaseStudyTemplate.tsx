"use client";
import Link from "next/link";
import { CaseData } from "@/types/case";
import HeroSection from "./case-study/HeroSection";
import AnalysisSection from "./case-study/AnalysisSection";
import ProcessSection from "./case-study/ProcessSection";
import ThankSection from "./case-study/ThankSection";
import FloatingNav from "./case-study/FloatingNav";
import OtherSection from "./case-study/OtherSection";



export default function CaseStudyTemplate({ data }: { data: CaseData }) {
  const { themeColor } = data;

  return (
    <div
      className="min-h-screen w-full font-sans text-black"
      style={{ backgroundImage: "url('/images/bg-case.jpg')", backgroundRepeat: "repeat" }}
    >
      {/* 1. 插入悬浮导航组件 (代码见下文) */}
      <FloatingNav themeColor={themeColor} />
      {/* 始终显示的关闭按钮 */}
      <Link href="/" className="fixed top-[90px] right-[75px] z-[100] group">
        <div className="relative w-18 h-18 flex items-center justify-center transition-all hover:rotate-90">
          <span className="absolute w-full h-[6px] bg-white rotate-45 shadow-[0_2px_6px_rgba(0,0,0,0.2)]"></span>
          <span className="absolute w-full h-[6px] bg-white -rotate-45 shadow-[0_2px_6px_rgba(0,0,0,0.2)]"></span>
        </div>
      </Link>

      <div id="hero">
        <HeroSection data={data} />
      </div>


      <div id="analysis">
        <AnalysisSection data={data} />
      </div>

      <div id="process">
        <ProcessSection steps={data.steps} themeColor={themeColor} learningData={data.learningData} figmaUrl={data.prototypeUrl} />
      </div>
      {/* 插入推荐部分 */}
      <div id="other-cases">
        <OtherSection
          currentId={data.id}
          group={data.group}
          themeColor={data.themeColor}
        />
      </div>

      <ThankSection data={data} />
    </div>
  );
}