/** 站点级内容 — 来自真实材料，不虚构；语气偏认识我 / 作品展示 */

export const site = {
  brand: '胡馨月 / PORTFOLIO',
  draftBadge: 'PERSONAL SITE',
  availableLabel: '悉尼 · 做可自用的小闭环',
  footerCopy: '© 2026 胡馨月 · WARM CLEAR TECH',
  footerNote: 'SYDNEY · BAC · DALYELL',
  signature: '明亮开放 · 温暖清透 · 轻盈科技',
  hero: {
    keywords: 'AI 应用 · Agent · 端到端小闭环',
    titleBefore: '把模型能力推进',
    titleAccent: '真实用户流程',
    titleAfter: '，做成可演示闭环',
    body: '你好，我是胡馨月。悉尼大学 BAC · Dalyell Scholar。日常重度使用 Cursor / Claude 等 Coding Agent，也独立做过 Chrome 扩展与 iOS App——喜欢把「自然语言 → 结构化输出 → 本地入库」落到能自己天天用的小闭环。',
    ctaProjects: '看看我做过什么',
    sunlitMode: '日光模式 (Sunlit Mode)',
  },
  profile: {
    label: 'PROFILE / CREATOR',
    name: '胡馨月',
    status: '悉尼大学 BAC · Dalyell Scholar',
    role: 'AI 应用 / Agent · 悉尼大学 Bachelor of Advanced Computing · Dalyell Scholar · 大一',
    tags: [
      { icon: 'verified', text: 'WAM 83.5 / 100' },
      { icon: 'terminal', text: 'Cursor / Claude 重度用户' },
      { icon: 'code', text: '中英双语流利' },
    ],
    bio: [
      '理解 LLM、结构化输出、Tool Use / Agent 基本概念；有「模型输出 → 入库」的落地经验。常驻悉尼，也在北京 / 上海 / 深圳 / 杭州之间来回。',
      '前端：TypeScript / JavaScript / HTML / CSS，做过 Chrome 扩展；客户端：Swift / SwiftUI / SwiftData，做过 iOS App（含 Live Activity）。工程工具：Git / GitHub、Vite、Xcode。',
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
    resumeLabel: '简历 PDF',
    resumeHref: '/resume/胡馨月_AI_Agent开发.pdf',
    /** 暂无清晰人像；头像留空 */
    avatarSrc: '' as string,
  },
  projectsSection: {
    eyebrow: 'SELECTED WORK',
    title: '精选项目 / Selected Projects',
    subtitle: '01 — 02 / 点进详情看问题、做法与界面',
  },
} as const
