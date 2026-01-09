// src/app/portfolio/components/SocialMediaPortfolio.js
import Image from "next/image";
import Link from "next/link";

export default async function SocialMediaPortfolio() {
  // Import JSON data
  const portfolio = await import("../../data/portfolio.json").then((m) => m.default);
  const socialMediaContent = portfolio.socialMediaContent || [];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 text-center">
        Social Media Content Portfolio
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {socialMediaContent.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
          >
            <div className="relative w-full" style={{ aspectRatio: `${item.width} / ${item.height}` }}>
              <Image
                src={item.image}
                alt={item.alt || item.heading}
                width={item.width}
                height={item.height}
                className="object-cover w-full h-full"
                quality={95}
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-black mb-2">{item.heading}</h3>
              <p className="text-black/80 leading-relaxed">{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>

      



    </section>
  );
}