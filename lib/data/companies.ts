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
      { id: 'oa1', type: '产品发布', title: 'GPT-5 正式发布，性能全面领先', publishedAt: '1小时前', heat: 9800, isHot: true, summary: '多模态能力大幅提升，支持实时图像分析与 200K 上下文，在代码生成、数学推理和视频理解领域刷新 SOTA。', tags: ['GPT-5', '多模态', 'SOTA'], link: '#' },
      { id: 'oa2', type: '产品发布', title: 'Operator Agent 全量上线，支持网页自动操作', publishedAt: '3小时前', heat: 7200, isHot: true, summary: '可自主完成预订、表单填写、网页搜索等复杂任务，通过自然语言指令驱动。', tags: ['Agent', '自动化', '网页'], link: '#' },
      { id: 'oa3', type: '开源', title: 'OpenAI 发布开源推理库 v2.0，支持自定义思维链', publishedAt: '8小时前', heat: 4800, isHot: false, summary: '全新推理框架允许开发者自定义推理路径，支持多步验证与反思机制。', tags: ['开源', '推理', '框架'], link: '#' },
      { id: 'oa4', type: '人事变动', title: '首席科学家 Ilya Sutskever 确认回归，专注 AGI 安全', publishedAt: '12小时前', heat: 3500, isHot: false, summary: 'Ilya Sutskever 结束近一年的离开，回归负责下一代安全对齐研究项目。', tags: ['人事', '安全对齐', 'AGI'], link: '#' },
      { id: 'oa5', type: '融资', title: '完成 40 亿美元新一轮融资，估值达 2500 亿美元', publishedAt: '1天前', heat: 6200, isHot: false, summary: '本轮由微软和苹果联合领投，用于扩大算力基础设施与人才储备。', tags: ['融资', '估值', '基础设施'], link: '#' },
      { id: 'oa6', type: '产品发布', title: 'ChatGPT 新增 Memory 功能，支持跨会话记忆用户偏好', publishedAt: '1天前', heat: 4100, isHot: false, summary: '用户可让 ChatGPT 记住个人信息、写作风格和偏好设置，无需每次重复说明。', tags: ['ChatGPT', 'Memory', '个性化'], link: '#' },
      { id: 'oa7', type: '技术突破', title: '发布新一代 embedding 模型，语义检索精度提升 40%', publishedAt: '2天前', heat: 3300, isHot: false, summary: 'text-embedding-4 支持 8192 token 输入，在 MTEB 榜单上登顶。', tags: ['Embedding', '向量检索', 'API'], link: '#' },
      { id: 'oa8', type: '产品发布', title: 'OpenAI 上线 AI 视频生成 API，支持最长 60 秒视频', publishedAt: '2天前', heat: 5600, isHot: false, summary: 'Sora API 正式开放，支持文本到视频和图片到视频两种模式。', tags: ['Sora', '视频生成', 'API'], link: '#' },
      { id: 'oa9', type: '技术突破', title: '发布 AI 模型安全评估白皮书，提出三级风险分类框架', publishedAt: '3天前', heat: 2800, isHot: false, summary: '将模型风险分为低、中、高三个等级，对应不同合规要求。', tags: ['安全', '合规', '政策'], link: '#' },
      { id: 'oa10', type: '人事变动', title: 'CTO Greg Brockman 宣布休假一年，专注个人研究', publishedAt: '4天前', heat: 2200, isHot: false, summary: 'Greg Brockman 表示将利用这一年研究 AI 长期影响和通用人工智能安全。', tags: ['人事', 'CTO', '安全'], link: '#' },
      { id: 'oa11', type: '产品发布', title: 'GPT-4o 语音模式上线，支持实时打断与情感识别', publishedAt: '5天前', heat: 3800, isHot: false, summary: '用户可随时打断 AI 发言，模型能识别用户情绪并调整语调。', tags: ['GPT-4o', '语音', '实时'], link: '#' },
      { id: 'oa12', type: '开源', title: 'Whisper 4 发布，语音识别准确率刷新纪录', publishedAt: '6天前', heat: 2900, isHot: false, summary: 'Whisper 4 在嘈杂环境下的词错误率降至 8%，支持 100 种语言。', tags: ['Whisper', '语音识别', '开源'], link: '#' },
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
      { id: 'an1', type: '产品发布', title: 'Claude 3.7 Sonnet 开放 API，扩展思考模式上线', publishedAt: '2小时前', heat: 8750, isHot: true, summary: 'SWE-bench 得分 62.7%，引领代码智能新高度，支持最长 200K 上下文。', tags: ['Claude 3.7', '扩展思考', '代码'], link: '#' },
      { id: 'an2', type: '技术突破', title: '宪法 AI 2.0 论文发表，安全对齐新范式', publishedAt: '8小时前', heat: 4100, isHot: false, summary: '引入动态价值学习机制，减少 RLHF 数据依赖，对齐效率提升 3 倍。', tags: ['安全对齐', '宪法AI', '论文'], link: '#' },
      { id: 'an3', type: '产品发布', title: 'Claude Team 套餐上线，支持 5 人协作与上下文共享', publishedAt: '1天前', heat: 3200, isHot: false, summary: '团队版新增工作空间、共享知识库和 API 配额管理功能。', tags: ['产品', '团队协作', '企业'], link: '#' },
      { id: 'an4', type: '人事变动', title: '任命前 Google AI 研究主管为新任 CTO', publishedAt: '2天前', heat: 2800, isHot: false, summary: 'Anthropic 宣布挖来 Google DeepMind 核心成员担任 CTO，负责技术研发体系升级。', tags: ['人事', '高管', 'CTO'], link: '#' },
      { id: 'an5', type: '开源', title: '发布 Claude 安可版本，支持本地部署', publishedAt: '3天前', heat: 4500, isHot: false, summary: 'Claude Instant 支持企业本地化部署，满足数据主权合规需求。', tags: ['本地部署', '合规', '企业'], link: '#' },
      { id: 'an6', type: '产品发布', title: 'Claude iOS App 新增文档对话功能，支持 PDF 和 Word', publishedAt: '4天前', heat: 2600, isHot: false, summary: '用户可直接上传文档与 Claude 对话，支持跨文档问答和摘要生成。', tags: ['移动端', '文档', 'iOS'], link: '#' },
      { id: 'an7', type: '技术突破', title: '发布 Claude 模型可解释性研究成果', publishedAt: '5天前', heat: 3100, isHot: false, summary: '揭示 Claude 内部如何表示概念和推理，为透明 AI 迈出关键一步。', tags: ['可解释性', '研究', '透明AI'], link: '#' },
      { id: 'an8', type: '融资', title: '完成 20 亿美元 C 轮融资，估值突破 600 亿美元', publishedAt: '1周前', heat: 5400, isHot: false, summary: '本轮由 Google 和 Spark Capital 领投，用于扩大模型训练算力和企业市场拓展。', tags: ['融资', 'C轮', '估值'], link: '#' },
      { id: 'an9', type: '人事变动', title: '与欧盟签署 AI 法案合规合作协议', publishedAt: '1周前', heat: 1900, isHot: false, summary: 'Anthropic 率先与欧盟 AI Office 建立合作，共同制定高风险模型评估标准。', tags: ['合规', '欧盟', '政策'], link: '#' },
      { id: 'an10', type: '产品发布', title: 'Claude Enterprise 支持自定义角色和工作流预设', publishedAt: '2周前', heat: 2400, isHot: false, summary: '企业可预置行业专家角色和标准操作流程，团队成员一键调用。', tags: ['企业版', '角色预设', '工作流'], link: '#' },
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
      { id: 'gd1', type: '产品发布', title: 'Gemini 2.0 Ultra 登顶 MMLU，全面碾压竞品', publishedAt: '4小时前', heat: 7200, isHot: true, summary: '原生多模态处理，支持实时视频理解与代码执行，在 30 项基准上刷新纪录。', tags: ['Gemini 2.0', 'MMLU', '多模态'], link: '#' },
      { id: 'gd2', type: '开源', title: 'Gemma 3 开源系列发布，27B 参数可本地运行', publishedAt: '6小时前', heat: 5500, isHot: false, summary: '支持 128K 上下文，在消费级 GPU 上实现流畅推理，Apache 协议开源商用。', tags: ['Gemma 3', '开源', '本地部署'], link: '#' },
      { id: 'gd3', type: '技术突破', title: 'AlphaFold 3 发布，预测精度接近实验水平', publishedAt: '1天前', heat: 4900, isHot: false, summary: '新增核酸、蛋白质与小分子相互作用预测，覆盖药物发现全流程。', tags: ['AlphaFold', '生物医药', '科学计算'], link: '#' },
      { id: 'gd4', type: '产品发布', title: 'Google AI Studio 新增 Gemini Flash 2.0，延迟降至 50ms', publishedAt: '2天前', heat: 3600, isHot: false, summary: 'Flash 2.0 专为零延迟场景优化，支持语音流式输入与实时语音合成。', tags: ['AI Studio', '低延迟', '实时'], link: '#' },
      { id: 'gd5', type: '人事变动', title: '与欧盟签署 AI 合作协议，开放模型审计权限', publishedAt: '3天前', heat: 2100, isHot: false, summary: 'Google 同意向欧洲监管机构开放 Gemini 系列模型的安全评估接口。', tags: ['合规', '欧洲', '政策'], link: '#' },
      { id: 'gd6', type: '产品发布', title: 'Gemini API 降价 60%，Token 成本对标 GPT-4o', publishedAt: '4天前', heat: 4100, isHot: false, summary: 'Gemini 1.5 Pro API 价格大幅下调，同时上下文窗口从 1M 扩展至 2M。', tags: ['API', '降价', '性价比'], link: '#' },
      { id: 'gd7', type: '技术突破', title: 'AlphaCode 3 发布，编程竞赛水平超越 85% 人类选手', publishedAt: '5天前', heat: 3300, isHot: false, summary: '新版在 Codeforces 竞赛评级达 2400 分，可独立解决复杂算法问题。', tags: ['AlphaCode', '编程', '竞赛'], link: '#' },
      { id: 'gd8', type: '开源', title: '开源音乐生成模型 Lyria DMC，支持商用', publishedAt: '6天前', heat: 2700, isHot: false, summary: 'Lyria DMC 可生成高质量音乐片段，支持歌词驱动和风格控制。', tags: ['音乐生成', '开源', 'Lyria'], link: '#' },
      { id: 'gd9', type: '融资', title: 'Alphabet 追加 50 亿美元 AI 投资，专注 AGI 研发', publishedAt: '1周前', heat: 4800, isHot: false, summary: 'Alphabet 宣布未来三年向 DeepMind 追加 50 亿美元研发预算。', tags: ['融资', 'Alphabet', 'AGI'], link: '#' },
      { id: 'gd10', type: '产品发布', title: 'Bard 更名 Gemini，超级会员订阅上线', publishedAt: '1周前', heat: 5200, isHot: false, summary: 'Google 将 Bard 统一品牌为 Gemini，推出 Gemini Advanced 订阅，月费 19.99 美元。', tags: ['Gemini', '品牌', '订阅'], link: '#' },
      { id: 'gd11', type: '技术突破', title: '发布 AI 水印技术，防止生成内容被滥用', publishedAt: '2周前', heat: 2500, isHot: false, summary: 'SynthID 水印技术已集成至 Gemini 生成的所有图像和文本。', tags: ['水印', '安全', '合规'], link: '#' },
      { id: 'gd12', type: '技术突破', title: 'AlphaGeometry 2 发布，几何证明能力达 IMO 金牌水平', publishedAt: '2周前', heat: 3100, isHot: false, summary: '结合神经符号方法，在 2000 道 IMO 几何题上超过人类金牌选手平均水平。', tags: ['几何推理', '数学', 'IMO'], link: '#' },
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
      { id: 'me1', type: '开源', title: 'Llama 4 全家桶开源，最强 MoE 模型震撼登场', publishedAt: '6小时前', heat: 6100, isHot: true, summary: 'Maverick 版本 4050 亿参数，Scout 版本 1090 亿参数，均支持 10M Token 上下文。', tags: ['Llama 4', 'MoE', '开源'], link: '#' },
      { id: 'me2', type: '产品发布', title: 'Meta AI 助手集成 WhatsApp 和 Instagram，月活 10 亿', publishedAt: '9小时前', heat: 4800, isHot: false, summary: 'Meta AI 全面接入旗下社交产品，成为全球最大规模消费级 AI 应用。', tags: ['Meta AI', '社交', '月活'], link: '#' },
      { id: 'me3', type: '技术突破', title: 'Segment Anything 3 发布，实时视频物体分割', publishedAt: '1天前', heat: 3500, isHot: false, summary: 'SA3 支持实时视频流分割，延迟低于 20ms，可用于 AR 应用与自动驾驶。', tags: ['SAM', '视频分割', 'AR'], link: '#' },
      { id: 'me4', type: '融资', title: 'Meta AI 获 30 亿美元战略投资，估值 200 亿美元', publishedAt: '2天前', heat: 2900, isHot: false, summary: '本轮由 Fidelity 领投，用于 Llama 后续版本研发与元宇宙 AI 整合。', tags: ['融资', '估值', '元宇宙'], link: '#' },
      { id: 'me5', type: '产品发布', title: 'Llama Stack API 标准化发布，统一 AI 应用开发接口', publishedAt: '3天前', heat: 3200, isHot: false, summary: '提供统一的模型调用、Agent 构建和工具调用接口，兼容主流 AI 框架。', tags: ['Llama Stack', 'API', '开发者'], link: '#' },
      { id: 'me6', type: '开源', title: '发布 DINOv3 视觉基础模型，零样本分类超越 CLIP', publishedAt: '4天前', heat: 2800, isHot: false, summary: 'DINOv3 在 ImageNet 零样本分类上准确率达 92.3%，刷新纪录。', tags: ['DINOv3', '视觉', '零样本'], link: '#' },
      { id: 'me7', type: '人事变动', title: '挖来 OpenAI 前研究 VP 担任 Llama 研究负责人', publishedAt: '5天前', heat: 2400, isHot: false, summary: 'Meta AI 引入 OpenAI 核心人才，加速 Llama 系列的研发迭代。', tags: ['人事', 'Llama', '研究'], link: '#' },
      { id: 'me8', type: '产品发布', title: 'Ray-Ban Meta Smart Glasses AI 功能全球上线', publishedAt: '1周前', heat: 3700, isHot: false, summary: '智能眼镜新增 AI 对话、实时翻译和视觉识别功能，支持 10 种语言。', tags: ['智能眼镜', 'AR', '可穿戴'], link: '#' },
      { id: 'me9', type: '技术突破', title: 'MusicGen 3 发布，生成音乐长度扩展至 5 分钟', publishedAt: '1周前', heat: 2100, isHot: false, summary: 'MusicGen 3 支持 5 分钟高保真音乐生成，可控制曲风、节拍和乐器编配。', tags: ['MusicGen', '音乐生成', 'AIGC'], link: '#' },
      { id: 'me10', type: '开源', title: 'PyTorch 3.0 发布，分布式训练效率提升 2 倍', publishedAt: '2周前', heat: 3400, isHot: false, summary: 'PyTorch 3.0 原生支持 MoE 模型高效训练，新增自动重计算和梯度检查点优化。', tags: ['PyTorch', '框架', '开源'], link: '#' },
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
      { id: 'ms1', type: '产品发布', title: 'Copilot Studio 新增 AI Agent 编排功能，企业自动化提速', publishedAt: '5小时前', heat: 5800, isHot: false, summary: '支持跨应用智能体协同，拖拽式工作流设计，无需代码即可构建复杂 Agent 流程。', tags: ['Copilot', 'Agent', '企业自动化'], link: '#' },
      { id: 'ms2', type: '技术突破', title: 'Azure AI 推理速度提升 5 倍，GPT-4o 延迟降至 500ms', publishedAt: '10小时前', heat: 3900, isHot: false, summary: '通过模型量化与专用 Maia 芯片协同优化，大幅降低推理成本。', tags: ['Azure', '推理优化', 'Maia'], link: '#' },
      { id: 'ms3', type: '产品发布', title: 'Microsoft 365 Copilot 全面支持中文，发布企业知识库助手', publishedAt: '1天前', heat: 3100, isHot: false, summary: '新增中文自然语言查询企业知识库功能，支持 SharePoint、Teams 和 Outlook 深度集成。', tags: ['Microsoft 365', 'Copilot', '企业知识库'], link: '#' },
      { id: 'ms4', type: '融资', title: '向 OpenAI 追投 50 亿美元，深化独家云服务合作', publishedAt: '2天前', heat: 4200, isHot: false, summary: '微软进一步巩固与 OpenAI 的独家云服务供应关系，同时获得 GPT-5 优先使用权。', tags: ['融资', 'OpenAI', '云服务'], link: '#' },
      { id: 'ms5', type: '人事变动', title: '任命 AI 科学家 Andrew Ng 为微软 AI 顾问委员会主席', publishedAt: '3天前', heat: 2500, isHot: false, summary: 'Andrew Ng 加入微软担任高级顾问，将推动 AI 教育普及与开发者生态建设。', tags: ['人事', 'Andrew Ng', '教育'], link: '#' },
      { id: 'ms6', type: '产品发布', title: 'Windows Copilot 全面集成本地 AI，支持离线推理', publishedAt: '4天前', heat: 4600, isHot: false, summary: 'Windows 12 内置 Phi-3.5 本地模型，支持完全离线的 AI 助手功能。', tags: ['Windows', 'Copilot', '本地AI'], link: '#' },
      { id: 'ms7', type: '开源', title: '开源 Phi-4 小模型，3B 参数性能对标 7B 大模型', publishedAt: '5天前', heat: 3300, isHot: false, summary: 'Phi-4 在 MMLU 和 HumanEval 基准上超越同类小模型，支持手机端部署。', tags: ['Phi-4', '小模型', '开源'], link: '#' },
      { id: 'ms8', type: '技术突破', title: 'Azure AI Studio 上线多模态 RAG，支持图文混合检索', publishedAt: '1周前', heat: 2800, isHot: false, summary: '企业可构建支持图片、表格和文本混合检索的 RAG 应用。', tags: ['RAG', '多模态', 'Azure'], link: '#' },
      { id: 'ms9', type: '产品发布', title: 'GitHub Copilot Enterprise 支持代码库全局问答', publishedAt: '1周前', heat: 3700, isHot: false, summary: '开发者可对整个代码仓库提问，Copilot 理解项目结构和业务逻辑给出精准答案。', tags: ['GitHub Copilot', '代码问答', '企业版'], link: '#' },
      { id: 'ms10', type: '融资', title: '收购 AI 安全公司 XXXX，深化 AI 安全布局', publishedAt: '2周前', heat: 1900, isHot: false, summary: '微软完成对 AI 安全初创公司的收购，将安全对齐技术整合至 Azure AI 产品线。', tags: ['收购', 'AI安全', '并购'], link: '#' },
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
      { id: 'bd1', type: '产品发布', title: '文心大模型 4.5 企业版发布，支持私有化全栈部署', publishedAt: '7小时前', heat: 5400, isHot: false, summary: '面向金融、医疗、政务三大垂直领域，支持行业知识库定制与数据隔离。', tags: ['文心', '企业版', '垂直行业'], link: '#' },
      { id: 'bd2', type: '产品发布', title: '文心一言月活突破 2 亿，企业客户数同比增长 180%', publishedAt: '1天前', heat: 3900, isHot: false, summary: '百度财报显示文心一言月活超 2 亿，AI 云业务营收占比升至 28%。', tags: ['文心一言', '月活', '财报'], link: '#' },
      { id: 'bd3', type: '技术突破', title: '文心 4.5 Turbo 发布，推理速度提升 3 倍，成本下降 70%', publishedAt: '2天前', heat: 4600, isHot: false, summary: '新型推理优化技术将 API 响应延迟降低 70%，企业调用成本同步大幅下调。', tags: ['文心', '推理优化', '成本'], link: '#' },
      { id: 'bd4', type: '产品发布', title: '萝卜快跑无人驾驶出租车第 10 万辆车上路', publishedAt: '3天前', heat: 4200, isHot: false, summary: '百度萝卜快跑累计部署无人车超 10 万辆，覆盖北京、上海、广州等 20 城。', tags: ['萝卜快跑', '无人驾驶', 'L4'], link: '#' },
      { id: 'bd5', type: '开源', title: '开源 YOLOv10 视觉模型，实时检测精度刷新纪录', publishedAt: '4天前', heat: 2800, isHot: false, summary: 'YOLOv10 在 COCO 数据集上精度提升 15%，同时推理速度保持 300+ FPS。', tags: ['YOLOv10', '目标检测', '开源'], link: '#' },
      { id: 'bd6', type: '产品发布', title: '文心智能体平台上线，支持零代码构建 AI Agent', publishedAt: '5天前', heat: 3200, isHot: false, summary: '用户通过拖拽方式构建 AI Agent，支持知识库接入、工具调用和多轮对话。', tags: ['Agent', '智能体', '零代码'], link: '#' },
      { id: 'bd7', type: '技术突破', title: '发布中文语义相似度模型，检索精度提升 25%', publishedAt: '1周前', heat: 2100, isHot: false, summary: 'ERNIE-Sim 模型专注文本语义匹配，适用于搜索引擎和推荐系统优化。', tags: ['语义检索', 'NLP', '向量搜索'], link: '#' },
      { id: 'bd8', type: '融资', title: '文心大模型业务完成独立融资，估值 50 亿美元', publishedAt: '1周前', heat: 3500, isHot: false, summary: '文心业务分拆独立融资，由红杉和高瓴领投，成为国内 AI 大模型领域最大独角兽。', tags: ['融资', '分拆', '独角兽'], link: '#' },
      { id: 'bd9', type: '产品发布', title: '文心一言通过国家大模型安全评估认证', publishedAt: '2周前', heat: 1800, isHot: false, summary: '文心一言成为首批通过国家网信办安全评估的生成式 AI 产品。', tags: ['合规', '安全评估', '政策'], link: '#' },
      { id: 'bd10', type: '产品发布', title: '小度智能屏接入文心大模型，语音交互能力大幅升级', publishedAt: '2周前', heat: 2400, isHot: false, summary: '小度全系产品接入文心 4.0，支持多轮对话、情感识别和设备控制。', tags: ['小度', '智能家居', '语音助手'], link: '#' },
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
      { id: 'bt1', type: '融资', title: '豆包大模型获 20 亿美元战略融资，估值 150 亿美元', publishedAt: '3小时前', heat: 7920, isHot: true, summary: '本轮由 SoftBank 领投，资金用于模型研发与海外市场拓展。', tags: ['豆包', '融资', '全球化'], link: '#' },
      { id: 'bt2', type: '产品发布', title: '豆包代码助手上线 VS Code 插件，免费开放 100 万 Token', publishedAt: '5小时前', heat: 4200, isHot: false, summary: '提供代码补全、Bug 修复、单元测试生成功能，注册用户每月免费获得 100 万 Token 额度。', tags: ['豆包', 'IDE', '开发者工具'], link: '#' },
      { id: 'bt3', type: '产品发布', title: '豆包多模态模型支持抖音内容自动生成与字幕翻译', publishedAt: '1天前', heat: 3500, isHot: false, summary: '接入抖音创作者工作流，一键生成视频脚本、字幕翻译和封面图。', tags: ['豆包', '多模态', '抖音'], link: '#' },
      { id: 'bt4', type: '技术突破', title: '发布新一代推荐算法，抖音用户停留时长提升 25%', publishedAt: '2天前', heat: 2800, isHot: false, summary: '基于 Transformer 的推荐模型结合强化学习，用户活跃度和留存率显著提升。', tags: ['推荐算法', 'Transformer', '强化学习'], link: '#' },
      { id: 'bt5', type: '人事变动', title: '挖来 OpenAI 资深研究员担任豆包模型首席架构师', publishedAt: '3天前', heat: 3200, isHot: false, summary: '字节跳动从 OpenAI 引入核心模型架构人才，将主导下一代豆包大模型研发。', tags: ['人事', '首席架构师', 'OpenAI'], link: '#' },
      { id: 'bt6', type: '产品发布', title: '豆包开放平台上线，支持 30 万 Token 超长上下文', publishedAt: '4天前', heat: 4600, isHot: false, summary: '豆包 API 新增超长上下文版本，支持 30 万字文档理解和跨文档分析。', tags: ['豆包', 'API', '长上下文'], link: '#' },
      { id: 'bt7', type: '开源', title: '开源云雀大模型 7B 版本，支持商用', publishedAt: '5天前', heat: 2900, isHot: false, summary: '云雀 7B 在中文评测基准上超越同尺寸开源模型，Apache 2.0 许可证。', tags: ['云雀', '开源', '中文模型'], link: '#' },
      { id: 'bt8', type: '产品发布', title: '飞书接入豆包 AI，智能文档助手支持全流程协作', publishedAt: '1周前', heat: 3300, isHot: false, summary: '飞书文档支持 AI 写作、摘要生成和多人协作批注，全面提升办公效率。', tags: ['飞书', '办公协作', 'AI助手'], link: '#' },
      { id: 'bt9', type: '技术突破', title: '火山引擎发布 ByteCompute，AI 训练效率提升 40%', publishedAt: '1周前', heat: 2400, isHot: false, summary: 'ByteCompute 分布式训练框架针对 MoE 模型优化，GPU 利用率达 85%。', tags: ['火山引擎', '分布式训练', '基础设施'], link: '#' },
      { id: 'bt10', type: '融资', title: 'TikTok AI 获 10 亿美元独立融资，估值 100 亿美元', publishedAt: '2周前', heat: 3800, isHot: false, summary: 'TikTok AI 业务独立融资，用于扩展海外 AI 研发中心和本地化模型。', tags: ['TikTok', '融资', '海外'], link: '#' },
      { id: 'bt11', type: '产品发布', title: '豆包语音合成模型上线，支持 128 种音色定制', publishedAt: '2周前', heat: 2100, isHot: false, summary: '用户可克隆自己或他人的声音，支持情感控制和方言生成。', tags: ['语音合成', 'TTS', '音色克隆'], link: '#' },
      { id: 'bt12', type: '产品发布', title: '豆包通过国家生成式 AI 安全评估', publishedAt: '3周前', heat: 1600, isHot: false, summary: '豆包全系列模型通过国家网信办算法备案和安全评估。', tags: ['合规', '安全评估', '备案'], link: '#' },
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
      { id: 'mi1', type: '产品发布', title: 'Mistral Small 3.1 发布，边缘 AI 新标杆', publishedAt: '9小时前', heat: 4200, isHot: false, summary: '24B 参数模型，1M 上下文，消费级 GPU 本地运行，低延迟推理。', tags: ['Mistral', '边缘计算', '轻量级'], link: '#' },
      { id: 'mi2', type: '开源', title: 'Codestral 代码模型发布，SWEBench 得分超越 GPT-4o', publishedAt: '1天前', heat: 3800, isHot: false, summary: 'Mistral Codestral 专注代码生成与调试，支持 32 种编程语言，IDE 插件同步上线。', tags: ['Codestral', '代码', '开源'], link: '#' },
      { id: 'mi3', type: '技术突破', title: '发布混合专家模型训练新方法，训练效率提升 40%', publishedAt: '2天前', heat: 2900, isHot: false, summary: '新型负载均衡算法解决了 MoE 模型训练中的专家崩溃问题，训练稳定性大幅提升。', tags: ['MoE', '训练优化', '算法'], link: '#' },
      { id: 'mi4', type: '融资', title: '完成 6 亿美元 B 轮融资，估值突破 60 亿美元', publishedAt: '1周前', heat: 5100, isHot: false, summary: 'Mistral AI 获得 Andreessen Horowitz 和 General Catalyst 联合投资，将加速商业化进程。', tags: ['融资', 'B轮', '商业化'], link: '#' },
      { id: 'mi5', type: '产品发布', title: 'Le Chat 企业版上线，支持 RAG 和 Agent 构建', publishedAt: '1周前', heat: 2600, isHot: false, summary: 'Le Chat Enterprise 支持企业知识库接入和多步 Agent 工作流构建。', tags: ['Le Chat', 'RAG', '企业版'], link: '#' },
      { id: 'mi6', type: '开源', title: '发布Ministral 3B/5B/8B 三款小模型', publishedAt: '2周前', heat: 3200, isHot: false, summary: 'Ministral 系列专为企业边缘部署设计，支持设备端本地推理。', tags: ['Ministral', '小模型', '边缘部署'], link: '#' },
      { id: 'mi7', type: '技术突破', title: 'Mistral 数学推理模型 MathStral 发布，对标 GPT-4o Math', publishedAt: '2周前', heat: 2800, isHot: false, summary: 'MathStral 在 MATH 和 GSM8K 数据集上准确率超 90%，专注数学问题求解。', tags: ['MathStral', '数学推理', 'STEM'], link: '#' },
      { id: 'mi8', type: '产品发布', title: 'Mistral API 平台支持按 Token 计费，最低价 $0.002/1K Token', publishedAt: '3周前', heat: 3400, isHot: false, summary: 'Mistral API 全面支持按量计费，降低开发者接入门槛。', tags: ['API', '定价', '开发者'], link: '#' },
      { id: 'mi9', type: '人事变动', title: '任命前 Meta AI 科学家为首席研究官', publishedAt: '3周前', heat: 1900, isHot: false, summary: 'Mistral 引入 Meta AI 核心研究人才，加强基础研究和前沿探索。', tags: ['人事', 'CRO', '研究'], link: '#' },
      { id: 'mi10', type: '开源', title: '发布 Mistral OCR API，支持 100 种语言文档识别', publishedAt: '1月前', heat: 2300, isHot: false, summary: 'Mistral OCR 支持多语言文档转 Markdown，表格和公式结构保留完整。', tags: ['OCR', '文档识别', '开源'], link: '#' },
    ],
  },
];
