// my-app/src/app/layout.jsx or RootLayout.jsx

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// src/app/layout.js
import AuthorEAT from "../components/AuthorEAT";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";


// Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO metadata
// SEO metadata
export const metadata = {
  title: "Social Media Marketing Services | Boost Engagement & Growth",
  description:
    "Professional social media marketing services to grow your brand, increase engagement, and drive sales across Facebook, Instagram, LinkedIn, TikTok, and Pinterest.",
  alternates: {
    canonical: "https://socialmediamarketingcontentads.com",
  },
  verification: {
    google: "9k1pqDPuk816geQchl9p6naxbK-r_Cti37bFPsudGcQ",
  },
  other: {
    "p:domain_verify": "d0cf7ac9acd57796343013324b6f24a8",
  },
  openGraph: {
    title: "Social Media Marketing Services | Boost Engagement & Growth",
    description:
      "Professional social media marketing services to grow your brand, increase engagement, and drive sales across multiple platforms.",
    url: "https://socialmediamarketingcontentads.com",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-black`}
      >
        {/* Main page content */}
        {children}


         {/* ===== Global Organization Structured Data ===== */}
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
                "Professional social media marketing services including management, paid advertising, content creation, and analytics tracking.",
              "sameAs": [
                "https://www.linkedin.com/company/social-media-marketing-content-ads/",
                "https://www.instagram.com/socialmediamarketingcontent/",
                "https://www.youtube.com/@SocialmediamarketingContentads",
                "https://www.facebook.com/profile.php?id=61584561792932&sk=mentions"
              ]
            }),
          }}
        />

        {/* Call To Action Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <CallToAction />
        </section>

        {/* Author / E-A-T Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <AuthorEAT />
        </section>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

