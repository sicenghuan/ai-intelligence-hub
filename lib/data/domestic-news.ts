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
    source: '机器之心', company: '腾讯', category: '产品', publishedAt: '1小时前',
    summary: '腾讯混元大模型正式开放多模态 API 接口，支持图文混合输入、视频理解与内容生成，开发者可通过腾讯云直接调用。',
    link: '#', featured: true,
  },
  {
    id: 'd2',
    title: '阿里云通义千问 Max 上线"深度思考"模式，推理效果对标 o1',
    source: '量子位', company: '阿里', category: '产品', publishedAt: '2小时前',
    summary: '阿里云通义千问 Max 新增链式思维推理模块，在数学竞赛题和代码调试任务上准确率提升 35%，单次响应时间优化至 3 秒内。',
    link: '#', featured: true,
  },
  {
    id: 'd3',
    title: '华为盘古 5.0 大模型在工业质检场景实现大规模商业落地',
    source: '36氪', company: '华为', category: '产品', publishedAt: '3小时前',
    summary: '华为盘古 5.0 携手多家制造业企业完成大规模商业部署，产品缺陷识别准确率达 99.2%，助力客户良率提升 15%。',
    link: '#', featured: false,
  },
  {
    id: 'd4',
    title: '月之暗面 Kimi 发布长文档处理新版本，支持 200 万 Token',
    source: '机器之心', company: '月之暗面', category: '技术', publishedAt: '3小时前',
    summary: 'Kimi 新版本将上下文窗口扩展至 200 万 Token，可一次处理超过 1500 页文档，在法律合同审查和学术综述场景表现优异。',
    link: '#', featured: true,
  },
  {
    id: 'd5',
    title: '科大讯飞星火大模型获国家医疗 AI 认证，将接入全国 500 家医院',
    source: '人民日报', company: '科大讯飞', category: '政策', publishedAt: '4小时前',
    summary: '科大讯飞星火医疗大模型通过国家卫生健康委员会 AI 辅助诊断认证，计划年内接入全国 500 家三甲医院，覆盖影像诊断与病历生成。',
    link: '#', featured: false,
  },
  {
    id: 'd6',
    title: '字节跳动豆包代码助手上线 VS Code 插件，免费开放 100 万 Token',
    source: '量子位', company: '字节', category: '产品', publishedAt: '5小时前',
    summary: '字节跳动发布豆包 IDE 插件，提供代码补全、Bug 修复、单元测试生成功能，注册用户每月免费获得 100 万 Token 额度。',
    link: '#', featured: false,
  },
  {
    id: 'd7',
    title: '智谱 AI GLM-Z1 开源，性能媲美 GPT-4o，支持商用',
    source: '机器之心', company: '智谱AI', category: '技术', publishedAt: '6小时前',
    summary: '智谱 AI 发布 GLM-Z1 系列开源大模型，在 C-Eval、CMMLU 等中文基准上达到最优水平，Apache 2.0 协议允许商业使用。',
    link: '#', featured: true,
  },
  {
    id: 'd8',
    title: '百度文心一言月活用户突破 2 亿，创历史新高',
    source: '36氪', company: '百度', category: '产品', publishedAt: '7小时前',
    summary: '百度在季度财报中披露文心一言月活跃用户超 2 亿，企业客户数量同比增长 180%，AI 业务营收贡献比例升至 28%。',
    link: '#', featured: false,
  },
  {
    id: 'd9',
    title: '深度求索 DeepSeek R2 发布，推理能力对标 o1 正式版',
    source: '量子位', company: '深度求索', category: '技术', publishedAt: '8小时前',
    summary: 'DeepSeek R2 采用新型思维链架构，在 MATH-500 和 AIME 数学竞赛题上准确率超 85%，同时保持开源开放策略。',
    link: '#', featured: true,
  },
  {
    id: 'd10',
    title: '阿里通义千问团队核心成员离职加入月之暗面',
    source: '机器之心', company: '阿里', category: '人事', publishedAt: '9小时前',
    summary: '据可靠消息，阿里通义千问团队核心研究员已正式加入月之暗面，将负责下一代多模态大模型的预训练工作。',
    link: '#', featured: false,
  },
  {
    id: 'd11',
    title: '商汤科技发布 SenseMiracle 3.0，支持端侧实时 3D 生成',
    source: '36氪', company: '商汤', category: '产品', publishedAt: '10小时前',
    summary: '商汤科技发布 SenseMiracle 3.0，实现手机端实时 3D 场景生成与渲染，在骁龙 8 Gen4 芯片上可达 30fps。',
    link: '#', featured: false,
  },
  {
    id: 'd12',
    title: '旷视科技推出新一代人脸识别算法，抵御 AIGC 伪造攻击',
    source: '量子位', company: '旷视', category: '技术', publishedAt: '11小时前',
    summary: '旷视科技发布防伪脸识别算法，可有效检测 AI 生成的人脸图像和 Deepfake 视频，误识率低于 0.0001%。',
    link: '#', featured: false,
  },
  {
    id: 'd13',
    title: '字节豆包完成 20 亿美元融资，估值 150 亿美元成国内 AI 最高',
    source: '36氪', company: '字节', category: '融资', publishedAt: '12小时前',
    summary: '豆包大模型完成新一轮战略融资，由软银愿景基金领投，估值较上轮翻倍，资金将用于海外市场拓展与人才招募。',
    link: '#', featured: true,
  },
  {
    id: 'd14',
    title: '百度发布文心 4.5 Turbo，推理速度提升 3 倍、成本下降 70%',
    source: '机器之心', company: '百度', category: '产品', publishedAt: '13小时前',
    summary: '文心 4.5 Turbo 通过新型推理优化技术，将 API 响应延迟降低 70%，企业调用成本同步下调 70%。',
    link: '#', featured: false,
  },
  {
    id: 'd15',
    title: '华为云发布盘古大模型政企专版，全栈自主可控',
    source: '人民日报', company: '华为', category: '政策', publishedAt: '14小时前',
    summary: '华为云推出盘古政企专版，基于昇腾 910B 全栈自研芯片，支持私有化部署和数据不出域，满足党政军高安全需求。',
    link: '#', featured: false,
  },
  {
    id: 'd16',
    title: '腾讯 AI Lab 开源混元代码大模型，已登顶 Hugging Face 趋势榜',
    source: '量子位', company: '腾讯', category: '技术', publishedAt: '15小时前',
    summary: '腾讯 AI Lab 开源混元代码模型，在 HumanEval 和 MBPP 基准上超越 CodeLlama，Apache 2.0 协议允许商用。',
    link: '#', featured: false,
  },
  {
    id: 'd17',
    title: '阿里云天池平台发布中文医疗大模型评测基准 MedBench',
    source: '机器之心', company: '阿里', category: '研究', publishedAt: '16小时前',
    summary: '阿里云天池联合多家三甲医院发布中文医疗评测基准 MedBench，覆盖诊断问答、病历生成、影像报告等 8 个子任务。',
    link: '#', featured: false,
  },
  {
    id: 'd18',
    title: '月之暗面 Kimi 月活突破 3000 万，海外版正式启动内测',
    source: '36氪', company: '月之暗面', category: '产品', publishedAt: '17小时前',
    summary: '月之暗面披露 Kimi 月活突破 3000 万，海外版 Kimi AI 开始小范围内测，支持英语和日语界面。',
    link: '#', featured: false,
  },
  {
    id: 'd19',
    title: '智谱 AI 与清华大学联合发布多模态评测基准 MMBench-CN',
    source: '量子位', company: '智谱AI', category: '研究', publishedAt: '18小时前',
    summary: '智谱 AI 联合清华大学发布 MMBench-CN，覆盖图像理解、视频分析、跨模态推理等 20 个维度，中文场景评测更全面。',
    link: '#', featured: false,
  },
  {
    id: 'd20',
    title: '科大讯飞推出 AI 学习机 LXMART 搭载星火 4.0，销量破百万',
    source: '36氪', company: '科大讯飞', category: '产品', publishedAt: '19小时前',
    summary: '科大讯飞发布搭载星火 4.0 的 AI 学习机新品，首发销量突破 100 万台，成为教育 AI 硬件赛道首个百万级爆品。',
    link: '#', featured: false,
  },
];
