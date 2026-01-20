import Image from "next/image";
import data from "./socialMediaManagementContent.json";
import Link from "next/link";

const BASE_URL = "https://socialmediamarketingcontentads.com";

export const metadata = {
  title: "Social Media Management Services | Boost Engagement & ROI",
  description:
    "End-to-end social media management: strategy, content calendar, creation, publishing, engagement, and reporting to grow reach, leads, and ROI.",
  alternates: {
    canonical: `${BASE_URL}/social-media-management`,
  },
  openGraph: {
    title: "Social Media Management Services | Boost Engagement & ROI",
    description:
      "End-to-end social media management to grow reach, engagement, leads, and ROI.",
    url: `${BASE_URL}/social-media-management`,
    type: "website",
  },
};

export default function SocialMediaManagementPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is included in social media management?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Strategy, content calendar, content creation, publishing, community engagement, analytics, and monthly reporting.",
        },
      },
      {
        "@type": "Question",
        name: "Which platforms do you manage?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Facebook, Instagram, LinkedIn, TikTok, Pinterest, Twitter/X, YouTube, and Snapchat based on your goals.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can I see results?",
        acceptedAnswer: {
          "@type": "Answer",
          text:
            "Engagement often improves within weeks. Leads and revenue typically grow over 1–3 months with consistency.",
        },
      },
    ],
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 mt-24">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Social Media Management Services
        </h1>
   <p className="text-lg md:text-xl text-white-700 leading-relaxed max-w-3xl mx-auto">
  Social Media Management helps businesses build a strong digital presence, connect with the right audience, and turn engagement into real business results.<br /><br />
  Many brands struggle with inconsistent posting, low reach, poor engagement, and no clear growth strategy—leading to wasted time and missed opportunities.<br /><br />
  With over 4.9 billion active social media users worldwide, businesses that use a structured content and growth strategy consistently outperform those that don’t.<br /><br />
  Our Social Media Management services cover strategy, content creation, post scheduling, reels and short-form videos, captions, hashtag research, audience engagement, analytics, and continuous optimization across platforms like Facebook, Instagram, TikTok, LinkedIn, X (Twitter), Pinterest, and YouTube.<br /><br />
  Whether you’re an eCommerce brand aiming to increase sales, a local business looking to attract nearby customers, a real estate or construction company building trust through visuals, or a startup strengthening brand authority, we manage your social media to drive visibility, credibility, and measurable growth.
</p>

      </section>


      {/* H2 */}
      <section className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Social Media Account Pages Content Management
        </h2>
<p className="text-lg md:text-xl text-white-700 leading-relaxed max-w-3xl mx-auto">
  Expert <strong>social media management services</strong> help businesses stay consistent, build trust, and grow their audience while turning engagement into measurable business results.<br /><br />
  Many brands struggle with irregular posting, low engagement, poor profile optimization, slow responses, and no clear performance tracking—leading to missed opportunities and weak social presence.<br /><br />
  Research shows that <strong>over 70% of consumers expect brands to be active on social media</strong>, and businesses with professionally managed accounts experience higher engagement, stronger brand recall, and improved conversion rates.<br /><br />
  Our end-to-end <Link href="/social-media-marketing"><strong>social media marketing services</strong></Link> include account setup and optimization, profile integration, content strategy, organic content promotion, community management, and performance-driven analytics to ensure consistent growth.<br /><br />
  We also manage and optimize <Link href="/social-media-paid-ads"><strong>paid social media advertising</strong></Link> to accelerate results, alongside platform-specific strategies for <Link href="/facebook-marketing"><strong>Facebook marketing</strong></Link>, <Link href="/instagram-marketing"><strong>Instagram marketing</strong></Link>, <Link href="/linkedin-marketing"><strong>LinkedIn marketing</strong></Link>, <Link href="/tiktok-marketing"><strong>TikTok marketing</strong></Link>, and <Link href="/pinterest-marketing"><strong>Pinterest marketing</strong></Link>—helping eCommerce brands drive sales, local businesses generate leads, real estate companies showcase projects, and B2B brands build long-term authority.
  
  Social media account pages content management helps businesses turn followers into customers by building a strong, consistent, and results-driven online presence.<br /><br />
  If you’re struggling with low engagement, inconsistent posting, poor reach, or no clear ROI from social media, our end-to-end management solves that.<br /><br />
  Studies show that over 73% of consumers say social media influences their purchasing decisions, yet most brands fail due to weak strategy and unoptimized content.<br /><br />
  We manage Facebook, Instagram, TikTok, LinkedIn, X (Twitter), Pinterest, and YouTube—from content planning, creative posts, reels, carousels, captions, hashtags, and scheduling to daily engagement, analytics, and growth optimization.<br /><br />
  For eCommerce brands, we create product-focused content that drives traffic and sales; for local service businesses like clinics, salons, and contractors, we build trust with educational and testimonial content; for real estate and construction companies, we showcase projects, walkthroughs, and lead-generation posts; and for corporate brands and startups, we strengthen authority through LinkedIn and thought-leadership content.<br /><br />
  The result is higher visibility, better engagement, consistent branding, and measurable business growth across every social media platform.
</p>
       
      </section>

      {/* Content Sections */}
      <section className="grid gap-12">
        {data.map((item, index) => (
          <article
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 md:p-8 flex flex-col md:flex-row gap-8 items-center"
          >
            {item.image && (
              <Image
                src={item.image}
                alt={item.alt || item.heading || "Social media management service"}
                width={200}
                height={300}
                className="rounded-xl object-cover"
                loading="lazy"
              />
            )}

            <div className="flex-1 text-center md:text-left">
              {item.heading && (
                <h3 className="text-2xl font-semibold mb-4 text-black ">
                  {item.heading}
                </h3>
              )}
              {item.paragraph && (
                <p className="text-gray-700 leading-relaxed text-lg">
                  {item.paragraph}
                </p>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-24 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-12 px-6 rounded-2xl shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Make Social Media Work for You?
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Get a tailored management plan with content, engagement, and reporting —
          all focused on ROI.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition"
        >
          Get Your Free Strategy Call
        </a>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </main>
  );
}