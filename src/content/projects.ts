/** 项目内容 — 依据简历与本地材料；文案可对齐 Stitch，指标不虚构 */

export type ProjectBreakdown = {
  kind: 'problem' | 'built' | 'outcome'
  label: string
  title: string
  titleEn?: string
  body: string
  footerLabel: string
  footerText: string
  tone?: 'warn' | 'accent' | 'muted'
}

export type GalleryItem = {
  src: string
  alt: string
  captionLabel: string
  caption: string
  captionDetail?: string
  /** phone = portrait App Store / device frame; wide/square = landscape collage or brand cards */
  aspect: 'wide' | 'square' | 'phone'
}

export type PipelineStep = {
  index: string
  title: string
  body: string
  emphasize?: boolean
}

export type FeaturePill = {
  icon: string
  title: string
  body: string
}

export type Deliverable = {
  icon: string
  title: string
  body: string
  href?: string
  cta?: string
  badge?: string
}

export type Project = {
  id: string
  index: string
  systemId: string
  version: string
  title: string
  shortTitle: string
  cardTag: string
  summary: string
  description: string
  tags: string[]
  cardImage: string
  heroImage: string
  heroOverlay: string
  role: string
  roleDetail: string
  timeline: string
  timelineDetail: string
  stack: string
  stackDetail: string
  category: string
  categoryDetail: string
  /** 空字符串表示暂无在线演示，详情页不渲染该按钮 */
  demoHref: string
  sourceHref: string
  /** 空字符串表示暂无公开白皮书/规格链接 */
  specHref: string
  archetypeLabel: string
  statusChips: string[]
  galleryTitle: string
  gallerySubtitle: string
  galleryBadge: string
  narrativeKicker: string
  narrativeTitle: string
  narrativeIntro: string
  pipelineTitle?: string
  pipelineSubtitle?: string
  pipeline?: PipelineStep[]
  features?: FeaturePill[]
  deliverablesTitle: string
  deliverablesSubtitle: string
  deliverables: Deliverable[]
  latency: string
  geometry: string
  state: string
  breakdown: ProjectBreakdown[]
  gallery: GalleryItem[]
  prevId?: string
  prevLabel?: string
  nextId?: string
  nextLabel?: string
}

