import { Inter } from 'next/font/google'
import './globals.css'
// import Navbar from './boundary/Navbar'
import Footer from './boundary/Footer'
import Copy from './boundary/Copy'
import Navbar from './bound/Navbar'




export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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