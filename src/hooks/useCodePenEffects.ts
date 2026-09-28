import { useEffect } from 'react'

/**
 * Mounts CodePen KwNNyjg interaction scripts (cursor follower, nav scroll,
 * reveal, category filter, mobile menu, hero parallax) inside `.codepen-home`.
 * Logic adapted from vendor/codepen-KwNNyjg/js.js — not rewritten from screenshots.
 * Credit: jerora98 / https://codepen.io/jerora98/pen/KwNNyjg
 */
export function useCodePenEffects(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return

    const root = document.documentElement
    root.classList.add('codepen-home')

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const cleanups: Array<() => void> = []

    /* ─── CURSOR (verbatim behavior from pen js.js) ─── */
    const cur = document.getElementById('cur')
    const ring = document.getElementById('cur-ring')
    let mx = 0
    let my = 0
    let rx = 0
    let ry = 0
    let raf = 0

    if (cur && ring && !prefersReduced) {
      const onMove = (e: MouseEvent) => {
        mx = e.clientX
        my = e.clientY
        cur.style.left = `${mx}px`
        cur.style.top = `${my}px`
      }
      document.addEventListener('mousemove', onMove)
      cleanups.push(() => document.removeEventListener('mousemove', onMove))

      const loop = () => {
        rx += (mx - rx) * 0.12
        ry += (my - ry) * 0.12
        ring.style.left = `${rx}px`
        ring.style.top = `${ry}px`
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
      cleanups.push(() => cancelAnimationFrame(raf))

      const hoverables = document.querySelectorAll('.codepen-home a, .codepen-home button')
      hoverables.forEach((el) => {
        const enter = () => {
          ring.style.width = '46px'
          ring.style.height = '46px'
          ring.style.opacity = '.55'
        }
        const leave = () => {
          ring.style.width = '30px'
          ring.style.height = '30px'
          ring.style.opacity = '.3'
        }
        el.addEventListener('mouseenter', enter)
        el.addEventListener('mouseleave', leave)
        cleanups.push(() => {
          el.removeEventListener('mouseenter', enter)
          el.removeEventListener('mouseleave', leave)
        })
      })
    } else if (cur && ring) {
      cur.style.display = 'none'
      ring.style.display = 'none'
      document.body.style.cursor = 'auto'
    }

    /* ─── NAV SCROLL ─── */
    const nav = document.getElementById('main-nav')
    if (nav) {
      const onScroll = () => {
        nav.classList.toggle('scrolled', window.scrollY > 60)
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
      cleanups.push(() => window.removeEventListener('scroll', onScroll))
    }

    /* ─── SCROLL REVEAL ─── */
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            window.setTimeout(() => e.target.classList.add('visible'), i * 55)
          }
        })
      },
      { threshold: 0.07 },
    )
    document
      .querySelectorAll('.codepen-home .reveal, .codepen-home .reveal-left')
      .forEach((el) => obs.observe(el))
    cleanups.push(() => obs.disconnect())

    /* ─── CATEGORY FILTER ─── */
    const filterBtns = document.querySelectorAll<HTMLElement>(
      '.codepen-home .cat-btn',
    )
    const menuCards = document.querySelectorAll<HTMLElement>(
      '.codepen-home .menu-card',
    )
    const onFilterClick = (btn: HTMLElement) => {
      filterBtns.forEach((b) => b.classList.remove('active'))
      btn.classList.add('active')
      const filter = btn.dataset.filter
      menuCards.forEach((card) => {
        const match = filter === 'all' || card.dataset.cat === filter
        if (match) {
          card.classList.remove('hidden')
          card.style.animation = 'none'
          void card.offsetHeight
          card.style.animation = 'card-in .35s both'
        } else {
          card.classList.add('hidden')
        }
      })
    }
    filterBtns.forEach((btn) => {
      const handler = () => onFilterClick(btn)
      btn.addEventListener('click', handler)
      cleanups.push(() => btn.removeEventListener('click', handler))
    })

    /* ─── NAV CAT LINKS ─── */
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(
      '.codepen-home .nav-cats a[data-cat]',
    )
    const catMap: Record<string, string> = {
      profile: 'skill',
      projects: 'project',
      setbite: 'project',
      contact: 'link',
    }
    navLinks.forEach((a) => {
      const handler = (e: Event) => {
        e.preventDefault()
        navLinks.forEach((l) => l.classList.remove('active'))
        a.classList.add('active')
        const cat = a.dataset.cat || ''
        if (cat === 'contact') {
          document.getElementById('info')?.scrollIntoView({ behavior: 'smooth' })
          return
        }
        if (cat === 'setbite') {
          document.getElementById('special')?.scrollIntoView({ behavior: 'smooth' })
          return
        }
        const filterVal = catMap[cat]
        filterBtns.forEach((b) => {
          if (b.dataset.filter === filterVal) onFilterClick(b)
        })
        document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })
      }
      a.addEventListener('click', handler)
      cleanups.push(() => a.removeEventListener('click', handler))
    })

    /* ─── MOBILE MENU ─── */
    const mobileNav = document.getElementById('mobileNav')
    let menuOpen = false
    const closeMobileNav = () => {
      menuOpen = false
      mobileNav?.classList.remove('open')
      window.setTimeout(() => {
        if (mobileNav) mobileNav.style.display = 'none'
      }, 300)
      document.body.style.overflow = ''
      const spans = document
        .querySelector('.codepen-home .hamburger')
        ?.querySelectorAll('span')
      spans?.[0] && (spans[0].style.transform = '')
      spans?.[1] && (spans[1].style.opacity = '')
      spans?.[2] && (spans[2].style.transform = '')
    }
    const toggleMenu = (btn: HTMLElement) => {
      menuOpen = !menuOpen
      const spans = btn.querySelectorAll('span')
      if (menuOpen && mobileNav) {
        mobileNav.style.display = 'flex'
        requestAnimationFrame(() => mobileNav.classList.add('open'))
        spans[0] && (spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)')
        spans[1] && (spans[1].style.opacity = '0')
        spans[2] &&
          (spans[2].style.transform = 'rotate(-45deg) translate(4px,-4px)')
        document.body.style.overflow = 'hidden'
      } else {
        closeMobileNav()
      }
    }
    const hamburger = document.querySelector<HTMLElement>(
      '.codepen-home .hamburger',
    )
    if (hamburger) {
      const handler = () => toggleMenu(hamburger)
      hamburger.addEventListener('click', handler)
      cleanups.push(() => hamburger.removeEventListener('click', handler))
    }
    document
      .querySelectorAll<HTMLElement>('.codepen-home .mobile-nav a')
      .forEach((a) => {
        const handler = () => closeMobileNav()
        a.addEventListener('click', handler)
        cleanups.push(() => a.removeEventListener('click', handler))
      })
    // expose for any leftover onclick attrs (none expected in React)
    ;(window as unknown as { toggleMenu?: typeof toggleMenu }).toggleMenu =
      toggleMenu
    ;(window as unknown as { closeMobileNav?: typeof closeMobileNav }).closeMobileNav =
      closeMobileNav
    cleanups.push(() => {
      delete (window as unknown as { toggleMenu?: unknown }).toggleMenu
      delete (window as unknown as { closeMobileNav?: unknown }).closeMobileNav
    })

    /* ─── PARALLAX HERO ─── */
    if (!prefersReduced) {
      const onParallax = (e: MouseEvent) => {
        const bg = document.querySelector<HTMLElement>(
          '.codepen-home .hero-bg-img',
        )
        if (!bg) return
        const x = (e.clientX / window.innerWidth - 0.5) * 14
        const y = (e.clientY / window.innerHeight - 0.5) * 10
        bg.style.transform = `translate(${x}px, ${y}px) scale(1.08)`
      }
      document.addEventListener('mousemove', onParallax)
      cleanups.push(() => document.removeEventListener('mousemove', onParallax))
    }

    return () => {
      cleanups.forEach((fn) => fn())
      root.classList.remove('codepen-home')
      document.body.style.overflow = ''
      document.body.style.cursor = ''
    }
  }, [enabled])
}
