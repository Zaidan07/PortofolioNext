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
        <meta name="description" content="Portofolio Masdan: Web Developer dan Desainer Profesional" />
        <meta name="keywords" content="portofolio, masdan, web developer, jidunmuhi, nextjs, react" />
        <meta name="author" content="Masdan" />
        <meta property="og:title" content="Masdan Portfolio" />
        <meta property="og:description" content="Portofolio Masdan: Web Developer dan Desainer Profesional" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zaidannabih.vercel.app/" />
        <meta property="og:image" content="https://yourdomain.com/preview-image.png" />
        <meta name="robots" content="index, follow" />
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
