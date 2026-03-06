import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { PythonChapter } from './types'
import { step } from './types'

export const PYTHON_CHAPTER_2: PythonChapter = {
  id: 'py-ch2',
  title: '第2章：基本文法',
  steps: [
    step(
      '2-1',
      '変数と型を使ってみる',
      <div className="space-y-4">
        <p>
          Cursor に「Python で変数に数や文字列を代入して print で表示する例を書いて」と聞き、出てきた<GlossaryTerm name="code">コード</GlossaryTerm>を実行してみます。数（<GlossaryTerm name="intType">int</GlossaryTerm>）と文字列（<GlossaryTerm name="strType">str</GlossaryTerm>）の違いや、変数名の付け方のイメージを掴みます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          データを入れておく「変数」と、その種類（型）が分かると、Cursor が書いたコードの「どこを変えればよいか」が分かりやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `Python で、変数に名前と年齢を代入して「〇〇さんは〇〇歳です」と表示する短いスクリプトを書いてください。変数名は name と age でお願いします。`,
      }
    ),
    step(
      '2-2',
      'if で分岐を書く',
      <div className="space-y-4">
        <p>
          「条件によって表示を変える」処理を Cursor に頼みます。例：変数 score が 60 以上なら「合格」、そうでなければ「不合格」と表示する。<GlossaryTerm name="ifElse">if/else</GlossaryTerm> の形を確認し、自分で数値や条件を変えて動かしてみます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          実務の<GlossaryTerm name="automation">自動化</GlossaryTerm>では「〇〇のときだけ処理する」がよく出ます。if の書き方を知っておくと、生成されたコードを読んだり条件を変えたりしやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `Python で、変数 score が 60 以上なら「合格」、60 未満なら「不合格」と表示するスクリプトを書いてください。score は 70 で試したいです。`,
      }
    ),
    step(
      '2-3',
      'for でループを書く',
      <div className="space-y-4">
        <p>
          リスト（複数の値）を for でひとつずつ処理する例を Cursor に聞きます。例：<code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">items = ["A", "B", "C"]</code> をループしてそれぞれ表示する。ループの書き方と、リストの添え字のイメージを掴みます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          ファイルの行を順に読む・<GlossaryTerm name="csv">CSV</GlossaryTerm> の行を処理するなど、繰り返し処理は<GlossaryTerm name="automation">自動化</GlossaryTerm>の中心です。for に慣れておくと、Cursor の出力を理解しやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `Python で、リスト ["りんご", "バナナ", "みかん"] の要素を for ループで 1 行ずつ表示するスクリプトを書いてください。`,
      }
    ),
    step(
      '2-4',
      '関数を定義して呼び出す',
      <div className="space-y-4">
        <p>
          「挨拶文を返す関数」や「2 つの数を足して返す関数」を Cursor に書いてもらい、定義と呼び出しの形を確認します。<GlossaryTerm name="defKeyword">def</GlossaryTerm> の後に<GlossaryTerm name="function">関数</GlossaryTerm>名と引数、return で値を返す流れを押さえます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          同じ処理をまとめる「<GlossaryTerm name="function">関数</GlossaryTerm>」は、<GlossaryTerm name="code">コード</GlossaryTerm>を整理するときによく使います。Cursor が作るスクリプトにも関数が出てくるので、形だけでも分かっていると読みやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `Python で、名前を受け取って「こんにちは、〇〇さん」と返す関数 greet を定義し、その関数を呼んで結果を print する短いスクリプトを書いてください。`,
      }
    ),
  ],
}
