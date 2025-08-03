import { Metadata } from 'next';
import { SITE_CONFIG } from './site';

export const seoConfig: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    template: `%s | ${SITE_CONFIG.name}`,
    default: `${SITE_CONFIG.name} - Xem Hoạt Hình 3D Anime Vietsub Online`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  
  // SEO Optimization
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Social Media
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: 'https://res.cloudinary.com/daz3lejjo/image/upload/f_webp/v1732691384/hoa-giang-ho-chi-bat-luong-nhan-phan-6-2-1_qkxcfi.jpg',
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: ['https://res.cloudinary.com/daz3lejjo/image/upload/f_webp/v1732691384/hoa-giang-ho-chi-bat-luong-nhan-phan-6-2-1_qkxcfi.jpg'],
  },
  verification: {
    google: [
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION1 || '',
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION2 || ''
      // Add more Google verification codes here if needed
    ],
  },
}; 