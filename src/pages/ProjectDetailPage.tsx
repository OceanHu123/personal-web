import { Link, Navigate, useParams } from 'react-router-dom'
import { getProject, type Project } from '../content/projects'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { PhoneGallery } from '../components/PhoneGallery'

function SpecStrip({ project }: { project: Project }) {
  const items = [
    {
      label: '角色 / ROLE',
      value: project.role,
      detail: project.roleDetail,
    },
    {
      label: '周期 / TIMELINE',
      value: project.timeline,
      detail: project.timelineDetail,
    },
    {
      label: '技术栈 / STACK',
      value: project.stack,
      detail: project.stackDetail,
    },
    {
      label: '领域 / CATEGORY',
      value: project.category,
      detail: project.categoryDetail,
    },
  ]

  return (
    <div className="w-full rounded-2xl bg-ivory-soft p-5 shadow-[0_4px_20px_-6px_rgba(44,40,36,0.05)] md:p-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col gap-1">
            <span className="text-[11px] font-medium tracking-[0.1em] text-taupe uppercase">
              {item.label}
            </span>
            <span className="text-[18px] font-semibold leading-7 text-charcoal md:text-[20px]">
              {item.value}
            </span>
            <span className="text-[13px] leading-5 text-taupe">{item.detail}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ArtifactGallery({ project }: { project: Project }) {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-[28px] leading-9 font-bold tracking-tight text-charcoal md:text-[32px] md:leading-10">
            {project.galleryTitle}
          </h2>
          <p className="mt-1 text-[15px] leading-6 text-taupe">
            {project.gallerySubtitle}
          </p>
        </div>
        <span className="rounded-full bg-stone px-3.5 py-1 text-[11px] tracking-[0.08em] text-taupe">
          {project.galleryBadge}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {project.gallery.map((item, i) => (
          <Reveal key={item.src} delay={0.04 * i}>
            <figure
              className={`overflow-hidden rounded-2xl bg-stone shadow-[0_12px_28px_-12px_rgba(44,40,36,0.1)] ${
                item.aspect === 'wide' ? 'md:col-span-3' : ''
              }`}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  item.aspect === 'wide' ? 'aspect-[16/9]' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </div>
              <figcaption className="space-y-1 bg-stone-soft px-4 py-3">
                <div className="text-[11px] font-semibold tracking-[0.1em] text-accent uppercase">
                  {item.captionLabel}
                </div>
                <div className="text-[16px] font-semibold text-charcoal">
                  {item.caption}
                </div>
                {item.captionDetail ? (
                  <p className="text-[13px] leading-5 text-taupe">
                    {item.captionDetail}
                  </p>
                ) : null}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function ProjectDetailPage() {
  const { id } = useParams()
  const project = id ? getProject(id) : undefined

  if (!project) {
    return <Navigate to="/" replace />
  }

  const phoneItems = project.gallery.filter((g) => g.aspect === 'phone')
  const usePhoneShowcase = phoneItems.length > 0
  const isRepPlate = project.id === 'setbite'

  return (
    <div className="w-full">
      {/* Top breadcrumb & metadata */}
      <section className="mx-auto max-w-[1280px] px-4 pt-8 pb-5 md:px-6">
        <Reveal y={12}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              to="/#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-stone px-4 py-2 text-charcoal shadow-sm transition-all duration-200 hover:bg-stone-soft"
            >
              <Icon
                name="arrow_back"
                size={16}
                className="text-accent transition-transform group-hover:-translate-x-0.5"
              />
              <span className="text-[12px] font-semibold tracking-wide">
                返回首页 (Back to Home)
              </span>
            </Link>
            <div className="inline-flex items-center gap-2 rounded-full bg-ivory-soft px-3.5 py-1.5 text-taupe shadow-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              <span className="text-[11px] font-medium tracking-wide">
                项目详情 · INDEX {project.index} / {project.systemId} ·{' '}
                {project.version}
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Hero story */}
      <section className="mx-auto max-w-[1280px] space-y-5 px-4 py-5 md:px-6">
        <Reveal>
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[12px] font-semibold tracking-[0.12em] text-accent uppercase">
                INDEX {project.index} // SYS: {project.systemId}
              </span>
              <span className="text-border">/</span>
              <span className="text-[13px] text-taupe">{project.version}</span>
            </div>
            <h1 className="text-[36px] leading-[46px] font-bold tracking-tight text-charcoal md:text-[56px] md:leading-[68px]">
              {project.title}
            </h1>
            <p className="max-w-[960px] text-[16px] leading-[28px] text-taupe md:text-[18px] md:leading-[30px]">
              {project.description}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {project.sourceHref ? (
              <a
                href={project.sourceHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[14px] font-semibold text-white shadow-[0_8px_20px_-6px_rgba(47,158,138,0.4)] transition-all duration-200 hover:bg-accent-deep"
              >
                <Icon name="code" size={18} />
                <span>
                  {isRepPlate
                    ? '源代码仓库 (Source Code)'
                    : 'GitHub 源码仓库 (Source Code)'}
                </span>
                <Icon name="north_east" size={16} />
              </a>
            ) : null}
            {project.demoHref ? (
              <a
                href={project.demoHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[14px] font-semibold text-white shadow-md transition-all hover:bg-accent-deep"
              >
                <span>在线演示 (Live Demo)</span>
                <Icon name="north_east" size={16} />
              </a>
            ) : null}
            <div className="inline-flex items-center gap-2 rounded-full bg-stone px-4 py-3 text-[12px] font-semibold text-taupe">
              <Icon name="wb_sunny" size={18} className="text-accent" />
              <span>{project.archetypeLabel}</span>
            </div>
            {project.statusChips.map((chip) => (
              <div
                key={chip}
                className="inline-flex items-center gap-2 rounded-full bg-accent-soft/40 px-4 py-2.5 text-[12px] font-semibold text-accent-deep"
              >
                <Icon name="verified" size={16} className="text-accent" />
                <span>{chip}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <SpecStrip project={project} />
        </Reveal>
      </section>

      {/* Gallery band */}
      {usePhoneShowcase ? (
        <section className="mt-6 overflow-hidden bg-ivory-soft py-14">
          <div className="mx-auto max-w-[1280px] px-4 md:px-6">
            <Reveal>
              <PhoneGallery
                items={phoneItems}
                title={project.galleryTitle}
                subtitle={project.gallerySubtitle}
                badge={project.galleryBadge}
                cardHeaders
              />
            </Reveal>
          </div>
        </section>
      ) : (
        <section className="mx-auto max-w-[1280px] space-y-8 px-4 py-10 md:px-6">
          <Reveal>
            <ArtifactGallery project={project} />
          </Reveal>
          {project.features && project.features.length > 0 ? (
            <Reveal delay={0.05}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {project.features.map((feat) => (
                  <div
                    key={feat.title}
                    className="flex items-start gap-3 rounded-2xl bg-ivory-soft p-5 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft/50 text-accent-deep">
                      <Icon name={feat.icon} size={20} />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-[18px] font-bold text-charcoal">
                        {feat.title}
                      </h3>
                      <p className="text-[13px] leading-5 text-taupe">
                        {feat.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          ) : null}
        </section>
      )}

      {/* Narrative essay */}
      <section className="mx-auto max-w-[1280px] space-y-8 px-4 py-16 md:px-6 md:py-20">
        <Reveal>
          <div className="mb-2 max-w-[800px]">
            {project.narrativeKicker ? (
              <span className="text-[12px] font-semibold tracking-[0.12em] text-accent uppercase">
                {project.narrativeKicker}
              </span>
            ) : null}
            <div className="mt-1 flex items-center gap-4">
              <h2 className="text-[28px] leading-9 font-bold tracking-tight text-charcoal md:text-[40px] md:leading-[52px]">
                {project.narrativeTitle}
              </h2>
              {!isRepPlate ? (
                <div className="hidden h-px flex-1 bg-border md:block" />
              ) : null}
            </div>
            {project.narrativeIntro ? (
              <p className="mt-3 text-[16px] leading-[28px] text-taupe md:text-[18px] md:leading-[30px]">
                {project.narrativeIntro}
              </p>
            ) : null}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {project.breakdown.map((card, i) => (
            <Reveal key={card.label} delay={0.05 * i}>
              <article className="flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_4px_20px_-6px_rgba(44,40,36,0.05)] md:p-7">
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[12px] font-bold tracking-[0.08em] ${
                        card.tone === 'warn'
                          ? 'text-red-700/80'
                          : card.tone === 'accent'
                            ? 'text-accent'
                            : 'text-taupe'
                      }`}
                    >
                      {card.label}
                    </span>
                    <Icon
                      name={
                        card.kind === 'problem'
                          ? 'report_problem'
                          : card.kind === 'built'
                            ? 'memory'
                            : 'verified'
                      }
                      size={18}
                      className={
                        card.kind === 'problem' ? 'text-border' : 'text-accent'
                      }
                    />
                  </div>
                  <h3 className="text-[18px] font-bold leading-7 text-charcoal md:text-[20px]">
                    {card.title}
                    {card.titleEn ? (
                      <>
                        <br />
                        <span className="text-[13px] font-normal text-taupe">
                          {card.titleEn}
                        </span>
                      </>
                    ) : null}
                  </h3>
                  <p className="text-[14px] leading-[22px] text-taupe md:text-[15px] md:leading-6">
                    {card.body}
                  </p>
                </div>
                <div className="mt-6 rounded-xl bg-ivory-soft p-3.5">
                  {card.footerLabel ? (
                    <span
                      className={`text-[11px] font-semibold tracking-wide ${
                        card.tone === 'accent' ? 'text-accent' : 'text-taupe'
                      }`}
                    >
                      {card.footerLabel}
                    </span>
                  ) : null}
                  <p className="mt-1 text-[13px] leading-5 font-medium text-charcoal">
                    {card.footerText}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* System pipeline (RepPlate) */}
      {project.pipeline && project.pipeline.length > 0 ? (
        <section className="mx-auto max-w-[1280px] px-4 pb-16 md:px-6 md:pb-20">
          <Reveal>
            <div className="flex flex-col gap-5 rounded-2xl bg-stone p-6 shadow-sm md:gap-6 md:p-10">
              <div>
                <span className="text-[12px] font-semibold tracking-[0.12em] text-accent uppercase">
                  SYSTEM PIPELINE
                </span>
                <h3 className="mt-1 text-[24px] leading-8 font-bold text-charcoal md:text-[28px] md:leading-9">
                  {project.pipelineTitle}
                </h3>
                {project.pipelineSubtitle ? (
                  <p className="mt-1 text-[15px] leading-6 text-taupe">
                    {project.pipelineSubtitle}
                  </p>
                ) : null}
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
                {project.pipeline.map((step) => (
                  <div
                    key={step.index}
                    className="flex flex-col gap-2 rounded-xl bg-ivory p-4"
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-bold ${
                        step.emphasize
                          ? 'bg-accent text-white'
                          : 'bg-stone-soft text-accent'
                      }`}
                    >
                      {step.index}
                    </div>
                    <span className="text-[14px] font-semibold text-charcoal">
                      {step.title}
                    </span>
                    <p className="text-[13px] leading-5 text-taupe">{step.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>
      ) : null}

      {/* Deliverables */}
      <section className="mx-auto max-w-[1280px] space-y-6 px-4 pb-16 md:px-6 md:pb-20">
        <Reveal>
          <div>
            <span className="text-[12px] font-semibold tracking-[0.12em] text-accent uppercase">
              DELIVERABLES
            </span>
            <h2 className="mt-1 text-[24px] leading-8 font-bold text-charcoal md:text-[28px] md:leading-9">
              {project.deliverablesTitle}
            </h2>
            {project.deliverablesSubtitle ? (
              <p className="mt-1 text-[14px] leading-[22px] text-taupe">
                {project.deliverablesSubtitle}
              </p>
            ) : null}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {project.deliverables.map((item, i) => {
            const inner = (
              <>
                <div className="flex flex-col gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon name={item.icon} size={20} />
                  </div>
                  <h3 className="mt-2 text-[18px] font-bold text-charcoal">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-5 text-taupe">{item.body}</p>
                </div>
                <div className="pt-5">
                  {item.href && item.cta ? (
                    <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-accent">
                      {item.cta}
                      <Icon
                        name="north_east"
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  ) : item.badge ? (
                    <span className="inline-flex rounded-md bg-accent-soft/45 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-accent-deep">
                      {item.badge}
                    </span>
                  ) : null}
                </div>
              </>
            )

            return (
              <Reveal key={item.title} delay={0.04 * i}>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_4px_20px_-6px_rgba(44,40,36,0.05)] transition-all duration-200 hover:bg-stone-soft"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-[0_4px_20px_-6px_rgba(44,40,36,0.05)]">
                    {inner}
                  </div>
                )}
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* Bottom project navigation */}
      <section className="mx-auto max-w-[1280px] border-t border-border/60 px-4 py-10 md:px-6 md:py-14">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {project.prevId ? (
            <Link
              to={`/projects/${project.prevId}`}
              className="group inline-flex items-center gap-2 rounded-full bg-stone px-5 py-3 text-[14px] font-semibold text-charcoal shadow-sm transition-all hover:bg-stone-soft"
            >
              <Icon
                name="arrow_back"
                size={18}
                className="text-accent transition-transform group-hover:-translate-x-1"
              />
              <span>{project.prevLabel}</span>
            </Link>
          ) : (
            <Link
              to="/#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-stone px-5 py-3 text-[14px] font-semibold text-charcoal shadow-sm transition-all hover:bg-stone-soft"
            >
              <Icon
                name="arrow_back"
                size={18}
                className="text-accent transition-transform group-hover:-translate-x-1"
              />
              <span>返回首页 (Back to Home)</span>
            </Link>
          )}

          {project.nextId ? (
            <Link
              to={`/projects/${project.nextId}`}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[14px] font-semibold text-white shadow-sm transition-all hover:bg-accent-deep"
            >
              <span>{project.nextLabel}</span>
              <Icon
                name="arrow_forward"
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          ) : (
            <Link
              to="/"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[14px] font-semibold text-white shadow-sm transition-all hover:bg-accent-deep"
            >
              <Icon name="wb_sunny" size={18} />
              <span>返回首页 (Back to Home)</span>
            </Link>
          )}
        </div>
      </section>
    </div>
  )
}
