import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Metadata } from 'next';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

// Metadata needs to be exported this way in Next.js 13+
export const metadata: Metadata = {
  title: 'Iqbal Kurniawan - Website and Mobile Developer',
  description:
    'Web and Mobile Developer based in Tangerang, Indonesia, specializing in React, Vue, React Native, and TypeScript. Passionate about frontend development, responsive design, and building cool things with code.',
  metadataBase: new URL('https://github.com/iqbalk96'),
  openGraph: {
    type: 'website',
    title: 'Iqbal Kurniawan - Web Developer',
    description:
      'Web and Mobile Developer based in Tangerang, Indonesia, specializing in React, Vue, React Native, and TypeScript. Passionate about frontend development, responsive design, and building cool things with code.',
    url: 'https://github.com/iqbalk96/sukangopi.dev',
    siteName: 'M Iqbal Kurniawan',
    images: [
      {
        url: 'https://github.com/iqbalk96/sukangopi.dev/iqbal-kurniawan.png',
        width: 1200,
        height: 630,
        alt: 'M Iqbal Kurniawan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M Iqbal Kurniawan',
    description:
      'Web and Mobile Developer based in Tangerang, Indonesia, specializing in React, Vue, React Native, and TypeScript. Passionate about frontend development, responsive design, and building cool things with code.',
    images: ['https://github.com/iqbalk96/sukangopi.dev/sukangopi.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
