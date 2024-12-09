import { Outfit } from "next/font/google";
import "./globals.css";
import Head from "next/head";
//components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
//theme provider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Zaidan Nabih | Frontend Developer</title>
        <meta name="description" content="Portofolio Zaidan" />
        <meta
          name="keywords"
          content="portofolio, zaidan, developer, designer, zaidanmuhi"
        />
        <meta name="author" content="Zaidan" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Zaidan Nabih | Frontend Developer" />
        <meta property="og:description" content="Portofolio Zaidan" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zaidannabih.vercel.app/" />
        <meta
          property="og:image"
          content="https://yourdomain.com/preview-image.png"
        />
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
