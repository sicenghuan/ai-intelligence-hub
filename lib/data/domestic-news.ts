import { Category } from './hotspot';

export type DomesticCompany = '百度' | '腾讯' | '阿里' | '字节' | '华为' | '科大讯飞' | '商汤' | '旷视' | '月之暗面' | '智谱AI' | '深度求索';

export interface DomesticNewsItem {
  id: string;
  title: string;
  source: string;
  company?: DomesticCompany;
  category: Category;
  publishedAt: string;
  summary?: string;
  link?: string;
  featured?: boolean;
}

export const domesticNewsData: DomesticNewsItem[] = [
  {
    id: 'd1',
    title: '腾讯混元大模型开放多模态 API，支持图文视频一体化理解',
    source: '机器之心',
    company: '腾讯',
    category: '产品',
    publishedAt: '1小时前',
    summary: '腾讯混元大模型正式开放多模态 API 接口，支持图文混合输入、视频理解与内容生成，开发者可通过腾讯云直接调用。',
    link: '#',
    featured: true,
  },
  {
    id: 'd2',
    title: '阿里云通义千问 Max 上线"深度思考"模式，推理效果对标 o1',
    source: '量子位',
    company: '阿里',
    category: '产品',
    publishedAt: '2小时前',
    summary: '阿里云通义千问 Max 新增链式思维推理模块，在数学竞赛题和代码调试任务上准确率提升 35%，单次响应时间优化至 3 秒内。',
    link: '#',
    featured: true,
  },
  {
    id: 'd3',
    title: '华为盘古 5.0 大模型在工业质检场景实现商业化落地',
    source: '36氪',
    company: '华为',
    category: '产品',
    publishedAt: '3小时前',
    summary: '华为盘古 5.0 携手多家制造业企业完成大规模商业部署，产品缺陷识别准确率达 99.2%，助力客户良率提升 15%。',
    link: '#',
    featured: false,
  },
  {
    id: 'd4',
    title: '月之暗面 Kimi 发布长文档处理新版本，支持 200 万 Token',
    source: '机器之心',
    company: '月之暗面',
    category: '技术',
    publishedAt: '3小时前',
    summary: 'Kimi 新版本将上下文窗口扩展至 200 万 Token，可一次处理超过 1500 页文档，在法律合同审查和学术综述场景表现优异。',
    link: '#',
    featured: true,
  },
  {
    id: 'd5',
    title: '科大讯飞星火大模型获国家医疗 AI 认证，将接入全国 500 家医院',
    source: '人民日报',
    company: '科大讯飞',
    category: '政策',
    publishedAt: '4小时前',
    summary: '科大讯飞星火医疗大模型通过国家卫生健康委员会 AI 辅助诊断认证，计划年内接入全国500家三甲医院，覆盖影像诊断与病历生成。',
    link: '#',
    featured: false,
  },
  {
    id: 'd6',
    title: '字节跳动豆包代码助手上线 VS Code 插件，免费开放 100 万 Token',
    source: '量子位',
    company: '字节',
    category: '产品',
    publishedAt: '5小时前',
    summary: '字节跳动发布豆包 IDE 插件，提供代码补全、Bug 修复、单元测试生成功能，注册用户每月免费获得 100 万 Token 额度。',
    link: '#',
    featured: false,
  },
  {
    id: 'd7',
    title: '智谱 AI GLM-Z1 开源，性能媲美 GPT-4o，支持商用',
    source: '机器之心',
    company: '智谱AI',
    category: '技术',
    publishedAt: '6小时前',
    summary: '智谱 AI 发布 GLM-Z1 系列开源大模型，在 C-Eval、CMMLU 等中文基准上达到最优水平，Apache 2.0 协议允许商业使用。',
    link: '#',
    featured: true,
  },
  {
    id: 'd8',
    title: '百度文心一言月活用户突破 2 亿，创历史新高',
    source: '36氪',
    company: '百度',
    category: '产品',
    publishedAt: '7小时前',
    summary: '百度在季度财报中披露文心一言月活跃用户超 2 亿，企业客户数量同比增长 180%，AI 业务营收贡献比例升至 28%。',
    link: '#',
    featured: false,
  },
];
