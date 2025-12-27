import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { machines } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { ContactDialog } from '@/components/contact-dialog';
import { ProductImageGallery } from '@/components/product-image-gallery';
import { ProductCard } from '@/components/product-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, ChevronRight, Home, ShieldCheck, Zap, Globe, Cog } from 'lucide-react';
import { Link } from '@/i18n/routing';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string, locale: string }> }): Promise<Metadata> {
    const { slug, locale } = await params;
    const machine = machines.find((m) => m.slug === slug);

    if (!machine) {
        return {
            title: 'Not Found',
        };
    }

    return {
        title: `${machine.name} | Pearl Machine`,
        description: machine.description[locale as 'en' | 'ar' | 'tr'],
        openGraph: {
            images: [machine.images[0]],
        },
    };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
    const { slug, locale } = await params;
    const machine = machines.find((m) => m.slug === slug);

    if (!machine) {
        notFound();
    }

    const t = await getTranslations('ProductDetails');
    const tNav = await getTranslations('Navbar');
    const tProd = await getTranslations('Products');

    const currentLocale = locale as 'en' | 'ar' | 'tr';
    const otherMachines = machines.filter(m => m.slug !== slug).slice(0, 3);

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center text-sm text-muted-foreground mb-8">
                <Link href="/" className="hover:text-foreground transition-colors flex items-center gap-1">
                    <Home className="h-4 w-4" />
                    {tNav('home')}
                </Link>
                <ChevronRight className="h-4 w-4 mx-2 rtl:rotate-180" />
                <Link href="/products" className="hover:text-foreground transition-colors">
                    {tProd('title')}
                </Link>
                <ChevronRight className="h-4 w-4 mx-2 rtl:rotate-180" />
                <span className="text-foreground font-medium">{machine.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left Column: Image Gallery + Specifications (Technical Datasheet) */}
                <div className="space-y-12">
                    <ProductImageGallery images={machine.images} name={machine.name} />

                    {/* Specs Table - Zebra Styled - Moved here to fill the gap */}
                    <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-700">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                            <span className="h-8 w-1 bg-primary rounded-full" />
                            {t('specs')}
                        </h3>
                        <div className="overflow-hidden rounded-xl border border-border shadow-sm bg-card">
                            <Table>
                                <TableBody>
                                    {machine.specs.map((spec, index) => (
                                        <TableRow
                                            key={index}
                                            className={`${index % 2 === 0 ? 'bg-muted/30' : 'bg-background'} hover:bg-muted/50 transition-colors border-none`}
                                        >
                                            <TableCell className="font-bold py-4 pl-6 text-foreground uppercase tracking-tight text-xs w-1/3">
                                                {t(spec.label)}
                                            </TableCell>
                                            <TableCell className="py-4 pr-6 text-muted-foreground font-medium sm:text-base text-sm">
                                                {spec.value}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                    {/* Trust Badges - Extra content to ensure no gap */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl border border-border bg-accent/50 flex items-center gap-3">
                            <ShieldCheck className="h-8 w-8 text-primary" />
                            <div className="text-xs">
                                <p className="font-bold">{t('warrantyTitle')}</p>
                                <p className="text-muted-foreground">{t('warrantyDesc')}</p>
                            </div>
                        </div>
                        <div className="p-4 rounded-xl border border-border bg-accent/50 flex items-center gap-3">
                            <Globe className="h-8 w-8 text-primary" />
                            <div className="text-xs">
                                <p className="font-bold">{t('shippingTitle')}</p>
                                <p className="text-muted-foreground">{t('shippingDesc')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Product Info + Benefits */}
                <div className="lg:sticky lg:top-24 space-y-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <h1 className="text-5xl font-black tracking-tight">{machine.name}</h1>
                            <Badge variant="secondary" className="px-3 py-1 text-sm font-bold uppercase tracking-wider">
                                {machine.category}
                            </Badge>
                        </div>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {machine.description[currentLocale]}
                        </p>
                    </div>

                    <Separator className="bg-border/60" />

                    {/* Features - Benefit style */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                            <span className="h-8 w-1 bg-primary rounded-full" />
                            {t('features')}
                        </h3>
                        <div className="grid grid-cols-1 gap-4">
                            {machine.features[currentLocale].map((feature, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card hover:bg-accent/50 transition-colors group">
                                    <div className="mt-1 p-1 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all shrink-0">
                                        <CheckCircle2 className="h-4 w-4" />
                                    </div>
                                    <span className="text-foreground/90 font-medium leading-tight">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="pt-6">
                        <ContactDialog productName={machine.name} />
                        <p className="text-center text-xs text-muted-foreground mt-4 italic">
                            {t('responseTime')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Related Products Section */}
            <div className="mt-32 pt-16 border-t border-border/40 space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-black tracking-tight">{t('relatedProducts')}</h2>
                        <div className="h-1.5 w-24 bg-primary rounded-full" />
                    </div>
                    <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm font-black uppercase tracking-widest">
                        {tProd('title')} →
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {otherMachines.map((m) => (
                        <div key={m.id} className="scale-95 hover:scale-100 transition-all duration-300">
                            <ProductCard machine={m} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
