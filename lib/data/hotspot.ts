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
    id: 'h1', rank: 1,
    title: 'GPT-5 正式发布，多模态能力全面超越前代',
    heat: 9800, trend: 'up', category: '产品', source: 'TechCrunch', publishedAt: '1小时前',
    summary: 'OpenAI 正式推出 GPT-5，在代码生成、数学推理和多模态理解三大领域刷新 SOTA，上下文窗口扩展至 200K tokens，并支持实时图像生成与分析。',
    link: '#',
  },
  {
    id: 'h2', rank: 2,
    title: 'Anthropic Claude 3.7 Sonnet 开放 API 访问',
    heat: 8750, trend: 'up', category: '产品', source: 'Anthropic Blog', publishedAt: '2小时前',
    summary: 'Anthropic 发布 Claude 3.7 Sonnet，扩展思考功能让模型在回答前进行更深层推理，在 SWE-bench Verified 上得分达 62.7%。',
    link: '#',
  },
  {
    id: 'h3', rank: 3,
    title: '字节跳动豆包大模型获 20 亿美元新一轮融资',
    heat: 7920, trend: 'up', category: '融资', source: '36氪', publishedAt: '3小时前',
    summary: '字节跳动旗下豆包 AI 完成新一轮战略融资，估值突破 150 亿美元，本轮资金将用于模型研发与全球化推广。',
    link: '#',
  },
  {
    id: 'h4', rank: 4,
    title: 'Google Gemini 2.0 Ultra 登顶 MMLU 榜单',
    heat: 7200, trend: 'up', category: '研究', source: 'The Verge', publishedAt: '4小时前',
    summary: 'Google DeepMind 发布 Gemini 2.0 Ultra，在多项学术基准上超越竞品，原生多模态处理能力显著提升。',
    link: '#',
  },
  {
    id: 'h5', rank: 5,
    title: '欧盟 AI 法案正式生效，高风险应用需通过合规审查',
    heat: 6500, trend: 'flat', category: '政策', source: 'Reuters', publishedAt: '5小时前',
    summary: '欧盟 AI 法案进入实施阶段，高风险 AI 系统须在上市前完成透明度审查，各成员国监管机构同步启动执行机制。',
    link: '#',
  },
  {
    id: 'h6', rank: 6,
    title: 'Meta 开源 Llama 4 系列，包含 4050 亿参数 MoE 模型',
    heat: 6100, trend: 'up', category: '技术', source: 'Meta AI Blog', publishedAt: '6小时前',
    summary: 'Meta 发布 Llama 4 家族，旗舰版 Llama 4 Maverick 采用 MoE 架构，激活参数 170B，支持原生多语言与代码生成。',
    link: '#',
  },
  {
    id: 'h7', rank: 7,
    title: '百度文心大模型 4.5 推出企业专属定制版',
    heat: 5400, trend: 'flat', category: '产品', source: '机器之心', publishedAt: '7小时前',
    summary: '百度文心 4.5 企业版支持私有化部署与行业知识库定制，面向金融、医疗、政务三大垂直领域提供专属解决方案。',
    link: '#',
  },
  {
    id: 'h8', rank: 8,
    title: 'Sam Altman 接受国会质询，谈 AGI 安全监管框架',
    heat: 4800, trend: 'down', category: '观点', source: 'Bloomberg', publishedAt: '8小时前',
    summary: 'OpenAI CEO Sam Altman 出席美国参议院听证会，就 AGI 风险、数据隐私及监管框架提出三阶段立法建议。',
    link: '#',
  },
  {
    id: 'h9', rank: 9,
    title: 'Mistral AI 发布 Mistral Small 3.1，专为边缘部署优化',
    heat: 4200, trend: 'up', category: '技术', source: 'VentureBeat', publishedAt: '9小时前',
    summary: 'Mistral AI 推出 24B 参数轻量级模型，支持 1M 上下文窗口，可在消费级 GPU 本地运行，针对低延迟推理场景优化。',
    link: '#',
  },
  {
    id: 'h10', rank: 10,
    title: '阿里通义千问团队核心成员加盟月之暗面',
    heat: 3600, trend: 'down', category: '人事', source: '量子位', publishedAt: '10小时前',
    summary: '据知情人士透露，阿里通义团队核心研究员已离职加入月之暗面，该团队专注于长上下文与多模态方向研究。',
    link: '#',
  },
  {
    id: 'h11', rank: 11,
    title: 'Perplexity AI 获 5 亿美元融资，估值达 90 亿美元',
    heat: 3400, trend: 'up', category: '融资', source: 'Bloomberg', publishedAt: '11小时前',
    summary: 'AI 搜索引擎 Perplexity 完成 D 轮融资，SoftBank 领投，计划将搜索能力扩展至企业级市场并推出 Agent 工作流。',
    link: '#',
  },
  {
    id: 'h12', rank: 12,
    title: 'Nvidia Blackwell Ultra GPU 开始向云厂商大规模供货',
    heat: 3100, trend: 'up', category: '技术', source: 'Reuters', publishedAt: '12小时前',
    summary: 'Nvidia 启动 GB200 NVL72 机架系统向 AWS、Google Cloud、Azure 大规模发货，承诺推理速度较 H100 提升 30 倍。',
    link: '#',
  },
  {
    id: 'h13', rank: 13,
    title: '英国政府宣布 15 亿英镑国家 AI 研究基础设施投资',
    heat: 2800, trend: 'up', category: '政策', source: 'BBC Tech', publishedAt: '13小时前',
    summary: '英国政府宣布脱欧后最大 AI 战略投资，用于建设主权 AI 计算集群，目标是将英国打造为全球 AI 研发中心。',
    link: '#',
  },
  {
    id: 'h14', rank: 14,
    title: '智谱 AI 开源 GLM-Z1 系列，中文基准性能对标 GPT-4o',
    heat: 2600, trend: 'up', category: '技术', source: '机器之心', publishedAt: '14小时前',
    summary: '智谱 AI 发布 GLM-Z1 开源大模型，在 C-Eval、CMMLU 等中文基准上达到最优水平，采用 Apache 2.0 许可证允许商业使用。',
    link: '#',
  },
  {
    id: 'h15', rank: 15,
    title: 'Anthropic CEO 接受访谈：AGI 可能在 2027 年前实现',
    heat: 2400, trend: 'flat', category: '观点', source: 'Wired', publishedAt: '15小时前',
    summary: 'Anthropic CEO Dario Amodei 在访谈中表示，在充足算力和数据支持下，通用人工智能可能在 2027 年前成为现实。',
    link: '#',
  },
  {
    id: 'h16', rank: 16,
    title: '腾讯混元大模型开放多模态 API，支持图文视频一体化理解',
    heat: 2200, trend: 'up', category: '产品', source: '36氪', publishedAt: '16小时前',
    summary: '腾讯混元大模型正式开放多模态 API 接口，支持图文混合输入、视频理解与内容生成，开发者可通过腾讯云直接调用。',
    link: '#',
  },
  {
    id: 'h17', rank: 17,
    title: 'OpenAI 前安全负责人创立新公司，专注 AI 对齐研究',
    heat: 2000, trend: 'up', category: '人事', source: 'TechCrunch', publishedAt: '17小时前',
    summary: 'OpenAI 前安全研究主管离开后创立新公司，旨在解决大模型价值对齐难题，已获 a16z 2000 万美元种子轮融资。',
    link: '#',
  },
  {
    id: 'h18', rank: 18,
    title: '华为盘古 5.0 在工业质检场景实现大规模商业落地',
    heat: 1850, trend: 'flat', category: '产品', source: '量子位', publishedAt: '18小时前',
    summary: '华为盘古 5.0 携手多家制造业企业完成大规模商业部署，产品缺陷识别准确率达 99.2%，助力客户良率提升 15%。',
    link: '#',
  },
  {
    id: 'h19', rank: 19,
    title: 'DeepSeek 发布 R2 模型，推理能力超越 GPT-4o',
    heat: 1700, trend: 'up', category: '研究', source: 'VentureBeat', publishedAt: '19小时前',
    summary: '中国 AI 创业公司 DeepSeek 发布 R2，在 MATH 和 HumanEval 基准上超越主流竞品，参数效率较 R1 提升 40%。',
    link: '#',
  },
  {
    id: 'h20', rank: 20,
    title: 'Stability AI 发布 Stable Diffusion 4，原生支持视频生成',
    heat: 1550, trend: 'down', category: '产品', source: 'TechCrunch', publishedAt: '20小时前',
    summary: 'Stability AI 最新模型可根据文本提示生成 60 秒高保真视频，质量与 Sora 相当，可在消费级硬件运行。',
    link: '#',
  },
];
