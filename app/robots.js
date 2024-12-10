export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: '/private/',
      },
      sitemap: 'https://muhzaidan.vercel.app/sitemap.xml',
    }
  }