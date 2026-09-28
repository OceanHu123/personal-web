# myweb — 个人简历站点（Warm Clear Tech）

本地可运行的个人简历网站：首页（CodePen UI + 自定义光标）+ **干净的项目详情页**（安静顶栏，不叠 CodePen chrome）。  
视觉方向：**明亮开放 · 温暖清透 · 轻盈科技**。下一轮可选 Stitch：**Vision Draft 2** prompt 见 `docs/stitch-prompt-from-current-home.md`（基于当前首页 regenerate）。

技术栈：React + TypeScript + Vite + Tailwind CSS；首页动效来自 [CodePen KwNNyjg](https://codepen.io/jerora98/pen/KwNNyjg)（作者 jerora98 / Jerome Rassweiler）；详情页仍用 Framer Motion。原始 HTML/CSS/JS 保存在 `vendor/codepen-KwNNyjg/`。

## 本地怎么跑

在项目目录 `/Users/oakley/Desktop/myweb` 打开终端：

```bash
npm install
npm run dev -- --host 127.0.0.1 --port 43127
```

预览地址：[http://127.0.0.1:43127](http://127.0.0.1:43127)  
或构建后再预览：`npm run build && npm run preview -- --host 127.0.0.1 --port 43127`

其他常用命令：

```bash
npm run build    # 类型检查 + 生产构建，产物在 dist/
npm run preview  # 本地预览构建结果
npm run lint     # 代码检查
```

## 内容改哪里

- 站点文案 / 个人简介：`src/content/site.ts`
- 项目列表与详情：`src/content/projects.ts`
- 图片：`public/images/`（RepPlate食练记 Apple Store 五屏在 `public/images/setbite/`；双语扩展品牌卡等）
- 简历 PDF：`public/resume/`

当前内容已按桌面「简历_投递用」与本地项目材料替换（胡馨月 · RepPlate食练记 / Bilingual Translate），不再使用 Your Name / Project Alpha 等占位。

RepPlate食练记详情页为横向手机框合集（scroll-snap）；素材仅复制宣传图 PNG，不会把整个 Desktop 文件夹挂成 public 树。

## 手动部署到 Vercel（大白话）

AI **不会**替你点发布。你自己操作：

1. 在电脑上先跑通 `npm run build`，确认没有报错。
2. 打开 [Vercel](https://vercel.com)，登录账号。
3. 选 **Add New → Project**，把本仓库导入（或用 Vercel CLI / 拖拽 `dist`——新手更推荐连 Git 仓库）。
4. 框架预设选 **Vite**；构建命令 `npm run build`；输出目录 `dist`。
5. 本仓库已带 `vercel.json`（SPA 路由回退到 `index.html`），一般不用改。
6. 点 Deploy。部署完成后，在浏览器打开 Vercel 给你的网址，检查首页 → 点进项目 → 返回是否正常。

以后改了内容：本地改文件 → `npm run build` 确认 → 再在 Vercel 上手动触发一次部署（或推送你绑定的分支后由你确认发布）。

## 页面怎么检查

1. 打开首页：应看到 Shore-Shack 风格导航 / Hero / 波浪分割 / 精选 RepPlate食练记 / 可筛选卡片网格 + 鼠标跟随圆点光标（桌面）。
2. 点「查看详情」进入 `/projects/setbite`，横向滑动五屏 App Store 宣传图；顶栏恢复站点 Header。
3. 刷新详情页地址应仍能打开；返回首页光标与笔 UI 仍在。
4. 点「下载简历」应能打开 `public/resume/` 下的 PDF。

## CodePen 归属

首页 UI 结构与光标逻辑改编自 [The Shore Shack — Beach Sandwich Bar Menu](https://codepen.io/jerora98/pen/KwNNyjg) by **jerora98**（Jerome Rassweiler）。原文案已替换为胡馨月真实内容； verbatim 源码见 `vendor/codepen-KwNNyjg/`。

## 说明

- 设计来源：Stitch 导出 `stitch_tech_portfolio_website_skeleton` + 视觉表达卡 v2。首页装饰晶体图已移除；交互灵感参考高级编辑站的顺滑感，未克隆其布局/品牌。
- 协作规则见 `AGENTS.md`；进度见 `项目记录.md`。
- GitHub：`https://github.com/OceanHu123/personal-web`