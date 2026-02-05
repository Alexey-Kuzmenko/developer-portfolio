/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.ok-dev.pp.ua',
                port: '',
                pathname: '/**',
            }
        ],
    }
};

module.exports = nextConfig;
