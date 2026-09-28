import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { SiteChrome } from './SiteChrome'
import { SmoothScroll } from './SmoothScroll'

/**
 * Home keeps CodePen SiteChrome; project detail uses the quieter Header/Footer
 * so pages stay readable and spacious (not stacked chrome-on-chrome).
 */
export function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <SmoothScroll enabled={!isHome}>
      <div
        className={[
          'flex min-h-screen flex-col antialiased transition-[background-color] duration-500',
          isHome
            ? 'bg-[var(--sand,#fdfaf5)]'
            : 'bg-ivory font-[family-name:var(--font-sans)] text-charcoal',
        ].join(' ')}
      >
        {isHome ? <SiteChrome /> : <Header />}
        <main
          className={[
            'w-full flex-1 transition-[background-color,padding] duration-500',
            isHome ? 'bg-transparent p-0' : 'bg-ivory pt-20',
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
