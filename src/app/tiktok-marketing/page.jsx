import Image from "next/image";
import tiktokData from "../data/tiktok-marketing.json";

const BASE_URL = "https://socialmediamarketingcontentads.com";

export const metadata = {
  title: "TikTok Marketing Services | Ads, Campaigns & Audience Growth",
  description:
    "Professional TikTok marketing services including content strategy, ads management, audience targeting, campaign optimization, and performance tracking. Increase engagement, conversions, and social media ROI with TikTok.",

  keywords: [
    "tiktok marketing services",
    "tiktok ads management",
    "tiktok advertising agency",
    "tiktok campaign management",
    "tiktok ads experts",
    "tiktok marketing strategy",
    "tiktok ad campaigns",
    "tiktok ads optimization",
    "lead generation tiktok ads",
    "ecommerce tiktok ads services",
    "audience targeting tiktok",
    "tiktok content strategy",
    "tiktok engagement growth",
    "campaign testing and scaling",
    "tiktok ads reporting and analytics",
    "retail tiktok marketing",
    "restaurant tiktok ads",
    "ecommerce tiktok ads",
    "SaaS tiktok ads",
    "real estate tiktok ads",
    "increase sales with tiktok ads",
    "boost brand awareness",
    "improve social media ROI",
    "high converting tiktok campaigns",
    "short form video marketing",
    "paid social marketing",
    "digital marketing for tiktok",
    "tiktok ad strategy",
    "tiktok remarketing services",
    "targeted advertising tiktok"
  ],

  alternates: {
    canonical: `${BASE_URL}/tiktok-marketing`,
  },

  openGraph: {
    title: "TikTok Marketing Services | Ads, Campaigns & Audience Growth",
    description:
      "Drive high engagement and conversions with TikTok marketing, ads optimization, audience targeting, and conversion-focused campaign strategies.",
    url: `${BASE_URL}/tiktok-marketing`,
    type: "website",
  },
};


export default function TikTokMarketingPage() {
  return (
    <main className="max-w-5xl mx-auto py-12 px-5">
      {/* Page Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        TikTok Marketing Services
      </h1>

      {/* Intro Content */}
      <p className="text-lg text-gray-100 mb-12">
       <strong>TikTok marketing services</strong> designed to help
        brands grow through <strong>short-form video content</strong>,
        performance-driven <strong>TikTok campaigns</strong>, and
        conversion-focused <strong>ads optimization</strong>. We help businesses
        improve <strong>engagement rate</strong>, reach the right
        <strong> audience</strong>, and generate measurable
        <strong> social media ROI</strong>.
      </p>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {tiktokData.map((item, index) => (
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

            {/* SEO Paragraph */}
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
