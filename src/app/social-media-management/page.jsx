import Image from "next/image";
import data from "./socialMediaManagementContent.json";

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
          We manage your social media end-to-end — strategy, content, publishing,
          engagement, and reporting — so your channels drive real business growth.
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
                <h2 className="text-2xl font-semibold mb-4 text-black ">
                  {item.heading}
                </h2>
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