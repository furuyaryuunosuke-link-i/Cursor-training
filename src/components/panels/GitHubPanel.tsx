import { GlassCard } from '../GlassCard'
import { GlossaryTerm } from '../GlossaryTerm'

export function GitHubPanel() {
  return (
    <section
      id="panel-github"
      role="tabpanel"
      aria-labelledby="tab-github"
      className="space-y-6"
    >
      <GlassCard>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
          <GlossaryTerm name="github">GitHub</GlossaryTerm> に上げる（必須ステップ）
        </h2>
        <p className="text-neutral-700 dark:text-neutral-200 mb-4">
          入門で作ったプロジェクトを <GlossaryTerm name="github">GitHub</GlossaryTerm> にプッシュする手順です。リポジトリ名・URL
          は自分のものに置き換えてください（例: your-username/your-repo）。
        </p>

        <ol className="list-decimal list-inside space-y-3 text-neutral-700 dark:text-neutral-200">
          <li>
            <strong><GlossaryTerm name="github">GitHub</GlossaryTerm> でリポジトリを作成</strong>
            <br />
            画面上で「New repository」から作成。<GlossaryTerm name="readme">README</GlossaryTerm> や .gitignore
            は既にローカルにある場合は追加しなくてよい。
          </li>
          <li>
            <strong>プロジェクトフォルダで<GlossaryTerm name="terminal">ターミナル</GlossaryTerm>を開く</strong>
            <br />
            エクスプローラーでフォルダを開き、そのフォルダで PowerShell
            またはコマンドプロンプトを開く。または <GlossaryTerm name="cursor">Cursor</GlossaryTerm> の<GlossaryTerm name="terminal">ターミナル</GlossaryTerm>で
            <code className="bg-white/20 dark:bg-black/20 px-1 rounded text-sm">
              cd
            </code>{' '}
            してそのフォルダに移動する。
          </li>
          <li>
            <strong>初回のみ：<GlossaryTerm name="git">Git</GlossaryTerm> を初期化</strong>
            <br />
            <code className="bg-white/20 dark:bg-black/20 px-1 rounded text-sm block mt-1">
              git init
            </code>
          </li>
          <li>
            <strong>リモートを追加</strong>
            <br />
            <code className="bg-white/20 dark:bg-black/20 px-1 rounded text-sm block mt-1">
              git remote add origin
              https://github.com/your-username/your-repo.git
            </code>
          </li>
          <li>
            <strong>全ファイルをステージ</strong>
            <br />
            <code className="bg-white/20 dark:bg-black/20 px-1 rounded text-sm block mt-1">
              git add .
            </code>
          </li>
          <li>
            <strong>コミット</strong>
            <br />
            <code className="bg-white/20 dark:bg-black/20 px-1 rounded text-sm block mt-1">
              git commit -m "Initial commit: 今日のやることページ"
            </code>
          </li>
          <li>
            <strong>main ブランチでプッシュ</strong>
            <br />
            <code className="bg-white/20 dark:bg-black/20 px-1 rounded text-sm block mt-1">
              git branch -M main
            </code>
            <br />
            <code className="bg-white/20 dark:bg-black/20 px-1 rounded text-sm block mt-1">
              git push -u origin main
            </code>
          </li>
        </ol>

        <p className="text-neutral-500 dark:text-neutral-400 mt-4 text-sm">
          GitHub へのログイン（<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>または認証情報）を求められたら、指示に従ってください。
        </p>
      </GlassCard>

      <GlassCard>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
          任意：<GlossaryTerm name="githubPages">GitHub Pages</GlossaryTerm> で公開
        </h2>
        <p className="text-neutral-700 dark:text-neutral-200 text-sm">
          リポジトリの Settings → Pages から、Source を「Deploy from a
          branch」にし、branch を main、フォルダを / (root) または
          /docs にすると、静的サイトが URL で公開されます。
        </p>
      </GlassCard>
    </section>
  )
}
