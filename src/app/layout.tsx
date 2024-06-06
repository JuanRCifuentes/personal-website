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
      <body className='dark:bg-navy dark:text-soft-gray'>
        <Header/>
        <div className='text-center sm:text-left mx-10 my-10 lg:mx-20 xl:mx-40'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}