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

