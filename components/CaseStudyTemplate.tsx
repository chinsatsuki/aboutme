"use client";
import { motion } from "framer-motion";
import Link from "next/link";

// 1. 类型定义
export interface DesignStep {
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface CaseData {
  title: string;
  themeColor: string;
  firstViewImage: string;
  prototypeUrl?: string; // 问号表示可选
  analysis?: {           // 问号表示可选
    product: string;
    problem: string;
    goal: string;
  };
  steps: DesignStep[];
  learning: string;
  relatedCases: { title: string; image: string; link: string }[];
}

export default function CaseStudyTemplate({ data }: { data: CaseData }) {
  const { themeColor } = data;

  return (
    <div
      className="min-h-screen w-full font-sans text-black"
      style={{ backgroundImage: "url('/images/bg-case.jpg')", backgroundRepeat: "repeat" }}
    >
      {/* 固定关闭按钮 */}
      <Link href="/" className="fixed top-8 right-10 z-[100] group">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 transition-all hover:rotate-90">
          <span className="text-3xl text-white font-light">✕</span>
        </div>
      </Link>

      {/* --- Section 1: First View --- */}
      <section className="relative w-full h-[1162px] overflow-hidden">
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: `${themeColor}CC` }}
        />
        <img src={data.firstViewImage} className="absolute inset-0 w-full h-full object-cover" alt="First View" />
        <div className="relative z-20 h-full flex items-center justify-center">
          <h1 className="text-white text-7xl font-bold tracking-tighter uppercase italic">{data.title}</h1>
        </div>
      </section>

      {/* --- 可选板块：原型展示 (只有数据里有 prototypeUrl 时才渲染) --- */}
      {data.prototypeUrl && (
        <section className="relative py-20 bg-white/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h3 className="text-2xl font-bold mb-10" style={{ color: themeColor }}>INTERACTIVE PROTOTYPE</h3>
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border-4 border-white/50">
              <iframe
                src={data.prototypeUrl}
                className="w-full h-full border-none"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      )}

      {/* --- Section 2: Analysis (条件渲染) --- */}
      {data.analysis && (
        <section className="relative py-32 px-10 overflow-hidden">
          <div className="absolute inset-0 z-0" style={{ backgroundColor: `${themeColor}0D` }} />
          <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-3 gap-12">
            <div>
              <h4 className="font-bold mb-4 opacity-50 uppercase tracking-widest text-sm">Product</h4>
              <p className="leading-relaxed">{data.analysis.product}</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 opacity-50 uppercase tracking-widest text-sm">Problem</h4>
              <p className="leading-relaxed">{data.analysis.problem}</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 opacity-50 uppercase tracking-widest text-sm">Goal</h4>
              <p className="leading-relaxed">{data.analysis.goal}</p>
            </div>
          </div>
        </section>
      )}

      {/* --- Section 3: Design Process --- */}
      <section className="relative py-20 px-10">
        <div className="absolute inset-0 z-0" style={{ backgroundColor: `${themeColor}0D` }} />
        <div className="relative z-10 max-w-7xl mx-auto space-y-40">
          {data.steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-20 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <span className="text-8xl font-black opacity-10 block mb-4" style={{ color: themeColor }}>
                  {step.number}
                </span>
                <h3 className="text-3xl font-bold mb-6">{step.title}</h3>
                <p className="text-lg opacity-80 leading-loose">{step.description}</p>
              </div>
              <div className="flex-1 shadow-2xl rounded-lg overflow-hidden border-[10px] border-white/50 bg-white">
                <img src={step.image} alt={step.title} className="w-full h-auto" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Section 4: Learning --- */}
      <section className="relative py-32 text-center px-10">
        <div className="absolute inset-0 z-0" style={{ backgroundColor: `${themeColor}0D` }} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h4 className="text-xl font-bold mb-8 italic" style={{ color: themeColor }}>WHAT I HAVE LEARNED</h4>
          <p className="text-xl leading-relaxed italic opacity-70">"{data.learning}"</p>
        </div>
      </section>

      {/* --- Section 5: Thank You & Related Cases --- */}
      <section className="relative pt-40 pb-20">
        <div className="h-[600px] relative flex items-center justify-center overflow-hidden mb-20">
          <div className="absolute inset-0 z-10" style={{ backgroundColor: `${themeColor}CC` }} />
          <img src={data.firstViewImage} className="absolute inset-0 w-full h-full object-cover blur-sm" alt="Thank you" />
          <h2 className="relative z-20 text-white text-6xl font-black italic">THANK YOU FOR WATCHING</h2>
        </div>

        <div className="absolute bottom-0 w-full h-[600px] z-0" style={{ backgroundColor: `${themeColor}0D` }} />
        <div className="relative z-10 max-w-7xl mx-auto px-10">
          <p className="font-bold mb-10 opacity-50 uppercase tracking-tighter">Other Related Cases</p>
          <div className="grid grid-cols-3 gap-8">
            {data.relatedCases.map((item, i) => (
              <Link href={item.link} key={i} className="group cursor-pointer">
                <div className="aspect-video overflow-hidden rounded-lg mb-4 border-2 border-transparent transition-all group-hover:border-white shadow-lg">
                  <img src={item.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={item.title} />
                </div>
                <p className="font-medium opacity-70 group-hover:opacity-100">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}