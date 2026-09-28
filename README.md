# myweb — 个人简历站点（Warm Clear Tech）

本地可运行的个人简历网站：首页（科技中心图案 + 简介 + 项目入口）+ 项目详情页。  
视觉方向：**明亮开放 · 温暖清透 · 轻盈科技**（视觉表达卡 v2 / Stitch Vision Draft 1）。

技术栈：React + TypeScript + Vite + Tailwind CSS。

## 本地怎么跑

在项目目录 `/Users/oakley/Desktop/myweb` 打开终端：

```bash
npm install
npm run dev
```

默认预览地址大约是：[http://127.0.0.1:43127](http://127.0.0.1:43127)  
（若端口被占用，终端里会打印实际端口。）

其他常用命令：

```bash
npm run build    # 类型检查 + 生产构建，产物在 dist/
npm run preview  # 本地预览构建结果
npm run lint     # 代码检查
```

## 内容改哪里

- 站点文案 / 个人简介占位：`src/content/site.ts`
- 项目列表与详情：`src/content/projects.ts`
- 图片：`public/images/`

当前文案和图片都是 **占位示例**（Your Name / Project Alpha…），不是真实个人履历。换成你的资料时，只改内容文件和图片即可。

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

1. 打开首页，看顶部导航、英雄区晶体图案、简介、三个项目卡片。
2. 往下滚：晶体图案应有轻微旋转/位移（滚动联动）。
3. 点「探索 Project Alpha」进入详情；再点「返回首页」或浏览器后退。
4. 刷新详情页地址（如 `/projects/alpha`）应仍能打开，不会白屏。

## 说明

- 设计来源：Stitch 导出 `stitch_tech_portfolio_website_skeleton` + 视觉表达卡 v2；首页动势气质参考用户提供的 mp4。
- 协作规则见 `AGENTS.md`；进度见 `项目记录.md`。
