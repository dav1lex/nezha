import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { machines } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, ChevronRight, Home } from 'lucide-react';
import { Link } from '@/i18n/routing';

export async function generateMetadata({ params }: { params: Promise<{ slug: string, locale: string }> }) {
    const { slug, locale } = await params;
    const machine = machines.find((m) => m.slug === slug);

    if (!machine) {
        return {
            title: 'Not Found',
        };
    }

    // SEO: Dynamic metadata generation
    return {
        title: `${machine.name} | Nezha`,
        description: machine.description[locale as 'en' | 'ar' | 'tr'],
        openGraph: {
            images: [machine.image],
        },
    };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string, locale: string }> }) {
    // Awaiting params effectively
    const { slug, locale } = await params;

    // Find the machine
    const machine = machines.find((m) => m.slug === slug);

    if (!machine) {
        notFound();
    }

    // Getting translations server-side
    // We need to use 'useTranslations' but in a server component way or pass messages
    // Ideally in RSC we use getTranslations but useTranslations works if setup in layout
    // Getting translations server-side
    // We need to use 'getTranslations' (async) in Server Components
    const t = await getTranslations('ProductDetails');
    const tNav = await getTranslations('Navbar');
    const tProd = await getTranslations('Products');

    const currentLocale = locale as 'en' | 'ar' | 'tr';

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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column: Image Gallery (Single Image for now) */}
                <div className="space-y-4">
                    <div className="relative aspect-square w-full overflow-hidden rounded-xl border bg-muted">
                        {/* We can add a gallery carousel later, for now the main image */}
                        <Image
                            src={machine.image}
                            alt={machine.name}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </div>

                {/* Right Column: Product Details */}
                <div className="space-y-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <h1 className="text-4xl font-bold tracking-tight">{machine.name}</h1>
                            <Badge variant="secondary" className="px-3 py-1 text-sm capitalize">
                                {machine.category}
                            </Badge>
                        </div>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {machine.description[currentLocale]}
                        </p>
                    </div>

                    <Separator />

                    {/* Features */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">{t('features')}</h3>
                        <ul className="space-y-3">
                            {machine.features[currentLocale].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Specs Table */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">{t('specs')}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="font-medium">{t('speed')}</TableCell>
                                        <TableCell className="text-right text-muted-foreground">{machine.specs.speed}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">{t('power')}</TableCell>
                                        <TableCell className="text-right text-muted-foreground">{machine.specs.power}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">{t('size')}</TableCell>
                                        <TableCell className="text-right text-muted-foreground">{machine.specs.size}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="font-medium">{t('weight')}</TableCell>
                                        <TableCell className="text-right text-muted-foreground">{machine.specs.weight}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    {/* Call to Action */}
                    <div className="pt-4">
                        <Button size="lg" className="w-full text-lg h-12">
                            {t('getQuote')}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
