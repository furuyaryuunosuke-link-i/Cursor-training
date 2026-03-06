export type TabId =
  | 'intro'
  | 'intermediate'
  | 'advanced'
  | 'security'
  | 'webService'
  | 'frontend'
  | 'github'

const TABS: { id: TabId; label: string }[] = [
  { id: 'intro', label: '入門' },
  { id: 'intermediate', label: '中級' },
  { id: 'advanced', label: '上級' },
  { id: 'security', label: 'セキュリティ' },
  { id: 'webService', label: 'Webサービス' },
  { id: 'frontend', label: 'フロントエンド' },
  { id: 'github', label: 'GitHub' },
]

type TabNavProps = {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}

export function TabNav({ activeTab, onTabChange }: TabNavProps) {
  return (
    <nav className="flex gap-1" aria-label="メイン">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          type="button"
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls={`panel-${tab.id}`}
          id={`tab-${tab.id}`}
          className={
            'px-3 py-2 rounded font-medium text-sm transition-colors focus-visible:ring-2 focus-visible:ring-white/30 dark:focus-visible:ring-white/20 outline-none ' +
            (activeTab === tab.id
              ? 'bg-white/60 dark:bg-white/10 text-neutral-900 dark:text-white border border-white/50 dark:border-white/20'
              : 'text-neutral-600 dark:text-neutral-400 hover:bg-white/40 dark:hover:bg-white/5 hover:text-neutral-900 dark:hover:text-white')
          }
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  )
}
