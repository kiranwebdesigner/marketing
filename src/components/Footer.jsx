import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* BRAND INFO */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Social Media Marketing Services
            </h3>
            <p className="text-sm leading-relaxed">
              We help businesses grow through <strong>social media marketing</strong>,
              <strong> paid advertising</strong>, and <strong>performance-driven campaigns</strong>.
              Our strategies focus on increasing engagement, leads, and long-term ROI.
            </p>
          </div>

          {/* CORE SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Marketing Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/social-media-marketing">Social Media Marketing</Link></li>
              <li><Link href="/social-media-management">Social Media Management</Link></li>
              <li><Link href="/social-media-paid-ads">Social Media Paid Ads</Link></li>
              <li><Link href="/social-media-marketing-for-contractors">Marketing for Contractors</Link></li>
            </ul>
          </div>

          {/* PLATFORM SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Platform Marketing
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/facebook-marketing">Facebook Marketing</Link></li>
              <li><Link href="/instagram-marketing">Instagram Marketing</Link></li>
              <li><Link href="/linkedin-marketing">LinkedIn Marketing</Link></li>
              <li><Link href="/pinterest-marketing">Pinterest Marketing</Link></li>
              <li><Link href="/tiktok-marketing">TikTok Marketing</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4">

          <p>
            © {new Date().getFullYear()} Social Media Marketing Agency. All rights reserved.
          </p>

          <p className="text-gray-400">
            Boosting <strong>engagement</strong>, <strong>leads</strong>, and <strong>ROI</strong> worldwide.
          </p>

        </div>
      </div>
    </footer>
  );
}