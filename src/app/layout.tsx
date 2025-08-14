import type { Metadata } from "next";
import { Space_Grotesk, Fira_Code } from "next/font/google";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import "./globals.css";
import BlobBackground from "@/components/molecules/BlobBackground";

export const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portofolio Evant",
  description: "",
};

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${firaCode.variable} antialiased`}
      >
        <BlobBackground />
        {children}
      </body>
    </html>
  );
}
