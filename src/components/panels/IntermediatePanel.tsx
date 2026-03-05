import { GlassCard } from '../GlassCard'

export function IntermediatePanel() {
  return (
    <section
      id="panel-intermediate"
      role="tabpanel"
      aria-labelledby="tab-intermediate"
      className="space-y-6"
    >
      <GlassCard>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
          テーマ
        </h2>
        <p className="text-neutral-700 dark:text-neutral-200">
          「よりきれいなフロントエンドを作りたい」
        </p>
      </GlassCard>

      <GlassCard>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
          内容
        </h2>
        <p className="text-neutral-700 dark:text-neutral-200 mb-2">
          入門で作ったコードを読みながら学ぶ項目の案内です。
        </p>
        <ul className="list-disc list-inside space-y-1 text-neutral-500 dark:text-neutral-300">
          <li>コンポーネント化の考え方</li>
          <li>CSS 変数</li>
          <li>アニメーション</li>
          <li>デザイン Tokens</li>
        </ul>
        <p className="text-neutral-600 dark:text-neutral-400 mt-3 text-sm">
          具体的な課題文はシンプルな箇条書きで Cursor に伝えてみましょう。
        </p>
      </GlassCard>
    </section>
  )
}
