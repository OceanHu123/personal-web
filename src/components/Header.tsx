import { NavLink, Link } from 'react-router-dom'
import { site } from '../content/site'
import { Icon } from './Icon'

const navClass = ({ isActive }: { isActive: boolean }) =>
  [
    'px-3 py-1.5 rounded-lg transition-colors font-[family-name:var(--font-sans)] text-[15px] leading-6',
    isActive
      ? 'text-accent font-semibold bg-accent-soft/35'
      : 'text-taupe hover:text-charcoal hover:bg-white/45',
  ].join(' ')

type HeaderProps = {
  /** Float over full-bleed home panels without solid dashboard chrome */
  overlay?: boolean
}

export function Header({ overlay = false }: HeaderProps) {
  return (
    <header
      className={[
        'fixed top-0 left-0 z-50 w-full transition-[background-color,box-shadow,border-color,backdrop-filter] duration-500',
        overlay
          ? 'header-overlay border-b border-transparent shadow-none backdrop-blur-md'
          : 'border-b border-border/60 bg-ivory/85 shadow-[0_4px_20px_-10px_rgba(60,48,35,0.05)] backdrop-blur-md',
      ].join(' ')}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:h-20 md:px-8">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="group font-[family-name:var(--font-sans)] text-[15px] font-semibold tracking-tight text-charcoal transition-colors duration-300 hover:text-accent md:text-[16px]"
          >
            {site.brand}
          </Link>
          <span className="hidden items-center rounded-full border border-border/50 bg-white/40 px-2.5 py-1 text-[11px] font-medium tracking-[0.04em] text-taupe sm:inline-flex">
            {site.draftBadge}
          </span>
        </div>

        <div className="flex items-center gap-3 md:gap-5">
          <nav className="flex items-center gap-1 md:gap-2" aria-label="主导航">
            <NavLink to="/" end className={navClass}>
              首页
            </NavLink>
            <a
              href="/#projects"
              onClick={(e) => {
                if (window.location.pathname !== '/') return
                e.preventDefault()
                const prefersReduced = window.matchMedia(
                  '(prefers-reduced-motion: reduce)',
                ).matches
                if (prefersReduced) {
                  document
                    .getElementById('projects')
                    ?.scrollIntoView({ behavior: 'smooth' })
                  return
                }
                window.scrollTo({
                  top: 2 * window.innerHeight,
                  behavior: 'smooth',
                })
              }}
              className="rounded-lg px-3 py-1.5 font-[family-name:var(--font-sans)] text-[15px] leading-6 text-taupe transition-colors hover:bg-white/45 hover:text-charcoal"
            >
              项目
            </a>
          </nav>

          <div className="hidden items-center gap-1.5 rounded-full border border-border/40 bg-white/35 px-3 py-1 md:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
            <span className="text-[11px] font-medium tracking-[0.04em] text-taupe">
              {site.availableLabel}
            </span>
          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white">
            <Icon name="person" size={18} />
          </div>
        </div>
      </div>
    </header>
  )
}
