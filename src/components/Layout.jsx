import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import LuxuryBackground from './LuxuryBackground'
import GlobalSchema from './GlobalSchema'

export default function Layout() {
  return (
    <div className="min-h-screen bg-champagne text-text-primary relative">
      <GlobalSchema />
      <LuxuryBackground />
      <div className="relative z-10 isolate flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
