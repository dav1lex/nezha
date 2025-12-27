import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { ArrowRight, CheckCircle2, Award, Globe2, ShieldCheck, Factory, Zap, Target } from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import { machines } from '@/lib/data';

export default function HomePage() {
    const t = useTranslations('Index');
    const tNav = useTranslations('Navbar');
    const tProd = useTranslations('Products');

    return (
        <div className="flex flex-col gap-24 pb-20">
            {/* HERO SECTION */}
            <section className="relative pt-24 pb-36 overflow-hidden">
                {/* Background Decorative Gradient */}
                <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 animate-pulse" />
                <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4" />

                <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <Award className="h-3.5 w-3.5" />
                        {t('heroBadge')}
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 max-w-5xl text-balance leading-[0.95]">
                        <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
                            {t('heroTitle')}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-[800px] mb-12 leading-relaxed font-medium">
                        {t('heroSubtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 items-center">
                        <Button size="lg" asChild className="text-lg px-10 h-16 rounded-2xl shadow-2xl shadow-primary/20 hover:scale-105 transition-all">
                            <Link href="/products" className="flex items-center gap-2">
                                {t('browseMachines')}
                                <ArrowRight className="h-6 w-6 rtl:rotate-180" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild className="text-lg px-10 h-16 rounded-2xl border-2 hover:bg-secondary/50">
                            <Link href="/contact">
                                {tNav('contact')}
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* CORE FEATURES SECTION */}
            <section className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Zap,
                            title: t('quality'),
                            desc: t('qualityDesc'),
                            color: "text-amber-500",
                            bgColor: "bg-amber-500/10"
                        },
                        {
                            icon: Globe2,
                            title: t('support'),
                            desc: t('supportDesc'),
                            color: "text-blue-500",
                            bgColor: "bg-blue-500/10"
                        },
                        {
                            icon: Target,
                            title: t('experience'),
                            desc: t('experienceDesc'),
                            color: "text-emerald-500",
                            bgColor: "bg-emerald-500/10"
                        },
                    ].map((feature, i) => (
                        <div key={i} className="group flex flex-col items-start p-10 rounded-[2.5rem] bg-card border border-border/50 hover:border-primary/20 transition-all hover:shadow-2xl hover:shadow-primary/5">
                            <div className={`p-4 rounded-2xl ${feature.bgColor} ${feature.color} mb-8 group-hover:scale-110 transition-transform`}>
                                <feature.icon className="h-8 w-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FEATURED PRODUCTS */}
            <section className="container mx-auto px-4 md:px-8 space-y-12">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 text-left">
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

            {/* INDUSTRIAL TRUST SECTION */}
            <section className="bg-secondary/20 py-24">
                <div className="container mx-auto px-4 md:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-12 uppercase tracking-[0.2em] text-muted-foreground/60">{t('whyChooseUs')}</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
                        <div className="flex items-center justify-center font-black text-2xl tracking-tighter italic">TRUSTED</div>
                        <div className="flex items-center justify-center font-black text-2xl tracking-tighter italic">RELIABLE</div>
                        <div className="flex items-center justify-center font-black text-2xl tracking-tighter italic">PRECISE</div>
                        <div className="flex items-center justify-center font-black text-2xl tracking-tighter italic">GLOBAL</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
