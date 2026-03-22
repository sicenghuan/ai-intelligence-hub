'use client';

import { useState } from 'react';
import { DomesticNewsItem, Category, DomesticCompany } from '@/lib/data';

const categoryColors: Record<Category, string> = {
  产品: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  融资: 'bg-green-500/20 text-green-400 border-green-500/30',
  研究: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  观点: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  政策: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  人事: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  技术: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
};

const companyColors: Record<DomesticCompany, string> = {
  百度: 'bg-blue-600',
  腾讯: 'bg-cyan-600',
  阿里: 'bg-orange-500',
  字节: 'bg-red-500',
  华为: 'bg-red-700',
  科大讯飞: 'bg-blue-500',
  商汤: 'bg-purple-600',
  旷视: 'bg-indigo-600',
  月之暗面: 'bg-slate-600',
  智谱AI: 'bg-violet-600',
  深度求索: 'bg-teal-600',
};

const sourceColors: Record<string, string> = {
  '机器之心': 'bg-blue-700',
  '量子位': 'bg-purple-700',
  '36氪': 'bg-green-700',
  '人民日报': 'bg-red-700',
};

interface DomesticNewsPanelProps {
  data: DomesticNewsItem[];
}

export default function DomesticNewsPanel({ data }: DomesticNewsPanelProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? data : data.slice(0, 5);

  return (
    <section id="domestic" className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-5 bg-gradient-to-b from-green-400 to-emerald-600 rounded-full" />
        <h2 className="text-white font-semibold text-base">国内 AI 实时动态</h2>
        <span className="ml-auto text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">
          {data.filter(d => d.featured).length} 精选
        </span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
        {displayed.map((item) => {
          const isExpanded = expandedId === item.id;
          const srcColor = item.source && sourceColors[item.source] ? sourceColors[item.source] : 'bg-gray-700';

          return (
            <div
              key={item.id}
              onClick={() => setExpandedId(isExpanded ? null : item.id)}
              className={`group rounded-xl border transition-all duration-200 cursor-pointer ${
                item.featured
                  ? 'border-green-500/30 bg-green-500/5 hover:bg-green-500/10'
                  : 'border-gray-800 bg-gray-900/60 hover:bg-gray-800/60'
              } ${isExpanded ? 'border-green-400/50' : ''}`}
            >
              <div className="p-3">
                {item.featured && (
                  <div className="flex items-center gap-1 mb-1.5">
                    <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="text-xs text-green-400 font-medium">精选</span>
                  </div>
                )}

                <h3 className="text-sm text-gray-200 font-medium leading-snug group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <span className={`text-xs px-1.5 py-0.5 rounded text-white font-medium ${srcColor}`}>
                    {item.source}
                  </span>
                  {item.company && (
                    <span className={`text-xs px-1.5 py-0.5 rounded text-white font-medium ${companyColors[item.company]}`}>
                      {item.company}
                    </span>
                  )}
                  <span className={`text-xs px-1.5 py-0.5 rounded border ${categoryColors[item.category]}`}>
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-500 ml-auto">{item.publishedAt}</span>
                </div>

                {isExpanded && item.summary && (
                  <div className="mt-3 pt-3 border-t border-gray-700/50">
                    <p className="text-xs text-gray-400 leading-relaxed">{item.summary}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 mt-2 text-xs text-green-400 hover:text-green-300"
                      >
                        阅读原文
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {data.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full py-2 text-xs text-gray-500 hover:text-gray-300 hover:bg-gray-800 rounded-lg transition-colors border border-gray-800 hover:border-gray-700"
          >
            {showAll ? '收起' : `查看更多 +${data.length - 5} 条`}
          </button>
        )}
      </div>
    </section>
  );
}
