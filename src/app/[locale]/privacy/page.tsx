import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { absoluteUrl, baseUrl, company, languageAlternates } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const title = locale === 'tr' ? 'Gizlilik Politikası' : locale === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy';
    const description = locale === 'tr'
        ? 'Pearl Machine iletişim formu, e-posta ve satış talepleri için gizlilik bilgileri.'
        : locale === 'ar'
            ? 'معلومات الخصوصية الخاصة بنموذج التواصل والبريد الإلكتروني وطلبات المبيعات لدى Pearl Machine.'
            : 'Privacy information for Pearl Machine contact forms, email inquiries and sales requests.';

    return {
        metadataBase: new URL(baseUrl),
        title,
        description,
        alternates: {
            canonical: `/${locale}/privacy`,
            languages: languageAlternates('/privacy'),
        },
        openGraph: {
            title: `${title} | Pearl Machine`,
            description,
            url: absoluteUrl(`/${locale}/privacy`),
        },
    };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations('Privacy');

    return (
        <div className="container mx-auto px-4 py-12 md:px-8">
            <div className="mx-auto max-w-3xl">
                <h1 className="mb-6 text-4xl font-black tracking-tight md:text-5xl">{t('title')}</h1>
                <p className="mb-8 text-lg leading-8 text-muted-foreground">{t('intro')}</p>

                {['data', 'use', 'sharing', 'retention', 'rights'].map((section) => (
                    <section key={section} className="mb-8">
                        <h2 className="mb-3 text-2xl font-bold">{t(`${section}.title`)}</h2>
                        <p className="leading-8 text-muted-foreground">{t(`${section}.body`)}</p>
                    </section>
                ))}

                <section className="rounded-lg border bg-secondary/30 p-6">
                    <h2 className="mb-3 text-2xl font-bold">{t('contact.title')}</h2>
                    <p className="leading-8 text-muted-foreground">{company.email}</p>
                    <p className="leading-8 text-muted-foreground">{company.address}</p>
                </section>
            </div>
        </div>
    );
}
