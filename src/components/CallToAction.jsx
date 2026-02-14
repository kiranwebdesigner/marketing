// my-app/src/components/CallToAction.jsx

import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="bg-black text-white py-20 px-4 mt-20">
      <div className="max-w-6xl mx-auto text-center">

        <div className="flex justify-center mb-6">
  <Image
    src="/author/kiran-anwar-digital-marketing-expert.jpg"
    alt="Kiran Anwar Digital Marketing Expert Social Media Marketing Strategist"
    width={120}
    height={120}
    className="rounded-full border-4 border-white shadow-xl"
  />
</div>

        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Grow Your Business with Professional Digital Marketing?
        </h2>

        {/* Subheading */}
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Work with Kiran Anwar – Digital Marketing Expert specializing in
          social media marketing, Facebook Ads management, SEO optimization,
          and high-converting content strategies. Let’s build authority,
          generate leads, and scale your brand online.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-5">

          {/* Fiverr Profile */}
          <a
            href="https://www.fiverr.com/kirannazofficia"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
          >
            Hire Me on Fiverr
          </a>

          {/* Fiverr Gig */}
          <a
            href="https://www.fiverr.com/kirannazofficia/social-media-marketing-strategiest-consultant-content-manager-virtual-assistant"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
          >
            Hire a Social Media Marketing Expert
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/kirananwarofficial/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-xl font-semibold shadow-lg transition"
          >
            Follow on Instagram
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/digital-marketing-manager-expert-strategist"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold shadow-lg transition"
          >
            Connect on LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}
