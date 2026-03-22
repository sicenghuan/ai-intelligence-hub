export type TrendDirection = 'up' | 'down' | 'flat';
export type Category = '产品' | '融资' | '研究' | '观点' | '政策' | '人事' | '技术';

export interface HotspotItem {
  id: string;
  rank: number;
  title: string;
  heat: number;
  trend: TrendDirection;
  category: Category;
  source: string;
  publishedAt: string;
  summary?: string;
  link?: string;
}

export const hotspotData: HotspotItem[] = [
  {
    id: 'h1',
    rank: 1,
    title: 'GPT-5 正式发布，多模态能力全面超越前代',
    heat: 9800,
    trend: 'up',
    category: '产品',
    source: 'TechCrunch',
    publishedAt: '1小时前',
    summary: 'OpenAI 正式推出 GPT-5，在代码生成、数学推理和多模态理解三大领域刷新 SOTA，上下文窗口扩展至 200K tokens，并支持实时图像生成与分析。',
    link: '#',
  },
  {
    id: 'h2',
    rank: 2,
    title: 'Anthropic Claude 3.7 Sonnet 开放 API 访问',
    heat: 8750,
    trend: 'up',
    category: '产品',
    source: 'Anthropic Blog',
    publishedAt: '2小时前',
    summary: 'Anthropic 发布 Claude 3.7 Sonnet，扩展思考功能让模型在回答前进行更深层推理，在 SWE-bench Verified 上得分达 62.7%。',
    link: '#',
  },
  {
    id: 'h3',
    rank: 3,
    title: '字节跳动豆包大模型获 20 亿美元新一轮融资',
    heat: 7920,
    trend: 'up',
    category: '融资',
    source: '36氪',
    publishedAt: '3小时前',
    summary: '字节跳动旗下豆包 AI 完成新一轮战略融资，估值突破 150 亿美元，本轮资金将用于模型研发与全球化推广。',
    link: '#',
  },
  {
    id: 'h4',
    rank: 4,
    title: 'Google Gemini 2.0 Ultra 登顶 MMLU 榜单',
    heat: 7200,
    trend: 'up',
    category: '研究',
    source: 'The Verge',
    publishedAt: '4小时前',
    summary: 'Google DeepMind 发布 Gemini 2.0 Ultra，在多项学术基准上超越竞品，原生多模态处理能力显著提升。',
    link: '#',
  },
  {
    id: 'h5',
    rank: 5,
    title: '欧盟 AI 法案正式生效，高风险应用需通过合规审查',
    heat: 6500,
    trend: 'flat',
    category: '政策',
    source: 'Reuters',
    publishedAt: '5小时前',
    summary: '欧盟 AI 法案进入实施阶段，高风险 AI 系统须在上市前完成透明度审查，各成员国监管机构同步启动执行机制。',
    link: '#',
  },
  {
    id: 'h6',
    rank: 6,
    title: 'Meta 开源 Llama 4 系列，包含 4050 亿参数 MoE 模型',
    heat: 6100,
    trend: 'up',
    category: '技术',
    source: 'Meta AI Blog',
    publishedAt: '6小时前',
    summary: 'Meta 发布 Llama 4 家族，旗舰版 Llama 4 Maverick 采用 MoE 架构，激活参数 170B，支持原生多语言与代码生成。',
    link: '#',
  },
  {
    id: 'h7',
    rank: 7,
    title: '百度文心大模型 4.5 推出企业专属定制版',
    heat: 5400,
    trend: 'flat',
    category: '产品',
    source: '机器之心',
    publishedAt: '7小时前',
    summary: '百度文心 4.5 企业版支持私有化部署与行业知识库定制，面向金融、医疗、政务三大垂直领域提供专属解决方案。',
    link: '#',
  },
  {
    id: 'h8',
    rank: 8,
    title: 'Sam Altman 接受国会质询，谈 AGI 安全监管框架',
    heat: 4800,
    trend: 'down',
    category: '观点',
    source: 'Bloomberg',
    publishedAt: '8小时前',
    summary: 'OpenAI CEO Sam Altman 出席美国参议院听证会，就 AGI 风险、数据隐私及监管框架提出三阶段立法建议。',
    link: '#',
  },
  {
    id: 'h9',
    rank: 9,
    title: 'Mistral AI 发布 Mistral Small 3.1，专为边缘部署优化',
    heat: 4200,
    trend: 'up',
    category: '技术',
    source: 'VentureBeat',
    publishedAt: '9小时前',
    summary: 'Mistral AI 推出 24B 参数轻量级模型，支持 1M 上下文窗口，可在消费级 GPU 本地运行，针对低延迟推理场景优化。',
    link: '#',
  },
  {
    id: 'h10',
    rank: 10,
    title: '阿里通义千问团队重要成员加盟月之暗面',
    heat: 3600,
    trend: 'down',
    category: '人事',
    source: '量子位',
    publishedAt: '10小时前',
    summary: '据知情人士透露，阿里通义团队核心研究员已离职加入月之暗面，该团队专注于长上下文与多模态方向研究。',
    link: '#',
  },
];
