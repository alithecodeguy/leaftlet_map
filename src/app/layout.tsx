// types
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

// styles
import './styles/globals.css';
import { iransansxFaFontFamily } from './styles/fonts/fonts';

export const metadata: Metadata = {
  title: 'نقشه',
  description: 'simple map',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${iransansxFaFontFamily.variable}`}>
      <body className="bg-bg_pattern bg-opacity-15 bg-[length:200px_200px] bg-left-bottom bg-no-repeat font-iransansx_fa">
        {children}
      </body>
    </html>
  );
}
