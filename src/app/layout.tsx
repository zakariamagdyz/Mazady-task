import { robotoFont, tajawalFont } from "@/utils/fonts";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mazady Front-end Task",
  description: "Mazady Front-end Task by Zakaria Magdy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${tajawalFont.variable} ${robotoFont.variable}`}
    >
      <body className="font-primary">{children}</body>
    </html>
  );
}
