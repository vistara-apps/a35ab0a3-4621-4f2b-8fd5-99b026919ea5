import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { ThemeProvider } from './components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Vitalik's Wisdom",
  description: 'Your dose of Web3 insights, instantly.',
  openGraph: {
    title: "Vitalik's Wisdom",
    description: 'Your dose of Web3 insights, instantly.',
    images: ['/og-image.png'],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': '/api/og',
    'fc:frame:button:1': 'Get Random Quote',
    'fc:frame:post_url': '/api/frame',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
