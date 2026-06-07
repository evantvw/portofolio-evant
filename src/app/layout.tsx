import type { Metadata } from "next";
import { Space_Grotesk, Fira_Code } from "next/font/google";

import "./globals.css";
import BlobBackground from "@/components/molecules/BlobBackground";
import Providers from "./Providers";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Evant — Front-End Developer",
  description:
    "Portfolio of Evant Valery, a front-end developer specializing in animation, design systems, and high-performance web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${firaCode.variable} antialiased`}
      >
        <Providers>
          <BlobBackground />
          {children}
        </Providers>
      </body>
    </html>
  );
}