export const projects: Project[] = [
  {
    id: 'setbite',
    index: '01',
    systemId: 'SETBITE_IOS',
    version: '独立开发 · 自用闭环',
    title: 'RepPlate食练记',
    shortTitle: 'RepPlate食练记 · iOS 饮食与训练',
    cardTag: '01 // iOS · LLM 导入',
    summary:
      '将食谱、营养与力量训练收成一条用户路径，并把 LLM 接入真实 AI 食谱导入流程。',
    description:
      'iOS App RepPlate食练记（曾用名 SetBite）。独立完成食谱库、购物清单、训练计划、会话记录等核心模块，对接 DeepSeek API 完成「自然语言 → 结构化 JSON → 本地入库」闭环；SwiftData 本地持久化，密钥与隐私不落库、不进仓库；Live Activity / Dynamic Island 实现训练休息实时计时。',
    tags: ['SwiftUI', 'SwiftData', 'DeepSeek API', 'HealthKit'],
    cardImage: '/images/setbite-card.jpg',
    heroImage: '/images/setbite-hero.jpg',
    heroOverlay:
      'VIEW: EAT + TRAIN · AI 食谱导入进入主流程 · 本地优先隐私',
    role: '独立全栈开发',
    roleDetail: '产品定义 · UI设计 · Agent接入',
    timeline: '2026.04',
    timelineDetail: '0→1 独立构建 · 持续打磨',
    stack: 'SwiftUI / SwiftData',
    stackDetail: 'DeepSeek · HealthKit · Live Activity',
    category: 'iOS · LLM 落地',
    categoryDetail: '饮食 + 力量训练闭环',
    demoHref: '',
    sourceHref: 'https://github.com/OceanHu123/SetBite',
    specHref:
      'https://raw.githubusercontent.com/OceanHu123/RepPlate-legal/main/privacy-policy.md',
    archetypeLabel: 'Warm Clear Tech Archetype',
    statusChips: [],
    galleryTitle: '界面展示 · App Store 宣传图',
    gallerySubtitle:
      '五张真实机界面并排呈现（横向自由滑动浏览），素材来自 Apple Store 宣传图集。',
    galleryBadge: 'APP STORE · 05 SCREENS',
    narrativeKicker: 'ARCHITECTURAL LOG // DESIGN DISSECTION',
    narrativeTitle: '从个人痛点出发的产品演进闭环',
    narrativeIntro:
      '作为一个对力量训练与营养摄入有严苛要求的工程师，我不满于市面上大部分健康 App 充斥的商业化裂变与输入摩擦。RepPlate 是完全以「无感输入」与「数据隐私」为导向的一次独立研发。',
    pipelineTitle: '端到端数据流水线流向',
    pipelineSubtitle:
      '从非结构化多模态输入到高可靠端侧 SwiftData Schema 模型转换',
    pipeline: [
      {
        index: '01',
        title: '多渠道非结构输入',
        body: '相机拍照 / 照片库 / 短视频链接 / 自然语言描述',
      },
      {
        index: '02',
        title: 'DeepSeek Agent 解析',
        body: '结构化 JSON Schema 注入，估算克数、三大营养素、热量配比',
        emphasize: true,
      },
      {
        index: '03',
        title: 'SwiftData 本地落库',
        body: '纯本地 SQLite 存储，不设中心化服务器，沙箱安全隔离',
      },
      {
        index: '04',
        title: 'HealthKit & Activity',
        body: '同步 Apple 健康数据，动态岛实时计时，提供即时体感反馈',
      },
    ],
    deliverablesTitle: '项目产出与外部链接',
    deliverablesSubtitle: '公开仓库与可核实文档',
    deliverables: [
      {
        icon: 'code',
        title: 'GitHub 源码仓库',
        body: '包含 SwiftUI 页面逻辑、DeepSeek 请求管道、SwiftData 架构及 Live Activity 相关实现。',
        href: 'https://github.com/OceanHu123/SetBite',
        cta: '访问仓库 (GitHub)',
      },
      {
        icon: 'description',
        title: '隐私政策与法律文档',
        body: '公开法律文档见 RepPlate-legal：隐私政策 / 条款 / 支持说明。',
        href: 'https://raw.githubusercontent.com/OceanHu123/RepPlate-legal/main/privacy-policy.md',
        cta: '阅读隐私政策',
      },
      {
        icon: 'verified',
        title: '自用闭环与持续打磨',
        body: '以种子用户（自己）跑通导入与训练流程；密钥与隐私数据不落库、不进仓库。',
        badge: 'Dogfooding',
      },
    ],
    latency: '本地优先',
    geometry: 'Eat + Train',
    state: 'DOGFOODING',
    breakdown: [
      {
        kind: 'problem',
        label: '01 // 痛点与背景',
        title: '繁重的人工记账摩擦',
        body: '市面健身热量记录软件流程冗长，搜库、选克数、选单位，一顿便饭需要点击十余次。长期的心理摩擦最终必然导致记录放弃与数据断层。',
        footerLabel: '痛点总结：',
        footerText: '「记一顿饭比吃一顿饭还要累」',
        tone: 'warn',
      },
      {
        kind: 'built',
        label: '02 // 架构与设计',
        title: '多模态 LLM 落地与本地优先',
        body: '对接 DeepSeek API 视觉与文本能力，实现「随手拍图 / 粘贴短视频链接 / 自然语言 → 结构化 JSON 实体 → SwiftData 事务级存储」，端侧通过钥匙串沙箱托管用户私有密钥，零服务器数据回传。',
        footerLabel: '核心亮点：',
        footerText: 'Prompt Schema 约束保证格式对齐',
        tone: 'accent',
      },
      {
        kind: 'outcome',
        label: '03 // 个人实践与成效',
        title: 'Dogfooding 自用闭环',
        body: '自己每天三餐与每周训练全流程使用。Live Activity 实时掌控休息间歇；根据失败 case 反推约束与交互改进，真正实现「做可自用、真有价值的小闭环」。',
        footerLabel: '验证方式：',
        footerText: '自用闭环 · 失败 case 反推 · 零网络泄露约定',
        tone: 'accent',
      },
    ],
    gallery: [
      {
        src: '/images/setbite/01-eat-home.png',
        alt: 'RepPlate食练记今日饮食首页 · Apple Store 宣传图',
        captionLabel: '01 / EAT HOME',
        caption: '练了就看得见',
        captionDetail: '训练容量与每日热量可视化总结',
        aspect: 'phone',
      },
      {
        src: '/images/setbite/02-train-home.png',
        alt: 'RepPlate食练记训练首页 · Apple Store 宣传图',
        captionLabel: '02 / TRAIN HOME',
        caption: '训练首页',
        captionDetail: '计划与会话入口',
        aspect: 'phone',
      },
      {
        src: '/images/setbite/03-food-search.png',
        alt: 'RepPlate食练记食物搜索 · Apple Store 宣传图',
        captionLabel: '03 / FOOD SEARCH',
        caption: '拍一下，热量出来',
        captionDetail: '食物搜索与营养检索',
        aspect: 'phone',
      },
      {
        src: '/images/setbite/04-recipes.png',
        alt: 'RepPlate食练记食谱库 · Apple Store 宣传图',
        captionLabel: '04 / RECIPES',
        caption: '视频转食谱',
        captionDetail: '食谱库与 AI 导入相关界面',
        aspect: 'phone',
      },
      {
        src: '/images/setbite/05-workout-plan.png',
        alt: 'RepPlate食练记训练计划 · Apple Store 宣传图',
        captionLabel: '05 / WORKOUT PLAN',
        caption: '一周安排一次就好',
        captionDetail: '训练计划与力量编排',
        aspect: 'phone',
      },
    ],
    nextId: 'bilingual',
    nextLabel: '下一个项目 // NEXT: Bilingual 双语对照',
  },
  {
    id: 'bilingual',
    index: '02',
    systemId: 'BILINGUAL_EXT',
    version: '独立开发 · 生产力工具',
    title: 'Bilingual 双语对照阅读',
    shortTitle: 'Bilingual · Chrome 双语对照',
    cardTag: '02 // CHROME EXT',
    summary:
      '浏览器端双语对照阅读：原文保留 + 译文插入，自动跳过代码块，并支持视频字幕双语叠加。',
    description:
      '基于 Chrome Extension Manifest V3 的沉浸式双语网页阅读伴侣。重构 DOM 文本流实现段落级精准并排对照，保留原有代码块、公式与富文本排版；本地规则与翻译能力动态协同，消除跨语言技术文档与深度阅读的认知隔阂。支持 YouTube / 页面内视频字幕双语叠加；TypeScript + Vite 构建，可本地加载、可迭代演示。',
    tags: ['TypeScript', 'Vite', 'Chrome Extension', 'DOM'],
    cardImage: '/images/bilingual-card.jpg',
    heroImage: '/images/bilingual-hero.jpg',
    heroOverlay:
      'VIEW: 双语对照 · 跳过代码块 · 字幕叠加（暂无页面截图，主视觉为扩展图标品牌卡）',
    role: '独立全栈开发',
    roleDetail: '插件架构 · DOM重构 · 译文排版',
    timeline: '2026.08',
    timelineDetail: '独立产品设计与开发 · 持续迭代',
    stack: 'TypeScript / MV3',
    stackDetail: 'Vite · DOM TreeWalker · 字幕叠加',
    category: '浏览器扩展 · 交互',
    categoryDetail: '沉浸式阅读 · 语义分段',
    demoHref: '',
    sourceHref: 'https://github.com/OceanHu123/Bilingual-translate',
    specHref: '',
    archetypeLabel: 'Manifest V3 Architecture',
    statusChips: ['可本地加载演示'],
    galleryTitle: '界面展示 · 交互与视觉效果',
    gallerySubtitle: '非侵入式双语排版理念与场景说明（暂无网页实截图，使用品牌与场景卡）',
    galleryBadge: 'DESKTOP EXTENSION · LOCAL DEMO',
    narrativeKicker: 'DEEP DIVE // ENGINEERING DECISIONS',
    narrativeTitle: '深度复盘 · 工程与设计决策',
    narrativeIntro: '',
    features: [
      {
        icon: 'memory',
        title: '零版面破坏',
        body: 'Tree-Walker 思路智能绕过代码段、数学公式等节点，降低 CSS Flex/Grid 坍塌风险。',
      },
      {
        icon: 'verified',
        title: '上下文感知翻译',
        body: '原文保留 + 译文插入，避免传统整句直译的语义撕裂与工程行话误译。',
      },
      {
        icon: 'terminal',
        title: '工具栏一键开关',
        body: '支持快速切换对照模式，减少鼠标打断心流；场景覆盖静态网页与字幕叠加。',
      },
    ],
    deliverablesTitle: '交付物与源码资产',
    deliverablesSubtitle: '开放透明的模块设计，便于审阅与复用',
    deliverables: [
      {
        icon: 'folder_zip',
        title: 'GitHub 开源代码',
        body: '完整前端与扩展构建流程；按 README 构建后加载 dist。',
        href: 'https://github.com/OceanHu123/Bilingual-translate',
        cta: '访问仓库 (GitHub)',
      },
      {
        icon: 'rocket_launch',
        title: '本地加载演示',
        body: 'TypeScript + Vite 完成构建与本地加载，可在 Chrome 扩展管理页安装调试。',
        badge: 'Local Demo',
      },
      {
        icon: 'description',
        title: '内容边界说明',
        body: '自动跳过代码块（含 Ed 等平台 snippet）；技术文档与字幕场景已自测验证。',
        badge: 'DOM 过滤',
      },
    ],
    latency: '工具栏开关',
    geometry: 'DOM 过滤',
    state: 'LOCAL DEMO',
    breakdown: [
      {
        kind: 'problem',
        label: 'SECTION 01',
        title: '痛点与背景',
        titleEn: 'The Problem We Tackled',
        body: '现代软件工程师和研究者每日需浏览海量英文文档、GitHub Issues 与官方说明。浏览器自带翻译往往直接覆写整页 DOM：破坏代码高亮、弄碎行内代码标签；纯划词翻译又打断阅读沉浸感，无法形成连贯的语境感知。',
        footerLabel: '',
        footerText: '传统全页机器翻译对技术文章极度不友好',
        tone: 'warn',
      },
      {
        kind: 'built',
        label: 'SECTION 02',
        title: '架构与设计',
        titleEn: 'What Was Engineered',
        body: '基于 DOM 遍历有效语义节点（严格忽略 code、pre 等特异标签），在段落间动态注入不破坏原父级计算样式的对照层。工具栏一键开关；场景从静态网页扩展到 YouTube / 页面内字幕双语叠加。',
        footerLabel: '',
        footerText: 'Manifest V3 · Vite · DOM 内容过滤',
        tone: 'accent',
      },
      {
        kind: 'outcome',
        label: 'SECTION 03',
        title: '实际表现',
        titleEn: 'Measured Outcome',
        body: '扩展可本地加载演示；多站点验证正文与字幕场景。公开仓库按 README 构建后即可在 Chrome 加载 dist，持续迭代内容过滤边界。',
        footerLabel: '',
        footerText: '可安装 · 可自用 · 隐私不遥测',
        tone: 'muted',
      },
    ],
    gallery: [
      {
        src: '/images/bilingual-gallery-01.jpg',
        alt: 'Bilingual Translate 品牌说明卡',
        captionLabel: 'EXTENSION MARK',
        caption: '扩展图标品牌卡',
        captionDetail: '材料中暂无网页截图；图标来自项目 public/icons',
        aspect: 'wide',
      },
      {
        src: '/images/bilingual-gallery-02.jpg',
        alt: '文档场景说明',
        captionLabel: 'DOCS BOUNDARY',
        caption: '技术文档友好',
        captionDetail: '自动跳过代码块，降低误译',
        aspect: 'square',
      },
      {
        src: '/images/bilingual-gallery-03.jpg',
        alt: '字幕场景说明',
        captionLabel: 'SUBTITLES',
        caption: '字幕双语叠加',
        captionDetail: 'YouTube / 页面内视频字幕场景说明',
        aspect: 'square',
      },
    ],
    prevId: 'setbite',
    prevLabel: '上一个项目 // PREV: RepPlate食练记',
    nextId: undefined,
    nextLabel: undefined,
  },
]

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
