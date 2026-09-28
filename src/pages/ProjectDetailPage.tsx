import { Link, Navigate, useParams } from 'react-router-dom'
import { getProject } from '../content/projects'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { PhoneGallery } from '../components/PhoneGallery'

export function ProjectDetailPage() {
  const { id } = useParams()
  const project = id ? getProject(id) : undefined

  if (!project) {
    return <Navigate to="/" replace />
  }

  const phoneItems = project.gallery.filter((g) => g.aspect === 'phone')
  const otherItems = project.gallery.filter((g) => g.aspect !== 'phone')
  const usePhoneShowcase = phoneItems.length > 0

  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-10 md:px-8">
      <Reveal y={16}>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <Link
            to="/#menu"
            className="group inline-flex items-center gap-2.5 rounded-full bg-ivory-soft px-4 py-2 text-charcoal shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-stone"
          >
            <Icon
              name="arrow_back"
              size={18}
              className="text-accent transition-transform group-hover:-translate-x-1"
            />
            <span className="text-[16px] font-medium">
              返回首页 (Back to Home)
            </span>
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full bg-stone-soft/70 px-3 py-1.5 text-taupe">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="text-[11px] tracking-wide">
              项目详情 · INDEX {project.index} / {project.systemId}
            </span>
          </div>
        </div>
      </Reveal>

      <section className="space-y-10">
        <Reveal>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded bg-stone px-2.5 py-1 text-[12px] tracking-[0.08em] text-taupe uppercase">
                INDEX {project.index} // SYS: {project.systemId}
              </span>
              <span className="text-[11px] tracking-[0.04em] text-stone-deep">
                {project.version}
              </span>
            </div>
            <h1 className="text-[38px] leading-[46px] font-bold tracking-tight text-charcoal md:text-[56px] md:leading-[68px]">
              {project.title}
            </h1>
            <p className="max-w-3xl text-[16px] leading-[26px] text-taupe">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {project.demoHref ? (
                <a
                  href={project.demoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[16px] text-white shadow-[0_12px_24px_-6px_rgba(47,158,138,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_28px_-6px_rgba(47,158,138,0.4)]"
                >
                  <span>在线演示 (Live Demo)</span>
                  <Icon name="north_east" size={18} />
                </a>
              ) : null}
              {project.sourceHref ? (
                <a
                  href={project.sourceHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-[16px] text-white shadow-[0_12px_24px_-6px_rgba(47,158,138,0.3)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon name="code" size={20} />
                  <span>源代码仓库 (Source Code)</span>
                  <Icon name="north_east" size={16} />
                </a>
              ) : null}
              <div className="ml-auto hidden items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm lg:flex">
                <Icon name="wb_sunny" size={18} className="text-accent" />
                <span className="text-[12px] tracking-[0.08em] text-taupe">
                  Warm Clear Tech Archetype
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid grid-cols-1 gap-6 rounded-2xl bg-ivory-soft p-6 shadow-[0_10px_30px_-10px_rgba(60,48,35,0.04)] sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: '角色 / Role',
                value: project.role,
                detail: project.roleDetail,
              },
              {
                label: '周期 / Timeline',
                value: project.timeline,
                detail: project.timelineDetail,
              },
              {
                label: '技术栈 / Stack',
                value: project.stack,
                detail: project.stackDetail,
              },
              {
                label: '领域 / Category',
                value: project.category,
                detail: project.categoryDetail,
              },
            ].map((item) => (
              <div key={item.label} className="space-y-1">
                <div className="text-[11px] tracking-[0.08em] text-stone-deep uppercase">
                  {item.label}
                </div>
                <div className="truncate text-[16px] font-semibold text-charcoal">
                  {item.value}
                </div>
                <div className="text-[13px] leading-[18px] text-taupe">
                  {item.detail}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {usePhoneShowcase ? (
          <Reveal delay={0.08}>
            <PhoneGallery
              items={phoneItems}
              title="界面展示 · App Store 宣传图"
              subtitle="五张中文真机界面并排呈现（横向滑动浏览）。素材来自 Apple Store 宣传图。"
            />
          </Reveal>
        ) : (
          <Reveal delay={0.08}>
            <div className="group relative w-full overflow-hidden rounded-2xl bg-stone shadow-[0_20px_40px_-15px_rgba(60,48,35,0.08)]">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={project.heroImage}
                  alt={`${project.title} 主视觉`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                />
                <div className="absolute right-6 bottom-6 left-6 flex flex-col justify-between gap-2 rounded-xl bg-white/80 p-4 shadow-sm backdrop-blur-md sm:flex-row sm:items-center">
                  <div className="flex items-center gap-3">
                    <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-accent" />
                    <span className="text-[12px] tracking-[0.08em] text-charcoal">
                      {project.heroOverlay}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-[11px] tracking-[0.04em] text-stone-deep">
                    <span>LATENCY: {project.latency}</span>
                    <span>GEOMETRY: {project.geometry}</span>
                    <span className="font-semibold text-accent">
                      STATE: {project.state}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}
      </section>

      <section className="space-y-8">
        <Reveal>
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
            <h2 className="text-[28px] leading-9 font-semibold tracking-tight text-charcoal">
              设计叙事与技术难点拆解 (Architectural Narrative & Breakdown)
            </h2>
            <span className="text-[11px] tracking-[0.08em] text-stone-deep uppercase">
              DEEP DIVE RETROSPECTIVE
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {project.breakdown.map((card, i) => (
            <Reveal key={card.label} delay={0.06 * i}>
              <div className="flex h-full flex-col justify-between space-y-6 rounded-2xl bg-stone p-6 shadow-[0_10px_30px_-10px_rgba(60,48,35,0.05)]">
                <div className="space-y-4">
                  <div
                    className={`inline-flex items-center gap-2 text-[12px] tracking-[0.08em] ${
                      card.kind === 'built' ? 'text-accent' : 'text-stone-deep'
                    }`}
                  >
                    <Icon
                      name={
                        card.kind === 'problem'
                          ? 'report_problem'
                          : card.kind === 'built'
                            ? 'memory'
                            : 'verified'
                      }
                      size={18}
                    />
                    <span>{card.label}</span>
                  </div>
                  <h3 className="text-[18px] font-semibold leading-6 text-charcoal">
                    {card.title}
                  </h3>
                  <p className="text-[14px] leading-[22px] text-taupe">
                    {card.body}
                  </p>
                </div>

                <div className="space-y-2 rounded-xl bg-white/90 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] tracking-[0.04em] text-stone-deep">
                      {card.metricLabel}
                    </span>
                    {card.chart === 'bar' ? (
                      <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent-deep">
                        {card.metricValue}
                      </span>
                    ) : (
                      <span
                        className={`text-[11px] font-semibold tracking-[0.04em] ${
                          card.chart === 'spike' ? 'text-red-600' : 'text-accent'
                        }`}
                      >
                        {card.metricValue}
                      </span>
                    )}
                  </div>
                  {card.chart === 'bar' ? (
                    <div className="h-2 w-full overflow-hidden rounded-full bg-stone">
                      <div
                        className="h-full rounded-full bg-accent"
                        style={{ width: `${card.barPercent ?? 0}%` }}
                      />
                    </div>
                  ) : (
                    <svg
                      className={`h-8 w-full ${
                        card.chart === 'spike' ? 'text-red-500/60' : 'text-accent'
                      }`}
                      fill="none"
                      viewBox="0 0 100 24"
                      preserveAspectRatio="none"
                    >
                      <path
                        d={
                          card.chart === 'spike'
                            ? 'M 0 18 Q 20 6 35 15 T 70 8 T 100 20'
                            : 'M 0 16 C 25 12, 40 12, 60 12 C 80 12, 90 12, 100 12'
                        }
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth={card.chart === 'flat' ? 2.5 : 2}
                        vectorEffect="non-scaling-stroke"
                      />
                      <circle
                        className={
                          card.chart === 'spike' ? 'fill-red-600' : 'fill-accent'
                        }
                        cx="100"
                        cy={card.chart === 'spike' ? 20 : 12}
                        r="3"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {otherItems.length > 0 || !usePhoneShowcase ? (
        <section className="space-y-8">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-[28px] leading-9 font-semibold tracking-tight text-charcoal">
                  系统工件与视觉画廊 (System Gallery & Artifacts)
                </h2>
                <p className="mt-1 text-[14px] leading-[22px] text-taupe">
                  项目相关截图与说明图（来自本地材料；无截图时用品牌卡标注说明）。
                </p>
              </div>
              <span className="rounded-full bg-stone-soft px-3 py-1 text-[12px] tracking-[0.08em] text-taupe">
                ASSETS_RENDERED:{' '}
                {String(
                  usePhoneShowcase ? otherItems.length : project.gallery.length,
                ).padStart(2, '0')}
              </span>
            </div>
          </Reveal>

          <div className="space-y-6">
            {(usePhoneShowcase ? otherItems : project.gallery).map((item, i) => (
              <Reveal key={item.src} delay={0.04 * i}>
                <div className="group overflow-hidden rounded-2xl bg-stone shadow-[0_15px_35px_-10px_rgba(60,48,35,0.06)]">
                  <div
                    className={`relative w-full ${
                      item.aspect === 'wide' ? 'aspect-[16/10]' : 'aspect-[4/3]'
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent p-6 text-ivory">
                      <div className="mb-1 flex items-center gap-2 text-[11px] tracking-[0.08em] text-accent-soft uppercase">
                        {item.captionLabel}
                      </div>
                      <p className="text-[16px] font-medium">{item.caption}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ) : (
        <Reveal>
          <div className="rounded-2xl border border-border/70 bg-ivory-soft/80 px-6 py-5 text-[14px] leading-[22px] text-taupe">
            上方五屏为 Apple Store 中文宣传图合集；首页精选区用轻量手机框横条展示同一组图。
          </div>
        </Reveal>
      )}

      <Reveal>
        <section className="space-y-6 rounded-2xl bg-ivory-soft p-8 shadow-[0_10px_30px_-10px_rgba(60,48,35,0.04)]">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="space-y-1">
              <h3 className="text-[22px] leading-[30px] font-semibold text-charcoal">
                技术交付与开源物料 (Technical Deliverables)
              </h3>
              <p className="text-[14px] leading-[22px] text-taupe">
                公开仓库与已有文档链接（仅列出材料中可核实的地址）。
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="terminal" size={24} className="text-accent" />
              <span className="text-[12px] tracking-[0.08em] text-stone-deep">
                OPEN LINKS
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3">
            {(
              [
                project.demoHref
                  ? {
                      href: project.demoHref,
                      icon: 'rocket_launch' as const,
                      label: '在线演示 (Live Demo)',
                      accent: true,
                    }
                  : null,
                project.sourceHref
                  ? {
                      href: project.sourceHref,
                      icon: 'folder_zip' as const,
                      label: 'GitHub 源码',
                      accent: !project.demoHref,
                    }
                  : null,
                project.specHref
                  ? {
                      href: project.specHref,
                      icon: 'description' as const,
                      label: '隐私政策 / 公开文档',
                      accent: false,
                    }
                  : null,
              ] as Array<{
                href: string
                icon: 'rocket_launch' | 'folder_zip' | 'description'
                label: string
                accent: boolean
              } | null>
            )
              .filter((item): item is NonNullable<typeof item> => item != null)
              .map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-xl bg-white p-4 transition-all duration-200 hover:bg-ivory hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      name={item.icon}
                      size={20}
                      className={item.accent ? 'text-accent' : 'text-taupe'}
                    />
                    <span className="text-[16px] text-charcoal">{item.label}</span>
                  </div>
                  <Icon
                    name="north_east"
                    size={18}
                    className="text-taupe transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              ))}
          </div>
        </section>
      </Reveal>

      <nav className="flex flex-col items-center justify-between gap-6 pt-6 pb-4 sm:flex-row">
        <Link
          to="/"
          className="group flex items-center gap-3 text-taupe transition-colors hover:text-charcoal"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-soft transition-colors group-hover:bg-accent-soft">
            <Icon
              name="arrow_back"
              size={20}
              className="text-charcoal transition-transform group-hover:-translate-x-1"
            />
          </div>
          <div>
            <div className="text-[11px] tracking-[0.04em] text-stone-deep">
              NAVIGATE
            </div>
            <div className="text-[16px] font-medium text-charcoal">
              ← 返回首页 (Back to Home)
            </div>
          </div>
        </Link>
        <div className="hidden text-[11px] text-taupe sm:block">• • •</div>
        {project.nextId && (
          <Link
            to={`/projects/${project.nextId}`}
            className="group flex items-center gap-3 text-right text-taupe transition-colors hover:text-charcoal"
          >
            <div>
              <div className="text-[11px] tracking-[0.04em] text-stone-deep">
                UP NEXT
              </div>
              <div className="text-[16px] font-medium text-charcoal">
                {project.nextLabel}
              </div>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-soft transition-colors group-hover:bg-accent group-hover:text-white">
              <Icon
                name="arrow_forward"
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </div>
          </Link>
        )}
      </nav>
    </div>
  )
}
