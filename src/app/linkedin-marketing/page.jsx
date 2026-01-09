import Image from "next/image";
import linkedinData from "../data/linkedin-marketing.json";

const BASE_URL = "https://socialmediamarketingcontentads.com";

export const metadata = {
  title: "LinkedIn Marketing Services | Ads, Campaign Management & ROI Growth",
  description:
    "Professional LinkedIn marketing services including ad campaign management, audience targeting, engagement optimization, and conversion-focused strategies to maximize social media ROI.",

  keywords: [
    "linkedin marketing services",
    "linkedin advertising agency",
    "linkedin ads management",
    "linkedin campaign management",
    "linkedin ad strategy",
    "audience targeting linkedin",
    "paid social marketing",
    "b2b linkedin advertising",
    "social media roi"
  ],

  alternates: {
    canonical: `${BASE_URL}/linkedin-marketing`,
  },

  openGraph: {
    title: "LinkedIn Marketing Services | Ads & Campaign Optimization",
    description:
      "Drive qualified leads with LinkedIn marketing services focused on audience targeting, engagement growth, and ROI-driven campaigns.",
    url: `${BASE_URL}/linkedin-marketing`,
    type: "website",
  },
};


export default function LinkedInMarketingPage() {
  return (
    <main className="max-w-6xl mx-auto py-12 px-5">
      {/* Page Header */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          LinkedIn Marketing Services
        </h1>

        <p className="text-lg text-gray-100 max-w-3xl">
          Explore our <strong>LinkedIn marketing services</strong>, including
          <strong> audience targeting</strong>, <strong>LinkedIn advertising</strong>,
          <strong> campaign management</strong>, and performance optimization.
          Our strategies help businesses improve <strong>engagement rate</strong>,
          reduce <strong>ad spend</strong>, and achieve sustainable
          <strong> social media ROI</strong>.
        </p>
      </header>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {linkedinData.map((item, index) => (
          <article
            key={index}
            className="bg-white shadow-md rounded-xl p-6 flex flex-col"
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={200}
              height={300}
              loading="lazy"
              className="rounded-md object-cover mx-auto"
            />

            <h2 className="text-xl font-semibold mt-5 text-black">
              {item.heading}
            </h2>

            {/* SEO-safe HTML content */}
            <p
              className="text-gray-800 mt-3 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.paragraph }}
            />
          </article>
        ))}
      </section>
    </main>
  );
}