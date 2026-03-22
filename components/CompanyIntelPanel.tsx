'use client';

import { useState } from 'react';
import { CompanyItem, CompanyEvent, CompanyEventType } from '@/lib/data';

const eventTypeColors: Record<CompanyEventType, string> = {
  产品发布: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  融资: 'bg-green-500/20 text-green-400 border-green-500/30',
  技术突破: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  人事变动: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  开源: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
};

function CompanyCard({ company }: { company: CompanyItem }) {
  const [expanded, setExpanded] = useState(false);
  const topEvent = company.events[0];
  const hasHot = company.events.some(e => e.isHot);

  return (
    <div
      className={`group rounded-xl border transition-all duration-200 cursor-pointer overflow-hidden ${
        hasHot
          ? 'border-gray-700 bg-gray-800/70 hover:bg-gray-800'
          : 'border-gray-800 bg-gray-900/60 hover:bg-gray-800/60'
      }`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-3">
        {/* Company header */}
        <div className="flex items-center gap-2.5 mb-2.5">
          {/* Logo avatar */}
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 relative"
            style={{ backgroundColor: company.bgColor, color: company.color }}
          >
            {company.logo}
            {hasHot && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-gray-900" />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-white truncate">{company.nameEn}</span>
              {hasHot && (
                <span className="text-xs bg-red-500/20 text-red-400 border border-red-500/30 px-1 py-0.5 rounded text-[10px] font-medium shrink-0">
                  HOT
                </span>
              )}
            </div>
            <span className="text-xs text-gray-500">{company.nameCn}</span>
          </div>
          <span className="text-xs text-gray-600 shrink-0">{company.events.length}条</span>
        </div>

        {/* Top event */}
        {topEvent && (
          <div>
            <div className="flex items-start gap-2 mb-1.5">
              <span className={`text-[10px] px-1.5 py-0.5 rounded border shrink-0 ${eventTypeColors[topEvent.type]}`}>
                {topEvent.type}
              </span>
              <p className="text-xs text-gray-300 leading-snug line-clamp-2 group-hover:text-white transition-colors">
                {topEvent.title}
              </p>
            </div>

            {/* Heat */}
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${Math.min((topEvent.heat / 10000) * 100, 100)}%`,
                    backgroundColor: company.bgColor,
                    opacity: 0.8,
                  }}
                />
              </div>
              <span className="text-[10px] text-gray-500 font-mono shrink-0">{topEvent.heat.toLocaleString()}</span>
              <span className="text-[10px] text-gray-600 shrink-0">{topEvent.publishedAt}</span>
            </div>
          </div>
        )}

        {/* Expanded events */}
        {expanded && company.events.length > 1 && (
          <div className="mt-3 pt-3 border-t border-gray-700/50 space-y-2">
            {company.events.slice(1).map((event: CompanyEvent) => (
              <div key={event.id} className="pl-2 border-l-2 border-gray-700">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className={`text-[10px] px-1 py-0.5 rounded border ${eventTypeColors[event.type]}`}>
                    {event.type}
                  </span>
                  <span className="text-[10px] text-gray-600">{event.publishedAt}</span>
                </div>
                <p className="text-xs text-gray-400 leading-snug">{event.title}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        {expanded && topEvent?.tags && (
          <div className="mt-2 flex flex-wrap gap-1">
            {topEvent.tags.map((tag) => (
              <span key={tag} className="text-[10px] bg-gray-800 text-gray-500 px-1.5 py-0.5 rounded">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface CompanyIntelPanelProps {
  data: CompanyItem[];
}

export default function CompanyIntelPanel({ data }: CompanyIntelPanelProps) {
  const hotCount = data.filter(c => c.events.some(e => e.isHot)).length;

  return (
    <section id="companies">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1 h-5 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full" />
        <h2 className="text-white font-semibold text-base">AI 核心公司情报追踪</h2>
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">
            {data.length} 家公司
          </span>
          {hotCount > 0 && (
            <span className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded-full">
              🔴 {hotCount} 家热门
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {data.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </div>
    </section>
  );
}
