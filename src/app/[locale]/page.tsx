import { useTranslations } from 'next-intl';

export default function HomePage() {
    const t = useTranslations('Index');

    return (
        <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                {t('title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-[600px]">
                {t('description')}
            </p>
            <div className="flex gap-4">
                {/* We can add Call to Actions here later */}
            </div>
        </div>
    );
}
