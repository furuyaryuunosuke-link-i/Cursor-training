import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { NodeChapter } from './types'
import { step } from './types'

export const NODE_CHAPTER_4: NodeChapter = {
  id: 'node-ch4',
  title: '第4章：HTTP と API',
  steps: [
    step(
      '4-1',
      'fetch で GET する',
      <div className="space-y-4">
        <p>
          Node.js 18 以降では標準で <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">fetch</code> が使えます。Cursor に「Node.js で fetch を使って URL に GET リクエストを送り、レスポンスのテキストを表示する」と頼み、出てきた<GlossaryTerm name="code">コード</GlossaryTerm>を実行します。古い Node の場合は <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">https</code> モジュールや axios の例を聞いてもよいです。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          外部の<GlossaryTerm name="api">API</GlossaryTerm>や Web ページからデータを取得する処理は、<GlossaryTerm name="automation">自動化</GlossaryTerm>でよく使います。<GlossaryTerm name="get">GET</GlossaryTerm> ができると、情報取得の自動化の第一歩になります。
        </p>
      </div>,
      {
        samplePrompt: `Node.js で、fetch を使って https://example.com に GET リクエストを送り、ステータスコードとレスポンスの最初の 200 文字を表示するスクリプトを書いてください。async/await で書いてください。`,
      }
    ),
    step(
      '4-2',
      '取得した JSON を扱う',
      <div className="space-y-4">
        <p>
          「JSON を返す API の URL に GET して、Node.js でオブジェクトとして中身を表示する」例を Cursor に聞きます。<code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">response.json()</code> でオブジェクトになり、プロパティで値にアクセスできることを確認します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          多くの<GlossaryTerm name="api">API</GlossaryTerm>は<GlossaryTerm name="json">JSON</GlossaryTerm>でデータを返します。<GlossaryTerm name="json">JSON</GlossaryTerm>をオブジェクトとして扱えると、取得したデータを条件で絞ったり集計したりする<GlossaryTerm name="automation">自動化</GlossaryTerm>が書けるようになります。
        </p>
      </div>,
      {
        samplePrompt: `Node.js で、JSON を返す API の URL に fetch で GET し、レスポンスをパースして "name" プロパティの値を表示するスクリプトを書いてください。エラー時はメッセージを表示するようにしてください。`,
      }
    ),
  ],
}
