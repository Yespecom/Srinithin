import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Srinithin Somasundaram - Wikipedia",
  description:
    "Srinithin Somasundaram is an Indian entrepreneur from Erode, Tamil Nadu. He is the founder of Yesp Corporation, Yesp Tech, Yesp Studio, Brandout Studio, and Feedlooply.",
  keywords:
    "Srinithin Somasundaram, Yesp Corporation, Yesp Tech, Yesp Studio, Brandout Studio, Feedlooply, Erode, Tamil Nadu, India, entrepreneur, startup founder",
  authors: [{ name: "Wikipedia contributors" }],
  creator: "Wikipedia contributors",
  publisher: "Wikipedia",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://en.wikipedia.org/wiki/Srinithin_Somasundaram",
    title: "Srinithin Somasundaram - Wikipedia",
    description: "Indian entrepreneur from Erode, Tamil Nadu, building ventures for India and the world.",
    siteName: "Wikipedia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srinithin Somasundaram - Wikipedia",
    description: "Indian entrepreneur from Erode, Tamil Nadu, building ventures for India and the world.",
  },
  generator: "Next.js",

  // ✅ Add favicon here
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className="font-sans antialiased"
        style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Lato, Helvetica, Arial, sans-serif',
        }}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
