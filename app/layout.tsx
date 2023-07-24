import "./globals.css";
import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { twJoin } from "tailwind-merge";

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
      <body
        className={twJoin(
          inter.className,
          "px-5 md:px-20 py-4 min-h-screen min-w-screen"
        )}
      >
        <nav>
          <Link href="/" className="flex gap-1">
            <Image src="/logo.svg" alt="logo" width={50} height={30} />
            <Image
              src="/logo-lettering.svg"
              alt="logo"
              width={100}
              height={30}
            />
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
