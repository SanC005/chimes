import Navbar from 'components/navbar/navbar';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'chimes',
  description: 'Created by SanC005',
}

export default function Layout({ children }) {
  const font = inter.className;
  
  return (
    // <html lang="en">
    <div className="">
        <div className="h-16 py-1">
          <Navbar/>
      </div>
      <div className="">
        {children}
      </div>
    </div>
      

    // </html>
  )
}
