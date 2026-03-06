import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { NodeChapter } from './types'
import { step } from './types'

export const NODE_CHAPTER_2: NodeChapter = {
  id: 'node-ch2',
  title: '第2章：基本文法',
  steps: [
    step(
      '2-1',
      '変数と型を使ってみる',
      <div className="space-y-4">
        <p>
          Cursor に「Node.js で変数に数や文字列を代入して console.log で表示する例を書いて」と聞き、出てきた<GlossaryTerm name="code">コード</GlossaryTerm>を実行してみます。<code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">const</code> や <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">let</code> の違い、数と文字列の扱いのイメージを掴みます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          データを入れておく「変数」が分かると、Cursor が書いたコードの「どこを変えればよいか」が分かりやすくなります。JavaScript は型を明示しないので、代入する値の種類を意識しておくと読みやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `Node.js で、変数に名前と年齢を代入して「〇〇さんは〇〇歳です」と表示する短いスクリプトを書いてください。const か let を使ってください。`,
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
        samplePrompt: `Node.js で、変数 score が 60 以上なら「合格」、60 未満なら「不合格」と表示するスクリプトを書いてください。score は 70 で試したいです。`,
      }
    ),
    step(
      '2-3',
      'ループと関数を書く',
      <div className="space-y-4">
        <p>
          配列を for や forEach でひとつずつ処理する例、および「挨拶文を返す<GlossaryTerm name="function">関数</GlossaryTerm>」を Cursor に書いてもらい、定義と呼び出しの形を確認します。繰り返しと<GlossaryTerm name="function">関数</GlossaryTerm>が使えると、ファイル処理や API 呼び出しの土台になります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          ファイルの行を順に読む・<GlossaryTerm name="json">JSON</GlossaryTerm> の要素を処理するなど、繰り返しと<GlossaryTerm name="function">関数</GlossaryTerm>は<GlossaryTerm name="automation">自動化</GlossaryTerm>の中心です。形を押さえておくと Cursor の出力を理解しやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `Node.js で、配列 ["りんご", "バナナ", "みかん"] の要素を 1 行ずつ表示するスクリプトと、名前を受け取って「こんにちは、〇〇さん」と返す関数の例を書いてください。`,
      }
    ),
  ],
}
