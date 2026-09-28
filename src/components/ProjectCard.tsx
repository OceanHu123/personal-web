import { Link } from 'react-router-dom'
import type { Project } from '../content/projects'
import { Icon } from './Icon'
import { RepPlateAppFrame } from './RepPlateAppFrame'

export function ProjectCard({ project }: { project: Project }) {
  const isRepPlate = project.id === 'setbite'
  const phoneGallery = project.gallery.filter((g) => g.aspect === 'phone')

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-ivory-soft shadow-[0_10px_25px_-8px_rgba(60,48,35,0.06)] transition-all duration-300 hover:-translate-y-1.5">
      <Link to={`/projects/${project.id}`} className="flex h-full flex-col">
        <div className="relative aspect-video w-full overflow-hidden bg-stone">
          {isRepPlate && phoneGallery.length > 0 ? (
            <div className="flex h-full items-end justify-center bg-gradient-to-b from-[#f7f4ef] to-[#efe8dc] px-4 pb-2 pt-3">
              <RepPlateAppFrame items={phoneGallery} size="sm" />
            </div>
          ) : (
            <img
              src={project.cardImage}
              alt={project.shortTitle}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          <span className="absolute top-4 left-4 z-10 rounded-md bg-ivory/90 px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] text-charcoal backdrop-blur-sm">
            {project.cardTag}
          </span>
        </div>
        <div className="flex flex-1 flex-col justify-between space-y-5 p-6">
          <div className="space-y-2.5">
            <h3 className="text-[18px] font-bold leading-6 text-charcoal transition-colors group-hover:text-accent">
              {project.shortTitle}
            </h3>
            <p className="line-clamp-2 text-[14px] leading-[22px] text-taupe">
              {project.summary}
            </p>
          </div>
          <div className="space-y-4 pt-2">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-ivory px-2.5 py-1 text-[11px] tracking-[0.04em] text-taupe shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 text-[16px] font-semibold text-accent transition-transform group-hover:translate-x-1">
              <span>探索 {project.title}</span>
              <Icon name="arrow_forward" size={18} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
