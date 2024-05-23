import Footer from './components/Footer';
import Header from './components/Header';

import './globals.css';

import type { Metadata } from 'next'
import { Roboto_Flex } from 'next/font/google'

const roboto = Roboto_Flex({
  subsets: ['latin'],
})
 
export const metadata: Metadata = {
  title: 'Juan R. Cifuentes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  )
}