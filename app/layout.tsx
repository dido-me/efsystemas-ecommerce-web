import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeModeScript } from 'flowbite-react'
import NavbarPublic from '@app/components/NavbarPublic.component'
import FooterPublic from '@app/components/FooterPublic.component'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EF SYSTEMAS E.I.R.L.',
  description: 'EF SYSTEMAS E.I.R.L. - Venta de productos de tecnología'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <NavbarPublic />
        {children}
        <FooterPublic />
      </body>
    </html>
  )
}
