// Server Component
import Image from "next/image";
import portfolioData from "@/app/data/portfolio.json";

export default function WebsiteDesignPortfolio() {
  const designs = portfolioData.websiteDesign || [];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Website Designing Portfolio</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {designs.map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md bg-white">
            <Image
              src={item.image}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="w-full h-auto object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{item.heading}</h3>
              <p className="text-gray-700 leading-relaxed">{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
