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

{/* ================= WHY CHOOSE US SECTION ================= */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12">
      3 Reasons To Choose Us
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center flex flex-col items-center">
        <div className="bg-green-100 p-4 rounded-full mb-6">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M18 8a6 6 0 11-12 0 6 6 0 0112 0z" />
            <path d="M12 14v7" />
            <path d="M9 21h6" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
        <p className="text-gray-600 mb-4">
          Our team is available anytime to solve your queries and ensure smooth marketing campaigns.
        </p>
        <a href="/contact" className="text-blue-600 font-semibold hover:underline">
          Read More →
        </a>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center flex flex-col items-center">
        <div className="bg-green-100 p-4 rounded-full mb-6">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 8c2.21 0 4-1.79 4-4S14.21 0 12 0 8 1.79 8 4s1.79 4 4 4z" />
            <path d="M12 12v8" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
        <p className="text-gray-600 mb-4">
          Our professionals create personalized strategies for every client to maximize results.
        </p>
        <a href="/services" className="text-blue-600 font-semibold hover:underline">
          Read More →
        </a>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-8 text-center flex flex-col items-center">
        <div className="bg-green-100 p-4 rounded-full mb-6">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M3 7h18M3 12h18M3 17h18" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-3">Best Courses</h3>
        <p className="text-gray-600 mb-4">
          Learn actionable marketing strategies from real experts to grow your business fast.
        </p>
        <a href="/courses" className="text-blue-600 font-semibold hover:underline">
          Read More →
        </a>
      </div>
    </div>
  </div>
</section>
{/* ================= WHY CHOOSE US SECTION ================= */}
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-14">
      3 Reasons To Choose Us
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start hover:shadow-xl transition">
        {/* Top-left icon */}
        <div className="absolute -top-5 -left-5 bg-green-100 p-4 rounded-full">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M18 8a6 6 0 11-12 0 6 6 0 0112 0z" />
            <path d="M12 14v7" />
            <path d="M9 21h6" />
          </svg>
        </div>

        <h3 className="text-xl font-semibold mb-3 mt-4">24/7 Support</h3>
        <p className="text-gray-600 mb-4">
          Our team is always available to solve queries and ensure smooth marketing campaigns.
        </p>
        <a href="/contact" className="text-blue-600 font-semibold hover:underline">
          Read More →
        </a>

        {/* Decorative corner line */}
        <span className="absolute top-0 right-0 w-10 h-1 bg-gray-300 rounded-l-full"></span>
        <span className="absolute bottom-0 right-0 w-10 h-1 bg-gray-300 rounded-l-full"></span>
      </div>

      {/* Card 2 */}
      <div className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start hover:shadow-xl transition">
        <div className="absolute -top-5 -left-5 bg-green-100 p-4 rounded-full">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 8c2.21 0 4-1.79 4-4S14.21 0 12 0 8 1.79 8 4s1.79 4 4 4z" />
            <path d="M12 12v8" />
          </svg>
        </div>

        <h3 className="text-xl font-semibold mb-3 mt-4">Expert Guidance</h3>
        <p className="text-gray-600 mb-4">
          Personalized strategies for every client to maximize social media results.
        </p>
        <a href="/services" className="text-blue-600 font-semibold hover:underline">
          Read More →
        </a>

        <span className="absolute top-0 right-0 w-10 h-1 bg-gray-300 rounded-l-full"></span>
        <span className="absolute bottom-0 right-0 w-10 h-1 bg-gray-300 rounded-l-full"></span>
      </div>

      {/* Card 3 */}
      <div className="relative bg-white rounded-2xl shadow-lg p-8 flex flex-col items-start hover:shadow-xl transition">
        <div className="absolute -top-5 -left-5 bg-green-100 p-4 rounded-full">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M3 7h18M3 12h18M3 17h18" />
          </svg>
        </div>

        <h3 className="text-xl font-semibold mb-3 mt-4">Best Courses</h3>
        <p className="text-gray-600 mb-4">
          Learn actionable strategies from real experts to grow your business fast.
        </p>
        <a href="/courses" className="text-blue-600 font-semibold hover:underline">
          Read More →
        </a>

        <span className="absolute top-0 right-0 w-10 h-1 bg-gray-300 rounded-l-full"></span>
        <span className="absolute bottom-0 right-0 w-10 h-1 bg-gray-300 rounded-l-full"></span>
      </div>
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

