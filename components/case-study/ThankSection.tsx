import Link from "next/link";
import { CaseData } from "@/types/case";

export default function ThankSection({ data }: { data: CaseData }) {
  const { themeColor, firstViewImage, learning, relatedCases } = data;
  return (
    <section className="relative">
      <div className="relative text-center mb-20" style={{ padding: "90px 75px" }}>
        <div className="max-w-3xl mx-auto">
          <h4 className="text-xl font-bold mb-8 italic" style={{ color: themeColor }}>WHAT I HAVE LEARNED</h4>
          <p className="text-xl leading-relaxed italic opacity-70">"{learning}"</p>
        </div>
      </div>

      <div className="h-[600px] relative flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0 z-10" style={{ backgroundColor: `${themeColor}CC` }} />
        <img src={firstViewImage} className="absolute inset-0 w-full h-full object-cover blur-sm" alt="Thank you" />
        <h2 className="relative z-20 text-white text-6xl font-black italic">THANK YOU FOR WATCHING</h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-10 pb-20">
        <p className="font-bold mb-10 opacity-50 uppercase tracking-tighter">Other Related Cases</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedCases.map((item, i) => (
            <Link href={item.link} key={i} className="group">
              <div className="aspect-video overflow-hidden rounded-lg mb-4 border-2 border-transparent transition-all group-hover:border-white shadow-lg">
                <img src={item.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={item.title} />
              </div>
              <p className="font-medium opacity-70 group-hover:opacity-100">{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}