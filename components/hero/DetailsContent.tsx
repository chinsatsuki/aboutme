export const DetailsContent = () => {
  const sections = [
    { side: "SIDE A", title: "Web Design&Coding", items: ["1. サロンサイトのリニューアル", "2. リクルートサイト", "3. フランチャイズLP"] },
    { side: "SIDE B", title: "UXUI(Concept Case)", items: ["1. WASHOKU(レストラン予約ミニプログラム)", "2. LGBT組織アプリ", "3. 工場ウェブサイト", "4. 水族館アプリ"] },
    { side: "SIDE C", title: "Other Design Works", items: ["1. クラウドファンディングデザイン", "2. ブックデザイン", "3. 会社パンフレット", "4. グラフィックデザイン", "5. PROJECT HEI"] },
  ];

  return (
    <div className="p-8 h-full flex flex-col justify-between py-12">
      {sections.map((sec, index) => (
        <div key={index} className="flex gap-6">
          {/* 橘色侧边栏标签 */}
          <div className="text-[var(--brand-orange)] text-xs font-bold [writing-mode:vertical-lr] rotate-180">
            {sec.side}
          </div>
          {/* 内容区 */}
          <div>
            <h3 className="text-[var(--brand-green)] font-bold mb-2 text-sm">{sec.title}</h3>
            <ul className="space-y-1">
              {sec.items.map((item, i) => (
                <li key={i} className="hover-green-text text-[13px] font-medium leading-tight">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};