/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    // distDir: 'build',
    images: {
        formats: ['image/webp'],
        domains: ['api.ok-dev.pp.ua'],
    }
};

module.exports = nextConfig;
