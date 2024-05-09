import { MetadataRoute } from 'next';

/**
 * Returns a manifest object.
 *
 * @returns {MetadataRoute.Manifest} - The web manifest object
 */
export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Social Security Scotland: Prototype Toolkit',
        short_name: 'Prototype Toolkit',
        description: '',
        start_url: '/',
        display: 'browser',
        background_color: '#ffffff',
        theme_color: '#0065bd',
        icons: [
            {
                src: '/images/pinned.svg',
                purpose: 'monochrome',
                type: 'image/svg+xml',
            },
            {
                src: '/images/favicon.png',
                sizes: '16x16',
                type: 'image/png',
            },
            {
                src: '/images/favicon@2x.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                src: '/images/favicon@3x.png',
                sizes: '48x48',
                type: 'image/png',
            },
            {
                src: '/images/favicon.ico',
                sizes: '16x16 32x32 48x48',
                type: 'image/x-icon',
            },
            {
                src: '/images/touch-icon/iphone.png',
                sizes: '60x60',
                type: 'image/png',
            },
            {
                src: '/images/touch-icon/ipad.png',
                sizes: '76x76',
                type: 'image/png',
            },
            {
                src: '/images/touch-icon/iphone@2x.png',
                sizes: '120x120',
                type: 'image/png',
            },
            {
                src: '/images/touch-icon/ipad@2x.png',
                sizes: '152x152',
                type: 'image/png',
            },
            {
                src: '/images/touch-icon/iphone@3x.png',
                sizes: '180x180',
                type: 'image/png',
            },
            {
                src: '/images/touch-icon/ipad@3x.png',
                sizes: '228x228',
                type: 'image/png',
            },
        ],
    };
}
