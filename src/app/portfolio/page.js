// my-app/src/app/portfolio/page.js

import FacebookPortfolio from "./components/FacebookPortfolio";
import SocialMediaPortfolio from "./components/SocialMediaPortfolio";
import DesignPortfolio from "./components/DesignPortfolio";
import LinkedInPortfolio from "./components/LinkedInPortfolio";
import VerticalPortfolio from "./components/VerticalPortfolio";
import WebsiteDesignPortfolio from "./components/WebsiteDesignPortfolio";
import AuthorEAT from "./components/AuthorEAT";


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
          high-performing social media content, creative design projects,  website designing.
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

      {/* Author / E-A-T Component */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <AuthorEAT />
      </section>



      {/* ================= LINKEDIN CTA ================= */}
      <section className="mt-16 mx-4 sm:mx-6 md:mx-16 bg-gradient-to-r from-[#050000] to-[#1da1f2] rounded-3xl py-12 px-6 text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Boost Your Social Media Results?
        </h2>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
          Connect with a professional digital marketing expert on LinkedIn and get a personalized strategy to grow your engagement, generate leads, and maximize ROI across all platforms.
        </p>

        <a
          href="https://www.linkedin.com/in/digital-marketing-manager-expert"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 md:px-12 md:py-5 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          Contact Me on LinkedIn
        </a>
      </section>





    </main>
  );
}