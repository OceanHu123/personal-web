import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, useReducedMotion } from 'framer-motion'
import type { GalleryItem } from '../content/projects'

gsap.registerPlugin(ScrollTrigger)

type PhoneGalleryProps = {
  items: GalleryItem[]
  title?: string
  subtitle?: string
}

/** Cohesive horizontal phone-frame showcase for portrait App Store assets. */
export function PhoneGallery({ items, title, subtitle }: PhoneGalleryProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce || !sectionRef.current || !trackRef.current) return
    const ctx = gsap.context(() => {
      gsap.from(trackRef.current!.querySelectorAll('[data-phone]'), {
        opacity: 0,
        y: 36,
        stagger: 0.08,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          once: true,
        },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [reduce, items])

  return (
    <section ref={sectionRef} className="space-y-6">
      {(title || subtitle) && (
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            {title ? (
              <h2 className="text-[28px] leading-9 font-semibold tracking-tight text-charcoal">
                {title}
              </h2>
            ) : null}
            {subtitle ? (
              <p className="mt-1 max-w-2xl text-[14px] leading-[22px] text-taupe">
                {subtitle}
              </p>
            ) : null}
          </div>
          <span className="rounded-full bg-stone-soft px-3 py-1 text-[12px] tracking-[0.08em] text-taupe">
            APP STORE · {String(items.length).padStart(2, '0')} SCREENS
          </span>
        </div>
      )}

      <div className="-mx-6 md:-mx-8">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 md:gap-6 md:px-8 [scrollbar-width:thin] [scrollbar-color:var(--color-border)_transparent]"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {items.map((item, i) => (
            <motion.figure
              key={item.src}
              data-phone
              className="group relative w-[min(72vw,260px)] shrink-0 snap-center sm:w-[240px] md:w-[260px]"
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            >
              <div className="relative overflow-hidden rounded-[1.75rem] bg-charcoal/5 shadow-[0_18px_40px_-18px_rgba(60,48,35,0.28)] ring-1 ring-border/80">
                <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-2.5">
                  <span className="h-1.5 w-16 rounded-full bg-charcoal/15" />
                </div>
                <div className="aspect-[9/19.5] w-full overflow-hidden bg-stone">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading={i < 2 ? 'eager' : 'lazy'}
                    className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              <figcaption className="mt-3 space-y-0.5 px-1">
                <div className="text-[11px] tracking-[0.1em] text-accent uppercase">
                  {item.captionLabel}
                </div>
                <p className="text-[13px] leading-[18px] text-taupe">{item.caption}</p>
              </figcaption>
            </motion.figure>
          ))}
          <div className="w-2 shrink-0 snap-end" aria-hidden />
        </div>
      </div>
    </section>
  )
}
