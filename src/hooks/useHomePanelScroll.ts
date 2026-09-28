import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/** Atmosphere stops — Warm Clear Tech (ivory → stone → teal wash → stone → ivory). */
export const PANEL_ATMOSPHERES = [
  '#FAF7F2',
  '#F3EEE6',
  '#E7F4F0',
  '#F0EBE3',
  '#FAF7F2',
] as const

/**
 * Full-viewport panel rise / wipe via ScrollTrigger scrub.
 * prefers-reduced-motion → static stacked 100vh sections (no pin).
 */
export function useHomePanelScroll(panelCount: number) {
  const rootRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    const stage = stageRef.current
    if (!root || !stage || panelCount < 2) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    const panels = Array.from(
      stage.querySelectorAll<HTMLElement>('[data-home-panel]'),
    )
    if (panels.length < 2) return

    document.documentElement.classList.add('home-fullscreen')
    document.documentElement.style.setProperty(
      '--home-atmosphere',
      PANEL_ATMOSPHERES[0],
    )

    if (prefersReduced) {
      panels.forEach((panel, i) => {
        gsap.set(panel, {
          yPercent: 0,
          zIndex: i + 1,
          autoAlpha: 1,
        })
      })
      const onScroll = () => {
        const rect = root.getBoundingClientRect()
        const total = root.offsetHeight - window.innerHeight
        const progress = total <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / total))
        const idx = Math.min(
          PANEL_ATMOSPHERES.length - 1,
          Math.floor(progress * (PANEL_ATMOSPHERES.length - 0.001)),
        )
        document.documentElement.style.setProperty(
          '--home-atmosphere',
          PANEL_ATMOSPHERES[idx],
        )
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      onScroll()
      return () => {
        window.removeEventListener('scroll', onScroll)
        document.documentElement.classList.remove('home-fullscreen')
        document.documentElement.style.removeProperty('--home-atmosphere')
      }
    }

    panels.forEach((panel, i) => {
      gsap.set(panel, {
        yPercent: i === 0 ? 0 : 100,
        zIndex: i + 1,
      })
    })

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: root,
        start: 'top top',
        end: () => `+=${(panels.length - 1) * window.innerHeight}`,
        pin: stage,
        scrub: 0.65,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress
          const max = PANEL_ATMOSPHERES.length - 1
          const scaled = p * max
          const i = Math.floor(scaled)
          const t = scaled - i
          const a = gsap.utils.clamp(0, max, i)
          const b = gsap.utils.clamp(0, max, i + 1)
          const color = gsap.utils.interpolate(
            PANEL_ATMOSPHERES[a],
            PANEL_ATMOSPHERES[b],
            t,
          )
          document.documentElement.style.setProperty('--home-atmosphere', color)
        },
      },
    })

    panels.forEach((panel, i) => {
      if (i === 0) return
      const prev = panels[i - 1]
      // Incoming panel rises from below; previous drifts up slightly (push feel).
      tl.to(panel, { yPercent: 0, duration: 1 }, i - 1)
      tl.to(prev, { yPercent: -18, duration: 1 }, i - 1)
    })

    ScrollTrigger.refresh()

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
      document.documentElement.classList.remove('home-fullscreen')
      document.documentElement.style.removeProperty('--home-atmosphere')
      gsap.set(panels, { clearProps: 'transform,zIndex' })
    }
  }, [panelCount])

  return { rootRef, stageRef }
}
