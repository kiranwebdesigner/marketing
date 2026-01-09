import Image from "next/image";
import data from "./contractorsContent.json";

const BASE_URL = "https://socialmediamarketingcontentads.com";

export const metadata = {
  title: "Social Media Marketing for Contractors | Lead Generation & Growth",
  description:
    "Boost your contracting business with expert social media marketing services. We help contractors, construction companies, and home improvement businesses increase leads, engagement, and ROI.",

  keywords: [
    "social media marketing for contractors",
    "contractor lead generation",
    "construction company marketing",
    "home improvement social media",
    "Facebook ads for contractors",
    "Instagram ads for construction",
    "LinkedIn marketing for contractors",
    "YouTube ads for contractors",
    "contractor engagement growth",
    "increase contractor ROI"
  ],

  alternates: {
    canonical: `${BASE_URL}/social-media-marketing-for-contractors`,
  },

  openGraph: {
    title: "Social Media Marketing for Contractors | Lead Generation & Growth",
    description:
      "Boost leads and ROI for contractors with expert social media marketing across Facebook, Instagram, LinkedIn, and YouTube.",
    url: `${BASE_URL}/social-media-marketing-for-contractors`,
    type: "website",
  },
};


export default function SocialMediaMarketingForContractorsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 mt-25">
      {/* Introduction */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Social Media Marketing for Contractors
        </h1>
        <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto">
          Contractors often rely on referrals and word of mouth, but today’s
          customers search for services on social media. With over 4.9 billion
          active users worldwide (Statista, 2025), construction and home
          improvement businesses can’t afford to miss out.<br /><br />
          Our <strong>contractor-focused social media marketing</strong> services
          turn <strong>Facebook</strong>, <strong>Instagram</strong>,
          <strong>LinkedIn</strong>, and <strong>YouTube</strong> into powerful
          <strong> lead generation channels</strong>, boosting engagement and ROI.
        </p>
      </section>

      {/* Dynamic Content */}
      <section className="grid gap-12">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center"
          >
            {item.image && (
              <div className="w-[200px] h-[300px] mx-auto md:mx-0">
                <Image
                  src={item.image}
                  alt={item.alt || item.heading || "Contractor marketing image"}
                  width={200}
                  height={300}
                  className="rounded-xl object-cover w-[200px] h-[300px]"
                  quality={90}
                  priority={index < 3} // First few images load faster for SEO
                />
              </div>
            )}
            <div className="flex-1 text-center md:text-left">
              {item.heading && (
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.heading}
                </h2>
              )}
              {item.paragraph && (
                <p
                  className="text-gray-700 leading-relaxed text-lg"
                  dangerouslySetInnerHTML={{ __html: item.paragraph }}
                ></p>
              )}
            </div>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <section className="mt-25 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 px-6 rounded-2xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get More Leads for Your Contracting Business?
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          From roofing and remodeling to home improvement and construction, we
          create contractor-focused social media campaigns that attract
          customers, build trust, and maximize ROI.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl shadow-md hover:bg-gray-100 transition"
        >
          Schedule Your Free Strategy Call
        </a>
      </section>
    </main>
  );
}