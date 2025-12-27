"use client"

import { useTranslations } from "next-intl"
import { ModeToggle } from "./mode-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { Link } from "@/i18n/routing"
import { Cpu } from "lucide-react"

export function Navbar() {
    const t = useTranslations('Navbar')

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center mx-auto px-4 md:px-8">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
                        <div className="bg-primary p-1.5 rounded-lg shadow-lg shadow-primary/20">
                            <Cpu className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="font-bold text-xl tracking-tight uppercase">
                            {t('title')}
                        </span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                        <Link href="/" className="transition-colors hover:text-primary text-foreground/70">
                            {t('home')}
                        </Link>
                        <Link href="/products" className="transition-colors hover:text-primary text-foreground/70">
                            {t('products')}
                        </Link>
                        <Link href="/contact" className="transition-colors hover:text-primary text-foreground/70">
                            {t('contact')}
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center gap-2">
                        <LanguageSwitcher />
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
}
