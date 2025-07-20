import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Source_Sans_3 } from 'next/font/google';
import type React from 'react';
import './globals.css';
import type { Viewport } from 'next';

const ubuntu = Source_Sans_3({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'UniConnect - Student Social Marketplace',
  description:
    'Connect, trade, and discover skills with fellow university students',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ubuntu.className} bg-[#F5F5F5] dark:bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
