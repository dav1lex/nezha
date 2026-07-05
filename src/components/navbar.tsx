"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { ModeToggle } from "./mode-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { Link } from "@/i18n/routing"
import { Cpu, Menu, X } from "lucide-react"

export function Navbar() {
    const t = useTranslations('Navbar')
    const [isOpen, setIsOpen] = React.useState(false)

    const links = [
        { href: "/", label: t('home') },
        { href: "/about", label: t('about') },
        { href: "/products", label: t('products') },
        { href: "/contact", label: t('contact') },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center mx-auto px-4 md:px-8">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80" onClick={() => setIsOpen(false)}>
                        <div className="bg-primary p-1.5 rounded-lg shadow-lg shadow-primary/20">
                            <Cpu className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span lang="en" className="font-bold text-xl tracking-tight uppercase">
                            {t('title')}
                        </span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                        {links.map((link) => (
                            <Link key={link.href} href={link.href} className="transition-colors hover:text-primary text-foreground/70">
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center gap-2">
                        <LanguageSwitcher />
                        <ModeToggle />
                        <button
                            type="button"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-md border md:hidden"
                            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={isOpen}
                            onClick={() => setIsOpen((current) => !current)}
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </nav>
                </div>
            </div>
            {isOpen && (
                <nav className="border-t bg-background px-4 py-3 md:hidden">
                    <div className="container mx-auto flex flex-col gap-1">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="rounded-md px-3 py-3 text-base font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </header>
    )
}
