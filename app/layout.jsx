import { Outfit } from "next/font/google";
import "./globals.css";
//components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
//theme provider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Portofolio Zaidan",
  keywords: "portofolio, masdan, developer, designer, jidun, websitejidun,jidunheader",
  openGraph: {
    title: "My Portfolio",
    description: "Portofolio Zaidan",
    type: "website",
    url: "https://zaidannabih.vercel.app/",
    images: [
      {
        url: "https://wallpapercave.com/wp/wp13561106.png",
        width: 1200,
        height: 630,
        alt: "Preview image for My Portfolio",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta
          name="google-site-verification"
          content="tezzab0I39qPUFmSZ1Fv2P7JxFlqzVdzB8-49ACGZOI"
        />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
      </Head>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
