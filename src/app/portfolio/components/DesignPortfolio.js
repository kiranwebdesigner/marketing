// my-app/src/app/portfolio/components/DesignPortfolio.js

import Image from "next/image";

export default async function DesignPortfolio() {
  // Import JSON data (server-side, SEO-friendly)
  const portfolioData = await import("../../data/portfolio.json").then((m) => m.default);

  // Select design portfolio items
  const designPortfolio = portfolioData.designPortfolio || [];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16  bg-gradient-to-r from-[#050000] to-[#1da1f2] text-white border border-white">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white/80">
        Design Portfolio
      </h2>
      <p className="text-center text-white/80 mb-12 max-w-3xl mx-auto">
        Explore our creative design projects, including social media marketing visuals, branding content, and client campaigns.
      </p>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 bg-gradient-to-r from-[#050000] to-[#1da1f2] text-white border border-white ">
        {designPortfolio.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4"
          >
            {/* Image */}
            <div className="relative w-full h-[250px] sm:h-[300px] rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.alt || item.heading || "Design portfolio image"}
                width={item.width || 879}
                height={item.height || 639}
                className="object-cover w-full h-full"
                quality={95}
              />
            </div>

            {/* Text */}
            <div className="mt-4">
              {item.heading && (
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.heading}
                </h3>
              )}
              {item.paragraph && (
                <p className="text-black/80 leading-relaxed text-white">
                  {item.paragraph}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}