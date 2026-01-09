export default function sitemap() {
  const baseUrl = "https://socialmediamarketingcontentads.com";
  const lastModified = new Date().toISOString();

  return [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // Core Services
    {
      url: `${baseUrl}/social-media-marketing`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/social-media-management`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/social-media-paid-ads`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Platform-Specific Marketing
    {
      url: `${baseUrl}/facebook-marketing`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/instagram-marketing`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/linkedin-marketing`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tiktok-marketing`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pinterest-marketing`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Niche Service
    {
      url: `${baseUrl}/social-media-marketing-for-contractors`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Trust / Portfolio
    {
      url: `${baseUrl}/portfolio`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}