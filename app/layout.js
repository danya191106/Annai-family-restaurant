import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Annai Family Restaurant | Tiruchengode',
  description: 'Good Food, Happy Family, Together Always. Authentic taste in Tiruchengode.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="5SHJGdKFBMUSuEOpLsU3XQRLMx71xV4obDgDnPfe9og" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}