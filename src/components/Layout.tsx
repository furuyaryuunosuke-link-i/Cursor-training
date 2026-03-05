import { type ReactNode } from 'react'
import { TabNav, type TabId } from './TabNav'

type LayoutProps = {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
  isDark: boolean
  onThemeToggle: () => void
  children: ReactNode
}

export function Layout({
  activeTab,
  onTabChange,
  isDark,
  onThemeToggle,
  children,
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-transparent text-neutral-900 dark:text-white">
      {/* 背景: ベース + オーブ */}
      <div
        className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
        aria-hidden
      >
        <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900" />
        <div className="absolute -top-[10%] -left-[10%] w-[40vw] h-[40vw] min-w-[320px] min-h-[320px] rounded-full bg-indigo-500/35 dark:bg-indigo-500/30 blur-[120px]" />
        <div className="absolute -bottom-[15%] -right-[10%] w-[40vw] h-[40vw] min-w-[260px] min-h-[260px] rounded-full bg-fuchsia-500/35 dark:bg-fuchsia-500/30 blur-[110px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35vw] h-[35vw] min-w-[200px] min-h-[200px] rounded-full bg-violet-500/25 dark:bg-violet-500/20 blur-[90px]" />
      </div>

      <header className="fixed top-0 left-0 right-0 z-20 border-b border-slate-300 dark:border-slate-600 bg-white/70 dark:bg-white/5 backdrop-blur-xl min-h-[72px] flex items-center">
        <div className="w-full max-w-5xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-neutral-900 dark:text-white">
              Cursor実践トレーニング
            </h1>
            <TabNav activeTab={activeTab} onTabChange={onTabChange} />
          </div>
          <button
            type="button"
            onClick={onThemeToggle}
            className="p-2 rounded bg-slate-200 text-slate-800 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 focus-visible:ring-2 focus-visible:ring-white/30 dark:focus-visible:ring-white/20 outline-none"
            aria-label={isDark ? 'ライトモードに切替' : 'ダークモードに切替'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 pt-[88px] pb-12 relative z-10">
        {children}
      </main>
    </div>
  )
}
