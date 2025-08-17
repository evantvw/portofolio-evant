import type { Metadata } from "next";
import { Space_Grotesk, Fira_Code } from "next/font/google";

import "./globals.css";
import BlobBackground from "@/components/molecules/BlobBackground";
import Providers from "./Providers";

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
        <Providers>
          <BlobBackground />
          {children}
        </Providers>
      </body>
    </html>
  );
}
