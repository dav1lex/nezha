import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { CheckCircle2 } from 'lucide-react';
import { absoluteUrl, baseUrl, company, languageAlternates } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    const title = locale === 'tr'
        ? 'Pearl Machine Hakkında'
        : locale === 'ar'
            ? 'عن Pearl Machine'
            : 'About Pearl Machine';

    const description = locale === 'tr'
        ? 'Pearl Machine, İstanbul iletişim adresiyle tekstil üretimi için otomatik inci, yarım inci ve trok çakma makineleri sunar.'
        : locale === 'ar'
            ? 'توفر Pearl Machine آلات أوتوماتيكية لتركيب اللؤلؤ ونصف اللؤلؤ والدبابيس لإنتاج الملابس والمنسوجات من عنوان تواصل في إسطنبول.'
            : 'Pearl Machine supplies automatic pearl, half pearl and stud attaching machines for garment and textile production from its Istanbul contact address.';

    return {
        metadataBase: new URL(baseUrl),
        title,
        description,
        alternates: {
            canonical: `/${locale}/about`,
            languages: languageAlternates('/about'),
        },
        openGraph: {
            title: `${title} | Pearl Machine`,
            description,
            url: absoluteUrl(`/${locale}/about`),
        },
    };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations('About');

    return (
        <div className="container mx-auto px-4 py-12 md:px-8">
            <div className="mx-auto max-w-4xl">
                <p className="mb-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">{t('eyebrow')}</p>
                <h1 className="mb-6 text-4xl font-black tracking-tight md:text-5xl">{t('title')}</h1>
                <p className="mb-10 text-lg leading-8 text-muted-foreground">{t('intro')}</p>

                <div className="grid gap-5 md:grid-cols-3">
                    {[t('points.catalog'), t('points.specs'), t('points.contact')].map((point) => (
                        <div key={point} className="rounded-lg border bg-card p-5">
                            <CheckCircle2 className="mb-4 h-6 w-6 text-primary" />
                            <p className="leading-7 text-muted-foreground">{point}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 rounded-lg border bg-secondary/30 p-6">
                    <h2 className="mb-3 text-2xl font-bold">{t('contactTitle')}</h2>
                    <p className="leading-8 text-muted-foreground">{company.address}</p>
                    <p className="mt-2 leading-8 text-muted-foreground">
                        {company.phoneDisplay} · {company.email}
                    </p>
                </div>
            </div>
        </div>
    );
}
