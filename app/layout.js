'use client'
import './globals.css'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import Provider from './Provider'
const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  const pathname = usePathname()
  return (

    <html lang="en">

      <body className={inter.className}>
        <Provider />
        { pathname !='/' && <Link href="/"  className="text-2xl text-center border border-blue-400 w-fit h-fit m-4 block p-1 text-blue-500">
        ← &nbsp; To home</Link>}
        {children}
          <Provider />
        </body>
    </html>
  )
}
