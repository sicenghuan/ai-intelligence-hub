'use client';

import { useState, useCallback } from 'react';
import HeroHeader from '@/components/HeroHeader';
import HotspotPanel from '@/components/HotspotPanel';
import GlobalNewsPanel from '@/components/GlobalNewsPanel';
import DomesticNewsPanel from '@/components/DomesticNewsPanel';
import CompanyIntelPanel from '@/components/CompanyIntelPanel';
import Footer from '@/components/Footer';
import NewsTicker from '@/components/NewsTicker';
import {
  hotspotData,
  globalNewsData,
  domesticNewsData,
  companiesData,
} from '@/lib/data';
import Modal from '@/components/Modal';

const PREVIEW_COUNT = 10;

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0);
  const [modalType, setModalType] = useState<string | null>(null);

  const handleRefresh = useCallback(() => {
    setRefreshKey(k => k + 1);
  }, []);

  const featuredCount =
    globalNewsData.filter(d => d.featured).length +
    domesticNewsData.filter(d => d.featured).length;

  const stats = [
    { label: '今日热点', value: hotspotData.length, color: 'text-orange-400', dot: 'bg-orange-400' },
    { label: '国外动态', value: globalNewsData.length, color: 'text-blue-400', dot: 'bg-blue-400' },
    { label: '国内动态', value: domesticNewsData.length, color: 'text-green-400', dot: 'bg-green-400' },
    { label: '追踪公司', value: companiesData.length, color: 'text-purple-400', dot: 'bg-purple-400' },
    { label: '精选资讯', value: featuredCount, color: 'text-yellow-400', dot: 'bg-yellow-400' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <HeroHeader stats={stats} onRefresh={handleRefresh} />
      <NewsTicker items={hotspotData} />

      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-6">
        <div key={refreshKey} className="flex flex-col gap-5">
          {/* 今日热点 + 国外动态 + 国内动态：3列并排 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="bg-gray-900/80 rounded-2xl border border-gray-800/80 p-5">
              <HotspotPanel
                data={hotspotData}
                previewCount={PREVIEW_COUNT}
                onViewMore={() => setModalType('hotspot')}
              />
            </div>

            <div className="bg-gray-900/80 rounded-2xl border border-gray-800/80 p-5">
              <GlobalNewsPanel
                data={globalNewsData}
                previewCount={PREVIEW_COUNT}
                onViewMore={() => setModalType('global')}
              />
            </div>

            <div className="bg-gray-900/80 rounded-2xl border border-gray-800/80 p-5">
              <DomesticNewsPanel
                data={domesticNewsData}
                previewCount={PREVIEW_COUNT}
                onViewMore={() => setModalType('domestic')}
              />
            </div>
          </div>

          {/* 公司情报：2列并排，竖向平铺 */}
          <div className="bg-gray-900/80 rounded-2xl border border-gray-800/80 p-5">
            <CompanyIntelPanel
              data={companiesData}
              previewCount={companiesData.length}
              onViewMore={() => setModalType('companies')}
            />
          </div>
        </div>
      </main>

      <Footer />

      {/* Modals */}
      <Modal isOpen={modalType === 'hotspot'} onClose={() => setModalType(null)} title="今日 AI 产品热点">
        <HotspotPanel data={hotspotData} previewCount={hotspotData.length} />
      </Modal>

      <Modal isOpen={modalType === 'global'} onClose={() => setModalType(null)} title="国外 AI 实时动态">
        <GlobalNewsPanel data={globalNewsData} previewCount={globalNewsData.length} />
      </Modal>

      <Modal isOpen={modalType === 'domestic'} onClose={() => setModalType(null)} title="国内 AI 实时动态">
        <DomesticNewsPanel data={domesticNewsData} previewCount={domesticNewsData.length} />
      </Modal>

      <Modal isOpen={modalType === 'companies'} onClose={() => setModalType(null)} title="AI 核心公司情报追踪">
        <CompanyIntelPanel data={companiesData} previewCount={companiesData.length} />
      </Modal>
    </div>
  );
}
