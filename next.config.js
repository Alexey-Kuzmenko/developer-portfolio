/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp'],
        domains: ['api.ok-dev.pp.ua'],
        // remotePatterns: [
        //     {
        //         protocol: 'https',
        //         hostname: 'api.ok-dev.pp.ua',
        //     }
        // ]
    }
};

module.exports = nextConfig;
