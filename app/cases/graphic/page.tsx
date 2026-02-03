"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ThankSection from "@/components/case-study/ThankSection";

const graphicSections = [
  { id: "makeit-1", titleEn: "MakeIT (2024-)", titleJp: "グラフィックデザイン", category: "GRAPHIC DESIGN", images: ["/images/graphic/1-1.png"] },
  { id: "defront-1", titleEn: "DEFRONT (2021-2016)", titleJp: "クラウドファンディングページデザイン", category: "CROWDFUNDING PAGE DESIGN ", images: ["/images/graphic/1-2.png"] },
  { id: "defront-2", titleJp: "コミュニケーションデザイン", category: "COMMUNICATION DESIGN", images: ["/images/graphic/1-3.png"] },
  { id: "defront-3", titleJp: "展示会デザイン", category: "FAIR DESIGN", images: ["/images/graphic/1-4.png"] },
  { id: "lu-1", titleEn: "LU's MEMORIES (2019)", titleJp: "ブックデザイン", category: "BOOK DESIGN ", images: ["/images/graphic/1-5.png"] },
  { id: "soohome-1", titleEn: "SunHope／SooHome (2018)", titleJp: "ロゴと展示会グラフィックデザイン", category: "LOGO&FAIR GRAPHIC DESIGN", images: ["/images/graphic/1-6.png"] },
  { id: "xianman-1", titleEn: "XIANMAN(2013-2016)", titleJp: "SNSコンテンツデザイン", category: "SNS CONTENTS DESIGN ", images: ["/images/graphic/1-7.png"] },
  { id: "illustrate-1", titleEn: "ILLUSTRATION | イラスト (2013-2023)", category: "Tool: PHOTOSHOP", images: ["/images/graphic/1-8.png"] },
  { id: "illustrate-2", category: "Tool: PROCREATE(IPAD)", images: ["/images/graphic/1-9.png"] },
  { id: "illustrate-3", category: "TDRAWINGS ｜ 手描き", images: ["/images/graphic/1-10.png"] },
];

export default function GraphicPage() {
  const themeColor = "#eca673";
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const simpleData = {
    id: "graphic",
    title: "グラフィックデザイン",
    titleEn: "GRAPHIC DESIGN",
    themeColor: themeColor
  };

  return (
    <main
      className="min-h-screen w-full relative font-sans text-black"
      style={{
        backgroundImage: "url('/images/bg-case.jpg')",
        backgroundRepeat: "repeat",
        padding: "90px 75px"
      }}
    >
      {/* 始终显示的关闭按钮 */}
      <Link href="/" className="fixed top-[90px] right-[75px] z-[100] group">
        <div className="relative w-12 h-12 flex items-center justify-center transition-all hover:rotate-90">
          <span className="absolute w-full h-[4px] bg-white rotate-45 shadow-sm"></span>
          <span className="absolute w-full h-[4px] bg-white -rotate-45 shadow-sm"></span>
        </div>
      </Link>

      <header className="mb-12">
        <h1 className="text-[64px] font-bold leading-none uppercase tracking-tighter" style={{ color: themeColor }}>
          Graphic Design
        </h1>
      </header>

      {/* 作品列表：縮小 gap 使其像清單一樣緊湊 */}
      <div className="flex flex-col gap-4 mb-40">
        {graphicSections.map((section) => (
          <WorkSection
            key={section.id}
            section={section}
            themeColor={themeColor}
            isOpen={openId === section.id}
            onToggle={() => toggleSection(section.id)}
          />
        ))}
      </div>

      <div id="thanks" className="mt-40 -mx-[75px]">
        <ThankSection data={simpleData as any} />
      </div>
    </main>
  );
}

function WorkSection({ section, themeColor, isOpen, onToggle }: any) {
  return (
    <div className="border-b border-black/5 last:border-none">
      {/* 可點擊的標題區域 */}
      <button
        onClick={onToggle}
        className="w-full text-left py-6 flex justify-between items-end group hover:bg-black/[0.02] transition-colors rounded-lg px-4 -mx-4"
      >
        <div>
          {section.titleEn && (
            <h2 className="text-[28px] font-bold mb-1 group-hover:translate-x-1 transition-transform">{section.titleEn}</h2>
          )}
          <div
            className="text-[14px] font-bold uppercase tracking-[0.15em] flex items-center gap-2"
            style={{ color: themeColor }}
          >
            <span>{section.category}</span>
            {section.titleJp && <><span className="opacity-30">|</span><span>{section.titleJp}</span></>}
          </div>
        </div>

        {/* 交互提示圖標：+ 號 */}
        <div className="relative w-6 h-6 mb-2">
          <motion.span
            className="absolute w-full h-[2px] bg-black top-1/2"
            animate={{ rotate: isOpen ? 0 : 90 }}
          />
          <span className="absolute w-full h-[2px] bg-black top-1/2" />
        </div>
      </button>

      {/* 展開的內容 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-12">
              {section.images.map((img: string, idx: number) => (
                <img
                  key={idx}
                  src={img}
                  alt=""
                  className="w-full h-auto rounded-xl shadow-lg border border-black/5"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}