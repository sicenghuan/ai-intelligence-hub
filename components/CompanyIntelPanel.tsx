'use client';

import { useState } from 'react';
import { CompanyItem, CompanyEvent, CompanyEventType } from '@/lib/data';
import {
  OpenAILogo,
  AnthropicLogo,
  GoogleDeepMindLogo,
  MetaAILogo,
  MicrosoftLogo,
  BaiduLogo,
  ByteDanceLogo,
  MistralLogo,
} from '@/lib/CompanyLogos';
import ItemModal from './ItemModal';

const LOGO_MAP: Record<string, React.ComponentType> = {
  'openai': OpenAILogo,
  'anthropic': AnthropicLogo,
  'google-deepmind': GoogleDeepMindLogo,
  'meta-ai': MetaAILogo,
  'microsoft': MicrosoftLogo,
  'baidu': BaiduLogo,
  'bytedance': ByteDanceLogo,
  'mistral': MistralLogo,
};

const eventTypeColors: Record<CompanyEventType, string> = {
  产品发布: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  融资: 'bg-green-500/20 text-green-400 border-green-500/30',
  技术突破: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  人事变动: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  开源: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
};

function TimelineCard({ event, bgColor, isFirst, isLast, onClick }: { event: CompanyEvent; bgColor: string; isFirst: boolean; isLast: boolean; onClick: () => void }) {
  return (
    <div
      className="flex flex-col items-center cursor-pointer group shrink-0 min-w-[140px] max-w-[140px]"
      onClick={onClick}
    >
      {/* Time point */}
      <div className="flex items-center h-6 w-full">
        {!isFirst && (
          <div className="flex-1 h-0.5" style={{ background: `linear-gradient(to right, ${bgColor}60, ${bgColor}30)` }} />
        )}
        <span className="text-[10px] text-gray-500 whitespace-nowrap px-1 z-10">{event.publishedAt}</span>
        {!isLast && (
          <div className="flex-1 h-0.5" style={{ background: `linear-gradient(to left, ${bgColor}60, ${bgColor}30)` }} />
        )}
      </div>

      {/* Label below */}
      <div className="flex flex-col items-center gap-1 w-full mt-1">
        <span className={`text-[10px] px-1.5 py-0.5 rounded border ${eventTypeColors[event.type]} whitespace-nowrap`}>{event.type}</span>
        <span className="text-[10px] text-gray-400 text-center leading-tight line-clamp-2 font-medium px-0.5">{event.title}</span>
        {event.isHot && <span className="text-[10px] text-red-400 font-bold">HOT</span>}
      </div>
    </div>
  );
}

