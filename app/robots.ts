import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: '/private/',
      },
      {
        userAgent: 'Applebot',
        disallow: ['/'],
      },
      {
        userAgent: 'Bingbot',
        disallow: ['/'],
      },
    ],
    sitemap: 'https://veronique-gros.vercel.app/sitemap.xml',
  };
}