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
  badge?: string
  /** Stitch-style card headers above each phone frame */
  cardHeaders?: boolean
}

/** Cohesive horizontal phone-frame showcase for portrait App Store assets. */
export function PhoneGallery({
  items,
  title,
  subtitle,
  badge,
  cardHeaders = false,
}: PhoneGalleryProps) {
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

  const badgeText =
    badge ?? `APP STORE · ${String(items.length).padStart(2, '0')} SCREENS`

  return (
    <section ref={sectionRef} className="space-y-6">
      {(title || subtitle) && (
        <div className="mb-2 flex flex-wrap items-end justify-between gap-4">
          <div>
            {title ? (
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                <h2 className="text-[24px] leading-8 font-bold tracking-tight text-charcoal md:text-[28px] md:leading-9">
                  {title}
                </h2>
              </div>
            ) : null}
            {subtitle ? (
              <p className="mt-1 max-w-2xl text-[14px] leading-[22px] text-taupe md:text-[15px] md:leading-6">
                {subtitle}
              </p>
            ) : null}
          </div>
          <span className="rounded-full bg-stone-soft px-3 py-1 text-[11px] font-medium tracking-[0.08em] text-taupe">
            {badgeText}
          </span>
        </div>
      )}

      <div className="-mx-4 md:-mx-6">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 pt-1 md:gap-5 md:px-6 [scrollbar-width:thin] [scrollbar-color:var(--color-border)_transparent]"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {items.map((item, i) => (
            <motion.figure
              key={item.src}
              data-phone
              className={`group relative shrink-0 snap-center ${
                cardHeaders
                  ? 'flex w-[min(78vw,290px)] flex-col overflow-hidden rounded-2xl bg-stone shadow-[0_12px_28px_-12px_rgba(44,40,36,0.18)] sm:w-[270px] md:w-[290px]'
                  : 'w-[min(72vw,260px)] sm:w-[240px] md:w-[260px]'
              }`}
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            >
              {cardHeaders ? (
                <>
                  <div className="bg-stone-soft px-4 py-4 text-center">
                    <span className="text-[11px] font-semibold tracking-[0.1em] text-accent uppercase">
                      {item.captionLabel}
                    </span>
                    <h3 className="mt-1 text-[18px] font-bold text-charcoal">
                      {item.caption}
                    </h3>
                    {item.captionDetail ? (
                      <p className="mt-0.5 text-[13px] leading-5 text-taupe">
                        {item.captionDetail}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex items-center justify-center bg-stone p-3">
                    <div className="relative w-full overflow-hidden rounded-xl bg-charcoal/5 ring-1 ring-border/70">
                      <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-2">
                        <span className="h-1.5 w-14 rounded-full bg-charcoal/15" />
                      </div>
                      <div className="aspect-[9/19.5] w-full overflow-hidden bg-ivory">
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading={i < 2 ? 'eager' : 'lazy'}
                          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
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
                    <p className="text-[13px] leading-[18px] text-taupe">
                      {item.caption}
                    </p>
                  </figcaption>
                </>
              )}
            </motion.figure>
          ))}
          <div className="w-2 shrink-0 snap-end" aria-hidden />
        </div>
      </div>
    </section>
  )
}
