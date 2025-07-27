import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ["/impressum", "/datenschutz"],
        },
        sitemap: process.env.HOST + '/sitemap.xml',
    };
}
