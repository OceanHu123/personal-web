import { NavLink, Link } from 'react-router-dom'
import { site } from '../content/site'
import { Icon } from './Icon'

const navClass = ({ isActive }: { isActive: boolean }) =>
  [
    'px-3 py-1.5 rounded-lg transition-colors font-[family-name:var(--font-sans)] text-[16px] leading-6',
    isActive
      ? 'text-accent font-semibold bg-accent-soft/40'
      : 'text-taupe hover:text-charcoal hover:bg-stone-soft',
  ].join(' ')

export function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-border/60 bg-ivory/85 shadow-[0_4px_20px_-10px_rgba(60,48,35,0.05)] backdrop-blur-md transition-[background-color,box-shadow] duration-500">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 md:px-8">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="group font-[family-name:var(--font-sans)] text-[16px] font-semibold tracking-tight text-charcoal transition-colors duration-300 hover:text-accent"
          >
            {site.brand}
          </Link>
          <span className="hidden items-center rounded-full border border-border bg-stone px-2.5 py-1 text-[11px] font-medium tracking-[0.04em] text-taupe sm:inline-flex">
            {site.draftBadge}
          </span>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <nav className="flex items-center gap-2 md:gap-4" aria-label="主导航">
            <NavLink to="/" end className={navClass}>
              首页
            </NavLink>
            <a
              href="/#projects"
              className="rounded-lg px-3 py-1.5 font-[family-name:var(--font-sans)] text-[16px] leading-6 text-taupe transition-colors hover:bg-stone-soft hover:text-charcoal"
            >
              项目
            </a>
          </nav>

          <div className="hidden items-center gap-1.5 rounded-full border border-border/70 bg-ivory-soft px-3 py-1 shadow-sm md:flex">
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