function CompanyTimeline({ company, onEventClick }: { company: CompanyItem; onEventClick: (event: CompanyEvent) => void }) {
  const LogoComponent = LOGO_MAP[company.id];
  const hasHot = company.events.some(e => e.isHot);

  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900/60 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-800 bg-gray-900/40">
        <div className="shrink-0 relative">
          {LogoComponent
            ? <LogoComponent />
            : <div className="w-12 h-12 rounded-xl flex items-center justify-center text-base font-bold" style={{ backgroundColor: company.bgColor, color: company.color }}>{company.logo}</div>
          }
          {hasHot && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-gray-900 animate-pulse" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-white font-bold text-lg">{company.nameEn}</h3>
            <span className="text-gray-500 text-sm">{company.nameCn}</span>
            {hasHot && (
              <span className="text-xs bg-red-500/20 text-red-400 border border-red-500/30 px-1.5 py-0.5 rounded font-medium">HOT</span>
            )}
          </div>
          <p className="text-xs text-gray-600 mt-0.5">{company.events.length} 条动态</p>
        </div>
        <div className="shrink-0 hidden sm:flex items-center gap-2">
          <div className="w-20 h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ width: `${Math.min((company.events[0]?.heat ?? 0) / 10000 * 100, 100)}%`, backgroundColor: company.bgColor }}
            />
          </div>
          <span className="text-[10px] font-mono text-gray-600">{company.events[0]?.heat.toLocaleString()}</span>
        </div>
      </div>

      {/* Horizontal timeline - full width with scroll */}
      <div className="px-6 py-5 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        <div className="flex gap-1 items-start min-w-max">
          {company.events.map((event, index) => (
            <TimelineCard
              key={event.id}
              event={event}
              bgColor={company.bgColor}
              isFirst={index === 0}
              isLast={index === company.events.length - 1}
              onClick={() => onEventClick(event)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function EventModal({ event, company, isOpen, onClose }: { event: CompanyEvent | null; company: CompanyItem | null; isOpen: boolean; onClose: () => void }) {
  return (
    <ItemModal isOpen={isOpen} onClose={onClose} title={event && company ? `${company.nameCn} · ${event.type}` : '公司动态'}>
      {event && company && (
        <div className="space-y-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className={`text-sm px-3 py-1 rounded border ${eventTypeColors[event.type]}`}>{event.type}</span>
            {event.isHot && (
              <span className="text-sm bg-red-500/20 text-red-400 border border-red-500/30 px-2 py-1 rounded font-medium">热门</span>
            )}
            <span className="text-sm text-gray-400 ml-auto">{event.publishedAt}</span>
          </div>

          <h3 className="text-white font-semibold text-lg">{event.title}</h3>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: `${Math.min((event.heat / 10000) * 100, 100)}%`, backgroundColor: company.bgColor }}
              />
            </div>
            <span className="text-sm font-mono text-gray-300">{event.heat.toLocaleString()}</span>
          </div>

          {event.summary && (
            <p className="text-sm text-gray-300 leading-relaxed bg-gray-800/60 rounded-xl p-4">{event.summary}</p>
          )}

          {event.tags && event.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <span key={tag} className="text-xs bg-gray-800 text-gray-400 px-2.5 py-1 rounded-full">#{tag}</span>
              ))}
            </div>
          )}

          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 px-4 py-2 rounded-lg border border-purple-500/30 hover:bg-purple-500/10 transition-colors"
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
  );
}

interface CompanyIntelPanelProps {
  data: CompanyItem[];
  previewCount?: number;
  onViewMore?: () => void;
}

export default function CompanyIntelPanel({ data, previewCount, onViewMore }: CompanyIntelPanelProps) {
  const [selectedEvent, setSelectedEvent] = useState<{ event: CompanyEvent; company: CompanyItem } | null>(null);
  const displayed = previewCount ? data.slice(0, previewCount) : data;
  const showViewMore = previewCount !== undefined && previewCount < data.length;
  const hotCount = data.filter(c => c.events.some(e => e.isHot)).length;

  return (
    <>
      <section id="companies">
        <div className="flex items-center gap-3 mb-5 flex-wrap">
          <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full" />
          <h2 className="text-white font-semibold text-base">AI 核心公司情报追踪</h2>
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">{data.length} 家公司</span>
            {hotCount > 0 && (
              <span className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded-full">🔴 {hotCount} 家热门</span>
            )}
          </div>
          {showViewMore && onViewMore && (
            <button
              onClick={onViewMore}
              className="ml-auto shrink-0 text-xs text-purple-400 hover:text-purple-300 px-3 py-1 rounded-lg border border-purple-500/30 hover:bg-purple-500/10 transition-colors"
            >
              查看全部 {data.length} 家公司
            </button>
          )}
        </div>

        <div className="flex flex-col gap-4">
          {displayed.map((company) => (
            <CompanyTimeline
              key={company.id}
              company={company}
              onEventClick={(event) => setSelectedEvent({ event, company })}
            />
          ))}
        </div>
      </section>

      <EventModal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        event={selectedEvent?.event ?? null}
        company={selectedEvent?.company ?? null}
      />
    </>
  );
}
