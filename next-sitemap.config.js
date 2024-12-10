module.exports = {
  siteUrl: 'https://muhzaidan.vercel.app', // Ganti dengan domain Anda
  generateRobotsTxt: true, // Tetap aktif untuk menghasilkan robots.txt
  changefreq: 'weekly', // Frekuensi perubahan
  priority: 0.7, // Prioritas halaman
  sitemapSize: 5000, // Batas maksimal URL per sitemap
  exclude: ['/admin/*', '/api/*'], // URL yang tidak ingin dimasukkan
  transform: async (config, url) => {
    // Kustomisasi URL jika perlu
    return {
      loc: url, // URL
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};

  