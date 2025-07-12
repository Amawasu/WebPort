import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Amawasu Duangain - Frontend Developer",
  description:
    "Frontend Developer ",
  keywords: [
    "React developer",
    "Node.js developer",
    "TypeScript",
    "cloud architecture",
    "web development",
    "Amawasu Duangain",
  ],
  authors: [{ name: "Amawasu Duangain" }],
  creator: "Amawasu Duangain",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://Amawasu.dev",
    title: "Amawasu Duangain - Frontend Developer",
    description:
      "Frontend Developer",
    siteName: "Amawasu Duangain Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amawasu Duangain - Frontend Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amawasu Duangain - Frontend Developer",
    description:
      "Frontend Developer",
    creator: "@Amawasu_dev",
    images: ["/og-image.jpg"],
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
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
