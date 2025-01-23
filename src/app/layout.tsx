import type { Metadata } from 'next';
import { Alegreya, Mulish } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
});

const alegreya = Alegreya({
  subsets: ['latin'],
  variable: '--font-alegreya',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${mulish.variable} ${alegreya.variable}`}>
        <header>
          <nav>
            <div>
              <Link href='/explore'>LOGO</Link>{' '}
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
