# AI Intelligence Hub

> AI 产品动态实时资讯驾驶舱

面向 AI 从业者、投资人和产品经理的实时资讯聚合平台，一屏呈现 AI 产业全局动态。

[访问在线版](https://github.com) · [业务需求文档](./BRD.md)

---

## 功能特性

- **今日 AI 产品热点** — 热度排行榜，实时感知行业脉搏
- **国外 AI 产品动态** — 聚合 TechCrunch、The Verge、VentureBeat 等国际媒体
- **国内 AI 产品动态** — 聚合机器之心、量子位、36氪等国内媒体
- **AI 核心公司情报** — 追踪 OpenAI、Anthropic、Google DeepMind、Meta AI 等公司动态

## 技术栈

- **框架**: Next.js 16 (App Router)
- **语言**: TypeScript (strict mode)
- **样式**: Tailwind CSS v4
- **字体**: Geist + Geist Mono

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 代码检查
npm run lint

# 类型检查
npx tsc --noEmit
```

打开 [http://localhost:3000](http://localhost:3000) 查看。

## 项目结构

```
├── app/                    # Next.js App Router
│   ├── page.tsx            # 主页面
│   ├── layout.tsx          # 根布局
│   └── globals.css         # 全局样式
├── components/             # React 组件
│   ├── Header.tsx          # 顶部导航栏
│   ├── Footer.tsx          # 页脚
│   ├── HotspotPanel.tsx    # 今日热点面板
│   ├── GlobalNewsPanel.tsx # 国外动态面板
│   ├── DomesticNewsPanel.tsx # 国内动态面板
│   └── CompanyIntelPanel.tsx # 公司情报面板
├── lib/
│   └── data/               # Mock 数据层
│       ├── hotspot.ts      # 热点数据
│       ├── global-news.ts  # 国外动态数据
│       ├── domestic-news.ts # 国内动态数据
│       └── companies.ts    # 公司情报数据
├── BRD.md                  # 业务需求文档
└── package.json
```

## 数据说明

当前版本使用 Mock 数据，数据结构与真实 API 一致。后续计划接入 RSS / 第三方 API 实现真实数据。

## 后续规划

- Phase 2: 全局搜索、筛选器、详情侧边栏、深色模式
- Phase 3: RSS 数据接入、定时刷新、AI 自动摘要
- Phase 4: 用户收藏、关键词订阅、自定义排序
- Phase 5: 热词趋势图表、公司动态时间线

---

## License

[MIT](./LICENSE)
