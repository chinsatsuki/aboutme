import Link from "next/link"; // 💡 记得导入 Link

export const DetailsContent = () => {
  // 1. 修改数据结构：将 items 从 ["名字"] 变成 [{ name: "名字", id: "路径" }]
  const sections = [
    {
      side: "SIDE A",
      title: "Web Design&Coding",
      items: [
        { name: "1. サロンサイトのリニューアル", id: "salonsite" },
        { name: "2. リクルートサイト", link: "https://www.creative-caravan.jp/recruit-page/" },
        { name: "3. フランチャイズLP", link: "https://fc.creative-caravan.jp/" },
        { name: "4. テンプレートのデモサイトLP", link: "https://www.design-demo.makeit-ltd.jp/" }
      ]
    },
    {
      side: "SIDE B",
      title: "UXUI(Concept Case)",
      items: [
        { name: "1. WASHOKU(レストラン予約ミニプログラム)", id: "washoku" },
        { name: "2. LGBT組織アプリ", id: "lgbt" },
        { name: "3. 工場ウェブサイト", id: "soohome" },
        { name: "4. 水族館アプリ", id: "marineworld" }
      ]
    },
    {
      side: "SIDE C",
      title: "Other Design Works",
      items: [
        { name: "1. クラウドファンディングデザイン", id: "crowd" },
        { name: "2. ブックデザイン", id: "book" },
        { name: "3. 会社パンフレット", id: "brochure" },
        { name: "4. グラフィックデザイン", id: "graphic" },
      ]
    },
  ];

  const linkStyle = "text-[var(--secondary)] hover:text-[var(--brand-orange)] transition-colors duration-300 cursor-pointer text-[13px] font-medium leading-tight block";
  return (
    <div className="h-full flex justify-center py-12 px-8">
      <div className="flex flex-col justify-between h-full w-fit">
        {sections.map((sec, index) => (
          <div key={index} className="flex gap-6">
            <div className="text-[var(--brand-orange)] font-bold [writing-mode:vertical-lr] rotate-0 text-sm tracking-widest pt-7">
              {sec.side}
            </div>
            <div>
              <h3 className="text-[var(--brand-green)] font-bold mb-2 text-sm">{sec.title}</h3>
              <ul className="space-y-1">
                {sec.items.map((item, i) => (
                  <li key={i}>
                    {/* 💡 逻辑判断：存在 link 时使用 a 标签，否则使用 Link 组件 */}
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkStyle}
                      >
                        {item.name} (外部)
                      </a>
                    ) : (
                      <Link
                        href={`/cases/${item.id}`}
                        className={linkStyle}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};