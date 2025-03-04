"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import Image from "next/image"
import Link from "next/link"

const translations = {
  en: {
    contactUs: "Contact Us",
    email: "Email",
    phone: "Phone",
    address: "Address: ",
    addressDescription: "Turkmenistan, Akhal province, Ak Bugday etrap, Anev city, Telekechiler street 14.",
    copyright: "© 2025 ES “Bagtly zamana”. All rights reserved.",
  },
  ru: {
    contactUs: "Свяжитесь с нами",
    email: "Э-почта",
    phone: "Телефон",
    address: "Адрес: ",
    addressDescription: "Туркменистан, Ахалский велаят, Ак Бугдайский этрап, город Анев, улица Телекечилер 14.",
    copyright: "© 2025 ХО “Bagtly zamana”. Все права защищены.",
  },
  tm: {
    contactUs: "Biz bilen habarlaşyň",
    email: "E-poçta",
    phone: "Telefon",
    address: "Salgy: ",
    addressDescription: "Türkmenistan, Ahal welaýaty, Ak Bugdaý etraby, Anew şäheri, Telekeçiler köçesi 14.",
    copyright: "© 2025 “Bagtly zamana” HJ. Ähli hukuklar goralan.",
  },
}

export default function Footer() {
  const { language } = useLanguage()

  return (
    <footer id="contact" className="bg-green-800 text-white py-12 px-4 sm:px-8 md:px-16 lg:px-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 font-playfair">{translations[language].contactUs}</h2>
        <p className="mb-2">
          <span className="font-semibold">{translations[language].email}:</span> info@bagtlyzamana.com
        </p>
        <p className="mb-2">
          <span className="font-semibold">{translations[language].phone}:</span> +993 12 576239
        </p>
        <p>
          <span className="font-semibold">{translations[language].address} </span> {translations[language].addressDescription}
        </p>
        <br></br>
        <p className = "font-semibold">{translations[language].copyright}</p>
      </div>
    </footer>
  )
}