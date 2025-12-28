"use client"

import { useTranslations } from "next-intl"
import { Link } from "@/i18n/routing"
import { Cpu, Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react"

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
                            <a href="https://wa.me/905325576993" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full border border-border hover:bg-[#25D366] hover:text-white transition-all">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="0"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="h-4 w-4"
                                >
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
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
