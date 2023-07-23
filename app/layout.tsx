import "./globals.css";
import type { Metadata } from "next";
import { Barlow } from "next/font/google";

const inter = Barlow({
  weight: ["300", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Machinery Partner - Attachment Selector",
  description: "Select the best attachment for your needs!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
