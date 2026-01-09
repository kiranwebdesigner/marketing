import Image from "next/image";
import paidAdsData from "../data/social-media-paid-ads.json";

const BASE_URL = "https://socialmediamarketingcontentads.com";

export const metadata = {
  title: "Social Media Paid Ads Services | High-ROI Ad Campaigns",
  description:
    "ROI-focused social media paid ads services to generate leads, sales, and growth across Facebook, Instagram, LinkedIn, TikTok, and YouTube.",

  keywords: [
    "social media paid ads",
    "social media advertising services",
    "paid social media campaigns",
    "social media ads management",
    "Facebook ads services",
    "Instagram ads management",
    "LinkedIn ads services",
    "TikTok ads management",
    "YouTube ads services",
    "lead generation social media ads",
    "conversion focused ad campaigns",
    "retargeting social media ads",
    "increase social media ROI",
    "high converting paid ads",
    "performance marketing services"
  ],

  alternates: {
    canonical: `${BASE_URL}/social-media-paid-ads`,
  },

  openGraph: {
    title: "Social Media Paid Ads Services | High-ROI Ad Campaigns",
    description:
      "Run high-performing paid social media ad campaigns with expert targeting, optimization, and reporting.",
    url: `${BASE_URL}/social-media-paid-ads`,
    type: "website",
  },
};




export default function SocialMediaPaidAdsPage() {
  return (
    <main className="max-w-6xl mx-auto px-5 py-12">

      {/* HERO SECTION */}
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
          Social Media Paid Ads Services
        </h1>
        <p className="text-lg text-gray-100 leading-relaxed max-w-3xl">
          Discover our <strong>social media paid ads</strong> services to run
          high-performing <strong>ad campaigns</strong>, target the right
          <strong> audience</strong>, and optimize for <strong>social media ROI</strong>.
          <br /><br />
          We provide <strong>retargeting strategies</strong>, <strong>conversion optimization</strong>,
          and <strong>analytics tracking</strong> across Facebook, Instagram, LinkedIn, TikTok, and YouTube.
        </p>
      </section>

      {/* PILLAR CONTENT */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {paidAdsData.sections.map((item, index) => (
          <article
            key={index}
            className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center"
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={200}
              height={300}
              className="rounded-md object-cover mb-4"
              loading="lazy"
            />

            {item.level === "h2" && (
              <h2 className="text-xl md:text-2xl font-semibold text-black mb-3">
                {item.heading}
              </h2>
            )}
            {item.level === "h3" && (
              <h3 className="text-lg md:text-xl font-semibold text-black mb-3">
                {item.heading}
              </h3>
            )}

            <div
              className="text-gray-800 text-base leading-relaxed mb-2"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </article>
        ))}
      </section>
    </main>
  );
}