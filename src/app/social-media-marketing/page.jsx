import Image from "next/image";
import socialMediaData from "../data/social-media-marketing.json";
import Link from "next/link";
import Script from "next/script";






const BASE_URL = "https://socialmediamarketingcontentads.com";

export const metadata = {
  title: "Social Media Marketing Services | Strategy, Ads & Growth",
  description:
    "Full-service social media marketing services including strategy, content creation, paid ads, audience research, analytics and ROI optimization across all major platforms.",

  alternates: {
    canonical: `${BASE_URL}/social-media-marketing`,
  },

  openGraph: {
    url: `${BASE_URL}/social-media-marketing`,
    title: "Social Media Marketing Services | Strategy, Ads & Growth",
    description:
      "Full-service social media marketing services including strategy, content creation, paid ads, audience research, analytics and ROI optimization across all major platforms.",
  },





};


export default function SocialMediaMarketingPage() {
  return (
    <main className="bg-gradient-to-b from-slate-900 to-slate-950">

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Social Media Marketing Services
          </h1>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
            Strategic <strong>social media marketing</strong> helps businesses increase brand awareness, attract high-intent audiences, boost engagement, and convert social traffic into real sales and qualified leads.<br /><br />
            Many brands fail on social media due to poor content strategy, inconsistent posting, low organic reach, weak targeting in paid campaigns, and the absence of proper tracking—resulting in wasted budget and low ROI.<br /><br />
            With over <strong>5 billion active social media users worldwide</strong> and more than <strong>75% of buyers influenced by social content</strong>, businesses using structured organic promotion and data-driven paid advertising significantly outperform competitors.<br /><br />
            Our end-to-end <Link href="/social-media-management"><strong>social media marketing services</strong></Link> include profile setup and integration, content strategy, organic content promotion, paid social media advertising, funnel-based campaign creation, creative testing, and advanced analytical tracking to measure growth, engagement, and conversions.<br /><br />
            We drive results across <Link href="/facebook-marketing"><strong>Facebook marketing</strong></Link>, <Link href="/instagram-marketing"><strong>Instagram marketing</strong></Link>, <Link href="/linkedin-marketing"><strong>LinkedIn marketing</strong></Link>, <Link href="/tiktok-marketing"><strong>TikTok marketing</strong></Link>, <Link href="/pinterest-marketing"><strong>Pinterest marketing</strong></Link>, and YouTube—helping eCommerce brands scale sales, local businesses generate consistent leads, real estate and construction companies build trust, and B2B brands establish long-term authority.<br /><br />
            For faster growth and immediate visibility, our <Link href="/social-media-paid-ads"><strong>paid social media marketing solutions</strong></Link> focus on precision targeting, conversion-optimized creatives, retargeting, and performance-driven optimization.
          </p>


        </div>
      </section>

      {/* SEO Friendly FAQ Section */}
<section className="max-w-4xl mx-auto px-4 py-16">


  <div className="space-y-6 text-white-700 leading-relaxed">

    <div>
      <h3 className="font-semibold text-lg text-white">
        What is social media marketing and how does it help businesses?
      </h3>
      <p>
        Social media marketing is a digital strategy that uses platforms like Facebook, Instagram, and LinkedIn to promote products and services. It helps businesses increase brand awareness, generate leads, drive website traffic, and boost sales.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg text-black">
        Which social media platforms are best for business marketing?
      </h3>
      <p>
        The best platform depends on your target audience. Facebook and Instagram are ideal for ecommerce and local businesses, LinkedIn works best for B2B marketing, and TikTok is effective for brand awareness.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg text-black">
        How much does social media marketing cost?
      </h3>
      <p>
        The cost depends on business goals and advertising budget. Most businesses invest in monthly management services along with a paid advertising budget for optimal results.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg text-black">
        How long does it take to see results?
      </h3>
      <p>
        Organic growth typically takes 2–3 months. Paid advertising campaigns like Facebook Ads can generate leads within days when properly optimized.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg text-black">
        Can social media marketing generate real leads and sales?
      </h3>
      <p>
        Yes. With proper targeting, engaging content, and conversion-focused strategy, social media marketing can consistently generate qualified leads and increase sales.
      </p>
    </div>

  </div>

  {/* FAQ Schema */}
  <Script type="application/ld+json" id="faq-schema">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is social media marketing and how does it help businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Social media marketing is a digital strategy that uses platforms like Facebook, Instagram, and LinkedIn to promote products and services. It helps businesses increase brand awareness, generate leads, drive website traffic, and boost sales."
          }
        },
        {
          "@type": "Question",
          "name": "Which social media platforms are best for business marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Facebook and Instagram are ideal for ecommerce and local businesses, LinkedIn works best for B2B marketing, and TikTok is effective for brand awareness."
          }
        },
        {
          "@type": "Question",
          "name": "How much does social media marketing cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost depends on business goals and advertising budget. Most businesses invest in monthly management services along with a paid advertising budget."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to see results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Organic growth typically takes 2–3 months. Paid advertising campaigns like Facebook Ads can generate leads within days when optimized properly."
          }
        },
        {
          "@type": "Question",
          "name": "Can social media marketing generate real leads and sales?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. With proper targeting, engaging content, and a conversion-focused strategy, social media marketing can generate qualified leads and increase sales."
          }
        }
      ]
    })}
  </Script>
</section>

  {/* FAQ Schema */}
  <Script type="application/ld+json" id="faq-schema">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is social media marketing and how does it help businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Social media marketing is a digital strategy that uses platforms like Facebook, Instagram, and LinkedIn to promote products and services. It helps businesses increase brand awareness, generate leads, drive website traffic, and boost sales."
          }
        },
        {
          "@type": "Question",
          "name": "Which social media platforms are best for business marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Facebook and Instagram are ideal for ecommerce and local businesses, LinkedIn works best for B2B marketing, and TikTok is effective for brand awareness."
          }
        },
        {
          "@type": "Question",
          "name": "How much does social media marketing cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost depends on business goals and advertising budget. Most businesses invest in monthly management services along with a paid advertising budget."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to see results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Organic growth typically takes 2–3 months. Paid advertising campaigns like Facebook Ads can generate leads within days when optimized properly."
          }
        },
        {
          "@type": "Question",
          "name": "Can social media marketing generate real leads and sales?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. With proper targeting, engaging content, and a conversion-focused strategy, social media marketing can generate qualified leads and increase sales."
          }
        }
      ]
    })}
  </Script>



      {/* ================= CONTENT ================= */}
      <section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-20 space-y-20      ">

          {socialMediaData.sections.map((item, index) => (
            <article
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start  shadow-lg bg-white rounded-xl p-6"
            >

              {/* TEXT CONTENT */}
              <div>
                {item.level === "h2" && (
                  <h2 className="text-3xl font-bold text-slate-900 mb-5">
                    {item.heading}
                  </h2>
                )}

                {item.level === "h3" && (
                  <h3 className="text-2xl font-semibold text-slate-900 mb-5">
                    {item.heading}
                  </h3>
                )}

                {item.level === "h4" && (
                  <h4 className="text-xl font-semibold text-slate-900 mb-5">
                    {item.heading}
                  </h4>
                )}

                <div
                  className="text-slate-700 text-base leading-relaxed space-y-4"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              </div>

              {/* IMAGE (200x300 OPTIMIZED) */}
              <div className="flex justify-center">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={200}
                  height={300}
                  className="rounded-xl shadow-md object-contain shadow-lg bg-white "
                  loading="lazy"
                />
              </div>

            </article>
          ))}

        </div>
      </section>


       
    </main>

    
  );
}

  