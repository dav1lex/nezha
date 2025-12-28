import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import { notFound } from 'next/navigation';
import { routing, type Locale } from '@/i18n/routing';

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    // Simple localization for metadata
    const title = "Pearl Machine - Premium Industrial Machinery";
    const description = locale === 'tr'
        ? "Birinci Sınıf Otomatik İnci ve Trok Çakma Makineleri"
        : locale === 'ar'
            ? "آلات تركيب اللؤلؤ والخرز الأوتوماتيكية المتميزة"
            : "Premium Automatic Pearl & Stud Attaching Machinery";

    const keywords = {
        en: [
            "pearl machine",
            "automatic pearl setting machine",
            "rivet attaching machine",
            "textile machinery",
            "stud fixing machine",
            "industrial garment machinery",
            "pearl machine turkey",
            "high speed pearl attacher",
            "automatic rivet setting machine",
            "pearl attaching machine for textile"
        ],
        tr: [
            "inci çakma makinesi",
            "otomatik inci makinesi",
            "trok çakma makinesi",
            "tekstil makineleri",
            "perçin çakma makinesi",
            "taş yapıştırma makinesi",
            "inci makinesi fiyatları",
            "otomatik perçin makinesi",
            "tekstil aksesuar makineleri",
            "istanbul inci makinesi"
        ],
        ar: [
            "ماكينة تركيب اللؤلؤ",
            "آلة تثبيت الخرز",
            "ماكينة كبس اللؤلؤ",
            "آلات نسيج",
            "ماكينة تركيب الدسر",
            "معدات صناعة الملابس",
            "ماكينة لؤلؤ تركية",
            "آلة تركيب مسامير"
        ]
    };

    return {
        metadataBase: new URL('https://pearlmachine.com'),
        title: {
            default: title,
            template: `%s | Pearl Machine`
        },
        description: description,
        keywords: keywords[locale as keyof typeof keywords] || keywords.en,
        alternates: {
            canonical: `/${locale}`,
            languages: {
                'en': '/en',
                'tr': '/tr',
                'ar': '/ar',
            },
        },
        openGraph: {
            title: title,
            description: description,
            url: `https://pearlmachine.com/${locale}`,
            siteName: 'Pearl Machine',
            locale: locale,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: title,
            description: description,
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

    const messages = await getMessages();
    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Pearl Machine",
        "url": "https://pearlmachine.com",
        "logo": "https://pearlmachine.com/logo.png",
        "sameAs": [
            "https://www.instagram.com/pearlmachine",
            "https://www.facebook.com/pearlmachine",
            // Add other social profiles if available
        ],
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+90-532-557-69-93",
            "contactType": "sales",
            "areaServed": "Global",
            "availableLanguage": ["English", "Turkish", "Arabic"]
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "İsmetpaşa, 155sk. No:23",
            "addressLocality": "Sultangazi",
            "addressRegion": "İstanbul",
            "postalCode": "34270",
            "addressCountry": "TR"
        }
    };

    return (
        <html lang={locale} dir={dir} suppressHydrationWarning>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
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
                        <Analytics />
                    </ThemeProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
