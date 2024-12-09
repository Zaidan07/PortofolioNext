import { Outfit } from "next/font/google";
import "./globals.css";
//components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
//theme provider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio",
  description: "Portofolio Zaidan",
  keywords: "portofolio, masdan, developer, designer",
  openGraph: {
    title: "My Portfolio",
    description: "Portofolio Zaidan",
    type: "website",
    url: "https://zaidannabih.vercel.app/",
    images: [
      {
        url: "https://yourdomain.com/preview-image.png",
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
      <meta
        name="google-site-verification"
        content="tezzab0I39qPUFmSZ1Fv2P7JxFlqzVdzB8-49ACGZOI"
      />
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
