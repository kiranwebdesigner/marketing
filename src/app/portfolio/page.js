// my-app/src/app/portfolio/page.js

import FacebookPortfolio from "./components/FacebookPortfolio";
import SocialMediaPortfolio from "./components/SocialMediaPortfolio";
import DesignPortfolio from "./components/DesignPortfolio";
import LinkedInPortfolio from "./components/LinkedInPortfolio";
import VerticalPortfolio from "./components/VerticalPortfolio";
import WebsiteDesignPortfolio from "./components/WebsiteDesignPortfolio";


const BASE_URL = "https://socialmediamarketingcontentads.com";

export const metadata = {
  title: "Portfolio | Social Media Marketing • Facebook Ads • SEO • Website Designing",
  description:
    "Explore my complete portfolio including Facebook Ads campaigns, social media content creation, SEO results, website designing, and video ads production.",

  keywords: [
    "social media marketing",
    "facebook ads",
    "seo specialist",
    "website designing",
    "video ads",
    "content creation",
    "portfolio",
    "digital marketer portfolio",
  ],

  alternates: {
    canonical: `${BASE_URL}/portfolio`,
  },

  openGraph: {
    title: "Portfolio | Social Media Marketing, SEO, Facebook Ads, Web Design",
    description:
      "Explore my professional digital marketing portfolio: Facebook Ads, SEO results, Social Media Content, Website Designing, and Video Ads.",
    url: `${BASE_URL}/portfolio`,
    type: "website",
  },
};


export default function PortfolioPage() {
  return (
    <main className="w-full bg-white pb-20 text-black">

      {/* Page Heading */}
      <header className="max-w-7xl mx-auto px-4 pt-16 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          My Professional Portfolio
        </h1>
        <p className="text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed">
          Explore my complete digital marketing work including Facebook Ads campaigns, 
          high-performing social media content, creative design projects, SEO results, website designing, and video ads.
        </p>
      </header>

      {/* Vertical Content Portfolio */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <VerticalPortfolio />
      </section>

      {/* Facebook Ads Portfolio */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <FacebookPortfolio />
      </section>

      {/* Social Media Content Creation Portfolio */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <SocialMediaPortfolio />
      </section>

      {/* Design Portfolio */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <DesignPortfolio />
      </section>


      {/* LinkedIn Portfolio */}
<section className="max-w-7xl mx-auto px-4 py-10">
  <LinkedInPortfolio />
</section>




      {/* Website Designing Portfolio */}
<section className="max-w-7xl mx-auto px-4 py-10">
  <WebsiteDesignPortfolio />
</section>



{/* CTA */}
    
    <div className="mt-16 text-center  bg-gradient-to-r from-[#050000] to-[#1da1f2] text-white py-12 px-6 rounded-2xl shadow-lg">
  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#1da1f2]">
    Want Engaging Content?
  </h3>
  <p className="text-white/80 mb-6 max-w-xl mx-auto">
    We create visually appealing and high-performing social media content tailored to your brand.
  </p>

  {/* Optional LinkedIn CTA */}
  <div className="mt-8">
    <a
      href="https://www.linkedin.com/in/digital-marketing-manager-expert"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block bg-[#1da1f2] text-black font-semibold px-8 py-4 rounded-xl shadow-md hover:bg-[#0d8ddb] transition"
    >
      Contact Me on LinkedIn
    </a>
  </div>

  

  
</div>



    </main>
  );
}