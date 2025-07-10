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
  title: "Sarah Chen - Senior Full-Stack Developer",
  description:
    "Senior Full-Stack Developer & Software Engineer with 6+ years of experience building scalable web applications. Specializing in React, Node.js, and cloud technologies.",
  keywords: [
    "full-stack developer",
    "software engineer",
    "React developer",
    "Node.js developer",
    "TypeScript",
    "cloud architecture",
    "web development",
    "Sarah Chen",
  ],
  authors: [{ name: "Sarah Chen" }],
  creator: "Sarah Chen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sarahchen.dev",
    title: "Sarah Chen - Senior Full-Stack Developer",
    description:
      "Senior Full-Stack Developer & Software Engineer with 6+ years of experience building scalable web applications.",
    siteName: "Sarah Chen Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sarah Chen - Senior Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarah Chen - Senior Full-Stack Developer",
    description:
      "Senior Full-Stack Developer & Software Engineer with 6+ years of experience building scalable web applications.",
    creator: "@sarahchen_dev",
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
