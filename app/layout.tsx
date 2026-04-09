import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creative Developer | Portfolio",
  description: "Awwwards-level Scrollytelling Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${outfit.className} bg-[#121212] text-white antialiased`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
