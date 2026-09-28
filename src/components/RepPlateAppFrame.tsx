import type { GalleryItem } from '../content/projects'
import '../styles/repplate-frame.css'

type RepPlateAppFrameProps = {
  items: GalleryItem[]
  /** lg = homepage special; sm = menu card */
  size?: 'lg' | 'sm'
  className?: string
}

/**
 * App UI presentation chrome (今日 header + 吃/练 dock) around the
 * Apple Store promo strip. Does not invent live metrics — promos are the content.
 */
export function RepPlateAppFrame({
  items,
  size = 'lg',
  className = '',
}: RepPlateAppFrameProps) {
  const promos = items.filter((g) => g.aspect === 'phone')

  return (
    <div
      className={`repplate-frame repplate-frame--${size} ${className}`.trim()}
      aria-label="RepPlate食练记 App 界面展示"
    >
      <div className="repplate-frame__phone">
        <div className="repplate-frame__status" aria-hidden="true">
          <span>9:41</span>
          <div className="repplate-frame__status-icons">
            <span className="sig" />
            <span className="wifi" />
            <span className="bat" />
          </div>
        </div>

        <div className="repplate-frame__header">
          <span className="repplate-frame__title">今日</span>
          <span className="repplate-frame__more" aria-hidden="true">
            ···
          </span>
        </div>

        <div className="repplate-frame__gallery" tabIndex={size === 'lg' ? 0 : -1}>
          {promos.map((item, i) => (
            <figure key={item.src} className="repplate-frame__promo">
              <img
                src={item.src}
                alt={item.alt}
                loading={i < 2 ? 'eager' : 'lazy'}
                draggable={false}
              />
            </figure>
          ))}
        </div>

        <div className="repplate-frame__dock" aria-hidden="true">
          <div className="repplate-frame__cta">
            <span>+</span>
            <span>吃了什么</span>
          </div>
          <div className="repplate-frame__tabs">
            <span className="repplate-frame__tab is-active">
              <span className="repplate-frame__tab-icon">🍴</span>
              吃
            </span>
            <span className="repplate-frame__tab">
              <span className="repplate-frame__tab-icon">🏋</span>
              练
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
