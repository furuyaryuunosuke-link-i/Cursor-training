import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { NodeChapter } from './types'
import { step } from './types'

export const NODE_CHAPTER_5: NodeChapter = {
  id: 'node-ch5',
  title: '第5章：実践課題',
  steps: [
    step(
      '5-1',
      'フォルダ内のファイル一覧を出す',
      <div className="space-y-4">
        <p>
          Cursor に「Node.js で fs と path を使って、指定したフォルダの中のファイル名を一覧表示するスクリプト」を頼みます。<code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">fs.readdirSync</code> などが出てくるので、実行して一覧が表示されることを確認します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          大量のファイルを扱う<GlossaryTerm name="automation">自動化</GlossaryTerm>では、まず「どのファイルがあるか」を取得することが多いです。一覧取得ができると、名前に応じた処理やフィルタに進みやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `Node.js の fs と path で、カレントディレクトリ内のファイルとフォルダ名を一覧表示するスクリプトを書いてください。拡張子が .json のファイルだけに絞るオプションも入れたいです。`,
      }
    ),
    step(
      '5-2',
      'JSON ファイルを読んで集計する',
      <div className="space-y-4">
        <p>
          「data.json のような<GlossaryTerm name="json">JSON</GlossaryTerm>ファイルを読み、あるキーで集計（合計・件数など）して、結果を別ファイルに書き出す」スクリプトを Cursor と一緒に作ります。中身の形は自分で決めて、プロンプトに含めて伝えます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          実務では「元データ（JSON や CSV）を読む → 集計する → レポート用に書き出す」という流れがよくあります。この一連の流れを Cursor と対話しながら組み立てられると、実践的な<GlossaryTerm name="automation">自動化</GlossaryTerm>に近づきます。
        </p>
      </div>,
      {
        samplePrompt: `Node.js で、data.json を読み込んで配列の要素数を数え、「件数: 〇〇」と result.txt に書き出すスクリプトを書いてください。fs と path を使い、エラー時はコンソールにメッセージを出してください。`,
      }
    ),
  ],
}
