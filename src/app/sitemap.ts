import { MetadataRoute } from 'next';
import { machines } from '@/lib/data';

export const baseUrl = 'https://pearlmachine.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const locales = ['en', 'ar', 'tr'];
    const routes = [
        '', // Home
        '/products',
        '/contact',
    ];

    const sitemap: MetadataRoute.Sitemap = [];

    // 1. Add static routes for each locale
    locales.forEach((locale) => {
        routes.forEach((route) => {
            sitemap.push({
                url: `${baseUrl}/${locale}${route}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: route === '' ? 1 : 0.8,
            });
        });
    });

    // 2. Add dynamic product routes for each locale
    machines.forEach((machine) => {
        locales.forEach((locale) => {
            sitemap.push({
                url: `${baseUrl}/${locale}/products/${machine.slug}`,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.9,
            });
        });
    });

    return sitemap;
}
