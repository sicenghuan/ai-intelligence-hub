'use client';

import { useState } from 'react';
import { GlobalNewsItem, Category, Region } from '@/lib/data';
import ItemModal from './ItemModal';

const categoryColors: Record<Category, string> = {
  产品: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  融资: 'bg-green-500/20 text-green-400 border-green-500/30',
  研究: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  观点: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  政策: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  人事: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  技术: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
};

const regionColors: Record<Region, string> = {
  北美: 'text-blue-400',
  欧洲: 'text-purple-400',
  亚太: 'text-green-400',
  其他: 'text-gray-400',
};

const sourceColors: Record<string, string> = {
  'TechCrunch': 'bg-green-600',
  'The Verge': 'bg-purple-600',
  'VentureBeat': 'bg-blue-600',
  'Bloomberg': 'bg-red-700',
  'Reuters': 'bg-orange-600',
  'BBC Tech': 'bg-red-600',
  'Wired': 'bg-gray-600',
};

interface GlobalNewsPanelProps {
  data: GlobalNewsItem[];
  previewCount?: number;
  onViewMore?: () => void;
}

export default function GlobalNewsPanel({ data, previewCount, onViewMore }: GlobalNewsPanelProps) {
  const [selectedItem, setSelectedItem] = useState<GlobalNewsItem | null>(null);
  const displayed = previewCount ? data.slice(0, previewCount) : data;
  const showViewMore = previewCount !== undefined && previewCount < data.length;

  return (
    <>
      <section id="global">
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <div className="w-1 h-5 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full" />
          <h2 className="text-white font-semibold text-base">国外 AI 实时动态</h2>
          <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full shrink-0">
            {data.filter(d => d.featured).length} 精选
          </span>
          {showViewMore && onViewMore && (
            <button
              onClick={onViewMore}
              className="ml-auto shrink-0 text-xs text-blue-400 hover:text-blue-300 px-3 py-1 rounded-lg border border-blue-500/30 hover:bg-blue-500/10 transition-colors"
            >
              查看全部 {data.length} 条
            </button>
          )}
        </div>

        <div className="space-y-2">
          {displayed.map((item) => {
            const srcColor = sourceColors[item.source] ?? 'bg-gray-700';

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group rounded-xl border transition-all duration-200 cursor-pointer hover:-translate-y-0.5
                  ${item.featured ? 'border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10' : 'border-gray-800 bg-gray-900/60 hover:bg-gray-800/60'}`}
              >
                <div className="p-3">
                  {item.featured && (
                    <div className="flex items-center gap-1 mb-1.5">
                      <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <span className="text-xs text-blue-400 font-medium">精选</span>
                    </div>
                  )}

                  <h3 className="text-sm text-gray-200 font-medium leading-snug group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <span className={`text-xs px-1.5 py-0.5 rounded text-white font-medium ${srcColor}`}>{item.source}</span>
                    <span className={`text-xs font-medium ${regionColors[item.region]}`}>{item.region}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded border ${categoryColors[item.category]}`}>{item.category}</span>
                    <span className="text-xs text-gray-500 ml-auto">{item.publishedAt}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ItemModal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} title="资讯详情">
        {selectedItem && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 flex-wrap">
              {selectedItem.featured && (
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span className="text-xs text-blue-400 font-medium">精选</span>
                </div>
              )}
              <span className={`text-xs px-1.5 py-0.5 rounded text-white font-medium ${sourceColors[selectedItem.source] ?? 'bg-gray-700'}`}>{selectedItem.source}</span>
              <span className={`text-xs font-medium ${regionColors[selectedItem.region]}`}>{selectedItem.region}</span>
            </div>

            <h3 className="text-white font-semibold text-lg">{selectedItem.title}</h3>

            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-xs px-2 py-1 rounded border ${categoryColors[selectedItem.category]}`}>{selectedItem.category}</span>
              <span className="text-xs text-gray-500 ml-auto">{selectedItem.publishedAt}</span>
            </div>

            {selectedItem.summary && (
              <p className="text-sm text-gray-300 leading-relaxed bg-gray-800/60 rounded-xl p-4">{selectedItem.summary}</p>
            )}

            {selectedItem.link && (
              <a
                href={selectedItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 px-4 py-2 rounded-lg border border-blue-500/30 hover:bg-blue-500/10 transition-colors"
              >
                Read More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        )}
      </ItemModal>
    </>
  );
}
