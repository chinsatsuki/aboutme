// components/case-study/OtherSection.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { CaseData } from "@/types/case";

const ALL_CASES_LIST = [
  { id: 'a01', group: 'a', title: 'サロンサイト ', image: '/images/casecover/salon.png', link: '/cases/salonsite' },
  { id: 'a02', group: 'a', title: 'リクルートサイト', image: '/images/casecover/recruit.jpg', link: 'https://www.creative-caravan.jp/recruit-page/' },
  { id: 'a03', group: 'a', title: 'フランチャイズLP', image: '/images/casecover/franchise.jpg', link: 'https://fc.creative-caravan.jp/' },
  { id: 'b01', group: 'b', title: 'レストラン予約ミニアプリ', image: '/images/casecover/washoku.png', link: '/cases/washoku' },
  { id: 'b02', group: 'b', title: 'LGBT支援アプリ', image: '/images/casecover/lgbt.jpg', link: '/cases/lgbt' },
  { id: 'b03', group: 'b', title: '工場ウェブサイト', image: '/images/casecover/soohome.jpg', link: '/cases/soohome' },
  { id: 'b04', group: 'b', title: '水族館アプリ', image: '/images/casecover/marineworld.jpg', link: '/cases/marineworld' },
  { id: 'c01', group: 'c', title: 'ビジネスデザイン', image: '/images/casecover/crowdfunding.jpg', link: '/cases/crowd' },
  { id: 'c02', group: 'c', title: 'ブックデザイン', image: '/images/casecover/book.png', link: '/cases/book' },
  { id: 'c03', group: 'c', title: 'パンフレットデザイン', image: '/images/casecover/brochure.png', link: '/cases/brochure' },
  { id: 'c04', group: 'c', title: 'グラフィックデザイン', image: '/images/casecover/graphic.jpg', link: '/cases/graphic' },
];

export default function OtherSection({ currentId, group, themeColor }: {
  currentId: string,
  group: string,
  themeColor: string
}) {
  // 核心状态：记录整个区域是否被 hover
  const [isSectionHovered, setIsSectionHovered] = useState(false);

  // 过滤推荐案例
  const recommended = ALL_CASES_LIST
    .filter(item => item.group === group && item.id !== currentId)
    .slice(0, 3);

  if (recommended.length === 0) return null;

  return (
    <section className="py-32 px-[75px]" style={{ backgroundColor: themeColor }}>
      <div className="max-w-7xl mx-auto">
        <h3 className="text-white/60 text-[14px] font-bold tracking-[0.2em] mb-16 uppercase">
          OTHER RELATED CASES
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {recommended.map((item) => (
            /* 每个 Link 都是一个独立的 group */
            <Link href={item.link} key={item.id} className="group relative block">
              <div className="relative aspect-square">

                {/* 1. 下层：黑胶 (独立响应 hover) */}
                <div className="absolute inset-0 z-0 transition-transform duration-700 ease-in-out translate-x-0 group-hover:translate-x-[20%]">
                  <img src="/images/record-disk.png" className="w-full h-full object-contain" alt="" />
                </div>

                {/* 2. 上层：封面外壳 (Padding 50 + 白色背景) */}
                <div
                  className="absolute inset-0 z-10 p-[50px] transition-all duration-500 shadow-lg group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center rounded-sm"
                  style={{
                    backgroundImage: "url('/images/bg-texture.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <div className="w-full h-full shadow-inner border border-black/5 overflow-hidden">
                    <img src={item.image} className="w-full h-full object-cover" alt={item.title} />
                  </div>
                </div>

              </div>

              <div className="mt-8 text-white">
                <p className="text-[12px] font-bold opacity-60 mb-1">{item.id.toUpperCase()}</p>
                <h4 className="text-[20px] font-black uppercase leading-none">{item.title}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}