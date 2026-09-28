import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { site } from '../content/site'
import { projects, type Project } from '../content/projects'
import {
  PANEL_ATMOSPHERES,
  useHomePanelScroll,
} from '../hooks/useHomePanelScroll'

const PANEL_COUNT = 5

/** Scroll to a pinned panel index (Lenis-friendly via window scroll). */
function scrollToPanel(index: number) {
  const prefersReduced = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches
  if (prefersReduced) {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    return
  }
  const y = index * window.innerHeight
  window.scrollTo({ top: y, behavior: 'smooth' })
}

function ProjectPanel({
  project,
  tone,
}: {
  project: Project
  tone: 'teal' | 'stone'
}) {
  const phones = project.gallery.filter((g) => g.aspect === 'phone').slice(0, 3)

  return (
    <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center gap-6 px-6 py-20 md:flex-row md:items-center md:gap-12 md:px-10 md:py-16">
      <div className="flex min-w-0 flex-1 flex-col space-y-5 md:space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={[
              'rounded-md px-2.5 py-1 text-[11px] font-semibold tracking-[0.12em]',
              tone === 'teal'
                ? 'bg-accent/15 text-accent-deep'
                : 'bg-charcoal/5 text-taupe',
            ].join(' ')}
          >
            {project.cardTag}
          </span>
          <span className="text-[11px] tracking-[0.08em] text-taupe uppercase">
            {project.version}
          </span>
        </div>

        <h2 className="text-[32px] leading-[1.15] font-bold tracking-tight text-charcoal md:text-[44px]">
          {project.title}
        </h2>

        <p className="max-w-xl text-[15px] leading-[1.7] text-taupe md:text-[16px]">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-lg bg-white/55 px-3 py-1.5 text-[11px] tracking-[0.04em] text-taupe shadow-[0_1px_0_rgba(60,48,35,0.04)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-3">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-[15px] font-medium text-white shadow-[0_12px_28px_-8px_rgba(47,158,138,0.4)] transition-transform duration-300 hover:-translate-y-0.5"
          >
            <span>进入项目详情</span>
            <Icon name="arrow_forward" size={18} />
          </Link>
          {project.sourceHref ? (
            <a
              href={project.sourceHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[14px] font-medium text-taupe transition-colors hover:text-accent"
            >
              GitHub ↗
            </a>
          ) : null}
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center md:justify-end">
        {phones.length > 0 ? (
          <div className="flex items-end gap-3 md:gap-4">
            {phones.map((item, i) => (
              <div
                key={item.src}
                className={[
                  'overflow-hidden rounded-[1.35rem] border border-white/70 bg-white/40 shadow-[0_18px_40px_-18px_rgba(60,48,35,0.28)]',
                  i === 1
                    ? 'w-[34%] max-w-[148px] -translate-y-3 md:max-w-[168px]'
                    : 'w-[30%] max-w-[128px] opacity-90 md:max-w-[148px]',
                ].join(' ')}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="block aspect-[9/19.5] w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white/40 shadow-[0_20px_50px_-24px_rgba(60,48,35,0.2)]">
            <img
              src={project.cardImage}
              alt={project.shortTitle}
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/35 to-transparent px-5 py-4">
              <p className="text-[12px] tracking-[0.06em] text-white/95">
                {project.heroOverlay}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export function HomePage() {
  const { hero, profile, projectsSection } = site
  const { rootRef, stageRef } = useHomePanelScroll(PANEL_COUNT)
  const [setbite, bilingual] = projects

  return (
    <div
      ref={rootRef}
      className="home-panels relative"
      style={{ ['--home-atmosphere' as string]: PANEL_ATMOSPHERES[0] }}
    >
      <div
        ref={stageRef}
        className="home-panels__stage relative h-[100svh] w-full overflow-hidden"
        style={{
          backgroundColor: 'var(--home-atmosphere, #FAF7F2)',
        }}
      >
        {/* 01 Hero — opaque panel so wipe never shows stacked text */}
        <section
          data-home-panel
          className="home-panel absolute inset-0 flex"
          style={{ backgroundColor: PANEL_ATMOSPHERES[0] }}
          aria-label="开场"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 70% 55% at 18% 20%, color-mix(in srgb, var(--color-accent-soft) 28%, transparent), transparent 62%), radial-gradient(ellipse 55% 45% at 88% 78%, color-mix(in srgb, var(--color-stone) 75%, transparent), transparent 58%)',
            }}
          />
          <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-6 py-24 md:px-10">
            <div className="max-w-2xl space-y-7 md:space-y-8">
              <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/55 px-3.5 py-1.5 text-[11px] tracking-[0.05em] text-taupe shadow-[0_1px_0_rgba(60,48,35,0.04)]">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span>{hero.keywords}</span>
              </div>

              <h1 className="text-[34px] leading-[1.18] font-bold tracking-tight text-charcoal md:text-[52px] md:leading-[1.12]">
                {hero.titleBefore}
                <br />
                <span className="text-accent">{hero.titleAccent}</span>
                {hero.titleAfter}
              </h1>

              <p className="max-w-xl text-[15px] leading-[1.75] text-taupe md:text-[17px]">
                {hero.body}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => scrollToPanel(2)}
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-[15px] font-medium text-white shadow-[0_12px_28px_-8px_rgba(47,158,138,0.4)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <span>{hero.ctaProjects}</span>
                  <Icon name="arrow_downward" size={18} />
                </button>
                <span className="inline-flex items-center gap-2 text-[14px] text-taupe">
                  <Icon name="wb_sunny" size={18} className="text-stone-deep" />
                  {hero.sunlitMode}
                </span>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-taupe/80 md:flex">
              <span className="text-[10px] tracking-[0.2em] uppercase">
                Scroll
              </span>
              <span className="home-scroll-cue h-8 w-px bg-gradient-to-b from-accent/70 to-transparent" />
            </div>
          </div>
        </section>

        {/* 02 Profile */}
        <section
          data-home-panel
          className="home-panel absolute inset-0 flex"
          style={{ backgroundColor: PANEL_ATMOSPHERES[1] }}
          aria-label="简介"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 60% 50% at 80% 15%, color-mix(in srgb, var(--color-accent-soft) 18%, transparent), transparent 60%), radial-gradient(ellipse 50% 40% at 10% 85%, rgba(255,255,255,0.55), transparent 55%)',
            }}
          />
          <div className="relative z-10 mx-auto flex h-full w-full max-w-6xl flex-col justify-center px-6 py-24 md:px-10">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="flex flex-col space-y-5 lg:col-span-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="block text-[11px] tracking-[0.12em] text-taupe uppercase">
                      {profile.label}
                    </span>
                    <h2 className="mt-1 text-[36px] leading-none font-bold tracking-tight text-charcoal md:text-[48px]">
                      {profile.name}
                    </h2>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/60 text-accent shadow-sm">
                    <Icon name="terminal" size={26} />
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 self-start rounded-full bg-accent/12 px-3.5 py-1.5 text-[12px] font-semibold tracking-[0.06em] text-accent-deep">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span>{profile.status}</span>
                </div>

                <p className="text-[14px] leading-[1.65] font-medium text-charcoal md:text-[15px]">
                  {profile.role}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {profile.tags.map((tag) => (
                    <div
                      key={tag.text}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white/55 px-3 py-1.5 text-[11px] tracking-[0.04em] text-taupe"
                    >
                      <Icon name={tag.icon} size={16} className="text-accent" />
                      <span>{tag.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col space-y-6 lg:col-span-7">
                <div className="space-y-4 text-[14px] leading-[1.7] text-taupe md:text-[15px]">
                  {profile.bio.map((para) => (
                    <p key={para.slice(0, 24)}>{para}</p>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  {profile.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="rounded-lg bg-white/55 px-3.5 py-2 text-[14px] text-charcoal transition-colors hover:bg-white/80"
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href={profile.resumeHref}
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-[14px] font-medium text-white shadow-[0_8px_20px_-4px_rgba(47,158,138,0.3)] transition-transform hover:-translate-y-0.5"
                  >
                    <span>{profile.resumeLabel}</span>
                    <Icon name="download" size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 SetBite */}
        <section
          data-home-panel
          id="projects"
          className="home-panel absolute inset-0 flex"
          style={{ backgroundColor: PANEL_ATMOSPHERES[2] }}
          aria-label={setbite.title}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 65% 55% at 75% 30%, color-mix(in srgb, var(--color-accent-soft) 40%, transparent), transparent 65%), radial-gradient(ellipse 45% 40% at 15% 80%, rgba(255,255,255,0.45), transparent 55%)',
            }}
          />
          <div className="relative z-10 flex h-full w-full flex-col justify-center">
            <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
              <div className="mb-1 text-[11px] font-semibold tracking-[0.16em] text-accent uppercase">
                {projectsSection.eyebrow}
              </div>
              <p className="mb-4 text-[13px] text-taupe md:mb-2">
                {projectsSection.subtitle}
              </p>
            </div>
            <ProjectPanel project={setbite} tone="teal" />
          </div>
        </section>

        {/* 04 Bilingual */}
        <section
          data-home-panel
          className="home-panel absolute inset-0 flex"
          style={{ backgroundColor: PANEL_ATMOSPHERES[3] }}
          aria-label={bilingual.title}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 55% 45% at 20% 25%, color-mix(in srgb, var(--color-stone) 80%, transparent), transparent 60%), radial-gradient(ellipse 50% 40% at 90% 70%, color-mix(in srgb, var(--color-accent-soft) 16%, transparent), transparent 55%)',
            }}
          />
          <div className="relative z-10 w-full">
            <ProjectPanel project={bilingual} tone="stone" />
          </div>
        </section>

        {/* 05 Close */}
        <section
          data-home-panel
          className="home-panel absolute inset-0 flex"
          style={{ backgroundColor: PANEL_ATMOSPHERES[4] }}
          aria-label="结尾"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse 55% 45% at 50% 40%, color-mix(in srgb, var(--color-accent-soft) 22%, transparent), transparent 65%)',
            }}
          />
          <div className="relative z-10 mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-center px-6 text-center">
            <Icon name="wb_twilight" size={28} className="mb-5 text-accent" />
            <p className="text-[11px] tracking-[0.18em] text-taupe uppercase">
              {site.signature}
            </p>
            <h2 className="mt-4 text-[28px] leading-tight font-bold tracking-tight text-charcoal md:text-[40px]">
              愿意往下看，也愿意一起做闭环
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-taupe">
              目标城市北京 / 上海 / 深圳 / 杭州 / 远程。实习窗口{' '}
              <span className="font-medium text-charcoal">2026.12 – 2027.02</span>
              。
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={profile.resumeHref}
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-[15px] font-medium text-white shadow-[0_12px_28px_-8px_rgba(47,158,138,0.35)]"
              >
                {profile.resumeLabel}
                <Icon name="download" size={18} />
              </a>
              <a
                href="mailto:xihu0989@uni.sydney.edu.au"
                className="rounded-xl bg-white/60 px-5 py-3 text-[15px] text-charcoal transition-colors hover:bg-white/85"
              >
                发邮件
              </a>
            </div>
            <p className="mt-16 text-[11px] tracking-[0.06em] text-taupe/80">
              {site.footerCopy} · {site.footerNote}
            </p>
          </div>
        </section>
      </div>

      {/* Reduced-motion / fallback spacer height handled by pin end;
          for reduced motion, stage children stack via CSS below */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .home-panels__stage {
            height: auto !important;
            overflow: visible !important;
            position: relative !important;
          }
          .home-panel {
            position: relative !important;
            inset: auto !important;
            min-height: 100svh;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  )
}
