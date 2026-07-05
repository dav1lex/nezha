import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ArrowRight, CheckCircle2, Gauge, Globe2, Ruler, Settings2 } from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import { machines } from '@/lib/data';
import Image from 'next/image';
import type { Metadata } from 'next';
import { absoluteUrl, baseUrl, languageAlternates, productImageAlt } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    const title = locale === 'tr'
        ? 'Otomatik İnci ve Trok Çakma Makineleri'
        : locale === 'ar'
            ? 'آلات تركيب اللؤلؤ والدبابيس الأوتوماتيكية'
            : 'Automatic Pearl & Stud Attaching Machines';

    const description = locale === 'tr'
        ? "Tekstil üretimi için otomatik inci, yarım inci ve trok çakma makinelerini karşılaştırın. Pearl Machine'den İstanbul çıkışlı teklif alın."
        : locale === 'ar'
            ? 'قارن آلات تركيب اللؤلؤ ونصف اللؤلؤ والدبابيس الأوتوماتيكية لإنتاج الملابس والمنسوجات واطلب عرض سعر.'
            : 'Compare automatic pearl, half pearl and stud attaching machines for garment and textile production. Request a quote from Pearl Machine in Istanbul.';

    return {
        metadataBase: new URL(baseUrl),
        title,
        description,
        alternates: {
            canonical: `/${locale}`,
            languages: languageAlternates('/'),
        },
        openGraph: {
            title: `${title} | Pearl Machine`,
            description,
            url: absoluteUrl(`/${locale}`),
            images: [{ url: absoluteUrl('/nt-906-nw_1.jpg'), width: 1200, height: 630, alt: productImageAlt(machines[0]) }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | Pearl Machine`,
            description,
            images: [absoluteUrl('/nt-906-nw_1.jpg')],
        },
    };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations('Index');
    const tNav = await getTranslations('Navbar');
    const tProd = await getTranslations('Products');
    const featuredMachine = machines[0];

    return (
        <div className="flex flex-col gap-20 pb-20">
            <section className="border-b bg-secondary/20">
                <div className="container mx-auto grid min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-[1.05fr_0.95fr] md:px-8">
                    <div className="max-w-3xl">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                            <Settings2 className="h-3.5 w-3.5" />
                        {t('heroBadge')}
                        </div>

                        <h1 className="mb-6 text-4xl font-black tracking-tight text-balance md:text-6xl">
                            {t('heroTitle')}
                        </h1>

                        <p className="mb-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                            {t('heroSubtitle')}
                        </p>

                        <div className="mb-10 flex flex-col gap-3 sm:flex-row">
                            <Button size="lg" asChild className="h-12 px-6">
                                <Link href="/products" className="flex items-center gap-2">
                                    {t('browseMachines')}
                                    <ArrowRight className="h-5 w-5 rtl:rotate-180" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="h-12 px-6">
                                <Link href="/contact">
                                    {tNav('contact')}
                                </Link>
                            </Button>
                        </div>

                        <dl className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
                            <div>
                                <dt className="font-bold">{t('stats.speedValue')}</dt>
                                <dd className="text-muted-foreground">{t('stats.speedLabel')}</dd>
                            </div>
                            <div>
                                <dt className="font-bold">{t('stats.sizeValue')}</dt>
                                <dd className="text-muted-foreground">{t('stats.sizeLabel')}</dd>
                            </div>
                            <div>
                                <dt className="font-bold">{t('stats.colorsValue')}</dt>
                                <dd className="text-muted-foreground">{t('stats.colorsLabel')}</dd>
                            </div>
                            <div>
                                <dt className="font-bold">{t('stats.locationValue')}</dt>
                                <dd className="text-muted-foreground">{t('stats.locationLabel')}</dd>
                            </div>
                        </dl>
                    </div>

                    <div className="relative mx-auto w-full max-w-xl">
                        <div className="relative aspect-square overflow-hidden rounded-lg border bg-white">
                            <Image
                                src={featuredMachine.images[0]}
                                alt={productImageAlt(featuredMachine)}
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-contain p-4"
                            />
                        </div>
                        <p className="mt-3 text-sm text-muted-foreground">
                            {t('heroImageCaption')}
                        </p>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 md:px-8">
                <div className="mb-10 max-w-3xl">
                    <h2 className="mb-4 text-3xl font-extrabold tracking-tight">{t('applicationTitle')}</h2>
                    <p className="text-lg leading-8 text-muted-foreground">{t('applicationDescription')}</p>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {[
                        {
                            icon: Gauge,
                            title: t('quality'),
                            desc: t('qualityDesc')
                        },
                        {
                            icon: Ruler,
                            title: t('experience'),
                            desc: t('experienceDesc')
                        },
                        {
                            icon: Globe2,
                            title: t('support'),
                            desc: t('supportDesc')
                        },
                    ].map((feature, i) => (
                        <div key={i} className="flex flex-col items-start rounded-lg border bg-card p-6">
                            <div className="mb-5 rounded-lg bg-primary/10 p-3 text-primary">
                                <feature.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                            <p className="leading-7 text-muted-foreground">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 md:px-8 space-y-12">
                <div className="flex flex-col gap-6 text-left md:flex-row md:items-end md:justify-between">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-extrabold tracking-tight">{tProd('title')}</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl">{tProd('description')}</p>
                    </div>
                    <Button variant="link" asChild className="text-lg group">
                        <Link href="/products" className="flex items-center gap-2">
                            {t('viewCatalog')} <ArrowRight className="h-5 w-5 rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {machines.slice(0, 4).map((machine) => (
                        <ProductCard key={machine.id} machine={machine} />
                    ))}
                </div>
            </section>

            <section className="bg-secondary/30 py-16">
                <div className="container mx-auto grid gap-10 px-4 md:grid-cols-[0.8fr_1.2fr] md:px-8">
                    <div>
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight">{t('quoteTitle')}</h2>
                        <p className="leading-8 text-muted-foreground">{t('quoteDescription')}</p>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {[
                            t('quoteItems.machine'),
                            t('quoteItems.pearlSize'),
                            t('quoteItems.fabric'),
                            t('quoteItems.production'),
                        ].map((item) => (
                            <div key={item} className="flex items-start gap-3 rounded-lg border bg-background p-4">
                                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                                <span className="font-medium leading-7">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
