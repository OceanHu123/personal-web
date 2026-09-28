/** 站点级内容 — 来自简历材料与本地项目，未虚构 */

export const site = {
  brand: '胡馨月 / PORTFOLIO',
  draftBadge: 'VISION DRAFT 1 — V2',
  availableLabel: '2026.12 起可全职实习',
  footerCopy: '© 2026 胡馨月 · WARM CLEAR TECH',
  footerNote: 'SYDNEY · BAC · DALYELL',
  signature: '明亮开放 · 温暖清透 · 轻盈科技',
  hero: {
    keywords: 'AI 应用 · Agent 落地 · 端到端 Demo',
    titleBefore: '把模型能力推进',
    titleAccent: '真实用户流程',
    titleAfter: '，做成可演示闭环',
    body: '悉尼大学 BAC · Dalyell Scholar。日常重度使用 Cursor / Claude 等 Coding Agent，理解上下文管理与工具调用失败等真实痛点；独立完成过 Chrome 扩展与 iOS App，擅长把「自然语言 → 结构化输出 → 本地入库」落到可自用、可演示的小闭环。',
    ctaProjects: '浏览精选项目',
    sunlitMode: '日光模式 (Sunlit Mode)',
  },
  profile: {
    label: 'PROFILE / CREATOR',
    name: '胡馨月',
    status: '可实习：2026.12 – 2027.02（约 12 周全职）',
    role: 'AI 应用开发 / Agent 工程 · 悉尼大学 Bachelor of Advanced Computing · Dalyell Scholar · 大一',
    tags: [
      { icon: 'verified', text: 'WAM 83.5 / 100' },
      { icon: 'terminal', text: 'Cursor / Claude 重度用户' },
      { icon: 'code', text: '中英双语流利' },
    ],
    bio: [
      '目标城市：北京 / 上海 / 深圳 / 杭州 / 远程。理解 LLM、结构化输出、Tool Use / Agent 基本概念；有「模型输出 → 入库」落地经验，适合 AI 应用落地与小闭环验证。',
      '前端：TypeScript / JavaScript / HTML / CSS，独立开发过 Chrome 扩展；客户端：Swift / SwiftUI / SwiftData，独立开发过 iOS App（含 Live Activity）。工程工具：Git / GitHub、Vite、Xcode。',
    ],
    links: [
      {
        label: '电子邮箱 (Email) ↗',
        href: 'mailto:xihu0989@uni.sydney.edu.au',
      },
      {
        label: 'GitHub ↗',
        href: 'https://github.com/OceanHu123',
      },
      {
        label: '电话 / 微信',
        href: 'tel:18536805799',
      },
    ],
    resumeLabel: '下载简历 (Resume PDF)',
    resumeHref: '/resume/胡馨月_AI_Agent开发.pdf',
    /** 简历文件夹无清晰人像；头像留空，沿用顶栏图标 */
    avatarSrc: '' as string,
  },
  projectsSection: {
    eyebrow: 'PORTFOLIO SHOWCASE',
    title: '精选项目 / Selected Projects',
    subtitle: '01 — 02 / 点击进入独立项目详情页，查看问题、方案与落地说明',
  },
} as const
