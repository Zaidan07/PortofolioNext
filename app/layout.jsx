import { Outfit } from "next/font/google";
import "./globals.css";
//components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";
//theme provider
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Muh Zaidan | A Frontend Engineer",
  description: "Portofolio Zaidan",
  verification: {
    google: "tezzab0I39qPUFmSZ1Fv2P7JxFlqzVdzB8-49ACGZOI",
  },
  openGraph: {
    title: "Muh Zaidan | A Frontend Engineer",
    description: "Portofolio Zaidan",
    images: "/public/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-SSM2NF2R48"
      />
      <Script id="google-analytics-config">
        {`  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SSM2NF2R48');`}
      </Script>
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
