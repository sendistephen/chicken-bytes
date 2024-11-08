import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import Navbar from '@/components/navbar/navbar';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Chicken bytes',
  description: 'Your favorites in one place',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className='flex h-full min-h-screen flex-col'>
          <Navbar />
          {/* MAIN CONTENT PAGES*/}
          <div className='mb-10 flex-1'>{children}</div>
        </div>
      </body>
    </html>
  );
}
// container mx-auto  px-10
