import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { PythonChapter } from './types'
import { step } from './types'

export const PYTHON_CHAPTER_3: PythonChapter = {
  id: 'py-ch3',
  title: '第3章：ファイルとCSV',
  steps: [
    step(
      '3-1',
      'テキストファイルを読む',
      <div className="space-y-4">
        <p>
          Cursor に「Python で<GlossaryTerm name="textFile">テキストファイル</GlossaryTerm>を 1 行ずつ読み込んで表示する」と頼み、出てきた<GlossaryTerm name="code">コード</GlossaryTerm>を実行します。with open(...) や for ループで読む形を確認し、ファイルパスを自分用に変えて動かしてみます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          ログや設定ファイルを読む・中身を確認する処理は、<GlossaryTerm name="automation">自動化</GlossaryTerm>でよく使います。ファイルの読み方の基本を押さえておくと、Cursor に「このファイルを読んで〇〇して」と伝えやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `Python で、カレントディレクトリの sample.txt を 1 行ずつ読み込んで画面に表示するスクリプトを書いてください。ファイルが存在しないときのエラー処理も簡単に入れてください。`,
      }
    ),
    step(
      '3-2',
      'テキストファイルに書く',
      <div className="space-y-4">
        <p>
          「Python で文字列をファイルに書き込む」例を Cursor に聞きます。open(..., "w") で書き込みモードにし、<GlossaryTerm name="write">write</GlossaryTerm> や <GlossaryTerm name="writelines">writelines</GlossaryTerm> で保存する流れを確認します。既存ファイルは上書きされることに注意します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          集計結果を保存する・ログを出力するなど、ファイルへ書き出す処理もよく必要になります。読む・書くの両方ができると、できる<GlossaryTerm name="automation">自動化</GlossaryTerm>の幅が広がります。
        </p>
      </div>,
      {
        samplePrompt: `Python で、リスト ["1行目", "2行目", "3行目"] の内容を 1 行ずつ output.txt に書き込むスクリプトを書いてください。`,
      }
    ),
    step(
      '3-3',
      'CSV を読んで簡単に集計する',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="csv">CSV</GlossaryTerm> ファイルを読み、csv モジュールや <GlossaryTerm name="pandas">pandas</GlossaryTerm> の read_csv で表形式として扱う例を Cursor に頼みます。列を指定して合計や件数を出すなど、簡単な集計ができるようにします。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          顧客リスト・売上データなど、実務では<GlossaryTerm name="csv">CSV</GlossaryTerm>がよく使われます。読み方と簡単な集計ができると、レポート下準備などの<GlossaryTerm name="automation">自動化</GlossaryTerm>に直結します。
        </p>
      </div>,
      {
        samplePrompt: `Python で、data.csv を読み込んで 2 列目の数値の合計を表示するスクリプトを書いてください。ヘッダー行がある場合はスキップする想定です。標準ライブラリの csv モジュールを使ってください。`,
      }
    ),
  ],
}
