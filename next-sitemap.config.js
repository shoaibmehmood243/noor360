/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://noor360.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://noor360.app/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Set custom priority and changefreq depending on page paths
    let priority = 0.8;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path === '/features') {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.startsWith('/features/')) {
      priority = 0.8;
      changefreq = 'weekly';
    } else if (path === '/privacy' || path === '/terms') {
      priority = 0.5;
      changefreq = 'monthly';
    } else if (path === '/contact' || path === '/download') {
      priority = 0.7;
      changefreq = 'weekly';
    }

    return {
      loc: path,
      changefreq: changefreq,
      priority: priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
