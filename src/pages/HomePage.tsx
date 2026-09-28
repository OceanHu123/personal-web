import { TechMotif } from '../components/TechMotif'
import { ProjectCard } from '../components/ProjectCard'
import { Icon } from '../components/Icon'
import { site } from '../content/site'
import { projects } from '../content/projects'

export function HomePage() {
  const { hero, profile, projectsSection } = site

  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-10 md:px-8">
      {/* Hero / Tech Motif */}
      <section className="relative w-full overflow-hidden rounded-2xl bg-ivory-soft/70 p-8 shadow-[0_16px_40px_-16px_rgba(60,48,35,0.06)] md:p-12">
        <div className="pointer-events-none absolute -top-24 -left-20 h-96 w-96 rounded-full bg-accent-soft/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-stone/50 blur-3xl" />

        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-stone px-3 py-1 text-[11px] tracking-[0.04em] text-taupe shadow-sm">
              <Icon name="light_mode" size={15} className="text-accent" />
              <span>{hero.motifLabel}</span>
            </span>
            <span className="hidden text-[11px] tracking-[0.16em] text-taupe uppercase sm:inline-block">
              {hero.coord}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] tracking-[0.04em] text-taupe">
            <span>
              LIGHT_DELTA:{' '}
              <strong className="font-semibold text-charcoal">
                {hero.lightDelta}
              </strong>
            </span>
            <span>·</span>
            <span>
              REFRACTION:{' '}
              <strong className="font-semibold text-charcoal">
                {hero.refraction}
              </strong>
            </span>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 items-center gap-8 pt-4 lg:grid-cols-12">
          <div className="relative flex items-center justify-center lg:col-span-6">
            <TechMotif />
          </div>

          <div className="flex flex-col space-y-6 lg:col-span-6">
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-stone-soft px-3 py-1 text-[11px] tracking-[0.04em] text-taupe">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>{hero.keywords}</span>
            </div>
            <h1 className="text-[30px] leading-[38px] font-bold tracking-tight text-charcoal md:text-[40px] md:leading-[52px]">
              {hero.titleBefore}
              <br />
              <span className="text-accent">{hero.titleAccent}</span>
              {hero.titleAfter}
            </h1>
            <p className="text-[16px] leading-[26px] text-taupe">{hero.body}</p>

            <div className="flex items-start gap-2.5 rounded-xl bg-stone/60 p-3.5 shadow-sm">
              <Icon name="animation" size={20} className="shrink-0 text-accent" />
              <p className="text-[11px] leading-snug tracking-[0.04em] text-taupe">
                {hero.interactionHint}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-[16px] font-medium text-white shadow-[0_12px_24px_-6px_rgba(47,158,138,0.35)] transition-all hover:-translate-y-0.5"
              >
                <span>{hero.ctaProjects}</span>
                <Icon name="arrow_downward" size={18} />
              </a>
              <div className="inline-flex items-center gap-2 rounded-xl bg-ivory px-4 py-2.5 text-[16px] text-taupe shadow-sm">
                <Icon name="wb_sunny" size={18} className="text-stone-deep" />
                <span>{hero.sunlitMode}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Intro */}
      <section className="rounded-2xl bg-stone p-8 shadow-[0_10px_30px_-10px_rgba(60,48,35,0.05)] md:p-10">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="flex flex-col space-y-5 lg:col-span-5">
            <div className="flex items-center justify-between">
              <div>
                <span className="block text-[11px] tracking-[0.08em] text-taupe uppercase">
                  {profile.label}
                </span>
                <h2 className="text-[28px] leading-9 font-bold tracking-tight text-charcoal">
                  {profile.name}
                </h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ivory text-accent shadow-sm">
                <Icon name="terminal" size={26} />
              </div>
            </div>
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-accent-soft/30 px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.08em] text-accent">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>{profile.status}</span>
            </div>
            <p className="text-[14px] leading-[22px] font-medium text-charcoal">
              {profile.role}
            </p>
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              {profile.tags.map((tag) => (
                <div
                  key={tag.text}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-ivory px-3 py-1.5 text-[11px] tracking-[0.04em] text-taupe shadow-sm"
                >
                  <Icon name={tag.icon} size={16} className="text-accent" />
                  <span>{tag.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-6 lg:col-span-7 lg:pl-6">
            <div className="space-y-4 text-[14px] leading-[22px] text-taupe">
              {profile.bio.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
              <div className="flex flex-wrap items-center gap-3">
                {profile.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-lg bg-ivory px-3.5 py-2 text-[16px] text-charcoal shadow-sm transition-colors hover:bg-stone-soft"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <a
                href={profile.resumeHref}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-[16px] font-medium text-white shadow-[0_8px_20px_-4px_rgba(47,158,138,0.3)] transition-all hover:-translate-y-0.5"
              >
                <span>{profile.resumeLabel}</span>
                <Icon name="download" size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="space-y-8" id="projects">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
              {projectsSection.eyebrow}
            </div>
            <h2 className="text-[30px] leading-[38px] font-bold tracking-tight text-charcoal md:text-[40px] md:leading-[52px]">
              {projectsSection.title}
            </h2>
          </div>
          <p className="text-[14px] leading-[22px] text-taupe">
            {projectsSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <div className="flex w-full items-center justify-center py-6">
        <div className="inline-flex items-center gap-3 rounded-full bg-stone px-6 py-2.5 text-[11px] tracking-[0.04em] text-taupe shadow-sm">
          <Icon name="wb_twilight" size={18} className="text-accent" />
          <span>{site.signature}</span>
        </div>
      </div>
    </div>
  )
}
