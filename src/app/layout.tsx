import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Providers from "@/components/Providers";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { baseUrl, siteConfig } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "Abdus Samad",
      url: siteConfig.links.github
    }
  ],
  creator: "Abdus Samad",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  twitter: {
    card: "summary_large_image",
    creator: "@AbdusSamad",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.ogImage}`],
  }

};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Footer />

      </body>
    </html>
  );
}
