import { useTranslations } from "next-intl"
import { ModeToggle } from "./mode-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { Link } from "@/i18n/routing"

export function Navbar() {
    const t = useTranslations('Navbar')

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center mx-auto px-4">
                <div className="mr-4 hidden md:flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="hidden font-bold sm:inline-block">
                            {t('title')}
                        </span>
                    </Link>
                    <nav className="flex items-center gap-6 text-sm">
                        <Link href="/" className="transition-colors hover:text-foreground/80 text-foreground/60">
                            {t('home')}
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        {/* Search could go here */}
                    </div>
                    <nav className="flex items-center gap-2">
                        <LanguageSwitcher />
                        <ModeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
}
