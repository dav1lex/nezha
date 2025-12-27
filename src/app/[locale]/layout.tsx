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

    return {
        title: {
            default: title,
            template: `%s | Pearl Machine`
        },
        description: description,
        keywords: ["pearl machine", "textile machinery", "automatic pearl attacher", "industrial machinery", "turkey machinery"],
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
        "logo": "https://cdn.pearlmachine.com/logo.png", // Assuming a logo exists later
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
