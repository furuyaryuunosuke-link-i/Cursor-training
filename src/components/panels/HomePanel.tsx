import type { TabId } from '../TabNav'
import { GlassCard } from '../GlassCard'
import { HOME_LEARNING_PATHS } from '../../data/homePaths'
import { HOME_NEWS } from '../../data/homeNews'
import { HOME_TIPS } from '../../data/homeTips'
import { getHomeProgressSummary } from '../../utils/progressSummary'

type HomePanelProps = {
  onNavigateTab: (tab: TabId) => void
  onStartIntroFromBeginning: () => void
}

type ProgressItem = {
  id: TabId
  label: string
  completed: number
  total: number
}

function ProgressBar({ completed, total }: { completed: number; total: number }) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs text-neutral-600 dark:text-neutral-400">
        <span>
          {completed} / {total} ステップ
        </span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/40 dark:bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full bg-emerald-400/80 dark:bg-emerald-400/80 transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export function HomePanel({
  onNavigateTab,
  onStartIntroFromBeginning,
}: HomePanelProps) {
  const summary = getHomeProgressSummary()

  const progressItems: ProgressItem[] = [
    { id: 'intro', label: '入門', ...summary.intro },
    { id: 'intermediate', label: '中級', ...summary.intermediate },
    { id: 'advanced', label: '上級', ...summary.advanced },
    { id: 'webService', label: 'Webサービス', ...summary.webService },
    { id: 'frontend', label: 'フロントエンド', ...summary.frontend },
    { id: 'github', label: 'GitHub', ...summary.github },
    { id: 'python', label: 'Python', ...summary.python },
    { id: 'nodejs', label: 'Node.js', ...summary.nodejs },
  ]

  return (
    <section
      id="panel-home"
      role="tabpanel"
      aria-labelledby="tab-home"
      className="space-y-8"
    >
      {/* ヒーロー */}
      <GlassCard className="p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
          Cursor 実践トレーニングへようこそ
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-700 dark:text-neutral-200">
          「どこから始めればいいか」を迷わずに、段階的に学べるようタブごとにカリキュラムを用意しています。
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={onStartIntroFromBeginning}
            className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-600 shadow-lg shadow-indigo-500/30 focus-visible:ring-2 focus-visible:ring-white/40 outline-none"
          >
            入門 1-1 から始める
          </button>
          <button
            type="button"
            onClick={() => onNavigateTab('intro')}
            className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-indigo-600 dark:text-indigo-300 bg-white/70 dark:bg-white/10 border border-white/60 dark:border-white/20 hover:bg-white dark:hover:bg-white/15 focus-visible:ring-2 focus-visible:ring-white/40 outline-none"
          >
            入門の一覧を見る
          </button>
        </div>
      </GlassCard>

      {/* 進捗サマリ ＋ クイックリンク */}
      <div className="grid gap-4 sm:grid-cols-2">
        <GlassCard className="p-5">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
            学習タブの進捗
          </h3>
          <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
            各タブで付けた「達成」チェックを集約して、ざっくりとした進み具合を確認できます。
          </p>
          <div className="mt-4 space-y-3">
            {progressItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigateTab(item.id)}
                className="w-full text-left rounded-xl bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/15 px-3 py-2.5 hover:bg-white/70 dark:hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium text-neutral-900 dark:text-white">
                    {item.label}
                  </span>
                </div>
                <div className="mt-1">
                  <ProgressBar completed={item.completed} total={item.total} />
                </div>
              </button>
            ))}
          </div>
        </GlassCard>

        {/* クイックリンク */}
        <GlassCard className="p-5 space-y-4">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
            クイックリンク
          </h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                まずはここから
              </p>
              <div className="mt-1 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => onNavigateTab('intro')}
                  className="px-3 py-1.5 rounded-full text-xs bg-white/60 dark:bg-white/10 border border-white/60 dark:border-white/20 hover:bg-white dark:hover:bg-white/15"
                >
                  入門
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateTab('intermediate')}
                  className="px-3 py-1.5 rounded-full text-xs bg-white/60 dark:bg白/10 border border-white/60 dark:border-white/20 hover:bg-white dark:hover:bg-white/15"
                >
                  中級
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateTab('advanced')}
                  className="px-3 py-1.5 rounded-full text-xs bg-white/60 dark:bg-white/10 border border-white/60 dark:border-white/20 hover:bg-white dark:hover:bg-white/15"
                >
                  上級
                </button>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                発展
              </p>
              <div className="mt-1 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => onNavigateTab('webService')}
                  className="px-3 py-1.5 rounded-full text-xs bg-white/60 dark:bg-white/10 border border-white/60 dark:border-white/20 hover:bg-white dark:hover:bg-white/15"
                >
                  Webサービス
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateTab('frontend')}
                  className="px-3 py-1.5 rounded-full text-xs bg-white/60 dark:bg-white/10 border border-white/60 dark:border-white/20 hover:bg-white dark:hover:bg-white/15"
                >
                  フロントエンド
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateTab('security')}
                  className="px-3 py-1.5 rounded-full text-xs bg-white/60 dark:bg-white/10 border border-white/60 dark:border-white/20 hover:bg-white dark:hover:bg-white/15"
                >
                  セキュリティ
                </button>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                ツール
              </p>
              <div className="mt-1 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => onNavigateTab('github')}
                  className="px-3 py-1.5 rounded-full text-xs bg-white/60 dark:bg-white/10 border border-white/60 dark:border-white/20 hover:bg-white dark:hover:bg-white/15"
                >
                  GitHub
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateTab('python')}
                  className="px-3 py-1.5 rounded-full text-xs bg-white/60 dark:bg-white/10 border border-white/60 dark:border-white/20 hover:bg-white dark:hover:bg-white/15"
                >
                  Python
                </button>
                <button
                  type="button"
                  onClick={() => onNavigateTab('nodejs')}
                  className="px-3 py-1.5 rounded-full text-xs bg-white/60 dark:bg-white/10 border border-white/60 dark:border-white/20 hover:bg-white dark:hover:bg-white/15"
                >
                  Node.js
                </button>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400">
                参考
              </p>
              <div className="mt-1 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => onNavigateTab('glossary')}
                  className="px-3 py-1.5 rounded-full text-xs bg-white/60 dark:bg-white/10 border border-white/60 dark:border-white/20 hover:bg-white dark:hover:bg-white/15"
                >
                  用語集
                </button>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* 学習ルートと更新情報 / Tips */}
      <div className="grid gap-4 lg:grid-cols-3">
        <GlassCard className="p-5 lg:col-span-2">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
            おすすめ学習ルート
          </h3>
          <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
            まずはこの順番で一通りなぞってみると、全体像がつかみやすくなります。
          </p>
          <div className="mt-4 space-y-4">
            {HOME_LEARNING_PATHS.map((path) => (
              <div
                key={path.id}
                className="rounded-2xl bg-white/50 dark:bg-white/5 border border-white/60 dark:border-white/20 p-4"
              >
                <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                  {path.title}
                </h4>
                <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                  {path.description}
                </p>
                <ol className="mt-3 space-y-1.5 text-xs text-neutral-700 dark:text-neutral-200">
                  {path.steps.map((step, index) => (
                    <li key={`${path.id}-${step.tab}-${index}`} className="flex gap-2">
                      <span className="mt-0.5 text-[10px] text-neutral-400">
                        {index + 1}.
                      </span>
                      <button
                        type="button"
                        onClick={() => onNavigateTab(step.tab)}
                        className="text-left hover:underline"
                      >
                        {step.label}
                      </button>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </GlassCard>

        <div className="space-y-4">
          <GlassCard className="p-4">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
              更新情報
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-neutral-700 dark:text-neutral-200">
              {HOME_NEWS.map((item) => (
                <li key={`${item.date}-${item.title}`}>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400">
                    {item.date}
                  </div>
                  <div className="font-semibold">{item.title}</div>
                  {item.description && (
                    <div className="text-[11px] mt-0.5 text-neutral-600 dark:text-neutral-300">
                      {item.description}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </GlassCard>

          <GlassCard className="p-4">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">
              Cursor 活用のちょっとしたコツ
            </h3>
            <ul className="mt-3 space-y-2 text-xs text-neutral-700 dark:text-neutral-200">
              {HOME_TIPS.map((tip) => (
                <li key={tip.id}>
                  <div className="font-semibold">{tip.title}</div>
                  <div className="text-[11px] mt-0.5 text-neutral-600 dark:text-neutral-300">
                    {tip.body}
                  </div>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}

