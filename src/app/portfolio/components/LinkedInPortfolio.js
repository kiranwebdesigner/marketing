// my-app/src/app/portfolio/components/LinkedInPortfolio.js
import Image from "next/image";

export default async function LinkedInPortfolio() {
  // Import JSON data (server-side, SEO-friendly)
  const portfolio = await import("../../data/portfolio.json").then((m) => m.default);
  const linkedInItems = portfolio.linkedInPortfolio || [];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-6 text-white">
        LinkedIn Portfolio
      </h2>
      <p className="text-lg text-white-700 mb-10 max-w-3xl">
        Showcase of professional LinkedIn marketing graphics designed for authors, designers, filmmakers, and UI/UX professionals to increase engagement and visibility.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {linkedInItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col bg-gradient-to-r from-[#050000] to-[#1da1f2] text-white border border-white"
          >
            {item.image && (
              <div className="relative w-full" style={{ paddingTop: `${(item.height / item.width) * 100}%` }}>
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
            <h3 className="text-xl font-semibold mt-4 text-white">{item.heading}</h3>
            <p className="text-white-600 mt-2">{item.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
}