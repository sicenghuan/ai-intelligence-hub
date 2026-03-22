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
    source: 'TechCrunch',
    region: '北美',
    category: '产品',
    publishedAt: '1小时前',
    summary: 'OpenAI\'s new Operator agent can autonomously complete tasks like booking restaurants, filling forms, and managing calendars through natural language instructions.',
    link: '#',
    featured: true,
  },
  {
    id: 'g2',
    title: 'Microsoft Azure AI Foundry Now Supports 100+ Open Source Models',
    source: 'The Verge',
    region: '北美',
    category: '产品',
    publishedAt: '2小时前',
    summary: 'Microsoft expands Azure AI Foundry catalog with models from Mistral, Cohere, and Meta, providing enterprise-grade APIs with SLA guarantees.',
    link: '#',
    featured: true,
  },
  {
    id: 'g3',
    title: 'DeepSeek R2 Surpasses GPT-4o on Reasoning Benchmarks',
    source: 'VentureBeat',
    region: '亚太',
    category: '研究',
    publishedAt: '3小时前',
    summary: 'Chinese AI startup DeepSeek releases R2, outperforming major competitors on MATH and HumanEval benchmarks while using 40% fewer parameters.',
    link: '#',
    featured: false,
  },
  {
    id: 'g4',
    title: 'UK Government Invests £1.5B in National AI Research Infrastructure',
    source: 'BBC Tech',
    region: '欧洲',
    category: '政策',
    publishedAt: '4小时前',
    summary: 'The UK government announces major investment to build sovereign AI computing clusters, aiming to position Britain as a global AI hub post-Brexit.',
    link: '#',
    featured: false,
  },
  {
    id: 'g5',
    title: 'Perplexity AI Raises $500M Series D at $9B Valuation',
    source: 'Bloomberg',
    region: '北美',
    category: '融资',
    publishedAt: '5小时前',
    summary: 'AI search startup Perplexity AI secures massive funding round led by SoftBank, plans to expand into enterprise search and agentic workflows.',
    link: '#',
    featured: true,
  },
  {
    id: 'g6',
    title: 'Nvidia Blackwell Ultra GPUs Begin Mass Shipment to Cloud Providers',
    source: 'Reuters',
    region: '北美',
    category: '技术',
    publishedAt: '6小时前',
    summary: 'Nvidia starts large-scale shipment of GB200 NVL72 rack systems to AWS, Google Cloud, and Azure, promising 30x inference speedup over H100.',
    link: '#',
    featured: false,
  },
  {
    id: 'g7',
    title: 'Stability AI Releases Stable Diffusion 4 with Native Video Generation',
    source: 'TechCrunch',
    region: '欧洲',
    category: '产品',
    publishedAt: '7小时前',
    summary: 'Stability AI\'s latest model generates high-fidelity 60-second videos from text prompts, rivaling Sora in quality while running on consumer hardware.',
    link: '#',
    featured: false,
  },
  {
    id: 'g8',
    title: 'AI Safety Institute Publishes Framework for Frontier Model Evaluation',
    source: 'Wired',
    region: '北美',
    category: '政策',
    publishedAt: '8小时前',
    summary: 'The US AI Safety Institute releases comprehensive evaluation guidelines for frontier AI models, covering catastrophic risk, bias, and cybersecurity dimensions.',
    link: '#',
    featured: false,
  },
];
