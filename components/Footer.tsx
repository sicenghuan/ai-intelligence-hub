export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-8">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md flex items-center justify-center">
              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-sm text-gray-500">
              © 2026 <span className="text-gray-400">AI Intelligence Hub</span> · v1.0
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs text-gray-600">
            <span className="flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              热点每小时刷新
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              动态每30分钟刷新
            </span>
            <span>数据仅供参考</span>
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span>来源：TechCrunch · The Verge · 机器之心 · 量子位 · 36氪</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
