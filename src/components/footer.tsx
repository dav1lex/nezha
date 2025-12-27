"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Cpu, Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
    const t = useTranslations('Footer')
    const tNav = useTranslations('Navbar')

    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-card border-t border-border/40 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand & About */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
                            <div className="bg-primary p-1.5 rounded-lg shadow-lg">
                                <Cpu className="h-5 w-5 text-primary-foreground" />
                            </div>
                            <span lang="en" className="font-bold text-xl tracking-tight uppercase">
                                {tNav('title')}
                            </span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed max-w-xs">
                            {t('about')}
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://www.facebook.com/profile.php?id=61553416411613#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all">
                                <Facebook className="h-4 w-4" />
                            </a>
                            <a href="https://www.instagram.com/pearl_machine" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all">
                                <Instagram className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-lg">{t('quickLinks')}</h4>
                        <ul className="space-y-4">
                            {[
                                { name: tNav('home'), href: "/" },
                                { name: tNav('products'), href: "/products" },
                                { name: tNav('contact'), href: "/contact" },
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group">
                                        <div className="h-1 w-0 bg-primary group-hover:w-2 transition-all" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-lg">{t('contact')}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 group">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <MapPin className="h-4 w-4" />
                                </div>
                                <span className="text-muted-foreground text-sm leading-relaxed">
                                    {t('address')}
                                </span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Phone className="h-4 w-4" />
                                </div>
                                <a href={`tel:${t('phone')}`} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                                    {t('phone')}
                                </a>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <Mail className="h-4 w-4" />
                                </div>
                                <a href={`mailto:${t('email')}`} className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
                                    {t('email')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Working Hours */}
                    <div className="space-y-6">
                        <h4 className="font-bold text-lg">{t('hours')}</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3">
                                <Clock className="h-4 w-4 text-primary" />
                                <span className="text-muted-foreground text-sm">{t('weekdays')}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock className="h-4 w-4 text-primary" />
                                <span className="text-muted-foreground text-sm">{t('saturday')}</span>
                            </li>
                            <li className="flex items-center gap-3 opacity-50">
                                <Clock className="h-4 w-4" />
                                <span className="text-muted-foreground text-sm">{t('sunday')}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {currentYear} {tNav('title')}. {t('rights')}</p>
                    <div className="flex items-center gap-2">
                        <span>Developed by</span>
                        <a href="https://titancode.pl" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary font-medium transition-colors underline-offset-4 hover:underline">
                            TitanCode.pl
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
