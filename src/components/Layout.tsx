import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import { SiteChrome } from './SiteChrome'
import { SmoothScroll } from './SmoothScroll'
import { site } from '../content/site'

export function Layout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <SmoothScroll enabled={!isHome}>
      <div
        className={[
          'flex min-h-screen flex-col antialiased transition-[background-color] duration-500',
          'bg-[var(--sand,#fdfaf5)]',
          !isHome ? 'font-[family-name:var(--font-sans)] text-charcoal' : '',
        ].join(' ')}
      >
        <SiteChrome />
        <main
          className={[
            'w-full flex-1 transition-[padding] duration-500',
            isHome ? 'bg-transparent p-0' : 'bg-transparent pt-[88px]',
          ].join(' ')}
        >
          <Outlet />
        </main>
        {isHome ? null : (
          <footer className="border-t border-[rgba(44,44,42,0.07)] bg-[#f5efe0] px-6 py-10">
            <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <div className="font-[family-name:var(--font-sans)] text-[22px] font-black tracking-tight text-[#2c2c2a]">
                  胡馨月<span className="text-[#1d9e75]"> / Portfolio</span>
                </div>
                <p className="mt-2 text-[13px] text-[#706e68]">
                  {site.footerCopy} · {site.signature}
                </p>
              </div>
              <ul className="flex flex-wrap gap-5 text-[13px] text-[#706e68]">
                <li>
                  <a className="hover:text-[#1d9e75]" href="/#special">
                    RepPlate食练记
                  </a>
                </li>
                <li>
                  <a className="hover:text-[#1d9e75]" href="/projects/bilingual">
                    Bilingual
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[#1d9e75]"
                    href="https://github.com/OceanHu123"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[#1d9e75]"
                    href={site.profile.resumeHref}
                    download
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        )}
        <ScrollRestoration />
      </div>
    </SmoothScroll>
  )
}
