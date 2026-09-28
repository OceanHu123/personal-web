import { Link } from 'react-router-dom'
import { site } from '../content/site'

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-border/60 bg-ivory-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row md:px-8">
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:gap-4 sm:text-left">
          <span className="text-[11px] tracking-[0.04em] text-taupe">
            {site.footerCopy}
          </span>
          <span className="hidden text-[11px] text-taupe sm:inline">·</span>
          <span className="text-[11px] tracking-[0.08em] text-stone-deep uppercase">
            {site.footerNote}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="text-[11px] tracking-[0.04em] text-taupe transition-colors hover:text-accent"
          >
            首页
          </Link>
          <a
            href="/#menu"
            className="text-[11px] tracking-[0.04em] text-taupe transition-colors hover:text-accent"
          >
            作品集
          </a>
          <Link
            to="/projects/setbite"
            className="text-[11px] tracking-[0.04em] text-taupe transition-colors hover:text-accent"
          >
            RepPlate食练记
          </Link>
          <div className="h-1.5 w-1.5 rounded-full bg-stone" />
          <span className="text-[11px] tracking-[0.04em] text-taupe">
            LIGHT ARCHETYPE
          </span>
        </div>
      </div>
    </footer>
  )
}
