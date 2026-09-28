import type { ReactNode } from 'react'

const paths: Record<string, string> = {
  person:
    'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
  light_mode:
    'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5v2m0 16v2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42m12.72-12.72 1.42-1.42',
  grain:
    'M10 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4-4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-8 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm8 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
  animation:
    'M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 3h6v3h-6v-3z',
  arrow_downward: 'M12 4v12m0 0-5-5m5 5 5-5',
  arrow_forward: 'M5 12h14m0 0-5-5m5 5-5 5',
  arrow_back: 'M19 12H5m0 0 5-5m-5 5 5 5',
  wb_sunny:
    'M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8zm10.48 0 1.79-1.8 1.41 1.41-1.79 1.79zM12 2h0v3h0V2zM4 11H1v2h3v-2zm19 0h-3v2h3v-2zM6.76 19.16l-1.79 1.8 1.41 1.41 1.8-1.79zm10.48 0 1.79 1.79 1.41-1.41-1.8-1.79zM12 19v3h0v-3zM12 7a5 5 0 100 10 5 5 0 000-10z',
  wb_twilight:
    'M16.73 8.73 19.5 6 21 7.5l-2.73 2.73zM12 2h0v4h0V2zM4.5 7.5 6 6l2.73 2.73-1.41 1.41zM1 14h6v2H1zm16 0h6v2h-6zM12 8a6 6 0 016 6H6a6 6 0 016-6z',
  terminal:
    'M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm2 4 3 3-3 3m5 0h5',
  speed:
    'M12 3a9 9 0 100 18 9 9 0 000-18zm1 5v4l3 2',
  memory:
    'M6 6h12v12H6V6zm2 2v8h8V8H8zm-4 2h2v4H4v-4zm16 0h2v4h-2v-4z',
  verified:
    'M12 2 9.5 4.5 6 4l-.5 3.5L3 10l2.5 2.5L5 16l3.5.5L12 22l3.5-5.5L19 16l-.5-3.5L21 10l-2.5-2.5L19 4l-3.5.5L12 2z',
  download: 'M12 3v12m0 0-4-4m4 4 4-4M5 21h14',
  north_east: 'M7 17 17 7m0 0H9m8 0v8',
  code: 'M9 8 5 12l4 4m6-8 4 4-4 4',
  report_problem:
    'M12 3 2 21h20L12 3zm0 6v5m0 3h.01',
  rocket_launch:
    'M12 2c3 3 4 6 4 9 0 2-1 4-2 5l-2 2-2-2c-1-1-2-3-2-5 0-3 1-6 4-9zm0 9a2 2 0 110-4 2 2 0 010 4zM7 18l-2 3m12-3 2 3',
  folder_zip:
    'M4 6h6l2 2h8v12H4V6zm6 4h2v2h-2v-2zm0 3h2v2h-2v-2zm0 3h2v2h-2v-2z',
  description:
    'M7 3h7l5 5v13H7V3zm7 0v5h5',
}

type IconProps = {
  name: keyof typeof paths | string
  className?: string
  size?: number
}

/** 轻量图标：避免依赖 Material Symbols 字体加载失败 */
export function Icon({ name, className = '', size = 18 }: IconProps) {
  const d = paths[name]
  if (!d) {
    return <span className={className} aria-hidden />
  }

  const strokeIcons = new Set([
    'light_mode',
    'arrow_downward',
    'arrow_forward',
    'arrow_back',
    'wb_sunny',
    'wb_twilight',
    'terminal',
    'speed',
    'download',
    'north_east',
    'code',
    'animation',
  ])

  if (strokeIcons.has(name)) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden
      >
        <path d={d} />
      </svg>
    )
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d={d} />
    </svg>
  )
}

export function IconBadge({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-lg bg-accent/10 text-accent ${className}`}
    >
      {children}
    </span>
  )
}
