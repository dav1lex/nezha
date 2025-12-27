import { useTranslations } from 'next-intl';
import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: locale === 'tr' ? 'İletişim' : locale === 'ar' ? 'اتصل بنا' : 'Contact Us',
        description: 'Get in touch with Pearl Machine for industrial machinery inquiries.',
    };
}

export default function ContactPage() {
    const t = useTranslations('Contact');

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-5xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h1 className="text-5xl font-black tracking-tight">{t('title')}</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t('description')}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <Card className="border-border/50 bg-card/50 backdrop-blur">
                            <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                                <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{t('phoneLabel')}</h3>
                                    <a href={`tel:${t('phone')}`} className="text-muted-foreground hover:text-primary transition-colors">
                                        {t('phone')}
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-border/50 bg-card/50 backdrop-blur">
                            <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                                <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{t('emailLabel')}</h3>
                                    <a href={`mailto:${t('email')}`} className="text-muted-foreground hover:text-primary transition-colors">
                                        {t('email')}
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-border/50 bg-card/50 backdrop-blur">
                            <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                                <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{t('addressLabel')}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {t('address')}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <Card className="border-border/50 shadow-xl shadow-primary/5">
                            <CardHeader className="space-y-2 p-8">
                                <CardTitle className="text-3xl font-bold">{t('formHeader')}</CardTitle>
                                <CardDescription className="text-lg">
                                    {t('formSubheader')}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="p-8 pt-0">
                                <ContactForm />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
