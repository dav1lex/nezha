import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { notFound } from 'next/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { absoluteUrl, company, languageAlternates } from '@/lib/seo';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    display: "swap",
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    display: "swap",
});

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    const title = locale === 'tr'
        ? "Pearl Machine | Otomatik İnci ve Trok Çakma Makineleri"
        : locale === 'ar'
            ? "Pearl Machine | آلات تركيب اللؤلؤ والدبابيس الأوتوماتيكية"
            : "Pearl Machine | Automatic Pearl & Stud Attaching Machines";
    const description = locale === 'tr'
        ? "Pearl Machine, tekstil üretimi için otomatik inci, yarım inci ve trok çakma makineleri sunar. İstanbul'dan teklif ve ürün bilgisi alın."
        : locale === 'ar'
            ? "توفر Pearl Machine آلات أوتوماتيكية لتركيب اللؤلؤ ونصف اللؤلؤ والدبابيس لإنتاج الملابس والمنسوجات."
            : "Automatic pearl, half pearl and stud attaching machines for garment and textile production. Compare models and request a quote from Istanbul.";

    return {
        metadataBase: new URL('https://pearlmachine.com'),
        title: {
            default: title,
            template: `%s | Pearl Machine`
        },
        description: description,
        alternates: {
            canonical: `/${locale}`,
            languages: languageAlternates('/'),
        },
        openGraph: {
            title: title,
            description: description,
            url: `https://pearlmachine.com/${locale}`,
            siteName: 'Pearl Machine',
            locale: locale,
            type: 'website',
            images: [
                {
                    url: absoluteUrl('/nt-906-nw_1.jpg'),
                    width: 1200,
                    height: 630,
                    alt: 'Automatic pearl attaching machine for textile production',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
            images: [absoluteUrl('/nt-906-nw_1.jpg')],
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as Locale)) {
        notFound();
    }

    setRequestLocale(locale);

    const messages = await getMessages();
    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": ["Organization", "LocalBusiness"],
        "@id": "https://pearlmachine.com/#organization",
        "name": company.name,
        "legalName": company.legalName,
        "url": "https://pearlmachine.com",
        "logo": "https://pearlmachine.com/logo.png",
        "image": "https://pearlmachine.com/nt-906-nw_1.jpg",
        "priceRange": "Contact for quote",
        "openingHours": [
            "Mo-Fr 09:00-19:00",
            "Sa 09:00-17:00"
        ],
        "sameAs": [
            company.instagram,
            company.facebook,
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": company.phoneUri,
            "contactType": "sales",
            "areaServed": "Global",
            "availableLanguage": ["English", "Turkish", "Arabic"]
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": company.streetAddress,
            "addressLocality": company.locality,
            "addressRegion": company.region,
            "postalCode": company.postalCode,
            "addressCountry": company.country
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://pearlmachine.com/#website",
        "name": company.name,
        "url": "https://pearlmachine.com",
        "publisher": {
            "@id": "https://pearlmachine.com/#organization"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://pearlmachine.com/en/products?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };

    const cfBeaconToken = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

    return (
        <html lang={locale} dir={dir} suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
                />
                {cfBeaconToken && (
                    <script
                        defer
                        src="https://static.cloudflareinsights.com/beacon.min.js"
                        data-cf-beacon={JSON.stringify({ token: cfBeaconToken })}
                    />
                )}
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}>
                <NextIntlClientProvider messages={messages}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <div className="relative flex min-h-screen flex-col">
                            <Navbar />
                            <main className="flex-1">{children}</main>
                            <Footer />
                        </div>
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
