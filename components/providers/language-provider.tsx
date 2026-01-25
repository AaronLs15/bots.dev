"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, type Language } from "@/lib/translations";

type TranslationCopy = (typeof translations)[Language];

type LanguageContextValue = {
    language: Language;
    setLanguage: (language: Language) => void;
    toggleLanguage: () => void;
    copy: TranslationCopy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "botsdev-language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");

    useEffect(() => {
        const stored =
            typeof window !== "undefined"
                ? (window.localStorage.getItem(STORAGE_KEY) as Language | null)
                : null;
        if (stored && (stored === "en" || stored === "es") && stored !== language) {
            setLanguageState(stored);
        }
    }, []);

    useEffect(() => {
        if (typeof document !== "undefined") {
            document.documentElement.lang = language === "es" ? "es-MX" : "en";
        }
        if (typeof window !== "undefined") {
            window.localStorage.setItem(STORAGE_KEY, language);
        }
    }, [language]);

    const setLanguage = (next: Language) => {
        if (next === "en" || next === "es") {
            setLanguageState(next);
        }
    };

    const toggleLanguage = () => {
        setLanguageState((prev) => (prev === "en" ? "es" : "en"));
    };

    const copy = useMemo(() => translations[language], [language]);

    const value = useMemo(
        () => ({
            language,
            setLanguage,
            toggleLanguage,
            copy,
        }),
        [language, copy],
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
}
