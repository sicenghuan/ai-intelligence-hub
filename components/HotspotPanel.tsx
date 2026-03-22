'use client';

import { useState, useEffect } from 'react';
import { HotspotItem, TrendDirection, Category } from '@/lib/data';
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

const TrendIcon = ({ trend }: { trend: TrendDirection }) => {
  if (trend === 'up') return (
    <span className="flex items-center gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
      <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
    </span>
  );
  if (trend === 'down') return (
    <span className="flex items-center gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
      <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
      </svg>
    </span>
  );
  return (
    <span className="flex items-center gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" />
      <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14" />
      </svg>
    </span>
  );
};

const RankBadge = ({ rank }: { rank: number }) => {
  if (rank === 1) return <span className="w-6 h-6 rounded-md bg-yellow-500 text-black text-xs font-bold flex items-center justify-center shrink-0">1</span>;
  if (rank === 2) return <span className="w-6 h-6 rounded-md bg-gray-400 text-black text-xs font-bold flex items-center justify-center shrink-0">2</span>;
  if (rank === 3) return <span className="w-6 h-6 rounded-md bg-orange-600 text-white text-xs font-bold flex items-center justify-center shrink-0">3</span>;
  return <span className="w-6 h-6 rounded-md bg-gray-800 text-gray-500 text-xs font-bold flex items-center justify-center shrink-0">{rank}</span>;
};

const rankAccentStyle: Record<number, React.CSSProperties> = {
  1: { background: 'linear-gradient(to bottom, #facc15, #f97316)' },
  2: { background: 'linear-gradient(to bottom, #d1d5db, #9ca3af)' },
  3: { background: 'linear-gradient(to bottom, #ea580c, #92400e)' },
};

interface HotspotPanelProps {
  data: HotspotItem[];
  previewCount?: number;
  onViewMore?: () => void;
}

export default function HotspotPanel({ data, previewCount, onViewMore }: HotspotPanelProps) {
  const [selectedItem, setSelectedItem] = useState<HotspotItem | null>(null);
  const [animated, setAnimated] = useState(false);

  const maxHeat = Math.max(...data.map(d => d.heat));
  const displayed = previewCount ? data.slice(0, previewCount) : data;
  const showViewMore = previewCount !== undefined && previewCount < data.length;

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section id="hotspot">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-5 bg-gradient-to-b from-orange-400 to-red-500 rounded-full" />
          <h2 className="text-white font-semibold text-base">今日 AI 产品热点</h2>
          <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full shrink-0">热度排行</span>
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
            const heatPct = (item.heat / maxHeat) * 100;
            const isTop3 = item.rank <= 3;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group relative rounded-xl border transition-all duration-200 cursor-pointer hover:-translate-y-0.5
                  ${isTop3 ? 'border-gray-600 bg-gray-800/60 hover:bg-gray-800' : 'border-gray-800 bg-gray-900/60 hover:bg-gray-800/60'}`}
              >
                {isTop3 && (
                  <div
                    className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full"
                    style={rankAccentStyle[item.rank]}
                  />
                )}

                <div className="p-3">
                  <div className="flex items-start gap-2">
                    <RankBadge rank={item.rank} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className={`text-sm font-medium leading-snug ${isTop3 ? 'text-white' : 'text-gray-300'} group-hover:text-white transition-colors`}>
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <TrendIcon trend={item.trend} />
                          <span className="text-xs font-mono text-gray-400">{item.heat.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="mt-2 h-1 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ease-out ${
                            item.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-orange-400' :
                            item.rank === 2 ? 'bg-gradient-to-r from-gray-400 to-gray-300' :
                            item.rank === 3 ? 'bg-gradient-to-r from-orange-500 to-orange-400' :
                            'bg-gradient-to-r from-blue-600 to-blue-400'
                          }`}
                          style={{ width: animated ? `${heatPct}%` : '0%' }}
                        />
                      </div>

                      <div className="flex items-center gap-2 mt-2 flex-wrap">
                        <span className={`text-xs px-1.5 py-0.5 rounded border ${categoryColors[item.category]}`}>{item.category}</span>
                        <span className="text-xs text-gray-600">·</span>
                        <span className="text-xs text-gray-500">{item.source}</span>
                        <span className="text-xs text-gray-600">·</span>
                        <span className="text-xs text-gray-500">{item.publishedAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ItemModal isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} title="热点详情">
        {selectedItem && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <RankBadge rank={selectedItem.rank} />
              <h3 className="text-white font-semibold text-lg flex-1">{selectedItem.title}</h3>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <span className={`text-xs px-2 py-1 rounded border ${categoryColors[selectedItem.category]}`}>{selectedItem.category}</span>
              <TrendIcon trend={selectedItem.trend} />
              <span className="text-sm font-mono text-gray-300">{selectedItem.heat.toLocaleString()}</span>
              <span className="text-xs text-gray-500 ml-auto">{selectedItem.source} · {selectedItem.publishedAt}</span>
            </div>

            <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-orange-400 to-red-400"
                style={{ width: `${(selectedItem.heat / maxHeat) * 100}%` }}
              />
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
                阅读原文
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
