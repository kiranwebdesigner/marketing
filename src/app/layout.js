import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import AuthorEAT from "@/components/AuthorEAT";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});












export const metadata = {
  title: "Social Media Marketing Services | Boost Engagement & Growth",
  description:
    "Professional social media marketing services to grow your brand, increase engagement, and drive sales across Facebook, Instagram, LinkedIn, TikTok, and Pinterest.",
  alternates: {
    canonical: "https://socialmediamarketingcontentads.com", // Add your domain
  },
  verification: {
    google: "9k1pqDPuk816geQchl9p6naxbK-r_Cti37bFPsudGcQ", // Google Search Console verification
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
          
          {/* Author / E-A-T Component */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <AuthorEAT />
      </section>
      <Footer />
      </body>
    </html>
  );
}
