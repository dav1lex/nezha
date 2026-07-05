import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
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
            },
        ],
    },
    reactStrictMode: true,
};

export default withNextIntl(nextConfig);
