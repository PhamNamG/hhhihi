import { Metadata } from 'next';

// Site Configuration
const SITE_CONFIG = {
  name: 'Hoạt Hình Trung Quốc',
  url: process.env.NEXT_PUBLIC_URL || 'https://hh3dtq.site',
  description: 'HH3D tuyển chọn phim bộ, phim lẻ hoạt hình trung quốc 3D viêt sub mới nhất với đồ họa đẹp mắt, nội dung lôi cuốn, hấp dẫn, phim xem nhanh và chất lượng HD.',
  keywords: [
    'hoạt hình trung quốc',
    'anime trung quốc',
    'phim hoạt hình 3D',
    'donghua',
    'hoạt hình vietsub',
    'anime vietsub',
    'phim hoạt hình online',
    'HH3D',
    'HH3DTQ'
  ],
  social: {
    facebook: 'https://facebook.com/phanhhh3d',
    tiktok: 'https://tiktok.com/@tieu_loli'
  }
};

// Default Metadata Configuration
export const defaultMetadata: Metadata = {
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
        url: '/og-image.jpg',
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
    images: ['/og-image.jpg'],
  },
  
  // Site Verification
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION1,
  },
  
  // Icons and PWA
  icons: {
    icon: [{ url: '/favicon.ico' }],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png' },
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  
  // Viewport and Theme
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#FFD875',
}; 