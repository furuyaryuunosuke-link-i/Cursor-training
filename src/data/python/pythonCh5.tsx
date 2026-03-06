import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { PythonChapter } from './types'
import { step } from './types'

export const PYTHON_CHAPTER_5: PythonChapter = {
  id: 'py-ch5',
  title: '第5章：実践課題',
  steps: [
    step(
      '5-1',
      'フォルダ内のファイル一覧を出す',
      <div className="space-y-4">
        <p>
          Cursor に「指定したフォルダの中のファイル名を一覧表示する Python スクリプト」を頼みます。<GlossaryTerm name="osListdir">os.listdir</GlossaryTerm> や <GlossaryTerm name="pathlib">pathlib</GlossaryTerm> を使う例が出てくるので、実行して一覧が表示されることを確認します。必要なら「サブフォルダも含めて」と追加で聞きます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          大量のファイルを扱う<GlossaryTerm name="automation">自動化</GlossaryTerm>では、まず「どのファイルがあるか」を取得することが多いです。一覧取得ができると、名前に応じた処理やフィルタに進みやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `Python で、カレントディレクトリ内のファイルとフォルダ名を一覧表示するスクリプトを書いてください。<GlossaryTerm name="pathlib">pathlib</GlossaryTerm> か os モジュールを使って、拡張子が .csv のファイルだけに絞るオプションも入れたいです。`,
      }
    ),
    step(
      '5-2',
      'CSV を集計して結果をファイルに出す',
      <div className="space-y-4">
        <p>
          「sales.csv のような CSV を読み、ある列で集計（合計・件数など）して、結果を result.txt や別の CSV に書き出す」スクリプトを Cursor と一緒に作ります。列名や集計内容は自分で決めて、プロンプトに含めて伝えます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          実務では「元データ（<GlossaryTerm name="csv">CSV</GlossaryTerm>）を読む → 集計する → レポート用に書き出す」という流れがよくあります。この一連の流れを Cursor と対話しながら組み立てられると、実践的な<GlossaryTerm name="automation">自動化</GlossaryTerm>に近づきます。
        </p>
      </div>,
      {
        samplePrompt: `Python で、sales.csv を読み、2 列目を数値として合計し、「合計: 〇〇」と result.txt に書き出すスクリプトを書いてください。1 行目はヘッダーとしてスキップし、csv モジュールを使ってください。`,
      }
    ),
  ],
}
