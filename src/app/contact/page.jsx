// app/contact/page.jsx
import React from "react";
import Head from "next/head";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us - Social Media Marketing Expert | socialmediamarketingcontentads.com</title>
        <meta
          name="description"
          content="Get in touch with Kiran Anwar, social media marketing & Facebook ads specialist. Hire directly or via Fiverr for business growth."
        />

        {/* ====== Contact Page Schema ====== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "name": "Contact socialmediamarketingcontentads.com",
              "url": "https://socialmediamarketingcontentads.com/contact",
              "mainEntity": {
                "@type": "Organization",
                "name": "socialmediamarketingcontentads.com",
                "url": "https://socialmediamarketingcontentads.com",
                "logo": "https://socialmediamarketingcontentads.com/logo.png",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Customer Support",
                  "email": "contact@socialmediamarketingcontentads.com",
                  "url": "https://socialmediamarketingcontentads.com/contact"
                },
                "sameAs": [
                  "https://www.linkedin.com/in/kirannaz",
                  "https://www.fiverr.com/kirannazofficia/social-media-marketing-strategiest-consultant-content-manager-virtual-assistant"
                ]
              }
            })
          }}
        />
      </Head>

      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>



        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Business Info</h2>
          <ul className="list-disc pl-5">
            <li><strong>Business Name:</strong> socialmediamarketingcontentads.com</li>
            <li><strong>Industry:</strong> Digital Marketing & Social Media Advertising</li>
            <li><strong>Service Areas:</strong> USA, UK, Pakistan & International Clients</li>
            <li><strong>Email:</strong> <a href="mailto:contact@socialmediamarketingcontentads.com" className="text-blue-600">contact@socialmediamarketingcontentads.com</a></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
          <p className="mb-4">
            Fill out the form below or hire me directly via website or Fiverr for secure payment.
          </p>

          <form className="flex flex-col gap-4 max-w-xl">
            <input type="text" placeholder="Full Name" name="name" className="border p-2 rounded"/>
            <input type="text" placeholder="Business Name" name="business" className="border p-2 rounded"/>
            <input type="email" placeholder="Email Address" name="email" className="border p-2 rounded"/>
            <input type="text" placeholder="Website (Optional)" name="website" className="border p-2 rounded"/>
            <input type="text" placeholder="Budget Range" name="budget" className="border p-2 rounded"/>
            <textarea placeholder="Your Message" name="message" rows="5" className="border p-2 rounded"/>
            <button type="submit" className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Secure Hiring Options</h2>
          <p>
            You can work with us directly via website or through Fiverr for secure payment and trusted transactions.
          </p>
          <div className="flex gap-4 mt-3">
            <a href="https://socialmediamarketingcontentads.com/hire" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
              Hire Directly
            </a>
            <a href="https://www.fiverr.com/yourusername" target="_blank" rel="noopener noreferrer" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
              Hire via Fiverr
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;

