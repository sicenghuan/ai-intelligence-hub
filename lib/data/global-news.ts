import { Category } from './hotspot';

export type Region = '北美' | '欧洲' | '亚太' | '其他';

export interface GlobalNewsItem {
  id: string;
  title: string;
  source: string;
  region: Region;
  category: Category;
  publishedAt: string;
  summary?: string;
  link?: string;
  featured?: boolean;
}

export const globalNewsData: GlobalNewsItem[] = [
  {
    id: 'g1',
    title: 'OpenAI Launches Operator Agent That Can Browse and Act on the Web',
    source: 'TechCrunch', region: '北美', category: '产品', publishedAt: '1小时前',
    summary: "OpenAI's new Operator agent can autonomously complete tasks like booking restaurants, filling forms, and managing calendars through natural language instructions.",
    link: '#', featured: true,
  },
  {
    id: 'g2',
    title: 'Microsoft Azure AI Foundry Now Supports 100+ Open Source Models',
    source: 'The Verge', region: '北美', category: '产品', publishedAt: '2小时前',
    summary: 'Microsoft expands Azure AI Foundry catalog with models from Mistral, Cohere, and Meta, providing enterprise-grade APIs with SLA guarantees.',
    link: '#', featured: true,
  },
  {
    id: 'g3',
    title: 'DeepSeek R2 Surpasses GPT-4o on Reasoning Benchmarks',
    source: 'VentureBeat', region: '亚太', category: '研究', publishedAt: '3小时前',
    summary: 'Chinese AI startup DeepSeek releases R2, outperforming major competitors on MATH and HumanEval benchmarks while using 40% fewer parameters.',
    link: '#', featured: false,
  },
  {
    id: 'g4',
    title: 'UK Government Invests £1.5B in National AI Research Infrastructure',
    source: 'BBC Tech', region: '欧洲', category: '政策', publishedAt: '4小时前',
    summary: 'The UK government announces major investment to build sovereign AI computing clusters, aiming to position Britain as a global AI hub post-Brexit.',
    link: '#', featured: false,
  },
  {
    id: 'g5',
    title: 'Perplexity AI Raises $500M Series D at $9B Valuation',
    source: 'Bloomberg', region: '北美', category: '融资', publishedAt: '5小时前',
    summary: 'AI search startup Perplexity AI secures massive funding round led by SoftBank, plans to expand into enterprise search and agentic workflows.',
    link: '#', featured: true,
  },
  {
    id: 'g6',
    title: 'Nvidia Blackwell Ultra GPUs Begin Mass Shipment to Cloud Providers',
    source: 'Reuters', region: '北美', category: '技术', publishedAt: '6小时前',
    summary: 'Nvidia starts large-scale shipment of GB200 NVL72 rack systems to AWS, Google Cloud, and Azure, promising 30x inference speedup over H100.',
    link: '#', featured: false,
  },
  {
    id: 'g7',
    title: 'Stability AI Releases Stable Diffusion 4 with Native Video Generation',
    source: 'TechCrunch', region: '欧洲', category: '产品', publishedAt: '7小时前',
    summary: "Stability AI's latest model generates high-fidelity 60-second videos from text prompts, rivaling Sora in quality while running on consumer hardware.",
    link: '#', featured: false,
  },
  {
    id: 'g8',
    title: 'AI Safety Institute Publishes Framework for Frontier Model Evaluation',
    source: 'Wired', region: '北美', category: '政策', publishedAt: '8小时前',
    summary: 'The US AI Safety Institute releases comprehensive evaluation guidelines for frontier AI models, covering catastrophic risk, bias, and cybersecurity dimensions.',
    link: '#', featured: false,
  },
  {
    id: 'g9',
    title: 'Google DeepMind Unveils Gemini 2.0 Flash Thinking for Real-Time Reasoning',
    source: 'The Verge', region: '北美', category: '产品', publishedAt: '9小时前',
    summary: "Google's new Flash Thinking model enables real-time reasoning chains visible to users, improving transparency in AI decision-making processes.",
    link: '#', featured: true,
  },
  {
    id: 'g10',
    title: 'Mistral AI Releases Codestral: A Code-First LLM Targeting Developers',
    source: 'VentureBeat', region: '欧洲', category: '产品', publishedAt: '10小时前',
    summary: "Mistral's Codestral achieves state-of-the-art performance on SWE-bench, offering 32K context window and competitive pricing for IDE integrations.",
    link: '#', featured: false,
  },
  {
    id: 'g11',
    title: 'EU AI Act Enforcement Begins: High-Risk Systems Must Register by Q3',
    source: 'Reuters', region: '欧洲', category: '政策', publishedAt: '11小时前',
    summary: 'The European AI Office begins enforcing the AI Act, requiring high-risk AI systems in healthcare, hiring, and education to undergo conformity assessments.',
    link: '#', featured: false,
  },
  {
    id: 'g12',
    title: 'Meta AI Reaches 1 Billion Monthly Active Users Across Family of Apps',
    source: 'Bloomberg', region: '北美', category: '产品', publishedAt: '12小时前',
    summary: "Meta AI reaches a billion monthly users across Instagram, WhatsApp, and Facebook, making it the most widely deployed consumer AI assistant globally.",
    link: '#', featured: true,
  },
  {
    id: 'g13',
    title: 'Scale AI Raises $1B at $14B Valuation to Build Enterprise AI Data Platform',
    source: 'TechCrunch', region: '北美', category: '融资', publishedAt: '13小时前',
    summary: 'Scale AI secures new funding to expand its enterprise data labeling and model evaluation platform, adding reinforcement learning from human feedback tools.',
    link: '#', featured: false,
  },
  {
    id: 'g14',
    title: 'Anthropic Publishes Paper on Interpretability: Seeing Inside Claude\'s Thoughts',
    source: 'Wired', region: '北美', category: '研究', publishedAt: '14小时前',
    summary: "Anthropic's new mechanistic interpretability research reveals how Claude's circuits process concepts, a major step toward transparent AI systems.",
    link: '#', featured: false,
  },
  {
    id: 'g15',
    title: 'Runway Gen-3 Alpha Surpasses 10M Users, Targets Hollywood Studios',
    source: 'The Verge', region: '北美', category: '产品', publishedAt: '15小时前',
    summary: 'Runway reaches 10 million users for its AI video generation platform, signing partnerships with major film studios for AI-assisted production workflows.',
    link: '#', featured: false,
  },
  {
    id: 'g16',
    title: 'India Launches National AI Mission with $1.2B Budget for Compute Infrastructure',
    source: 'BBC Tech', region: '亚太', category: '政策', publishedAt: '16小时前',
    summary: "India announces its national AI mission, funding GPU clusters and startup grants to build sovereign AI capabilities across agriculture, healthcare, and governance.",
    link: '#', featured: false,
  },
  {
    id: 'g17',
    title: 'Hugging Face Launches开源模型商店，支持 100 万+ 模型托管',
    source: 'VentureBeat', region: '欧洲', category: '技术', publishedAt: '17小时前',
    summary: 'Hugging Face expands its model hub with new enterprise features: private model hosting, version control, and automated evaluation pipelines.',
    link: '#', featured: false,
  },
  {
    id: 'g18',
    title: 'OpenAI COO离职创业，专注企业 AI 部署服务',
    source: 'Bloomberg', region: '北美', category: '人事', publishedAt: '18小时前',
    summary: 'OpenAI COO Brad Lightcap departs to start a new company focused on helping enterprises deploy and customize AI models behind their firewalls.',
    link: '#', featured: false,
  },
  {
    id: 'g19',
    title: 'Cohere Introduces Enterprise RAG 2.0 with Real-Time Data Indexing',
    source: 'TechCrunch', region: '北美', category: '产品', publishedAt: '19小时前',
    summary: 'Cohere launches RAG 2.0 with continuous data indexing, enabling enterprise chatbots to access live databases and document repositories without manual updates.',
    link: '#', featured: false,
  },
  {
    id: 'g20',
    title: 'Suno AI Releases v4 with Full-Length Song Generation and Lyric Writing',
    source: 'The Verge', region: '北美', category: '产品', publishedAt: '20小时前',
    summary: "Suno AI's v4 can now generate complete 4-minute songs with original lyrics and vocal synthesis, challenging the line between AI-generated and human music.",
    link: '#', featured: false,
  },
];
