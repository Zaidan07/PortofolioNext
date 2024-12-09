export async function GET(request) {
  const robots = `User-agent: *
Disallow:

Sitemap: https://zaidannabih.vercel.app/sitemap.xml`; // Ganti URL dengan domain Anda

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
