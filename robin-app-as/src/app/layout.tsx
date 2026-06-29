import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import ButtomNavBar from "@/components/layout/buttomNav";
import "leaflet/dist/leaflet.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Robin App AS | Web Development & IT Solutions in Norway",
  description:
    "Robin App AS provides professional web development, mobile app development, IT support, custom software development, and digital solutions for businesses in Norway.",

  keywords: [
    "Web Development",
    "Website Development",
    "React",
    "Next.js",
    "Software Development",
    "Mobile App Development",
    "IT Support",
    "IT Consulting",
    "Custom Software",
    "UI UX Design",
    "API Integration",
    "Cloud Solutions",
    "Norway",
    "Nepal",
    "Europe",
    "European Union",
    "Norwegian IT Services",
    "Norwegian Software Development",
    "Norwegian Web Development",
    "Norwegian Mobile App Development",
    "Norwegian IT Support",
    "Norwegian IT Consulting",
    "Norwegian Custom Software",
    "Norwegian UI UX Design",
    "Norwegian API Integration",
    "Norwegian Cloud Solutions",
    "Norwegian Digital Solutions",
    "Norwegian Technology Services",
    "Norwegian IT Solutions",
    "Norwegian Software Solutions",
    "Norwegian Web Solutions",
    "Norwegian Mobile Solutions",
    "Norwegian IT Services Company",
    "Norwegian Software Development Company",
    "Norwegian Web Development Company",
    "Norwegian Mobile App Development Company",
    "Norwegian IT Support Company",
    "Norwegian IT Consulting Company",
    "Norwegian Custom Software Company",
    "Norwegian UI UX Design Company",
    "Norwegian API Integration Company",
    "Norwegian Cloud Solutions Company",
    "Norwegian Digital Solutions Company",
    "Norwegian Technology Services Company",
    "Norwegian IT Solutions Company",
    "Norwegian Software Solutions Company",
    "Norwegian Web Solutions Company",
    "Norwegian Mobile Solutions Company",
    "Norwegian IT Services Provider",
    "Norwegian Software Development Provider",
    "Norwegian Web Development Provider",
    "Norwegian Mobile App Development Provider",
    "Norwegian IT Support Provider",
    "Norwegian IT Consulting Provider",
    "Norwegian Custom Software Provider",
    "Norwegian UI UX Design Provider",
    "Norwegian API Integration Provider",
    "Norwegian Cloud Solutions Provider",
    "Norwegian Digital Solutions Provider",
    "Norwegian Technology Services Provider",
    "Norwegian IT Solutions Provider",
    "Norwegian Software Solutions Provider",
    "Norwegian Web Solutions Provider",
    "Norwegian Mobile Solutions Provider",
    "Norwegian IT Services Company in Oslo",
    "Norwegian Software Development Company in Oslo",
    "Norwegian Web Development Company in Oslo",
    "Norwegian Mobile App Development Company in Oslo",
    "Norwegian IT Support Company in Oslo",
    "Norwegian IT Consulting Company in Oslo",
    "Norwegian Custom Software Company in Oslo",
    "Norwegian UI UX Design Company in Oslo",
    "Norwegian API Integration Company in Oslo",
    "Norwegian Cloud Solutions Company in Oslo",
    "Norwegian Digital Solutions Company in Oslo",
    "Norwegian Technology Services Company in Oslo",
    "Norwegian IT Solutions Company in Oslo",
    "Norwegian Software Solutions Company in Oslo",
    "Norwegian Web Solutions Company in Oslo",
    "Norwegian Mobile Solutions Company in Oslo",
    "Norwegian IT Services Provider in Oslo",
    "Norwegian Software Development Provider in Oslo",
    "Norwegian Web Development Provider in Oslo",
    "Norwegian Mobile App Development Provider in Oslo",
    "Norwegian IT Support Provider in Oslo",
    "Norwegian IT Consulting Provider in Oslo",
    "Norwegian Custom Software Provider in Oslo",
    "Norwegian UI UX Design Provider in Oslo",
    "Norwegian API Integration Provider in Oslo",
    "Norwegian Cloud Solutions Provider in Oslo",
    "Norwegian Digital Solutions Provider in Oslo",
    "Norwegian Technology Services Provider in Oslo",
    "Norwegian IT Solutions Provider in Oslo",
    "Norwegian Software Solutions Provider in Oslo",
    "Norwegian Web Solutions Provider in Oslo",
    "Norwegian Mobile Solutions Provider in Oslo",
    "Norwegian IT Services Company in Norway",
    "Norwegian Software Development Company in Norway",
    "Norwegian Web Development Company in Norway",
    "Norwegian Mobile App Development Company in Norway",
    "Norwegian IT Support Company in Norway",
    "Norwegian IT Consulting Company in Norway",
    "Norwegian Custom Software Company in Norway",
    "Norwegian UI UX Design Company in Norway",
    "Norwegian API Integration Company in Norway",
    "Norwegian Cloud Solutions Company in Norway",
    "Norwegian Digital Solutions Company in Norway",
    "Norwegian Technology Services Company in Norway",
    "Norwegian IT Solutions Company in Norway",
    "Norwegian Software Solutions Company in Norway",
    "Norwegian Web Solutions Company in Norway",
    "Norwegian Mobile Solutions Company in Norway",
    "Norwegian IT Services Provider in Norway",
    "Norwegian Software Development Provider in Norway",
    "Norwegian Web Development Provider in Norway",
    "Norwegian Mobile App Development Provider in Norway",
    "Norwegian IT Support Provider in Norway",
    "Norwegian IT Consulting Provider in Norway",
    "Norwegian Custom Software Provider in Norway",
    "Norwegian UI UX Design Provider in Norway",
    "Norwegian API Integration Provider in Norway",
    "Norwegian Cloud Solutions Provider in Norway",
    "Norwegian Digital Solutions Provider in Norway",
    "Norwegian Technology Services Provider in Norway",
    "Norwegian IT Solutions Provider in Norway",
    "Norwegian Software Solutions Provider in Norway",
    "Norwegian Web Solutions Provider in Norway",
    "Norwegian Mobile Solutions Provider in Norway",
    "Oslo",
    "Robin App",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <NavBar />
        <main className="flex-1">{children}</main>
        <ButtomNavBar />
      </body>
    </html>
  );
}
