import { GlassCard } from '../GlassCard'

export function AdvancedPanel() {
  return (
    <section
      id="panel-advanced"
      role="tabpanel"
      aria-labelledby="tab-advanced"
      className="space-y-6"
    >
      <GlassCard>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
          テーマ
        </h2>
        <p className="text-neutral-700 dark:text-neutral-200">
          「Webアプリにしたい」
        </p>
      </GlassCard>

      <GlassCard>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
          内容
        </h2>
        <p className="text-neutral-700 dark:text-neutral-200 mb-2">
          技術スタックを広げる案内です。入門で作った静的ページをベースに「アプリ化」する流れを Cursor に聞いてみましょう。
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-500 dark:text-neutral-300">
          <li>React / Vite や Next.js の導入</li>
          <li>簡易 API（バックエンド）</li>
          <li>デプロイ（Vercel など）</li>
        </ul>
      </GlassCard>
    </section>
  )
}
