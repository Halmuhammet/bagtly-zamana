"use client";

import type React from "react";
import { createContext, useState, useContext, useEffect } from "react";

type Language = "en" | "ru" | "tm";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("ru");

  useEffect(() => {
    try {
      const storedLanguage = localStorage.getItem("language") as Language;
      if (storedLanguage) {
        setLanguage(storedLanguage);
      }
    } catch (error) {
      console.warn("Unable to access localStorage. Falling back to default language.", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("language", language);
    } catch (error) {
      console.warn("Unable to store language preference in localStorage.", error);
    }
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};