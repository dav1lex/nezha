import { useTranslations } from 'next-intl';
import { ContactForm } from '@/components/contact-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

export const metadata = {
    title: 'Contact Us | Nezha',
    description: 'Get in touch with our expert team for inquiries about our pearl attaching machines.',
};

export default function ContactPage() {
    const t = useTranslations('Contact');

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">{t('title')}</h1>
                    <p className="text-lg text-muted-foreground">{t('description')}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div className="md:col-span-1 space-y-6">
                        <Card>
                            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Phone</h3>
                                    <p className="text-sm text-muted-foreground">+90 555 123 4567</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Email</h3>
                                    <p className="text-sm text-muted-foreground">info@pearlmachine.com</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                <div className="p-3 bg-primary/10 rounded-full text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">Address</h3>
                                    <p className="text-sm text-muted-foreground">Istanbul, Turkey</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form */}
                    <div className="md:col-span-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>{t('form.submit')}</CardTitle>
                                <CardDescription>
                                    Fill out the form below and we will get back to you within 24 hours.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ContactForm />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
