export type TabId =
  | 'intro'
  | 'intermediate'
  | 'advanced'
  | 'security'
  | 'webService'
  | 'frontend'
  | 'github'
  | 'glossary'

const TABS: { id: TabId; label: string }[] = [
  { id: 'intro', label: '入門' },
  { id: 'intermediate', label: '中級' },
  { id: 'advanced', label: '上級' },
  { id: 'security', label: 'セキュリティ' },
  { id: 'webService', label: 'Webサービス' },
  { id: 'frontend', label: 'フロントエンド' },
  { id: 'github', label: 'GitHub' },
  { id: 'glossary', label: '用語集' },
]

const TAB_GROUPS: { label: string; tabIds: TabId[] }[] = [
  { label: 'まずはここから', tabIds: ['intro', 'intermediate', 'advanced'] },
  { label: '発展', tabIds: ['security', 'webService', 'frontend', 'github'] },
  { label: '参考', tabIds: ['glossary'] },
]

const tabById = Object.fromEntries(TABS.map((t) => [t.id, t]))

type TabNavProps = {
  activeTab: TabId
  onTabChange: (tab: TabId) => void
}

export function TabNav({ activeTab, onTabChange }: TabNavProps) {
  return (
    <nav className="flex flex-col gap-6" aria-label="メイン">
      {TAB_GROUPS.map((group) => (
        <div key={group.label} className="flex flex-col gap-1">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            {group.label}
          </span>
          <div className="flex flex-col gap-0.5">
            {group.tabIds.map((id) => {
              const tab = tabById[id]
              if (!tab) return null
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  className={
                    'w-full text-left px-4 py-2.5 rounded-lg font-medium text-sm transition-colors focus-visible:ring-2 focus-visible:ring-white/30 dark:focus-visible:ring-white/20 focus-visible:ring-inset outline-none ' +
                    (activeTab === tab.id
                      ? 'bg-white/60 dark:bg-white/10 text-neutral-900 dark:text-white border border-white/50 dark:border-white/20'
                      : 'text-neutral-600 dark:text-neutral-400 hover:bg-white/40 dark:hover:bg-white/5 hover:text-neutral-900 dark:hover:text-white border border-transparent')
                  }
                  onClick={() => onTabChange(tab.id)}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      ))}
    </nav>
  )
}
