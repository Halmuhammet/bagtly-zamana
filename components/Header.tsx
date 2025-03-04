"use client"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { link } from "fs"

const translations = {
  en: {
    about: "ABOUT US",
    products: "Products",
    contact: "Contact",
  },
  ru: {
    about: "О НАС",
    products: "Продукты",
    contact: "Контакты",
  },
  tm: {
    about: "BIZ BARADA",
    products: "Önümlerimiz",
    contact: "Habarlaşmak",
  },
}

export default function Header() {
  const { language, setLanguage } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white text-green-800 pb-2 py-1 px-6 md:px-28 fixed top-0 left-0 right-0 z-50 ">
      <div className="container mx-auto relative">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <nav className="hidden lg:flex flex-1 items-center">
            <ul className="flex space-x-20 text-md tracking-wide">
              
              <li>
                <Link href="#products" className="hover:text-green-600 transition-colors uppercase text-green-600 font-semibold">
                  {translations[language].products}
                </Link>
              </li>  
              
              <li>
              <Link href="/about" className="hover:text-green-600 transition-colors uppercase text-green-600 font-semibold">
                {translations[language].about}
              </Link>
              </li>
            </ul>
          </nav>

          {/* Center Logo */}
          <div className="flex justify-center">
            <Link href="/" className="block w-24 h-24 relative">
              <Image
                src="website_visuals/advertisement/logo 2.png"
                alt="Bagtly Zamana Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Right Navigation */}
          <nav className="hidden lg:flex flex-1 items-center justify-end">
            <ul className="flex items-center space-x-20 text-md tracking-wide">
              <li>
                <Link href="#contact" className="hover:text-green-600 transition-colors uppercase text-green-600 font-semibold">
                  {translations[language].contact}
                </Link>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center text-md uppercase tracking-wide text-green-600 font-semibold">
                    {language.toUpperCase()}
                    <ChevronDown className="ml-1 h-5 w-5 text-green-600" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage("ru")}>Русский</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLanguage("tm")}>Türkmençe</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </nav>

          {/* Hamburger Button for Mobile */}
          <div className="lg:hidden absolute right-0 top-1/2 -translate-y-1/2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} absolute top-full left-0 right-0 bg-white shadow-lg z-20`}
        >
          <ul className="space-y-4 text-md font-semibold p-6 text-green-600">
            <li>
              <Link
                href="/about"
                className="block hover:text-green-600 transition-colors uppercase"
                onClick={() => setIsMenuOpen(false)}
              > 
                {translations[language].about}
              </Link>
            </li>
            <li>
              <Link
                href="#products"
                className="block hover:text-green-600 transition-colors uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations[language].products}
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="block hover:text-green-600 transition-colors uppercase"
                onClick={() => setIsMenuOpen(false)}
              >
                {translations[language].contact}
              </Link>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-md uppercase tracking-wide font-semibold text-green-600">
                  {language.toUpperCase()}
                  <ChevronDown className="ml-2 h-5 w-5 text-green-600" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("ru")}>Русский</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("tm")}>Türkmençe</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
