import Link from "next/link"; // 💡 记得导入 Link

export const DetailsContent = () => {
  // 1. 修改数据结构：将 items 从 ["名字"] 变成 [{ name: "名字", id: "路径" }]
  const sections = [
    {
      side: "SIDE A",
      title: "Web Design&Coding",
      items: [
        { name: "1. サロンサイトのリニューアル", id: "salon" },
        { name: "2. リクルートサイト", id: "recruit" },
        { name: "3. フランチャイズLP", id: "franchise" }
      ]
    },
    {
      side: "SIDE B",
      title: "UXUI(Concept Case)",
      items: [
        { name: "1. WASHOKU(レストラン予約ミニプログラム)", id: "washoku" },
        { name: "2. LGBT組織アプリ", id: "lgbt" },
        { name: "3. 工場ウェブサイト", id: "sunhope" },
        { name: "4. 水族館アプリ", id: "marineworld" } // 💡 这里对应 [id] 路由
      ]
    },
    {
      side: "SIDE C",
      title: "Other Design Works",
      items: [
        { name: "1. クラウドファンディングデザイン", id: "crowdfunding" },
        { name: "2. ブックデザイン", id: "book" },
        { name: "3. 会社パンフレット", id: "pamphlet" },
        { name: "4. コミュニケーションデザイン", id: "communication" },
        { name: "5. PROJECT HEI", id: "projecthei" }
      ]
    },
  ];

  return (
    <div className="h-full flex justify-center py-12 px-8">
      <div className="flex flex-col justify-between h-full w-fit">
        {sections.map((sec, index) => (
          <div key={index} className="flex gap-6">
            {/* 橘色侧边栏标签 */}
            <div className="text-[var(--brand-orange)] font-bold [writing-mode:vertical-lr] rotate-0 text-sm tracking-widest pt-7">
              {sec.side}
            </div>
            {/* 内容区 */}
            <div>
              <h3 className="text-[var(--brand-green)] font-bold mb-2 text-sm">{sec.title}</h3>
              <ul className="space-y-1">
                {sec.items.map((item, i) => (
                  <li key={i}>
                    {/* 2. 使用 Link 组件包裹，将原本的文字变成可跳转的链接 */}
                    <Link
                      href={`/cases/${item.id}`}
                      className="text-[var(--secondary)] hover:text-[var(--brand-orange)] transition-colors duration-300 cursor-pointer text-[13px] font-medium leading-tight block"
                    >
                      {item.name}
                    </Link>
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