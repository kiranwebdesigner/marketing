// my-app/src/app/terms/page.jsx

export const metadata = {
  title: "Terms and Conditions | socialmediamarketingcontentads.com",
  description:
    "Read the official Terms and Conditions of socialmediamarketingcontentads.com regarding use of our digital marketing services including SEO, social media marketing, Facebook ads management, and website design.",
  robots: "index, follow",
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16 text-white-800 leading-relaxed">

      <h1 className="text-4xl font-bold mb-8 text-white">
        Terms and Conditions
      </h1>

      <p className="mb-6">
        Welcome to socialmediamarketingcontentads.com. By accessing or using our
        website and services, you agree to comply with and be bound by the
        following Terms and Conditions. Please read them carefully before using
        our services.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">
        1. Services
      </h2>
      <p>
        We provide digital marketing services including social media marketing,
        Facebook and Instagram ads management, SEO optimization, website design,
        and content creation. All services are provided based on agreed project
        scope and written communication.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">
        2. Payments and Billing
      </h2>
      <p>
        Payment terms are agreed upon before project initiation. Services may
        require upfront deposits. Failure to complete payments may result in
        suspension or termination of services.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">
        3. No Guaranteed Results
      </h2>
      <p>
        While we implement proven digital marketing strategies, we do not
        guarantee specific results such as exact rankings, revenue amounts, or
        lead numbers. Marketing performance depends on multiple external factors
        including competition and market conditions.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">
        4. Client Responsibilities
      </h2>
      <p>
        Clients agree to provide necessary information, access credentials,
        branding materials, and timely communication required to complete the
        project successfully.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">
        5. Intellectual Property
      </h2>
      <p>
        All marketing materials, graphics, content, and strategies created by
        socialmediamarketingcontentads.com remain our intellectual property
        until full payment is received. Upon full payment, ownership rights may
        be transferred as agreed.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">
        6. Limitation of Liability
      </h2>
      <p>
        We are not liable for indirect, incidental, or consequential damages
        arising from the use of our services. Clients use our services at their
        own risk.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">
        7. Termination
      </h2>
      <p>
        Either party may terminate services with written notice. Outstanding
        payments must be settled before termination is finalized.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">
        8. Changes to Terms
      </h2>
      <p>
        We reserve the right to update or modify these Terms and Conditions at
        any time. Continued use of our website or services indicates acceptance
        of any changes.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4 text-white">
        9. Contact Information
      </h2>
      <p>
        For questions regarding these Terms and Conditions, please contact us
        through our official website: socialmediamarketingcontentads.com.
      </p>

      <p className="mt-10 text-sm text-white-500">
        Last updated: {new Date().getFullYear()}
      </p>

    </main>
  );
}
