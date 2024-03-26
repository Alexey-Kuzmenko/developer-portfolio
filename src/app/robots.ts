import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: 'Googlebot',
                allow: ['/'],
                disallow: ['/nogooglebot/', '/api/', '/private/']
            },
            {
                userAgent: 'Applebot',
                allow: ['/'],
                disallow: ['/api/', '/private/']
            },
            {
                userAgent: ['Bingbot'],
                disallow: ['/']
            },
        ],
        sitemap: 'https://ok-dev.pp.ua/sitemap.xml'
    };
}