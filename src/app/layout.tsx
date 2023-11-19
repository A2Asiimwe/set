
import Navbar from './components/navigation/navBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import favicon from './favicon.ico'
import Footer from './common/footer_section'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Tours and Travel Website ',
  description: 'Visit Africa',
  icons: [{ rel: 'icon', url: favicon.src }],

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='z-30'>
        <Navbar/>
        </div>
     
        {children}
        <Footer/>
        </body>
    </html>
  )
}
