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
              Social Media Marketing Services That Drive Engagement, Leads & Sales

          </h1>

          <p className="text-lg md:text-xl text-white  max-w-3xl mx-auto mb-10 ">
  At <strong>socialmediamarketingcontentads</strong>, we provide results-driven <strong>social media marketing</strong>, 
  professional <strong>content creation</strong> and high-performance <strong>paid advertising strategies</strong> 
  designed to increase brand visibility, generate qualified leads and maximize ROI.<br /><br />

  Our team combines <strong>strategy, creativity, audience research, analytics tracking, and conversion optimization</strong> 
  to help businesses grow across platforms like Facebook, Instagram, LinkedIn, TikTok, Pinterest and YouTube.<br /><br />

  Whether you are a contractor, eCommerce brand, local business, or B2B company, we build 
  <strong>data-driven campaigns</strong> that improve engagement rate, strengthen brand authority, 
  and deliver measurable results — not just followers, but real growth.
</p>

          

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
      Social Media Marketing Services by socialmediamarketingcontentads
    </h2>

    <p className="text-center text-gray-700 max-w-4xl mx-auto mb-14 leading-relaxed">
      At <strong>socialmediamarketingcontentads</strong>, we provide expert
      <strong> social media marketing solutions</strong> built on strategy, data,
      and performance. Our end-to-end approach includes organic growth,
      paid advertising, content creation, audience targeting, analytics tracking,
      and conversion optimization to increase brand visibility, engagement,
      and measurable ROI across all major platforms.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      <ServiceCard
        title="Social Media Marketing"
        description="Complete strategy-driven social media marketing to grow traffic, leads, and sales."
        link="/social-media-marketing"
        anchor="Social media marketing services"
        priority
      />

      <ServiceCard
        title="Social Media Management"
        description="Full-service social media management including content planning, publishing, and engagement."
        link="/social-media-management"
        anchor="Social media management services"
      />

      <ServiceCard
        title="Paid Social Media Advertising"
        description="High-converting paid campaigns focused on lead generation and ROI."
        link="/social-media-paid-ads"
        anchor="Paid social media advertising services"
      />

      <ServiceCard
        title="Facebook Marketing"
        description="Data-driven Facebook marketing strategies for audience growth and conversions."
        link="/facebook-marketing"
        anchor="Facebook marketing services"
      />

      <ServiceCard
        title="Instagram Marketing"
        description="Instagram growth using reels, content strategy, and engagement optimization."
        link="/instagram-marketing"
        anchor="Instagram marketing services"
      />

      <ServiceCard
        title="LinkedIn Marketing"
        description="Professional LinkedIn marketing for B2B lead generation and authority building."
        link="/linkedin-marketing"
        anchor="LinkedIn marketing services"
      />

      <ServiceCard
        title="Pinterest Marketing"
        description="Pinterest SEO and long-term traffic strategies for sustainable growth."
        link="/pinterest-marketing"
        anchor="Pinterest marketing services"
      />

      <ServiceCard
        title="TikTok Marketing"
        description="Short-form video strategies designed for reach, engagement, and conversions."
        link="/tiktok-marketing"
        anchor="TikTok marketing services"
      />

    </div>
  </div>
</section>
{/* ================= WHY CHOOSE US – E-E-A-T SECTION ================= */}
<section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
      Why Businesses Trust socialmediamarketingcontentads for Social Media Growth
    </h2>

    <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed mb-14">
      At <strong>socialmediamarketingcontentads</strong>, we combine 
      <strong> data-driven strategy, audience psychology, content marketing expertise, and paid advertising optimization</strong> 
      to deliver measurable business results.  

      Many businesses struggle with low engagement, inconsistent posting, 
      declining reach, and wasted ad spend. According to industry reports, 
      over <strong>73% of consumers</strong> are influenced by a brand’s social media presence before making a purchase decision.  

      Our team builds scalable systems that improve 
      <strong> engagement rate, lead generation, brand authority, and return on investment (ROI)</strong> 
      across Facebook, Instagram, LinkedIn, TikTok, Pinterest, and YouTube.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">

      <div>
        <h3 className="text-xl font-semibold mb-3 text-black">
          Proven Strategy & Industry Experience
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          We develop customized social media strategies for contractors, 
          eCommerce brands, startups, and local service businesses. 
          Our structured approach ensures consistent growth, 
          improved visibility, and sustainable online authority.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3 text-black">
          Data-Driven Campaign Optimization
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Every campaign is built on audience research, performance analytics, 
          A/B testing, and conversion tracking. We eliminate wasted budget 
          and focus on strategies that generate qualified leads and sales.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-3 text-black">
          Transparent Reporting & Measurable Results
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          We provide clear performance insights including engagement metrics, 
          lead tracking, click-through rate, and ROI analysis so you can 
          confidently scale your marketing investment.
        </p>
      </div>

    </div>

    <div className="mt-16">
      <h4 className="text-2xl font-bold text-black mb-4">
        Our Core Social Media Marketing Capabilities
      </h4>

      <p className="max-w-4xl mx-auto text-gray-700 leading-relaxed">
        Our services include comprehensive 
        <Link href="/social-media-marketing" className="text-blue-600 font-semibold hover:underline">
          {" "}social media marketing strategies
        </Link>, professional 
        <Link href="/social-media-management" className="text-blue-600 font-semibold hover:underline">
          {" "}social media management
        </Link>, high-converting 
        <Link href="/social-media-paid-ads" className="text-blue-600 font-semibold hover:underline">
          {" "}paid social media advertising
        </Link>, and platform-specific campaigns such as 
        <Link href="/facebook-marketing" className="text-blue-600 font-semibold hover:underline">
          {" "}Facebook marketing
        </Link>, 
        <Link href="/instagram-marketing" className="text-blue-600 font-semibold hover:underline">
          {" "}Instagram marketing
        </Link>, 
        <Link href="/linkedin-marketing" className="text-blue-600 font-semibold hover:underline">
          {" "}LinkedIn marketing
        </Link>, 
        <Link href="/pinterest-marketing" className="text-blue-600 font-semibold hover:underline">
          {" "}Pinterest marketing
        </Link>, and 
        <Link href="/tiktok-marketing" className="text-blue-600 font-semibold hover:underline">
          {" "}TikTok marketing
        </Link>.  

        Each strategy is tailored to improve brand positioning, audience engagement, and long-term business growth.
      </p>
    </div>

  </div>
</section>




     

           






 {/* JSON-LD Schema Here */}

 <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Social Media Marketing Content Ads",
      "url": "https://socialmediamarketingcontentads.com/",
      "logo": "https://socialmediamarketingcontentads.com/logo.png",
      "description":
        "Professional social media marketing services including management, paid advertising, content creation, and analytics tracking for contractors, eCommerce brands, and businesses.",
      "sameAs": [
        "https://www.linkedin.com/company/social-media-marketing-content-ads/",
        "https://www.instagram.com/socialmediamarketingcontent/",
        "https://www.youtube.com/@SocialmediamarketingContentads",
        "https://www.facebook.com/profile.php?id=61584561792932&sk=mentions"
      ]
    }),
  }}
/>




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


