import { useTranslations } from 'next-intl';
import { ProductCard } from '@/components/product-card';
import { machines } from '@/lib/data';

export default function ProductsPage() {
    const t = useTranslations('Products');

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold tracking-tight mb-2">{t('title')}</h1>
                <p className="text-muted-foreground">{t('description')}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {machines.map((machine) => (
                    <ProductCard key={machine.id} machine={machine} />
                ))}
            </div>
        </div>
    );
}
