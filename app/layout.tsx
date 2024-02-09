import type { Metadata } from 'next';
import { Livvic } from 'next/font/google';
import './globals.css';
import Navbar from './ui/navbar';

const livvic = Livvic({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'My Team | Home'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${livvic.className} bg-midnightGreen antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
