/** 项目占位内容 — 示例用，勿当作真实履历 */

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
  aspect: 'wide' | 'square'
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
  demoHref: string
  sourceHref: string
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
    id: 'alpha',
    index: '01',
    systemId: 'SPATIAL_GRAPH_CORE',
    version: 'VERSION 2.4.0-PROD',
    title: 'Project Alpha',
    shortTitle: 'Project Alpha · 空间协同引擎',
    cardTag: '01 // SPATIAL ENGINE',
    summary: '用于协同程序化建模与实时可视化的空间计算界面系统。',
    description:
      '面向分布式工程团队的高精度实时空间程序化建模与可视化协作交互系统。以晨光般温润澄澈的视觉界面，赋能复杂几何管线的流态心流操作。',
    tags: ['React', 'WebGL', '系统架构'],
    cardImage: '/images/project-alpha-card.jpg',
    heroImage: '/images/project-alpha-hero.jpg',
    heroOverlay:
      'VIEW: CAMERA_PERSPECTIVE_01 · 具备实时多分辨率细分渲染与交互式空间坐标重映射',
    role: '设计工程负责人 (Lead)',
    roleDetail: '架构、着色器与前端内核',
    timeline: '2024 年度',
    timelineDetail: '研发周期 8 个月',
    stack: 'React / WebGL / TS',
    stackDetail: 'Three.js / WebRTC / CRDT',
    category: '空间协同系统',
    categoryDetail: 'Interactive CAD Infrastructure',
    demoHref: '#',
    sourceHref: '#',
    specHref: '#',
    latency: '1.2ms',
    geometry: '1.24M VERTS',
    state: 'SYNCED',
    breakdown: [
      {
        kind: 'problem',
        label: '01 // 问题与挑战 (THE PROBLEM)',
        title: '传统序列化载荷拥塞',
        body: '传统空间协同设计工具在多用户高频几何形变时往往受制于繁重的载荷序列化。多人并发操作产生超过 120ms 的网络帧丢弃与状态冲突，导致视图跳变与模型拓扑错乱。',
        metricLabel: '状态同步延迟 (Peer Latency)',
        metricValue: '140ms AVG → 已解决',
        chart: 'spike',
      },
      {
        kind: 'built',
        label: '02 // 解决方案与架构 (WHAT WAS BUILT)',
        title: '解耦节点图与 CRDT 同步',
        body: '在 TypeScript 中构建解耦的响应式节点图引擎，直接编译为 WebGL 着色器操作。基于 CRDT 设计点对点差异化状态同步机制，消除中心节点回程，锁定 60fps 广播。',
        metricLabel: '计算管线吞吐 (Pipeline Throughput)',
        metricValue: '60 FPS 稳定',
        chart: 'flat',
      },
      {
        kind: 'outcome',
        label: '03 // 落地成效与数据 (MEASURED OUTCOME)',
        title: '高效吞吐与规模化采纳',
        body: '实现网络通信负载降低 88.4%，在超 120 万高多边形复杂模型下保持丝滑操作。首期内测被 4,500+ 名工程师深度采纳，历经 6 个月大规模实战应用零脱机事故。',
        metricLabel: '网络负载削减 (Payload Reduction)',
        metricValue: '-88.4%',
        chart: 'bar',
        barPercent: 88.4,
      },
    ],
    gallery: [
      {
        src: '/images/gallery-01.jpg',
        alt: '程序化节点图工作区',
        captionLabel: 'COMPONENT SPECIFICATION // HI-RES SCHEMATIC',
        caption:
          'GALLERY_01: 程序化节点图工作区与参数检查器 · 层次依赖解析机制与即时求值管线',
        aspect: 'wide',
      },
      {
        src: '/images/gallery-02.jpg',
        alt: '多光标协同视口',
        captionLabel: 'COLLABORATION ENGINE',
        caption:
          'GALLERY_02: 多光标协同视口与空间约束求解器 · 实时防冲突网格计算',
        aspect: 'square',
      },
      {
        src: '/images/gallery-03.jpg',
        alt: '设计令牌分发矩阵',
        captionLabel: 'DESIGN TOKENS',
        caption:
          'GALLERY_03: 设计令牌多平台分发矩阵与微交互状态机 · 同步 Tailwind 与 WebGL uniform',
        aspect: 'square',
      },
    ],
    nextId: 'beta',
    nextLabel: '下一个项目 // NEXT: Project Beta →',
  },
  {
    id: 'beta',
    index: '02',
    systemId: 'DESIGN_TOKEN_PIPE',
    version: 'VERSION 1.8.2-PROD',
    title: 'Project Beta',
    shortTitle: 'Project Beta · 动态设计令牌分发',
    cardTag: '02 // DESIGN TOKENS',
    summary: '面向跨平台响应式设计系统的自治多端设计令牌分发引擎。',
    description:
      '将色板、字阶与间距令牌编译为多端产物的自治分发引擎。以温暖清透的令牌矩阵界面，把设计系统从静态文档变成可持续同步的运行时管线。',
    tags: ['TypeScript', '设计系统', 'AST 编译器'],
    cardImage: '/images/project-beta-card.jpg',
    heroImage: '/images/project-beta-card.jpg',
    heroOverlay:
      'VIEW: TOKEN_MATRIX_01 · 跨平台令牌编译与差异化热更新管线',
    role: '系统设计 (Systems)',
    roleDetail: '令牌架构与编译管线',
    timeline: '2024 — 2025',
    timelineDetail: '迭代周期 5 个月',
    stack: 'TypeScript / AST',
    stackDetail: 'Style Dictionary / Tailwind',
    category: '设计系统基建',
    categoryDetail: 'Multi-platform Token Engine',
    demoHref: '#',
    sourceHref: '#',
    specHref: '#',
    latency: '0.4ms',
    geometry: '2.1K TOKENS',
    state: 'SYNCED',
    breakdown: [
      {
        kind: 'problem',
        label: '01 // 问题与挑战 (THE PROBLEM)',
        title: '多端令牌漂移',
        body: '设计稿、Web 与原生端各自维护色值与字阶，导致视觉不一致与手工同步成本。占位示例：说明典型问题场景，非真实项目数据。',
        metricLabel: '漂移事件 (Drift Events)',
        metricValue: '高频 → 待收敛',
        chart: 'spike',
      },
      {
        kind: 'built',
        label: '02 // 解决方案与架构 (WHAT WAS BUILT)',
        title: 'AST 驱动的多端编译',
        body: '以 TypeScript AST 解析令牌源，输出 CSS 变量、Tailwind 主题与原生平台映射。占位示例描述。',
        metricLabel: '编译吞吐',
        metricValue: '稳定热更新',
        chart: 'flat',
      },
      {
        kind: 'outcome',
        label: '03 // 落地成效与数据 (MEASURED OUTCOME)',
        title: '单一真相源落地',
        body: '占位成效说明：统一令牌源后，跨端样式差异显著下降，发布节奏更可预期。',
        metricLabel: '一致性提升',
        metricValue: '-76% 漂移',
        chart: 'bar',
        barPercent: 76,
      },
    ],
    gallery: [
      {
        src: '/images/gallery-03.jpg',
        alt: '令牌矩阵',
        captionLabel: 'TOKEN MATRIX',
        caption: 'GALLERY_01: 动态令牌矩阵与平台映射预览（占位图）',
        aspect: 'wide',
      },
      {
        src: '/images/gallery-01.jpg',
        alt: '编译管线',
        captionLabel: 'COMPILER PIPELINE',
        caption: 'GALLERY_02: AST 编译与产物分发面板（占位图）',
        aspect: 'square',
      },
      {
        src: '/images/project-beta-card.jpg',
        alt: '令牌卡片',
        captionLabel: 'SURFACE PREVIEW',
        caption: 'GALLERY_03: 暖石色表面与青绿强调预览（占位图）',
        aspect: 'square',
      },
    ],
    nextId: 'gamma',
    nextLabel: '下一个项目 // NEXT: Project Gamma →',
  },
  {
    id: 'gamma',
    index: '03',
    systemId: 'TELEMETRY_CANVAS',
    version: 'VERSION 0.9.5-BETA',
    title: 'Project Gamma',
    shortTitle: 'Project Gamma · 极速遥测画布',
    cardTag: '03 // TELEMETRY CANVAS',
    summary: '为分布式基础设施与实时遥测构建的超低延迟监控画布。',
    description:
      '面向分布式基础设施的低延迟遥测画布。以柔和暖石色面板承载实时波形与微监控指标，强调可读性与冷静操作，而非霓虹告警堆叠。',
    tags: ['数据可视化', '高性能 UI', 'Canvas 2D'],
    cardImage: '/images/project-gamma-card.jpg',
    heroImage: '/images/project-gamma-card.jpg',
    heroOverlay:
      'VIEW: TELEMETRY_STREAM_01 · 微延迟波形与多通道状态同步',
    role: '可视化工程',
    roleDetail: 'Canvas 渲染与数据管道',
    timeline: '2025 上半年',
    timelineDetail: '研发周期 4 个月',
    stack: 'Canvas 2D / TS',
    stackDetail: 'WebSocket / Workers',
    category: '实时监控',
    categoryDetail: 'Low-latency Telemetry UI',
    demoHref: '#',
    sourceHref: '#',
    specHref: '#',
    latency: '0.8ms',
    geometry: '48 STREAMS',
    state: 'LIVE',
    breakdown: [
      {
        kind: 'problem',
        label: '01 // 问题与挑战 (THE PROBLEM)',
        title: '告警噪声淹没信号',
        body: '高密度遥测界面常被霓虹色与闪烁占满，关键信号难以及时读出。占位示例，非真实故障数据。',
        metricLabel: '误报关注成本',
        metricValue: '偏高 → 已缓解',
        chart: 'spike',
      },
      {
        kind: 'built',
        label: '02 // 解决方案与架构 (WHAT WAS BUILT)',
        title: '暖色清透监控画布',
        body: '用 Canvas 2D 与 Worker 分流渲染波形，界面采用暖象牙与青绿强调，只在关键态提亮。占位示例描述。',
        metricLabel: '帧时稳定度',
        metricValue: '60 FPS 目标',
        chart: 'flat',
      },
      {
        kind: 'outcome',
        label: '03 // 落地成效与数据 (MEASURED OUTCOME)',
        title: '更快定位异常通道',
        body: '占位成效：值班同学能在更短时间内定位异常流，界面疲劳感下降。',
        metricLabel: '定位耗时下降',
        metricValue: '-41%',
        chart: 'bar',
        barPercent: 41,
      },
    ],
    gallery: [
      {
        src: '/images/project-gamma-card.jpg',
        alt: '遥测画布',
        captionLabel: 'TELEMETRY OVERVIEW',
        caption: 'GALLERY_01: 多通道遥测总览与微波形（占位图）',
        aspect: 'wide',
      },
      {
        src: '/images/gallery-02.jpg',
        alt: '细节面板',
        captionLabel: 'STREAM DETAIL',
        caption: 'GALLERY_02: 单通道细节与延迟标注（占位图）',
        aspect: 'square',
      },
      {
        src: '/images/gallery-01.jpg',
        alt: '告警摘要',
        captionLabel: 'ALERT SUMMARY',
        caption: 'GALLERY_03: 清透告警摘要条（占位图）',
        aspect: 'square',
      },
    ],
    nextId: 'alpha',
    nextLabel: '回到首个项目 // NEXT: Project Alpha →',
  },
]

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id)
}
