import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { Metadata } from 'next';
import { absoluteUrl, baseUrl, company, languageAlternates } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const title = locale === 'tr' ? 'İletişim' : locale === 'ar' ? 'اتصل بنا' : 'Contact Pearl Machine';
    const description = locale === 'tr'
        ? "Otomatik inci ve trok çakma makineleri için Pearl Machine ile iletişime geçin. Model, ülke ve üretim ihtiyacınızı gönderin."
        : locale === 'ar'
            ? 'تواصل مع Pearl Machine بخصوص آلات تركيب اللؤلؤ والدبابيس الأوتوماتيكية. أرسل الموديل والبلد واحتياج الإنتاج.'
            : 'Contact Pearl Machine for automatic pearl and stud attaching machines. Send your model interest, country and production requirements.';

    return {
        metadataBase: new URL(baseUrl),
        title,
        description,
        alternates: {
            canonical: `/${locale}/contact`,
            languages: languageAlternates('/contact'),
        },
        openGraph: {
            title: `${title} | Pearl Machine`,
            description,
            url: absoluteUrl(`/${locale}/contact`),
        },
    };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);

    const t = await getTranslations('Contact');

    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://pearlmachine.com/#local-business',
        name: company.name,
        url: absoluteUrl('/'),
        image: absoluteUrl('/nt-906-nw_1.jpg'),
        telephone: company.phoneUri,
        email: company.email,
        priceRange: 'Contact for quote',
        openingHours: [
            'Mo-Fr 09:00-19:00',
            'Sa 09:00-17:00',
        ],
        address: {
            '@type': 'PostalAddress',
            streetAddress: company.streetAddress,
            addressLocality: company.locality,
            addressRegion: company.region,
            postalCode: company.postalCode,
            addressCountry: company.country,
        },
        sameAs: [company.instagram, company.facebook],
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <div className="max-w-5xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-5xl font-black tracking-tight">{t('title')}</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t('description')}</p>
                </div>

                {/* Contact Info - Horizontal Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors">
                        <div className="p-3 bg-background rounded-full text-primary mb-4 shadow-sm">
                            <Phone className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-1">{t('phoneLabel')}</h3>
                        <a href={`tel:${company.phoneUri}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                            {t('phone')}
                        </a>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors">
                        <div className="p-3 rounded-full bg-[#25D366] text-white mb-4 shadow-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="0"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-6 w-6"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </div>
                        <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                        <a href={company.whatsapp} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                            Message Us
                        </a>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors">
                        <div className="p-3 bg-background rounded-full text-primary mb-4 shadow-sm">
                            <Mail className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-1">{t('emailLabel')}</h3>
                        <a href={`mailto:${t('email')}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                            {t('email')}
                        </a>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary/20 hover:bg-secondary/40 transition-colors">
                        <div className="p-3 bg-background rounded-full text-primary mb-4 shadow-sm">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-1">{t('addressLabel')}</h3>
                        <p className="text-muted-foreground text-sm max-w-[200px]">
                            {t('address')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
