/** 站点级占位内容 — 与组件分离，后续用真实资料替换 */

export const site = {
  brand: 'YN / PORTFOLIO',
  draftBadge: 'VISION DRAFT 1 — V2',
  availableLabel: '可承接合作 (Available)',
  footerCopy: '© 2025 YN DESIGN ENGINEERING · WARM CLEAR TECH',
  footerNote: 'DESKTOP 1440PX REFERENCE',
  signature: 'Bright open tech — warm, not cold · 温暖清透，澄心笃行',
  hero: {
    motifLabel: 'WARM CLEAR TECH / 晨光折射',
    coord: 'SYS.COORD: 34.0522° N, 118.2437° W',
    lightDelta: 'WARM_DAYLIGHT',
    refraction: '1.48 RI',
    photonsLabel: '光子采样 / Photons',
    photonsValue: '4,096 SPP · 澄澈漫射',
    realtime: 'REAL-TIME',
    keywords: '明亮开放 · 温暖清透 · 轻盈科技',
    titleBefore: '在架构、代码与',
    titleAccent: '空间美学',
    titleAfter: '的交汇处构筑体验',
    body: 'Human-first technology, designed for clarity and calm. 我们以画廊般的留白与微透日光为基底，摒弃冰冷死板的机器感，用精严的算法逻辑与流动的质感，为数字工具注入自然呼吸与亲和力量。',
    interactionHint:
      '[交互意图: 随页面滚动触发晶体多维光线折射与 3D 几何形变 / Scroll-linked 3D-like rotation & transformation plane]',
    ctaProjects: '浏览精选项目',
    sunlitMode: '日光模式 (Sunlit Mode)',
    motifImage: '/images/motif-crystal.jpg',
    motifAlt:
      '暖清透晶体球体与琥珀色玻璃环，晨光折射，象牙色背景',
  },
  profile: {
    label: 'PROFILE / CREATOR',
    name: 'Your Name',
    status: '可承接 2025 Q3 深度合作',
    role: '设计工程师 (Designer / Engineer) — 专注于设计系统、三维空间交互与前端高性能编译体系。',
    tags: [
      { icon: 'speed', text: '刷新率: 60FPS 目标' },
      { icon: 'memory', text: '内存架构: 零泄漏' },
      { icon: 'verified', text: 'Type-Safe Tokens' },
    ],
    bio: [
      '致力于探索交互计算、设计工程与温暖清透的数字产品界面。我们通过开放直观的工具赋予创作灵感，在严密的工程约束与细腻的人性化体验之间找到最佳平衡。',
      '以建筑学视角的严谨秩序与现代前端运行时的高阶性能相融合，打通从微观 Token 变量到宏观 3D WebGL 画布的流畅转化，打造兼具呼吸感与稳定性的全域数字产品体验。',
    ],
    links: [
      { label: '电子邮箱 (Email) ↗', href: 'mailto:contact@domain.com' },
      { label: 'GitHub ↗', href: '#' },
      { label: 'LinkedIn ↗', href: '#' },
    ],
    resumeLabel: '下载简历 (Resume PDF)',
    resumeHref: '#',
  },
  projectsSection: {
    eyebrow: 'PORTFOLIO SHOWCASE',
    title: '精选项目 / Selected Projects',
    subtitle: '01 — 03 / 点击进入独立项目详情页，查看完整架构与设计复盘',
  },
} as const
