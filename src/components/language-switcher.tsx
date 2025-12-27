"use client"

import { useLocale, useTranslations } from "next-intl"
import { usePathname, useRouter } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function LanguageSwitcher() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()

    const handleLanguageChange = (newLocale: string) => {
        router.replace(pathname, { locale: newLocale })
    }

    const languages = [
        { code: 'en', label: 'English', flag: '🇺🇸' },
        { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
        { code: 'ar', label: 'العربية', flag: '🇸🇦' },
    ]

    const currentLanguage = languages.find(lang => lang.code === locale)

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2 px-2 hover:bg-accent transition-colors">
                    <span className="text-xl leading-none">{currentLanguage?.flag}</span>
                    <span className="hidden sm:inline-block font-medium">{currentLanguage?.label}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px] p-2 bg-background/95 backdrop-blur border-border/50">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors ${locale === lang.code ? "bg-primary/10 text-primary font-bold" : "hover:bg-accent"}`}
                    >
                        <span className="text-xl">{lang.flag}</span>
                        <span className="text-sm">{lang.label}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
