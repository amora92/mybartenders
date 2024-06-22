import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Mybartenders.co.uk Homepage",
    template:"%s | Mybartenders.co.uk"
  },
  description: 'Mybartenders.co.uk',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
        <Navbar />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  )
}