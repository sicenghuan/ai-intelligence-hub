'use client';

import { useState, useEffect } from 'react';
import { HotspotItem, TrendDirection, Category } from '@/lib/data';

const categoryColors: Record<Category, string> = {
  产品: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  融资: 'bg-green-500/20 text-green-400 border-green-500/30',
  研究: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  观点: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  政策: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  人事: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  技术: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
};

/** 趋势方向：带颜色闪烁点 + 箭头图标 */
const TrendIcon = ({ trend }: { trend: TrendDirection }) => {
  if (trend === 'up') return (
    <span className="flex items-center gap-1">
      {/* 绿色闪烁圆点 */}
      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shrink-0" />
      <svg className="w-3.5 h-3.5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 15l7-7 7 7" />
      </svg>
    </span>
  );
  if (trend === 'down') return (
    <span className="flex items-center gap-1">
      {/* 红色圆点 */}
      <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
      <svg className="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
      </svg>
    </span>
  );
  return (
    <span className="flex items-center gap-1">
      {/* 灰色圆点 */}
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

/** 排名 1-3 左侧渐变竖线：金/银/铜 */
const rankAccentStyle: Record<number, React.CSSProperties> = {
  1: { background: 'linear-gradient(to bottom, #facc15, #f97316)' }, // 金
  2: { background: 'linear-gradient(to bottom, #d1d5db, #9ca3af)' }, // 银
  3: { background: 'linear-gradient(to bottom, #ea580c, #92400e)' }, // 铜
};

interface HotspotPanelProps {
  data: HotspotItem[];
}

export default function HotspotPanel({ data }: HotspotPanelProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  /** 控制进度条动画：false = width 0（初始），true = 渲染真实宽度 */
  const [animated, setAnimated] = useState(false);

  const maxHeat = Math.max(...data.map(d => d.heat));

  // 挂载后短暂延迟触发进度条从 0 渐入到目标值
  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hotspot" className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-5 bg-gradient-to-b from-orange-400 to-red-500 rounded-full" />
        <h2 className="text-white font-semibold text-base">今日 AI 产品热点</h2>
        <span className="ml-auto text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">
          热度排行
        </span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
        {data.map((item) => {
          const isExpanded = expandedId === item.id;
          const heatPct = (item.heat / maxHeat) * 100;
          const isTop3 = item.rank <= 3;

          return (
            <div
              key={item.id}
              onClick={() => setExpandedId(isExpanded ? null : item.id)}
              className={`group relative rounded-xl border transition-all duration-200 cursor-pointer
                hover:-translate-y-0.5
                ${isTop3
                  ? 'border-gray-600 bg-gray-800/60 hover:bg-gray-800'
                  : 'border-gray-800 bg-gray-900/60 hover:bg-gray-800/60'
                } ${isExpanded ? 'border-blue-500/40' : ''}`}
            >
              {/* Top3 glow */}
              {item.rank === 1 && (
                <div className="absolute inset-0 rounded-xl bg-yellow-500/5 pointer-events-none" />
              )}

              {/* 排名 1-3 左侧渐变竖线（金/银/铜） */}
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
                        {/* 热度数字：千分位格式化（保留） */}
                        <span className="text-xs font-mono text-gray-400">{item.heat.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Heat bar：初始 width=0，挂载后渐入到目标值 */}
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
                      <span className={`text-xs px-1.5 py-0.5 rounded border ${categoryColors[item.category]}`}>
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-600">·</span>
                      <span className="text-xs text-gray-500">{item.source}</span>
                      <span className="text-xs text-gray-600">·</span>
                      <span className="text-xs text-gray-500">{item.publishedAt}</span>
                    </div>
                  </div>
                </div>

                {/* Expanded summary */}
                {isExpanded && item.summary && (
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <p className="text-xs text-gray-400 leading-relaxed">{item.summary}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 mt-2 text-xs text-blue-400 hover:text-blue-300"
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
      </div>
    </section>
  );
}
