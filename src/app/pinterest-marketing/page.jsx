import Image from "next/image";
import pinterestData from "../data/pinterest-marketing.json";

const BASE_URL = "https://socialmediamarketingcontentads.com";

export const metadata = {
  title: "Pinterest Marketing Services | Ads, Campaigns & Audience Growth",
  description:
    "Professional Pinterest marketing services including content strategy, ads management, audience targeting, campaign optimization, and performance tracking. Increase engagement, traffic, and social media ROI with Pinterest.",

  keywords: [
    "pinterest marketing services",
    "pinterest ads management",
    "pinterest advertising agency",
    "pinterest campaign management",
    "pinterest ads experts",
    "pinterest marketing strategy",
    "pinterest ad campaigns",
    "pinterest ads optimization",
    "lead generation pinterest ads",
    "ecommerce pinterest ads services",
    "audience targeting pinterest",
    "pinterest content strategy",
    "pinterest engagement growth",
    "campaign testing and scaling",
    "pinterest ads reporting and analytics",
    "fashion pinterest marketing",
    "home decor pinterest ads",
    "beauty pinterest marketing",
    "real estate pinterest ads",
    "travel pinterest advertising",
    "increase sales with pinterest ads",
    "boost brand awareness",
    "improve social media ROI",
    "high converting pinterest campaigns",
    "visual search marketing",
    "paid social marketing",
    "digital marketing for pinterest",
    "pinterest ad strategy",
    "pinterest remarketing services",
    "targeted advertising pinterest"
  ],

  alternates: {
    canonical: `${BASE_URL}/pinterest-marketing`,
  },

  openGraph: {
    title: "Pinterest Marketing Services | Ads, Campaigns & Audience Growth",
    description:
      "Drive high-intent traffic with Pinterest marketing, ads optimization, audience targeting, and conversion-focused campaign strategies.",
    url: `${BASE_URL}/pinterest-marketing`,
    type: "website",
  },
};


export default function PinterestMarketingPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-5">
      {/* Page Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Pinterest Marketing Services
      </h1>

      {/* Intro Paragraph */}
      <p className="text-lg text-gray-100 mb-12">
        Explore our <strong>Pinterest marketing services</strong> designed to
        improve <strong>content discovery</strong>, <strong>audience targeting</strong>,
        and <strong>campaign performance</strong>. From organic growth to
        <strong> Pinterest ads optimization</strong>, we help brands increase
        <strong> engagement rate</strong>, attract high-intent users, and grow
        long-term <strong>social media ROI</strong>.
      </p>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {pinterestData.map((item, index) => (
          <article
            key={index}
            className="bg-white shadow-md p-6 rounded-xl"
          >
            {/* Optimized Image */}
            <Image
              src={item.image}
              alt={item.alt}
              width={200}
              height={300}
              className="rounded-md object-cover mx-auto"
              loading="lazy"
            />

            {/* Section Heading */}
            <h2 className="text-xl font-semibold mt-5 text-black">
              {item.heading}
            </h2>

            {/* SEO Content */}
            <p
              className="text-black mt-3 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.paragraph }}
            />
          </article>
        ))}
      </section>
    </main>
  );
}
