'use client';

import { useState, useCallback } from 'react';
import Header from '@/components/Header';
import HotspotPanel from '@/components/HotspotPanel';
import GlobalNewsPanel from '@/components/GlobalNewsPanel';
import DomesticNewsPanel from '@/components/DomesticNewsPanel';
import CompanyIntelPanel from '@/components/CompanyIntelPanel';
import Footer from '@/components/Footer';
import {
  hotspotData,
  globalNewsData,
  domesticNewsData,
  companiesData,
} from '@/lib/data';

function formatTime() {
  const now = new Date();
  return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} 更新`;
}

export default function Home() {
  const [lastUpdated, setLastUpdated] = useState(formatTime());
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = useCallback(() => {
    setLastUpdated(formatTime());
    setRefreshKey(k => k + 1);
  }, []);

  const featuredCount =
    globalNewsData.filter(d => d.featured).length +
    domesticNewsData.filter(d => d.featured).length;

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header lastUpdated={lastUpdated} onRefresh={handleRefresh} />

      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-6">
        {/* Stats bar */}
        <div className="flex items-center gap-6 mb-6 overflow-x-auto pb-2 border-b border-gray-800">
          {[
            { label: '今日热点', value: hotspotData.length, color: 'text-orange-400', dot: 'bg-orange-400' },
            { label: '国外动态', value: globalNewsData.length, color: 'text-blue-400', dot: 'bg-blue-400' },
            { label: '国内动态', value: domesticNewsData.length, color: 'text-green-400', dot: 'bg-green-400' },
            { label: '追踪公司', value: companiesData.length, color: 'text-purple-400', dot: 'bg-purple-400' },
            { label: '精选资讯', value: featuredCount, color: 'text-yellow-400', dot: 'bg-yellow-400' },
          ].map(stat => (
            <div key={stat.label} className="flex items-center gap-2 shrink-0 py-2">
              <span className={`w-1.5 h-1.5 rounded-full ${stat.dot}`} />
              <span className={`text-lg font-bold font-mono ${stat.color}`}>{stat.value}</span>
              <span className="text-xs text-gray-500">{stat.label}</span>
            </div>
          ))}
          <div className="ml-auto shrink-0 flex items-center gap-1.5 text-xs text-gray-600 py-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            实时数据驾驶舱
          </div>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left column: 今日热点 */}
          <div
            key={`hotspot-${refreshKey}`}
            className="lg:col-span-1 bg-gray-900/80 rounded-2xl border border-gray-800/80 p-4 flex flex-col"
            style={{ minHeight: '620px', maxHeight: '820px' }}
          >
            <HotspotPanel data={hotspotData} />
          </div>

          {/* Right: 国外 + 国内 + 公司情报 */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* News row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div
                key={`global-${refreshKey}`}
                className="bg-gray-900/80 rounded-2xl border border-gray-800/80 p-4 flex flex-col"
                style={{ minHeight: '380px', maxHeight: '460px' }}
              >
                <GlobalNewsPanel data={globalNewsData} />
              </div>

              <div
                key={`domestic-${refreshKey}`}
                className="bg-gray-900/80 rounded-2xl border border-gray-800/80 p-4 flex flex-col"
                style={{ minHeight: '380px', maxHeight: '460px' }}
              >
                <DomesticNewsPanel data={domesticNewsData} />
              </div>
            </div>

            {/* Company intel */}
            <div
              key={`companies-${refreshKey}`}
              className="bg-gray-900/80 rounded-2xl border border-gray-800/80 p-4"
            >
              <CompanyIntelPanel data={companiesData} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
