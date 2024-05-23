import Footer from './components/Footer';
import Header from './components/Header';

import './globals.css';

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Juan R. Cifuentes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  )
}