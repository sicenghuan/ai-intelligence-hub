'use client';

import { useState, useEffect } from 'react';

interface HeroHeaderProps {
  stats: {
    label: string;
    value: number;
    color: string;
    dot: string;
  }[];
  onRefresh: () => void;
}

function ClockWidget() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, '0');
      const m = now.getMinutes().toString().padStart(2, '0');
      const s = now.getSeconds().toString().padStart(2, '0');
      setTime(`${h}:${m}:${s}`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
      <span className="text-sm font-mono text-gray-300 tracking-wider">{time}</span>
    </div>
  );
}

export default function HeroHeader({ stats, onRefresh }: HeroHeaderProps) {
  return (
    <header className="bg-gray-950 border-b border-gray-800">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          {/* Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl tracking-tight leading-none">
                AI Intelligence <span className="text-blue-400">Hub</span>
              </h1>
              <span className="text-[10px] font-mono text-gray-500 bg-gray-800 px-1.5 py-0.5 rounded border border-gray-700 mt-0.5 inline-block">v1.2.0</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-5 flex-wrap">
            {stats.map(stat => (
              <div key={stat.label} className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${stat.dot}`} />
                <span className={`text-lg font-bold font-mono ${stat.color}`}>{stat.value}</span>
                <span className="text-xs text-gray-500 hidden sm:block">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Right: Clock + Refresh */}
          <div className="flex items-center gap-4 shrink-0">
            <ClockWidget />
            <button
              onClick={onRefresh}
              title="刷新数据"
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
