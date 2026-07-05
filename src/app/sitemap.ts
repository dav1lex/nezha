import { MetadataRoute } from 'next';
import { machines } from '@/lib/data';
import { baseUrl, locales } from '@/lib/seo';

export const dynamic = 'force-static';

const lastModified = new Date('2026-07-05');

function alternatesFor(path: string) {
    return {
        languages: {
            en: `${baseUrl}/en${path}`,
            tr: `${baseUrl}/tr${path}`,
            ar: `${baseUrl}/ar${path}`,
            'x-default': `${baseUrl}/en${path}`,
        },
    };
}

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = [
        '', // Home
        '/about',
        '/products',
        '/contact',
    ];

    const sitemap: MetadataRoute.Sitemap = [];

    // 1. Add static routes for each locale
    locales.forEach((locale) => {
        routes.forEach((route) => {
            sitemap.push({
                url: `${baseUrl}/${locale}${route}`,
                lastModified,
                changeFrequency: 'weekly',
                priority: route === '' ? 1 : 0.8,
                alternates: alternatesFor(route),
            });
        });
    });

    // 2. Add dynamic product routes for each locale
    machines.forEach((machine) => {
        locales.forEach((locale) => {
            sitemap.push({
                url: `${baseUrl}/${locale}/products/${machine.slug}`,
                lastModified,
                changeFrequency: 'weekly',
                priority: 0.9,
                alternates: alternatesFor(`/products/${machine.slug}`),
            });
        });
    });

    return sitemap;
}
