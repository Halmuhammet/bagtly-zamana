'use client'

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FullScreenVideo() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const translations = {
    en: {
      company: "Bagtly Zamana",
      slogan: "Whiteness and Purity"
    },
    ru: {
      company: "Багтлы Замана",
      slogan : "Белизна и Чистота"
    },
    tm: {
      company: "Bagtly Zamana",
      slogan: "Aklyk we Päklik"
    }
  };

  if (!mounted) {
    return null; // Optionally, show a loading spinner or placeholder
  }

  return (
    <div className="flex-grow container mx-auto bg-white py-8 pt-32">
      <video 
        controls
        autoPlay 
        loop 
        muted 
        className="w-full h-auto object-cover rounded mb-6"
        width={300}
        height={300}
      >
        <source src="website_visuals/detergentAdVideo.mov" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 pt-11 flex items-center justify-center">
        <div className="text-center text-white">
        <h1 className="text-6xl py-6 font-bold mb-4 text-white custom-outline">
          Bagtly Zamana
        </h1>
        <p className="text-2xl m-4 text-white custom-outline">
          {translations[language].slogan}
        </p>

        </div>
      </div>
    </div>
  );
}
