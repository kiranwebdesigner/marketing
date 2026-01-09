import Link from "next/link";

export const metadata = {
  title: "Social Media Marketing Services | Boost Engagement & Growth",
  description:
    "Professional social media marketing services to grow your brand, increase engagement, and drive sales across Facebook, Instagram, LinkedIn, TikTok, and Pinterest.",
  alternates: {
    canonical: "https://socialmediamarketingcontentads.com/",
  },
};

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-[#050000] to-[#1da1f2] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Social Media Marketing Services That Drive Real Growth
          </h1>

          <p className="text-lg md:text-xl text-white  max-w-3xl mx-auto mb-10">
            We help businesses increase <strong>brand awareness</strong>, generate{" "}
            <strong>qualified leads</strong>, and boost <strong>sales</strong>{" "}
            with data-driven social media strategies.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/social-media-marketing"
              className="bg-white text-gray-900 px-8 py-3 rounded-md font-semibold"
            >
              Explore Services
            </Link>

            <Link
              href="https://www.linkedin.com/in/digital-marketing-manager-expert-strategist/"
              target="_blank"
              className="border border-white px-8 py-3 rounded-md font-semibold"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why Businesses Choose Our Social Media Marketing Agency
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-14">
            Over 70% of consumers discover brands through social platforms.
            We help you stand out, target the right audience, and convert
            attention into measurable results.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Feature
              title="Performance-Driven Strategy"
              description="Every campaign is built around KPIs like engagement rate, cost per lead, and ROAS."
            />

            <Feature
              title="Platform-Specific Expertise"
              description="We optimize content and ads based on platform algorithms and user behavior."
            />

            <Feature
              title="Transparent Reporting"
              description="Clear reports show what’s working and how your ROI improves month over month."
            />
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            Our Social Media Marketing Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ServiceCard
              title="Social Media Marketing"
              link="/social-media-marketing"
              description="Full-funnel strategies to drive awareness, engagement, and conversions."
            />

            <ServiceCard
              title="Social Media Management"
              link="/social-media-management"
              description="Content planning, posting, engagement, and growth optimization."
            />

            <ServiceCard
              title="Social Media Paid Ads"
              link="/social-media-paid-ads"
              description="High-ROI ad campaigns with advanced targeting and retargeting."
            />

            <ServiceCard
              title="Facebook Marketing"
              link="/facebook-marketing"
              description="Lead generation and conversion-focused Facebook ad campaigns."
            />

            <ServiceCard
              title="Instagram Marketing"
              link="/instagram-marketing"
              description="Reels, stories, and ads built for engagement and sales."
            />

            <ServiceCard
              title="LinkedIn Marketing"
              link="/linkedin-marketing"
              description="B2B lead generation and professional brand growth."
            />

            <ServiceCard
              title="Pinterest Marketing"
              link="/pinterest-marketing"
              description="Visual discovery strategies for long-term traffic and sales."
            />

            <ServiceCard
              title="TikTok Marketing"
              link="/tiktok-marketing"
              description="Short-form video strategies designed for viral reach."
            />

            <ServiceCard
              title="Marketing for Contractors"
              link="/social-media-marketing-for-contractors"
              description="Local lead generation for contractors and home service businesses."
            />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gray-950 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Business on Social Media?
          </h2>

          <p className="text-gray-300 mb-8">
            Let our experts create a strategy that delivers leads, engagement,
            and measurable ROI.
          </p>

          <Link
            href="/contact"
            className="bg-white text-gray-900 px-10 py-4 rounded-md font-semibold"
          >
            Start Your Growth Journey
          </Link>
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function ServiceCard({ title, description, link }) {
  return (
    <div className="bg-white border rounded-lg p-6 hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href={link} className="font-semibold underline">
        Learn More →
      </Link>
    </div>
  );
}

function Feature({ title, description }) {
  return (
    <div>
      <h3 className="font-semibold text-xl mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

