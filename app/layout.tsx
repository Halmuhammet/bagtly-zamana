import type React from "react"
import "./globals.css"
import { Playfair_Display, Montserrat } from "next/font/google"
import { LanguageProvider } from "@/contexts/LanguageContext"

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata = {
  title: "Bagtly Zamana",
  description: "Premium quality detergents and cleaning products",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className={montserrat.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}