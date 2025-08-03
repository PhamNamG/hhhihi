import { Metadata } from 'next';

export const pwaConfig: Partial<Metadata> = {
	// Icons and PWA
	icons: {
		icon: [{ url: '/favicon.ico' }],
		shortcut: ['/favicon.ico'],
		// apple: [
		// 	{ url: '/apple-touch-icon.png' },
		// 	{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
		// ],
		// other: [
		// 	{
		// 		rel: 'mask-icon',
		// 		url: '/safari-pinned-tab.svg',
		// 	},
		// ],
	},
	manifest: '/site.webmanifest',
}; 