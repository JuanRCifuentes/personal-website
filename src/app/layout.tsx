"use client";

import Header from './components/Header';

import './globals.css';

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
      </body>
    </html>
  )
}