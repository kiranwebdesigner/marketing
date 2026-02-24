import Image from "next/image";
import facebookData from "../data/facebook-marketing.json";

const BASE_URL = "https://socialmediamarketingcontentads.com";

export const metadata = {
  title: "Facebook Marketing Services | Ads Management, Targeting & ROI Growth",
  description:
    "Professional Facebook marketing services including ad account setup, Business Manager configuration, pixel tracking, audience targeting, campaign optimization, and reporting. Boost engagement, sales, and social media ROI for businesses in the USA, UK, and Canada.",

  other: {
    keywords:
      "facebook marketing services, facebook ads management, facebook advertising agency, facebook campaign management, facebook ads experts, facebook ad account setup, facebook business manager setup, facebook pixel setup, conversion tracking facebook ads, retargeting facebook ads, lead generation facebook ads, ecommerce facebook ads services, audience targeting facebook, facebook interest targeting, custom audiences facebook, lookalike audiences facebook, facebook campaign optimization, ad creatives for facebook, campaign testing and scaling, facebook ads reporting and analytics, local business facebook marketing, real estate facebook ads, ecommerce facebook ads, restaurant facebook ads, service business facebook marketing, increase sales with facebook ads, boost brand awareness, improve social media ROI, high converting facebook campaigns, facebook engagement growth, social media advertising, paid social marketing, meta ads services, meta business suite optimization, digital marketing for facebook, facebook ad strategy, facebook remarketing services, targeted advertising facebook"
  },

  alternates: {
    canonical: `${BASE_URL}/facebook-marketing`,
  },

  openGraph: {
    title: "Facebook Marketing Services | Ads Management, Targeting & ROI Growth",
    description:
      "Get high-performing Facebook ads with optimized targeting, pixel setup, retargeting, conversion tracking, and professional campaign management to maximize ROI.",
    url: `${BASE_URL}/facebook-marketing`,
    type: "website",
  },
};


export default function FacebookMarketingPage() {
  return (
    <>
      <main className="max-w-5xl mx-auto py-10 px-5">
        {/* PAGE HEADER */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Facebook Marketing Services
        </h1>

        <p className="text-lg text-gray-100 mb-10">
          Explore all our <strong>Facebook marketing services</strong>, including <strong>ad creation</strong>, <strong>pixel setup</strong>, <strong>audience targeting</strong>, <strong>campaign optimization</strong>, analytics, and <strong>retargeting solutions</strong>.  
          Each service is SEO-optimized to help your business improve <strong>engagement rate</strong>, <strong>social media ROI</strong>, and <strong>content performance</strong>.
        </p>

        {/* DYNAMIC JSON MAPPING */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {facebookData.map((item, index) => (
            <div key={index} className="bg-white shadow-md p-5 rounded-xl">
              <Image
                src={item.image}
                alt={item.alt}
                width={200} // optimized width
                height={300} // optimized height
                 quality={90}
                className="rounded-md object-cover mx-auto"
                priority={index < 2} // preloads top images for speed
              />

              <h2 className="text-xl font-semibold mt-4 text-black">
                {item.heading}
              </h2>

              {/* Render bold keywords + line breaks */}
              <p
                className="text-gray-700 mt-2 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: item.paragraph }}
              ></p>

              
            </div>
          ))}
        </section>
   
      </main>
    </>
  );
}