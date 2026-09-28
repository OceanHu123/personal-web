import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { SmoothScroll } from './SmoothScroll'

export function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <SmoothScroll>
      <div
        className={[
          'flex min-h-screen flex-col font-[family-name:var(--font-sans)] text-charcoal antialiased transition-[background-color] duration-500',
          isHome ? 'bg-[var(--home-atmosphere,#FAF7F2)]' : 'bg-ivory',
        ].join(' ')}
      >
        <Header overlay={isHome} />
        <main
          className={[
            'w-full flex-1 transition-[background-color,padding] duration-500',
            isHome
              ? 'bg-transparent pt-0'
              : 'bg-ivory pt-20',
          ].join(' ')}
        >
          <Outlet />
        </main>
        {isHome ? null : <Footer />}
        <ScrollRestoration />
      </div>
    </SmoothScroll>
  )
}
