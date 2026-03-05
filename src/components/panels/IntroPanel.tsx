import { GlassCard } from '../GlassCard'

export function IntroPanel() {
  return (
    <section
      id="panel-intro"
      role="tabpanel"
      aria-labelledby="tab-intro"
      className="space-y-6"
    >
      <GlassCard>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
          目的
        </h2>
        <p className="text-neutral-700 dark:text-neutral-200">
          最短で「お、できた！」を体験する。Cursor で「今日のやること」ページをゼロから生成する。
        </p>
      </GlassCard>

      <GlassCard>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
          やること
        </h2>
        <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-200">
          <li>空のフォルダを用意し、Cursor で開く。</li>
          <li>
            Cursor に何を作ってほしいか、<strong>自分で文章にまとめて</strong>
            伝える（完成文は渡さない。含めるとよい要素だけを記載する）。
          </li>
        </ul>
      </GlassCard>

      <GlassCard>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
          含めるとよい要素（教材に書く）
        </h2>
        <p className="text-neutral-700 dark:text-neutral-200 mb-2">
          Bento Grid・グラスモーフィズム・今日のやることリスト・チェックで取り消し線・ダークモード切替・localStorage
          で保存・サンプルタスク 2〜3 件・ファイルは HTML / CSS / JS
          に分ける・日本語・デスクトップ想定。
        </p>
      </GlassCard>

      <GlassCard>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
          達成条件
        </h2>
        <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-200">
          <li>ブラウザで開いて表示できる。</li>
          <li>チェック・テーマ切替が動く。</li>
          <li>リロード後もタスクが残る。</li>
        </ul>
      </GlassCard>

      <GlassCard>
        <p className="text-neutral-700 dark:text-neutral-200">
          <strong>次のステップ：</strong>
          できたら「GitHub」タブの手順を実行する（必須）。
        </p>
      </GlassCard>
    </section>
  )
}
