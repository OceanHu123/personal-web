import type { GalleryItem } from '../content/projects'

/** Mini phone strip on homepage RepPlate card — promo screens together, no App UI chrome. */
export function SetBiteCardPreview({ items }: { items: GalleryItem[] }) {
  const preview = items.slice(0, 4)
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center gap-2 bg-gradient-to-t from-charcoal/35 via-charcoal/10 to-transparent px-3 pb-3 pt-10">
      {preview.map((item) => (
        <div
          key={item.src}
          className="w-[18%] overflow-hidden rounded-md shadow-sm ring-1 ring-white/40"
        >
          <img
            src={item.src}
            alt=""
            className="aspect-[9/19.5] w-full object-cover object-top"
          />
        </div>
      ))}
    </div>
  )
}
