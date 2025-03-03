import { useLanguage } from "@/contexts/LanguageContext";
import React from 'react';

const translations = {
  en : {
    slogan : "Premium quality, eco-friendly, and always fresh"
  },
  ru: {
    slogan : "Качесва"
  },
  tm : {
    slogan : "Ýokary hil, ajap ys, we tamizlik"
  }

};

const PageBreaker = () => {

  return (
    <div className="relative py-40 bg-white">
      {/* Green Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-green-600">
          Our Products
        </h1>
        <p className="mt-4 text-lg font-light text-green-500"></p>
      </div>

      {/* Horizontal Green Line Section */}
      <div className="flex justify-center mb-16">
        <div className="w-24 h-1 bg-green-600 rounded-full" />
      </div>



      {/* Footer */}
      <div className="mt-16 text-center">
        <p className="text-lg text-green-500">Eco-friendly, effective, and affordable cleaning products.</p>
      </div>
    </div>
  );
};

export default PageBreaker;
