// my-app/src/app/components/AuthorEAT.js
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Kiran Anwar | Digital Marketing Expert & Strategist",
  description:
    "Kiran Anwar, a certified digital marketing expert and strategist, showcases professional work on social media, SEO, Facebook Ads, and website design.",
  openGraph: {
    title: "Kiran Anwar | Digital Marketing Expert & Strategist",
    description:
      "Follow Kiran Anwar for insights on social media marketing, Facebook ads, SEO, website design, and content strategy.",
    url: "https://socialmediamarketingcontentads.com",
    type: "profile",
  },
};

export default function AuthorEAT() {
  return (
    <section className="max-w-4xl mx-auto my-16 px-4 text-center">
      {/* Author Image */}
      <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden shadow-lg">
        <Image
          src="/author/kiran-anwar-digital-marketing-expert.jpg"
          alt="Kiran Anwar Digital Marketing Expert and Strategist"
          width={176}
          height={176}
          className="object-cover"
          priority
        />
      </div>

      {/* Author Info */}
      <h2 className="text-3xl font-bold mt-6 text-white">
        Kiran Anwar
      </h2>
      <p className="text-lg text-white/80 mt-2 mb-4">
        Digital Marketing Expert & Strategist
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://www.instagram.com/kirananwarofficial/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-xl shadow hover:scale-105 transition"
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/digital-marketing-manager-expert-strategist"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-600 px-4 py-2 rounded-xl shadow hover:scale-105 transition"
        >
          LinkedIn
        </a>
      </div>

      {/* Author Bio */}
      <p className="mt-6 text-white/70 leading-relaxed text-base md:text-lg">
        Kiran Anwar is a professional digital marketing strategist specializing in social media management, Facebook ads, SEO, content creation, and website design. With years of experience helping brands grow online, Kiran ensures high-quality, results-driven strategies that build authority, trust, and engagement.
      </p>

      {/* JSON-LD Structured Data for SEO & E-A-T */}
      <Script type="application/ld+json" id="author-schema">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Kiran Anwar",
          "url": "https://socialmediamarketingcontentads.com",
          "sameAs": [
            "https://www.instagram.com/kirananwarofficial/",
            "https://www.linkedin.com/in/digital-marketing-manager-expert-strategist"
          ],
          "jobTitle": "Digital Marketing Expert & Strategist",
          "worksFor": {
            "@type": "Organization",
            "name": "socialmediamarketingcontentads.com",
            "url": "https://socialmediamarketingcontentads.com"
          }
        })}
      </Script>
    </section>
  );
}