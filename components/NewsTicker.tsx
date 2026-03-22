'use client';

import { useRef, useEffect, useState } from 'react';
import { HotspotItem } from '@/lib/data';
import ItemModal from './ItemModal';

interface NewsTickerProps {
  items: HotspotItem[];
}

const categoryBgColors: Record<string, string> = {
  产品: 'bg-blue-500/20 border-blue-500/30 text-blue-400',
  融资: 'bg-green-500/20 border-green-500/30 text-green-400',
  研究: 'bg-purple-500/20 border-purple-500/30 text-purple-400',
  观点: 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400',
  政策: 'bg-orange-500/20 border-orange-500/30 text-orange-400',
  人事: 'bg-pink-500/20 border-pink-500/30 text-pink-400',
  技术: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400',
};

export default function NewsTicker({ items }: NewsTickerProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedItem, setSelectedItem] = useState<HotspotItem | null>(null);
  const animRef = useRef<number>(0);
  const xRef = useRef<number>(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const step = () => {
      if (!isPaused) {
        xRef.current -= 0.4;
        const halfWidth = track.scrollWidth / 2;
        if (xRef.current <= -halfWidth) {
          xRef.current = 0;
        }
        track.style.transform = `translateX(${xRef.current}px)`;
      }
      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, [isPaused]);

  const tickerItems = [...items, ...items];

  return (
    <>
      <div
        className="bg-gray-900/80 border-b border-gray-800 overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-screen-2xl mx-auto flex items-stretch">
          <div className="shrink-0 flex items-center gap-2 px-3 sm:px-4 bg-gradient-to-r from-red-500/20 to-transparent z-10 border-r border-gray-700">
            <span className={`w-2 h-2 rounded-full animate-pulse ${isPaused ? 'bg-yellow-400' : 'bg-red-500'}`} />
            <span className="text-[11px] font-bold text-red-400 whitespace-nowrap hidden sm:block">
              {isPaused ? '已暂停' : '实时热点'}
            </span>
            <span className="text-[11px] font-bold text-red-400 whitespace-nowrap sm:hidden">HOT</span>
          </div>
          <div className="flex-1 overflow-hidden relative">
            <div
              ref={trackRef}
              className="flex items-center gap-8 whitespace-nowrap py-2"
              style={{ willChange: 'transform' }}
            >
              {tickerItems.map((item, i) => (
                <button
                  key={`${item.id}-${i}`}
                  onClick={() => setSelectedItem(item)}
                  className="flex items-center gap-2 text-xs text-gray-300 hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 m-0"
                >
                  <span className="text-[10px] text-gray-600 whitespace-nowrap">{item.publishedAt}</span>
                  <span className="text-gray-600">|</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded border ${categoryBgColors[item.category] || 'bg-gray-500/20 border-gray-500/30 text-gray-400'}`}>
                    {item.category}
                  </span>
                  <span className="hover:text-white cursor-default">{item.title}</span>
                  <span className="text-gray-600">|</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ItemModal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem ? `${selectedItem.category} · ${selectedItem.source}` : ''}
      >
        {selectedItem && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 flex-wrap">
              <span className={`text-sm px-3 py-1 rounded border ${categoryBgColors[selectedItem.category] || ''}`}>
                {selectedItem.category}
              </span>
              <span className="text-sm text-gray-400 ml-auto">{selectedItem.publishedAt}</span>
            </div>

            <h3 className="text-white font-semibold text-lg">{selectedItem.title}</h3>

            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-orange-500 to-red-500"
                  style={{ width: `${Math.min((selectedItem.heat / 10000) * 100, 100)}%` }}
                />
              </div>
              <span className="text-sm font-mono text-gray-300">{selectedItem.heat.toLocaleString()}</span>
            </div>

            {selectedItem.summary && (
              <p className="text-sm text-gray-300 leading-relaxed bg-gray-800/60 rounded-xl p-4">
                {selectedItem.summary}
              </p>
            )}

            {selectedItem.link && (
              <a
                href={selectedItem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-orange-400 hover:text-orange-300 px-4 py-2 rounded-lg border border-orange-500/30 hover:bg-orange-500/10 transition-colors"
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
