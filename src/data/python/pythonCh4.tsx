import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { PythonChapter } from './types'
import { step } from './types'

export const PYTHON_CHAPTER_4: PythonChapter = {
  id: 'py-ch4',
  title: '第4章：簡単なAPI',
  steps: [
    step(
      '4-1',
      'requests で GET する',
      <div className="space-y-4">
        <p>
          Cursor に「Python で <GlossaryTerm name="requests">requests</GlossaryTerm> を使って URL に GET リクエストを送り、レスポンスのテキストを表示する」と頼みます。<GlossaryTerm name="pip">pip</GlossaryTerm> install requests が必要なこと、get() の戻り値の .text や .status_code を確認します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          外部の<GlossaryTerm name="api">API</GlossaryTerm>や Web ページからデータを取得する処理は、<GlossaryTerm name="automation">自動化</GlossaryTerm>でよく使います。<GlossaryTerm name="get">GET</GlossaryTerm> ができると、情報取得の自動化の第一歩になります。
        </p>
      </div>,
      {
        samplePrompt: `Python で、requests ライブラリを使って https://example.com に GET リクエストを送り、ステータスコードとレスポンスの最初の 200 文字を表示するスクリプトを書いてください。requests が未インストールの場合の pip コマンドも教えてください。`,
      }
    ),
    step(
      '4-2',
      '取得した JSON を扱う',
      <div className="space-y-4">
        <p>
          「JSON を返す API の URL に GET して、Python で辞書として中身を表示する」例を Cursor に聞きます。response.json() で辞書になり、キーで値にアクセスできることを確認します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          多くの<GlossaryTerm name="api">API</GlossaryTerm>は<GlossaryTerm name="json">JSON</GlossaryTerm>でデータを返します。<GlossaryTerm name="json">JSON</GlossaryTerm>を辞書として扱えると、取得したデータを条件で絞ったり集計したりする<GlossaryTerm name="automation">自動化</GlossaryTerm>が書けるようになります。
        </p>
      </div>,
      {
        samplePrompt: `Python で、https://api.example.com/data のような JSON を返す API に GET リクエストを送り、レスポンスを辞書に変換して "name" キーの値を表示するスクリプトを書いてください。エラー時はメッセージを表示するようにしてください。`,
      }
    ),
  ],
}
