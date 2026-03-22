export type CompanyEventType = '产品发布' | '融资' | '技术突破' | '人事变动' | '开源';

export interface CompanyEvent {
  id: string;
  type: CompanyEventType;
  title: string;
  publishedAt: string;
  heat: number;
  isHot: boolean;
  summary?: string;
  tags?: string[];
  link?: string;
}

export interface CompanyItem {
  id: string;
  nameEn: string;
  nameCn: string;
  logo: string;
  color: string;
  bgColor: string;
  events: CompanyEvent[];
}

export const companiesData: CompanyItem[] = [
  {
    id: 'openai',
    nameEn: 'OpenAI',
    nameCn: 'OpenAI',
    logo: 'OA',
    color: '#000000',
    bgColor: '#10a37f',
    events: [
      {
        id: 'oa1',
        type: '产品发布',
        title: 'GPT-5 正式发布，性能全面领先',
        publishedAt: '1小时前',
        heat: 9800,
        isHot: true,
        summary: '多模态能力大幅提升，支持实时图像分析与 200K 上下文',
        tags: ['GPT-5', '多模态', 'SOTA'],
        link: '#',
      },
      {
        id: 'oa2',
        type: '产品发布',
        title: 'Operator Agent 全量上线，支持网页自动操作',
        publishedAt: '3小时前',
        heat: 7200,
        isHot: true,
        summary: '可自主完成预订、表单填写等复杂网页任务',
        tags: ['Agent', '自动化'],
        link: '#',
      },
    ],
  },
  {
    id: 'anthropic',
    nameEn: 'Anthropic',
    nameCn: 'Anthropic',
    logo: 'AN',
    color: '#ffffff',
    bgColor: '#c07a4a',
    events: [
      {
        id: 'an1',
        type: '产品发布',
        title: 'Claude 3.7 Sonnet 开放 API，扩展思考模式上线',
        publishedAt: '2小时前',
        heat: 8750,
        isHot: true,
        summary: 'SWE-bench 得分 62.7%，引领代码智能新高度',
        tags: ['Claude 3.7', '扩展思考'],
        link: '#',
      },
      {
        id: 'an2',
        type: '技术突破',
        title: '宪法 AI 2.0 论文发表，安全对齐新范式',
        publishedAt: '8小时前',
        heat: 4100,
        isHot: false,
        summary: '引入动态价值学习机制，减少 RLHF 数据依赖',
        tags: ['安全对齐', '宪法AI'],
        link: '#',
      },
    ],
  },
  {
    id: 'google-deepmind',
    nameEn: 'Google DeepMind',
    nameCn: '谷歌 DeepMind',
    logo: 'GD',
    color: '#ffffff',
    bgColor: '#4285f4',
    events: [
      {
        id: 'gd1',
        type: '产品发布',
        title: 'Gemini 2.0 Ultra 登顶 MMLU，全面碾压竞品',
        publishedAt: '4小时前',
        heat: 7200,
        isHot: true,
        summary: '原生多模态处理，支持实时视频理解与代码执行',
        tags: ['Gemini 2.0', 'MMLU'],
        link: '#',
      },
      {
        id: 'gd2',
        type: '开源',
        title: 'Gemma 3 开源系列发布，27B 参数可本地运行',
        publishedAt: '6小时前',
        heat: 5500,
        isHot: false,
        summary: '支持 128K 上下文，在消费级 GPU 上实现流畅推理',
        tags: ['Gemma 3', '开源', '本地部署'],
        link: '#',
      },
    ],
  },
  {
    id: 'meta-ai',
    nameEn: 'Meta AI',
    nameCn: 'Meta AI',
    logo: 'ME',
    color: '#ffffff',
    bgColor: '#0866ff',
    events: [
      {
        id: 'me1',
        type: '开源',
        title: 'Llama 4 全家桶开源，最强 MoE 模型震撼登场',
        publishedAt: '6小时前',
        heat: 6100,
        isHot: true,
        summary: 'Maverick 版本 4050 亿参数，Scout 版本 1090 亿参数，均支持 10M Token 上下文',
        tags: ['Llama 4', 'MoE', '开源'],
        link: '#',
      },
      {
        id: 'me2',
        type: '产品发布',
        title: 'Meta AI 助手集成 WhatsApp 和 Instagram，月活 10 亿',
        publishedAt: '9小时前',
        heat: 4800,
        isHot: false,
        summary: 'Meta AI 全面接入旗下社交产品，成为全球最大规模 AI 应用',
        tags: ['Meta AI', '社交', '消费级'],
        link: '#',
      },
    ],
  },
  {
    id: 'microsoft',
    nameEn: 'Microsoft',
    nameCn: '微软',
    logo: 'MS',
    color: '#ffffff',
    bgColor: '#00a4ef',
    events: [
      {
        id: 'ms1',
        type: '产品发布',
        title: 'Copilot Studio 新增 AI Agent 编排功能，企业自动化提速',
        publishedAt: '5小时前',
        heat: 5800,
        isHot: false,
        summary: '支持跨应用智能体协同，拖拽式工作流设计，无需代码',
        tags: ['Copilot', 'Agent', '企业'],
        link: '#',
      },
      {
        id: 'ms2',
        type: '技术突破',
        title: 'Azure AI 推理速度提升 5 倍，GPT-4o 延迟降至 500ms',
        publishedAt: '10小时前',
        heat: 3900,
        isHot: false,
        summary: '通过模型量化与专用 Maia 芯片协同优化，大幅降低推理成本',
        tags: ['Azure', '推理优化', 'Maia'],
        link: '#',
      },
    ],
  },
  {
    id: 'baidu',
    nameEn: 'Baidu',
    nameCn: '百度',
    logo: '百',
    color: '#ffffff',
    bgColor: '#2932e1',
    events: [
      {
        id: 'bd1',
        type: '产品发布',
        title: '文心大模型 4.5 企业版发布，支持私有化全栈部署',
        publishedAt: '7小时前',
        heat: 5400,
        isHot: false,
        summary: '面向金融、医疗、政务三大垂直领域，支持行业知识库定制',
        tags: ['文心', '企业版', '垂直行业'],
        link: '#',
      },
    ],
  },
  {
    id: 'bytedance',
    nameEn: 'ByteDance',
    nameCn: '字节跳动',
    logo: '字',
    color: '#ffffff',
    bgColor: '#ff3b5c',
    events: [
      {
        id: 'bt1',
        type: '融资',
        title: '豆包大模型获 20 亿美元战略融资，估值 150 亿美元',
        publishedAt: '3小时前',
        heat: 7920,
        isHot: true,
        summary: '本轮由 SoftBank 领投，资金用于模型研发与海外市场拓展',
        tags: ['豆包', '融资', '全球化'],
        link: '#',
      },
    ],
  },
  {
    id: 'mistral',
    nameEn: 'Mistral AI',
    nameCn: 'Mistral AI',
    logo: 'MI',
    color: '#ffffff',
    bgColor: '#ff7000',
    events: [
      {
        id: 'mi1',
        type: '产品发布',
        title: 'Mistral Small 3.1 发布，边缘 AI 新标杆',
        publishedAt: '9小时前',
        heat: 4200,
        isHot: false,
        summary: '24B 参数模型，1M 上下文，消费级 GPU 本地运行，低延迟推理',
        tags: ['Mistral', '边缘计算', '轻量级'],
        link: '#',
      },
    ],
  },
];
