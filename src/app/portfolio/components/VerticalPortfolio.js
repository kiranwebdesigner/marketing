// my-app/src/app/portfolio/components/VerticalPortfolio.js
import Image from "next/image";

export default async function VerticalPortfolio() {
  // Import JSON data (server-side, SEO-friendly)
  const portfolio = await import("../../data/portfolio.json").then((m) => m.default);
  const verticalItems = portfolio.verticalContent || [];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6 text-black">
         Social Media Content
      </h2>
      <p className="text-lg text-gray-700 mb-10 max-w-3xl">
        High-quality social media content designed for car showrooms, real estate companies, and tech brands to engage audiences on mobile-first platforms.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {verticalItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col"
          >
            {item.image && (
              <div
                className="relative w-full"
                style={{ paddingTop: `${(item.height / item.width) * 100}%` }}
              >
                <Image
                  src={item.image}
                  alt={item.alt || item.heading}
                  fill
                  className="rounded-xl object-cover"
                  priority
                  quality={90}
                />
              </div>
            )}
            <h3 className="text-xl font-semibold mt-4 text-black">{item.heading}</h3>
            <p className="text-gray-600 mt-2">{item.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
}