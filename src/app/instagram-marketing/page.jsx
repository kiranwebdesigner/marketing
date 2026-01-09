import Image from "next/image";
import instagramData from "../data/instagram-marketing.json";

const BASE_URL = "https://socialmediamarketingcontentads.com";

export const metadata = {
  title: "Instagram Marketing Services | Ads Management & Engagement Growth",
  description:
    "Professional Instagram marketing services including page management, ad campaigns, audience targeting, campaign optimization, content strategy, and analytics to boost engagement, followers, and social media ROI for businesses across USA, UK, and Canada.",

  keywords: [
    "instagram marketing services",
    "instagram ads management",
    "instagram advertising agency",
    "instagram campaign management",
    "instagram ads experts",
    "instagram page management",
    "instagram marketing strategy",
    "instagram ad campaigns",
    "audience targeting instagram",
    "instagram content strategy",
    "instagram engagement growth",
    "retail instagram marketing",
    "restaurant instagram ads",
    "ecommerce instagram ads",
    "SaaS instagram ads",
    "real estate instagram ads",
    "increase sales with instagram ads",
    "boost brand awareness",
    "improve social media ROI",
    "high converting instagram campaigns",
    "social media advertising",
    "digital marketing for instagram",
    "instagram ad strategy",
    "targeted advertising instagram"
  ],

  alternates: {
    canonical: `${BASE_URL}/instagram-marketing`,
  },

  openGraph: {
    title: "Instagram Marketing Services | Ads Management & Engagement Growth",
    description:
      "Get high-performing Instagram ads with optimized targeting, page management, retargeting, conversion tracking, and professional campaign management to maximize ROI.",
    url: `${BASE_URL}/instagram-marketing`,
    type: "website",
  },
};



export default function InstagramMarketingPage() {
  return (
    <>
      <main className="max-w-5xl mx-auto py-10 px-5">
        {/* Introductory Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Instagram Marketing Services
        </h1>

        {/* SEO-Optimized Introductory Paragraph */}
        <p className="text-lg text-gray-100 mb-10">
          Running effective <strong>Instagram marketing services</strong> can be challenging for <strong>businesses</strong> struggling with <strong>audience targeting</strong> and low <strong>engagement rate</strong>.<br /><br />
          According to HubSpot, 71% of companies improve <strong>social media ROI</strong> when implementing a professional <strong>Instagram marketing strategy</strong> with optimized <strong>ad campaigns</strong> and <strong>content strategy</strong>.<br /><br />
          In cities like New York, London, Toronto, Los Angeles, and Sydney, <strong>e-commerce</strong>, <strong>restaurants</strong>, <strong>SaaS</strong>, <strong>retail</strong>, and <strong>real estate</strong> companies often struggle to manage <strong>Instagram page management</strong>, <strong>campaign optimization</strong>, and <strong>Instagram ads reporting and analytics</strong>.<br /><br />
          Our services ensure high-performing <strong>Instagram ads management</strong>, increase <strong>engagement growth</strong>, and maximize <strong>digital marketing for Instagram</strong> outcomes.
        </p>

        {/* Dynamic JSON Mapping */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {instagramData.map((item, index) => (
            <div key={index} className="bg-white shadow-md p-5 rounded-xl">
              <Image
                src={item.image}
                alt={item.alt}
                width={200}
                height={300}
                className="rounded-md object-cover mx-auto"
              />

              <h2 className="text-xl font-semibold mt-4 text-black">
                {item.heading}
              </h2>

              <p
                className="text-black mt-2 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.paragraph }}
              ></p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
