// import { LanguageContext } from "@/context/language-context";
// import { useContext } from "react";

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (context === undefined) {
//     throw new Error("useLanguage must be used within a LanguageProvider");
//   }
//   return context;
// };

import { LanguageContext } from "@/context/language-context";
import { useContext, useEffect } from "react";

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  const { language, setLanguage } = context;

  // Load language from local storage when hook is used
  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  // Save language to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return context;
};
