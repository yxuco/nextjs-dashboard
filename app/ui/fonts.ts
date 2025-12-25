import { Inter, Lusitana } from 'next/font/google';

// Next.js font optimization loads fonts from Google Fonts automatically and
// optimizes loading with preconnect, preload, and font-display: swap.
export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] });