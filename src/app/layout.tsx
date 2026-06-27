import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Master Contract Drafting & Freelancing | 6-Month Expert Course | Lawctopus Law School",
  description:
    "Become an expert contract drafter & freelancer. 54 live sessions, 24+ contracts, freelancing on Upwork/Fiverr. 20,000+ students. 100% money-back guarantee. Enroll now at Rs. 24,999.",
  keywords: [
    "contract drafting course",
    "legal freelancing",
    "lawctopus law school",
    "contract drafting online",
    "freelance lawyer",
    "Upwork legal",
    "legal skills course",
  ],
  authors: [{ name: "Lawctopus Law School" }],
  openGraph: {
    title: "Master Contract Drafting & Freelancing | 6-Month Expert Course",
    description:
      "54 live sessions. 24+ complex contracts. Freelancing on Upwork, Fiverr, LinkedIn. 20,000+ alumni. 100% money-back guarantee.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Contract Drafting & Freelancing | 6-Month Expert Course",
    description:
      "54 live sessions. 24+ complex contracts. Freelancing on Upwork, Fiverr, LinkedIn. 20,000+ alumni.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
