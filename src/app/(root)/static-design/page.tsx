import { Metadata } from "next";

import { DirectionProvider } from "@/providers/direction-provider";

import Header from "./components/header";
import MainContent from "./components/main-content";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.APP_URL}`),
  title: "Maazady",
  description: "Airbnb clone by zakaria magdy",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbad5" },
      { rel: "shortcut icon", url: "/favicon.ico" },
    ],
  },
  themeColor: "#ffffff",
  colorScheme: "light",
  openGraph: {
    url: "https://Maazady.com",
    title: "Maazady",
    description: "Maazady clone by zakaria magdy",
    images: ["/auction-card.webp"],
    type: "website",
    siteName: "Maazady",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@zakariamagdy",
    creator: "@zakariamagdy",
    title: "Maazady",
    description: "Maazady clone by zakaria magdy",
    images: ["/auction-card.webp"],
  },
  other: {
    "msapplication-TileColor": "#da532c",
  },
  keywords: ["Maazady", "clone", "zakaria", "magdy"],
};
const StaticDesignPage = () => {
  return (
    <DirectionProvider dir="rtl">
      <main lang="ar" dir="rtl">
        <Header />
        <MainContent />
      </main>
    </DirectionProvider>
  );
};

export default StaticDesignPage;
