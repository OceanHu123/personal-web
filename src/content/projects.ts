/** 项目内容 — 依据简历与本地 README / 截图，指标不虚构 */

export type ProjectBreakdown = {
  kind: 'problem' | 'built' | 'outcome'
  label: string
  title: string
  body: string
  metricLabel: string
  metricValue: string
  chart: 'spike' | 'flat' | 'bar'
  barPercent?: number
}

export type GalleryItem = {
  src: string
  alt: string
  captionLabel: string
  caption: string
  /** phone = portrait App Store / device frame; wide/square = landscape collage or brand cards */
  aspect: 'wide' | 'square' | 'phone'
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
  latency: string
  geometry: string
  state: string
  breakdown: ProjectBreakdown[]
  gallery: GalleryItem[]
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
      'iOS App RepPlate食练记（曾用名 SetBite）。独立完成食谱库、购物清单、训练计划、会话记录等核心模块，对接 DeepSeek API 完成「自然语言 → 结构化 JSON → 本地入库」闭环；SwiftData 本地持久化，密钥与隐私不落库、不进仓库；Live Activity / Dynamic Island 实现训练休息计时。',
    tags: ['SwiftUI', 'SwiftData', 'DeepSeek API', 'HealthKit'],
    cardImage: '/images/setbite-card.jpg',
    heroImage: '/images/setbite-hero.jpg',
    heroOverlay:
      'VIEW: EAT + TRAIN · AI 食谱导入进入主流程 · 本地优先隐私',
    role: '独立开发',
    roleDetail: '产品边界 · 客户端 · Agent 接入',
    timeline: '2026.04',
    timelineDetail: '0→1 独立开发',
    stack: 'SwiftUI / SwiftData',
    stackDetail: 'DeepSeek · HealthKit · Live Activity',
    category: 'iOS · LLM 落地',
    categoryDetail: '饮食 + 力量训练闭环',
    demoHref: '',
    sourceHref: 'https://github.com/OceanHu123/SetBite',
    specHref:
      'https://raw.githubusercontent.com/OceanHu123/RepPlate-legal/main/privacy-policy.md',
    latency: '本地优先',
    geometry: 'Eat + Train',
    state: 'DOGFOODING',
    breakdown: [
      {
        kind: 'problem',
        label: '01 // 问题与挑战 (THE PROBLEM)',
        title: '信息分散，模型难进主流程',
        body: '食谱、营养与训练信息往往散落在不同工具里；即便接了 LLM，也容易停在「能聊」而进不了可入库的真实导入路径。需要把产品边界与结构化输出约束一起写清。',
        metricLabel: '目标链路',
        metricValue: '自然语言 → 入库',
        chart: 'spike',
      },
      {
        kind: 'built',
        label: '02 // 解决方案与架构 (WHAT WAS BUILT)',
        title: 'Agent 约束 + 客户端闭环',
        body: '对接 DeepSeek API，定义输入输出形态与结构化 JSON 约束，推动模型能力进入主流程。独立落地食谱库 / 购物清单 / 训练计划 / 会话记录（SwiftUI，iOS 17+），并用 Live Activity 做休息计时。',
        metricLabel: '工程落点',
        metricValue: '模块齐全 · 可自用',
        chart: 'flat',
      },
      {
        kind: 'outcome',
        label: '03 // 落地成效与数据 (MEASURED OUTCOME)',
        title: 'Dogfooding 反推约束',
        body: '以种子用户跑通导入与训练流程，根据失败 case 反推约束与交互改进；约定密钥与隐私数据不落库、不进仓库。公开法律文档见 RepPlate-legal（隐私政策 / 条款 / 支持）。',
        metricLabel: '验证方式',
        metricValue: '自用闭环 · 失败 case',
        chart: 'flat',
      },
    ],
    gallery: [
      {
        src: '/images/setbite/01-eat-home.png',
        alt: 'RepPlate食练记今日饮食首页 · Apple Store 宣传图',
        captionLabel: '01 · EAT HOME',
        caption: '今日饮食：热量与宏量记录入口',
        aspect: 'phone',
      },
      {
        src: '/images/setbite/02-train-home.png',
        alt: 'RepPlate食练记训练首页 · Apple Store 宣传图',
        captionLabel: '02 · TRAIN HOME',
        caption: '训练首页：计划与会话入口',
        aspect: 'phone',
      },
      {
        src: '/images/setbite/03-food-search.png',
        alt: 'RepPlate食练记食物搜索 · Apple Store 宣传图',
        captionLabel: '03 · FOOD SEARCH',
        caption: '食物搜索与营养检索',
        aspect: 'phone',
      },
      {
        src: '/images/setbite/04-recipes.png',
        alt: 'RepPlate食练记食谱库 · Apple Store 宣传图',
        captionLabel: '04 · RECIPES',
        caption: '食谱库与导入相关界面',
        aspect: 'phone',
      },
      {
        src: '/images/setbite/05-workout-plan.png',
        alt: 'RepPlate食练记训练计划 · Apple Store 宣传图',
        captionLabel: '05 · WORKOUT PLAN',
        caption: '训练计划与力量编排',
        aspect: 'phone',
      },
    ],
    nextId: 'bilingual',
    nextLabel: '下一个项目 // NEXT: Bilingual Translate →',
  },
  {
    id: 'bilingual',
    index: '02',
    systemId: 'BILINGUAL_XT',
    version: '独立开发 · 可本地加载',
    title: 'Bilingual Translate',
    shortTitle: 'Bilingual Translate · Chrome 双语对照',
    cardTag: '02 // CHROME EXT',
    summary:
      '浏览器端双语对照阅读：原文保留 + 译文插入，自动跳过代码块，并支持视频字幕双语叠加。',
    description:
      'Chrome 扩展，解决网页与技术文档阅读中「译文打断原文 / 代码被误译」的问题。实现原文保留 + 译文插入的双语排版，工具栏一键开关；DOM 层内容过滤自动跳过代码块（含 Ed 等平台 snippet）；支持 YouTube / 页面内视频字幕双语叠加。TypeScript + Vite 构建，可本地加载、可迭代演示。',
    tags: ['TypeScript', 'Vite', 'Chrome Extension', 'DOM'],
    cardImage: '/images/bilingual-card.jpg',
    heroImage: '/images/bilingual-hero.jpg',
    heroOverlay:
      'VIEW: 双语对照 · 跳过代码块 · 字幕叠加（暂无页面截图，主视觉为扩展图标品牌卡）',
    role: '独立开发',
    roleDetail: '交互边界 · DOM 过滤 · 工程化',
    timeline: '2026.08',
    timelineDetail: '独立产品设计与开发',
    stack: 'TypeScript / Vite',
    stackDetail: 'Chrome Extension · DOM 过滤',
    category: '浏览器效率工具',
    categoryDetail: '双语阅读 · 技术文档友好',
    demoHref: '',
    sourceHref: 'https://github.com/OceanHu123/Bilingual-translate',
    specHref: '',
    latency: '工具栏开关',
    geometry: 'DOM 过滤',
    state: 'LOCAL DEMO',
    breakdown: [
      {
        kind: 'problem',
        label: '01 // 问题与挑战 (THE PROBLEM)',
        title: '弹窗机翻打断阅读流',
        body: '网页与技术文档场景下，弹窗翻译常打断原文阅读，且代码块易被误译。需要从自身高频阅读场景锁定痛点：做原文保留 + 译文插入，而不是全站机翻弹窗。',
        metricLabel: '核心痛点',
        metricValue: '打断 · 误译',
        chart: 'spike',
      },
      {
        kind: 'built',
        label: '02 // 解决方案与架构 (WHAT WAS BUILT)',
        title: '对照排版 + 内容边界',
        body: '设计内容过滤规则，自动跳过代码块等不应处理节点；工具栏一键开关。场景从静态网页扩展到 YouTube / 页面内字幕双语叠加；TypeScript + Vite 完成构建与本地加载。',
        metricLabel: '能力边界',
        metricValue: '能翻 / 不该翻',
        chart: 'flat',
      },
      {
        kind: 'outcome',
        label: '03 // 落地成效与数据 (MEASURED OUTCOME)',
        title: '可安装、可自用迭代',
        body: '扩展可本地加载演示；多站点验证正文与字幕场景。公开仓库：github.com/OceanHu123/Bilingual-translate（按 README 构建后加载 dist）。',
        metricLabel: '交付形态',
        metricValue: '可演示扩展',
        chart: 'flat',
      },
    ],
    gallery: [
      {
        src: '/images/bilingual-gallery-01.jpg',
        alt: 'Bilingual Translate 品牌说明卡',
        captionLabel: 'EXTENSION MARK',
        caption:
          '扩展图标品牌卡（材料中暂无网页截图；图标来自项目 public/icons）',
        aspect: 'wide',
      },
      {
        src: '/images/bilingual-gallery-02.jpg',
        alt: '文档场景说明',
        captionLabel: 'DOCS BOUNDARY',
        caption: '技术文档与 Ed snippet：自动跳过代码块，降低误译',
        aspect: 'square',
      },
      {
        src: '/images/bilingual-gallery-03.jpg',
        alt: '字幕场景说明',
        captionLabel: 'SUBTITLES',
        caption: 'YouTube / 页面内视频字幕双语叠加（场景说明卡）',
        aspect: 'square',
      },
    ],
    nextId: 'setbite',
    nextLabel: '回到首个项目 // NEXT: RepPlate食练记 →',
  },
]

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
