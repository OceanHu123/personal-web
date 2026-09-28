import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { SmoothScroll } from './SmoothScroll'

export function Layout() {
  return (
    <SmoothScroll>
      <div className="flex min-h-screen flex-col bg-ivory font-[family-name:var(--font-sans)] text-charcoal antialiased">
        <Header />
        <main className="w-full flex-1 bg-ivory pt-20">
          <Outlet />
        </main>
        <Footer />
        <ScrollRestoration />
      </div>
    </SmoothScroll>
  )
}
