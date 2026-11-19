import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ananthakrishnan-portfolio.vercel.app"),
  title: "Ananthakrishnan — UI/UX Designer | Simple, Useful & Human-Centred",
  description:
    "UI/UX Designer crafting simple, useful and human-centred digital experiences for web and mobile through research, strategy and clean design.",
  keywords: [
    "Ananthakrishnan",
    "Ananthakrishnan K Nair",
    "UI/UX Designer",
    "Product Designer",
    "Figma",
    "Mobile App Design",
    "EcoRide Rentals",
    "Kitchen Store",
    "Travelista",
    "Flora",
    "Design Systems",
    "User Research",
    "Usability Testing",
  ],
  authors: [{ name: "Ananthakrishnan K Nair" }],
  creator: "Ananthakrishnan K Nair",
  openGraph: {
    title: "Nantha — UI/UX Designer | Designing Intuitive Digital Experiences",
    description:
      "UI/UX Designer with 3+ years of experience crafting user-centered digital experiences for web and mobile. Transforming complex problems into intuitive interfaces.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/assets/profile.jpg",
        width: 800,
        height: 800,
        alt: "Nantha - UI/UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nantha — UI/UX Designer",
    description: "Designing intuitive digital experiences through research and design systems.",
    images: ["/assets/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-[#FCFBF7] text-[#1C1917] font-sans antialiased selection:bg-[#FEF08A] selection:text-[#78350F]">
        {children}
      </body>
    </html>
  );
}

