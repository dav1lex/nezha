import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ProductCard } from '@/components/product-card';
import { machines } from '@/lib/data';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import type { Metadata } from 'next';
import { absoluteUrl, baseUrl, languageAlternates, productImageAlt, productSeoName } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;

    const title = locale === 'tr'
        ? 'İnci Çakma Makineleri'
        : locale === 'ar'
            ? 'آلات تركيب اللؤلؤ'
            : 'Pearl Attaching Machines';

    const description = locale === 'tr'
        ? 'Otomatik inci çakma makinelerini hız, inci ölçüsü, renk seçeneği, güç ve kullanım alanına göre karşılaştırın.'
        : locale === 'ar'
            ? 'قارن آلات تركيب اللؤلؤ الأوتوماتيكية حسب السرعة وحجم اللؤلؤ والألوان والطاقة والاستخدام.'
            : 'Compare automatic pearl attaching machines by speed, pearl size, color capacity, power requirements and production use case.';

    return {
        metadataBase: new URL(baseUrl),
        title,
        description,
        alternates: {
            canonical: `/${locale}/products`,
            languages: languageAlternates('/products'),
        },
        openGraph: {
            title: `${title} | Pearl Machine`,
            description,
            url: absoluteUrl(`/${locale}/products`),
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

function specValue(machine: (typeof machines)[number], label: string) {
    return machine.specs.find((spec) => spec.label === label)?.value ?? 'Contact for details';
}

export default async function ProductsPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations('Products');
    const tDetails = await getTranslations('ProductDetails');
    const currentLocale = locale as 'en' | 'ar' | 'tr';

    const itemListSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Pearl attaching machines',
        itemListElement: machines.map((machine, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: absoluteUrl(`/${locale}/products/${machine.slug}`),
            name: productSeoName(machine),
        })),
    };

    return (
        <div className="container mx-auto px-4 py-12 md:px-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
            />
            <div className="mb-10 max-w-3xl">
                <h1 className="mb-4 text-4xl font-black tracking-tight md:text-5xl">{t('title')}</h1>
                <p className="text-lg leading-8 text-muted-foreground">{t('description')}</p>
            </div>

            <div className="mb-16 overflow-hidden rounded-lg border bg-card">
                <Table className="min-w-[1180px] table-fixed">
                    <colgroup>
                        <col className="w-[140px]" />
                        <col className="w-[310px]" />
                        <col className="w-[220px]" />
                        <col className="w-[210px]" />
                        <col className="w-[210px]" />
                        <col className="w-[90px]" />
                    </colgroup>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="px-4">{t('table.model')}</TableHead>
                            <TableHead className="px-4 whitespace-normal">{t('table.bestFor')}</TableHead>
                            <TableHead className="px-4 whitespace-normal">{tDetails('speed')}</TableHead>
                            <TableHead className="px-4 whitespace-normal">{tDetails('pearlSize')}</TableHead>
                            <TableHead className="px-4 whitespace-normal">{tDetails('colors')}</TableHead>
                            <TableHead className="px-4 text-right">{t('table.action')}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {machines.map((machine) => (
                            <TableRow key={machine.id}>
                                <TableCell className="px-4 align-top font-bold">{machine.name}</TableCell>
                                <TableCell className="px-4 align-top whitespace-normal break-words leading-6 text-muted-foreground">{machine.bestFor[currentLocale]}</TableCell>
                                <TableCell className="px-4 align-top whitespace-normal break-words leading-6">{specValue(machine, 'speed')}</TableCell>
                                <TableCell className="px-4 align-top whitespace-normal break-words leading-6">{specValue(machine, 'pearlSize')}</TableCell>
                                <TableCell className="px-4 align-top whitespace-normal break-words leading-6">{specValue(machine, 'colors')}</TableCell>
                                <TableCell className="px-4 align-top text-right">
                                    <Button asChild size="sm" variant="outline">
                                        <Link href={`/products/${machine.slug}`}>{t('viewDetails')}</Link>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
                {machines.map((machine) => (
                    <ProductCard key={machine.id} machine={machine} />
                ))}
            </div>
        </div>
    );
}
