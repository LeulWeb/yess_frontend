import { Inter } from 'next/font/google'
import './globals.css'
// import Navbar from './boundary/Navbar'
import Footer from './boundary/Footer'
import Copy from './boundary/Copy'
import Navbar from './bound/Navbar'




export const metadata = {
  title: 'YESS Ethiopia',
  description: 'Youth and Education Support Service',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Copy />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js"></script></body>
    </html>
  )
}
