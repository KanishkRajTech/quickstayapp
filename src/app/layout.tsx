import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./client-wrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-poppins"
});

// Global default metadata
export const metadata: Metadata = {
  title: "QuickStay - quickstayapp.com",
  description: "QuickStay helps PG, coliving, and rental property management easily.",
  alternates: {
    canonical: "https://quickstayapp.com/",
  },
  
  openGraph: {
    title: "QuickStay - quickstayapp.com",
    description: "QuickStay helps PG, coliving, and rental property management easily.",
    url: "https://quickstayapp.com/",
    siteName: "quickstayapp.com",
    images: [
      {
        url: "https://quickstayapp.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QuickStay App",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuickStay - quickstayapp.com",
    description: "QuickStay helps PG, coliving, and rental property management easily.",
    creator: "@quickstayrooms",
    images: ["https://quickstayapp.com/og-image.jpg"], // Twitter card image
  },
  keywords:
    "rent rooms, flats, PG accommodation, home rental, property management, tenant management, rental income",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-gray-100`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
