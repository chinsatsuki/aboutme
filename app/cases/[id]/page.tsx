// app/cases/[id]/page.tsx
import { notFound } from "next/navigation";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";
// 指向你新建立的整合文件，确保只保留这一个 allCasesData 导入
import { allCasesData } from "@/lib/data/index";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // 根据 URL 的 id（如 marineworld）从新数据源匹配数据
  const data = allCasesData[id];

  if (!data) {
    return notFound();
  }

  return <CaseStudyTemplate data={data} />;
}