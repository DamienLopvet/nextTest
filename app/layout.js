'use client'
import './globals.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Provider from './Provider'



export default function RootLayout({ children }) {
  const pathname = usePathname()
  return (

    <html lang="en">

        <Provider>
      <body className='mx-10'>
        { pathname !='/' && <Link href="/"  className="text-2xl text-center border border-blue-400 w-fit h-fit m-4 block p-1 text-blue-500">
        ← &nbsp; To home</Link>}
        {children}
        </body>
          </Provider >
    </html>
  )
}
