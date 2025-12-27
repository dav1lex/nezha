import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.pearlmachine.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'pearlmachine.com',
                pathname: '/**',
            }
        ],
    },
    // Optional: add trailing slash configuration if needed for certain SEO setups
    // trailingSlash: true,
};

export default withNextIntl(nextConfig);
