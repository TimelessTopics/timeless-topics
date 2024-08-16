import { siteConfig } from '@/lib/constants'
import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: siteConfig.name,
        short_name: siteConfig.name,
        description: siteConfig.description,
        start_url: '/',
        display: 'standalone',
        background_color: '#010101',
        theme_color: '#010101',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
        orientation: "portrait",
    }
}