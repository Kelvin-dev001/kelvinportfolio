import type { Metadata } from "next";
import "@fontsource/space-grotesk/300.css";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Developer Kenya | Business Automation & Digital Solutions Expert",
  description:
    "AI developer in Kenya helping businesses automate sales, customer care, inventory, and operations. Custom software, web apps, and AI systems built for African businesses.",
  keywords:
    "AI developer Kenya, software developer Kenya, business automation Kenya, AI solutions Africa, web development Kenya, digital transformation Kenya, custom software Kenya, AI automation for business, WhatsApp automation Kenya, system development Kenya, SaaS Africa, tech solutions Kenya",
  authors: [{ name: "Kelvin" }],
  creator: "Kelvin",
  openGraph: {
    type: "website",
    title: "AI & Digital Solutions for African Businesses",
    description:
      "I build AI-powered systems that help Kenyan and African businesses scale faster, automate operations, and increase revenue.",
    siteName: "Kelvin — AI & Systems Developer",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI & Digital Solutions for African Businesses",
    description:
      "I build AI-powered systems that help Kenyan and African businesses scale faster, automate operations, and increase revenue.",
    creator: "@kelvin_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#050A14] text-[#E8F0FE] antialiased font-inter">
        {children}
      </body>
    </html>
  );
}
