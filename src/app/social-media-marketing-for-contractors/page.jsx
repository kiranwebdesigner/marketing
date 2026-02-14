import Image from "next/image";
import data from "./contractorsContent.json";
import Link from "next/link";


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
        <p className="text-lg md:text-xl text-white-100 leading-relaxed max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Results-driven <strong>social media marketing for contractors</strong> helps construction, renovation, and service contractors grow their local visibility, attract high-quality leads, and convert social followers into paying clients.<br /><br />
            Many contractors struggle with low engagement, inconsistent posting, outdated profiles, minimal online reputation, and ineffective advertising—resulting in wasted time, missed projects, and stagnant growth.<br /><br />
            Research shows that <strong>over 70% of consumers research contractors online before hiring</strong>, and contractors with professional social media management see significantly higher leads and inquiries than those posting irregularly.<br /><br />
            Our comprehensive <Link href="/social-media-management"><strong>social media management services</strong></Link> include profile setup and integration, tailored content strategy, organic content promotion, community engagement and analytical tracking to monitor performance and improve ROI.<br /><br />
            We optimize your presence across <Link href="/facebook-marketing"><strong>Facebook marketing</strong></Link>, <Link href="/instagram-marketing"><strong>Instagram marketing</strong></Link>, <Link href="/linkedin-marketing"><strong>LinkedIn marketing</strong></Link>, <Link href="/tiktok-marketing"><strong>TikTok marketing</strong></Link>, and <Link href="/pinterest-marketing"><strong>Pinterest marketing</strong></Link>, and run <Link href="/social-media-paid-ads"><strong>paid social campaigns</strong></Link> to reach local clients faster. This approach helps contractors showcase completed projects, share testimonials, highlight services, and strengthen trust in their brand—turning social media into a consistent source of leads and sales.
          </p>

        </p>
      </section>

{/* platform content Content */}
{/* Facebook Marketing for Contractors */}
<h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          Facebook Marketing for Contractors
        </h3>
<p className="text-lg md:text-xl text-white-300 leading-relaxed ">
  With <Link href="/facebook-marketing"><strong>Facebook marketing</strong></Link>, contractors can showcase completed projects, share client testimonials, and engage with local communities.  
  Targeted ads help generate leads while regular organic posts build trust and brand recognition.  
  Facebook’s analytics provide insights to optimize content and track project inquiries.
</p>
{/* Instagram Marketing for Contractors */}
<h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
        Instagram   Marketing for Contractors
        </h3>
{/* Instagram Marketing for Contractors */}
<p className="text-lg md:text-xl text-white-300 leading-relaxed">
  <Link href="/instagram-marketing"><strong>Instagram marketing</strong></Link> allows contractors to highlight project visuals, before-and-after transformations, and short-form reels to attract potential clients.  
  Consistent posting and hashtag strategies increase local discoverability.  
  Analytics help measure engagement and improve content performance over time.
</p>

{/* LinkedIn Marketing for Contractors */}
<h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
       LinkedIn   Marketing for Contractors
        </h3>
<p className="text-lg md:text-xl text-white-300 leading-relaxed">
  Using <Link href="/linkedin-marketing"><strong>LinkedIn marketing</strong></Link>, contractors can establish authority in the construction and service industry.  
  Sharing case studies, certifications, and business updates builds credibility with corporate clients.  
  LinkedIn engagement and analytics help track professional leads and partnership opportunities.
</p>

{/* TikTok Marketing for Contractors */}
<h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
       TikTok  Marketing for Contractors
        </h3>
<p className="text-lg md:text-xl text-white-300 leading-relaxed">
  <Link href="/tiktok-marketing"><strong>TikTok marketing</strong></Link> helps contractors reach younger audiences through short, engaging videos of projects, tips, and time-lapses.  
  Creative content can go viral, increasing brand exposure locally.  
  Analytics guide the most engaging formats for your audience and boost leads.
</p>

{/* Pinterest Marketing for Contractors */}
<h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
         Pinterest  Marketing for Contractors
        </h3>
<p className="text-lg md:text-xl text-slate-300 leading-relaxed">
  <Link href="/pinterest-marketing"><strong>Pinterest marketing</strong></Link> is ideal for contractors to showcase design ideas, completed projects, and service inspiration boards.  
  Organic pins drive traffic to your website and generate high-intent inquiries.  
  Performance tracking identifies which visuals attract potential clients most effectively.
</p>

{/* Paid Social Media Campaigns for Contractors */}
<h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
        Paid Social Media Campaigns for Contractors
        </h2>
<p className="text-lg md:text-xl text-slate-300 leading-relaxed">
  <Link href="/social-media-paid-ads"><strong>Paid social campaigns</strong></Link> target local audiences precisely, turning social media into a consistent source of leads.  
  Contractors can promote services, special offers, or seasonal projects to maximize ROI.  
  Analytics and tracking allow continuous optimization for cost-effective results.
</p>





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
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.heading}
                </h3>
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