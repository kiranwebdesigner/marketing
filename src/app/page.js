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
              href="https://www.fiverr.com/s/2KN2pje"
              className="bg-white text-gray-900 px-8 py-3 rounded-md font-semibold"
            >
              Hire Social Media Marketing Manager
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

      {/* ================= SEO SERVICES SECTION ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black">
            Professional Social Media Marketing Services
          </h2>

          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-14">
            We offer end-to-end social media marketing solutions designed to increase
            brand visibility, engagement, and ROI across all major platforms.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* HUB PAGE – STRONGEST INTERNAL LINK */}
            <ServiceCard
              title="Social Media Marketing"
              description="Complete social media marketing strategies focused on growth, engagement, and conversions."
              link="/social-media-marketing"
              anchor="Social media marketing services"
              priority
            />

            {/* CLUSTER PAGES */}
            <ServiceCard
              title="Social Media Management"
              description="Professional social media management including content creation, scheduling, and engagement."
              link="/social-media-management"
              anchor="social media management services"
            />

            <ServiceCard
              title="Paid Social Media Advertising"
              description="ROI-focused paid social media advertising campaigns for faster growth and lead generation."
              link="/social-media-paid-ads"
              anchor="paid social media advertising services"
            />

            <ServiceCard
              title="Facebook Marketing"
              description="Targeted Facebook marketing strategies to drive traffic, leads, and sales."
              link="/facebook-marketing"
              anchor="Facebook marketing services"
            />

            <ServiceCard
              title="Instagram Marketing"
              description="Instagram growth strategies using reels, stories, and influencer-style content."
              link="/instagram-marketing"
              anchor="Instagram marketing services"
            />

            <ServiceCard
              title="LinkedIn Marketing"
              description="B2B-focused LinkedIn marketing solutions for lead generation and authority building."
              link="/linkedin-marketing"
              anchor="LinkedIn marketing services"
            />

            <ServiceCard
              title="Pinterest Marketing"
              description="Pinterest SEO and traffic strategies for long-term organic growth."
              link="/pinterest-marketing"
              anchor="Pinterest marketing services"
            />

            <ServiceCard
              title="TikTok Marketing"
              description="TikTok marketing campaigns designed for virality and conversions."
              link="/tiktok-marketing"
              anchor="TikTok marketing services"
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

function ServiceCard({ title, description, link, anchor, priority }) {
  return (
    <div className={`relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition 
      ${priority ? "ring-2 ring-blue-500" : ""}`}>

      <div className="absolute -top-5 -left-5 bg-green-100 p-4 rounded-full">
        <span className="text-green-600 text-xl font-bold">✓</span>
      </div>

      <h3 className="text-lg font-semibold text-black mt-4 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 mb-4 text-sm">
        {description}
      </p>

      {/* SEO-OPTIMIZED ANCHOR TEXT */}
      <a
        href={link}
        className="text-blue-600 font-semibold hover:underline"
        aria-label={anchor}
      >
        {anchor}
      </a>

      <span className="absolute top-0 right-0 w-10 h-1 bg-gray-300 rounded-l-full"></span>
      <span className="absolute bottom-0 right-0 w-10 h-1 bg-gray-300 rounded-l-full"></span>
    </div>
  );
}


