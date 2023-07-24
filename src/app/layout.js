import Navbar from '@/components/navbar/navbar'
import './globals.css'
import 'src/styles/navbar.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'chimes',
  description: 'Created by SanC005',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <div className="h-5">
          <Navbar/>
      </div>
      <div className="">
        <body className={inter.className}>{children}</body>
      </div>

    </html>
  )
}
