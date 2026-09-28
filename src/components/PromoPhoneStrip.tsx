import type { GalleryItem } from '../content/projects'

type PromoPhoneStripProps = {
  items: GalleryItem[]
  /** Max phones to show (featured can show more than a card). */
  limit?: number
  size?: 'sm' | 'lg'
}

/**
 * Light horizontal promo strip — simple phone bezels around App Store art.
 * Intentionally NOT the stacked App UI chrome (今日 / 吃·练) frame.
 */
export function PromoPhoneStrip({
  items,
  limit = 5,
  size = 'lg',
}: PromoPhoneStripProps) {
  const shown = items.slice(0, limit)
  const phoneW = size === 'lg' ? 'w-[min(26%,112px)]' : 'w-[18%]'

  return (
    <div
      className={[
        'flex w-full items-end justify-center gap-2 sm:gap-3',
        size === 'lg' ? 'px-2 pb-1 pt-2' : 'px-1 pb-0.5 pt-1',
      ].join(' ')}
      aria-hidden={shown.length === 0}
    >
      {shown.map((item) => (
        <div
          key={item.src}
          className={[
            phoneW,
            'overflow-hidden rounded-[1.1rem] bg-[#f7f4ef] shadow-[0_10px_24px_-12px_rgba(60,48,35,0.35)] ring-1 ring-[rgba(44,44,42,0.12)]',
          ].join(' ')}
        >
          <div className="flex justify-center pt-1.5">
            <span className="h-1 w-8 rounded-full bg-[rgba(44,44,42,0.12)]" />
          </div>
          <img
            src={item.src}
            alt=""
            className="aspect-[9/19.5] w-full object-cover object-top"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}
