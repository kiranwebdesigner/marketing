export const metadata = {
  title: "Privacy Policy | Social Media Marketing Content Ads",
  description:
    "Read the Privacy Policy of Social Media Marketing Content Ads to understand how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://socialmediamarketingcontentads.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-white-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white">
        Privacy Policy
      </h1>

      <p className="mb-6">
        At <strong>Social Media Marketing Content Ads</strong>, we value your
        privacy and are committed to protecting your personal information.
        This Privacy Policy explains how we collect, use, and safeguard your
        data when you visit our website.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">
        1. Information We Collect
      </h2>
      <p className="mb-6">
        We may collect personal information such as your name, email address,
        phone number, and business details when you contact us, fill out forms,
        or request our services.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>To provide and manage our social media marketing services</li>
        <li>To respond to inquiries and customer support requests</li>
        <li>To improve website performance and user experience</li>
        <li>To run advertising and marketing campaigns</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">
        3. Cookies & Tracking Technologies
      </h2>
      <p className="mb-6">
        Our website may use cookies and analytics tools to understand visitor
        behavior and improve performance. You can disable cookies through your
        browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">
        4. Third-Party Services
      </h2>
      <p className="mb-6">
        We may use third-party services such as Google Analytics, Meta Ads,
        and other advertising platforms to analyze traffic and deliver ads.
        These platforms may collect data according to their own privacy policies.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">
        5. Data Protection
      </h2>
      <p className="mb-6">
        We implement appropriate security measures to protect your personal
        information from unauthorized access, disclosure, or misuse.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">
        6. Your Rights
      </h2>
      <p className="mb-6">
        You may request access, correction, or deletion of your personal
        information at any time by contacting us.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">
        7. Contact Us
      </h2>
      <p className="mb-6">
        If you have any questions regarding this Privacy Policy, please contact
        us at:
      </p>

      <p className="font-semibold">
        Email: info@socialmediamarketingcontentads.com
      </p>

      <p className="mt-10 text-sm text-white-600">
        Last Updated: {new Date().getFullYear()}
      </p>
    </section>
  );
}
