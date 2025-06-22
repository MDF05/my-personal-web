import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Personal Web Muhammad Dava Fahreza",
  description: "Portfolio modern, tech stack, dan karya terbaik dari Muhammad Dava Fahreza. Frontend Developer, UI/UX Enthusiast, React & Next.js Specialist.",
  keywords: [
    "Portfolio",
    "Frontend Developer",
    "React",
    "Next.js",
    "UI/UX",
    "Web Developer",
    "Personal Website",
    "Modern Web"
  ],
  openGraph: {
    title: "Personal Web | Muhammad Dava Fahreza",
    description: "Portfolio modern, tech stack, dan karya terbaik dari Muhammad Dava Fahreza. Frontend Developer, UI/UX Enthusiast, React & Next.js Specialist.",
    url: "https://your-domain.com/",
    siteName: "Personal Web | Muhammad Dava Fahreza",
    images: [
      {
        url: "/avatar.png",
        width: 120,
        height: 120,
        alt: "Avatar Muhammad Dava Fahreza"
      }
    ],
    locale: "id_ID",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Web | Muhammad Dava Fahreza",
    description: "Portfolio modern, tech stack, dan karya terbaik dari Muhammad Dava Fahreza.",
    images: ["/avatar.png"]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable}`}
        suppressHydrationWarning={true}
      >
        {/* Animated gradient waves background */}
        <svg
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 0,
            pointerEvents: 'none',
            opacity: 0.22,
          }}
          width="100%"
          height="100%"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0af" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <g>
            <animateTransform attributeName="transform" type="translate" from="-120 0" to="120 0" dur="12s" repeatCount="indefinite" />
            <path d="M0 700 Q 480 600 960 700 T 1920 700 V1080 H0 Z" fill="url(#waveGrad)" filter="url(#waveGlow)" />
          </g>
          <filter id="waveGlow">
            <feGaussianBlur stdDeviation="24" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </svg>
        {children}
      </body>
    </html>
  );
}
