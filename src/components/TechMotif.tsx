import { useEffect, useRef, useState } from 'react'
import { site } from '../content/site'
import { Icon } from './Icon'

/** 首页中心科技图案：随滚动产生轻盈 3D 感旋转/位移（参考视频的 intro + 简单交互） */
export function TechMotif() {
  const stageRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    translateY: 0,
    scale: 1,
    glow: 0.25,
  })

  useEffect(() => {
    let frame = 0

    const update = () => {
      const el = stageRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const viewH = window.innerHeight || 1
      // 0 when centered, ~±1 near edges
      const progress = (viewH / 2 - (rect.top + rect.height / 2)) / viewH
      const clamped = Math.max(-1, Math.min(1, progress))
      setTransform({
        rotateX: clamped * 12,
        rotateY: clamped * -18,
        translateY: clamped * 24,
        scale: 1 + Math.abs(clamped) * 0.04,
        glow: 0.22 + Math.abs(clamped) * 0.18,
      })
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      ref={stageRef}
      className="relative flex w-full max-w-md items-center justify-center"
      style={{ perspective: '1000px' }}
    >
      <div
        className="group relative aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-ivory to-stone p-4 shadow-[0_20px_45px_-12px_rgba(60,48,35,0.08)] transition-shadow duration-500"
        style={{
          transform: `translate3d(0, ${transform.translateY}px, 0) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
          transformStyle: 'preserve-3d',
          boxShadow: `0 20px 45px -12px rgba(60,48,35,0.08), 0 0 ${40 + transform.glow * 80}px rgba(47,158,138,${transform.glow * 0.35})`,
        }}
      >
        {/* 环绕光晕层：随滚动轻微偏移 */}
        <div
          className="pointer-events-none absolute -inset-6 rounded-full bg-accent-soft/30 blur-3xl"
          style={{
            transform: `translate3d(${transform.rotateY * -1.5}px, ${transform.rotateX * 1.2}px, -40px)`,
            opacity: 0.45 + transform.glow,
          }}
        />
        <div
          className="pointer-events-none absolute inset-8 rounded-full border border-amber-200/40"
          style={{
            transform: `translateZ(20px) rotateZ(${transform.rotateY * 0.6}deg)`,
          }}
        />
        <div
          className="pointer-events-none absolute inset-14 rounded-full border border-accent/20"
          style={{
            transform: `translateZ(36px) rotateZ(${transform.rotateY * -0.8}deg)`,
          }}
        />

        <img
          src={site.hero.motifImage}
          alt={site.hero.motifAlt}
          className="relative z-10 h-full w-full rounded-xl object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ transform: `translateZ(12px)` }}
        />

        <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between rounded-xl bg-ivory/85 p-4 shadow-sm backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
              <Icon name="grain" size={18} />
            </div>
            <div>
              <div className="text-[11px] tracking-[0.08em] text-taupe uppercase">
                {site.hero.photonsLabel}
              </div>
              <div className="text-[16px] font-semibold leading-6 text-charcoal">
                {site.hero.photonsValue}
              </div>
            </div>
          </div>
          <span className="rounded-md bg-accent-soft/40 px-2.5 py-1 text-[11px] font-medium text-accent-deep">
            {site.hero.realtime}
          </span>
        </div>
      </div>
    </div>
  )
}
