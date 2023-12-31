import './globals.css';
import NextTopLoader from 'nextjs-toploader';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { QueryWrapper } from '@/utils/QueryWrapper';
import { NavBar } from '@/Components/NavBar/NavBar';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Music App',
  description: 'Music App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <QueryWrapper>
          <NextTopLoader />
          {children}
        </QueryWrapper>
      </body>
    </html>
  )
}
