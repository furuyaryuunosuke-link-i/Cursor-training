import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { NodeChapter } from './types'
import { step } from './types'

export const NODE_CHAPTER_3: NodeChapter = {
  id: 'node-ch3',
  title: '第3章：ファイルとモジュール',
  steps: [
    step(
      '3-1',
      'fs でファイルを読む・書く',
      <div className="space-y-4">
        <p>
          Cursor に「Node.js で fs を使ってテキストファイルを読み込んで表示する」と頼み、出てきた<GlossaryTerm name="code">コード</GlossaryTerm>を実行します。<code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">fs.readFileSync</code> や <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">fs.writeFileSync</code> の形を確認し、ファイルパスを自分用に変えて動かしてみます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          設定ファイルを読む・結果をファイルに書き出す処理は、<GlossaryTerm name="automation">自動化</GlossaryTerm>でよく使います。Node の標準<GlossaryTerm name="module">モジュール</GlossaryTerm> <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">fs</code> の使い方を押さえておくと、Cursor に「このファイルを読んで〇〇して」と伝えやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `Node.js の fs モジュールで、カレントディレクトリの sample.txt を読み込んで内容を表示するスクリプトを書いてください。UTF-8 で読み、ファイルが存在しないときのエラー処理も簡単に入れてください。`,
      }
    ),
    step(
      '3-2',
      'path でパスを扱う',
      <div className="space-y-4">
        <p>
          「Node.js で path モジュールを使って、フォルダとファイル名を結合する」例を Cursor に聞きます。<code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">path.join</code> や <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">__dirname</code> を使うと、OS によって違う区切り文字を気にせず<GlossaryTerm name="path">パス</GlossaryTerm>を扱えます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          スクリプトの場所から相対でファイルを指定することが多いです。<GlossaryTerm name="path">パス</GlossaryTerm>の結合を正しくしておくと、どこで実行しても動きやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `Node.js で、スクリプトと同じフォルダにある data フォルダ内の file.json のパスを path.join と __dirname で組み立てる例を書いてください。`,
      }
    ),
    step(
      '3-3',
      'require でモジュールを使う',
      <div className="space-y-4">
        <p>
          「Node.js で require を使って別ファイルの関数を読み込む」例を Cursor に頼みます。自分で <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">module.exports</code> を書くファイルと、それを <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">require</code> するファイルの 2 つに分ける形を確認します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          処理を<GlossaryTerm name="module">モジュール</GlossaryTerm>に分けておくと、Cursor が「このファイルを修正して」と提案しやすく、自分でも読みやすくなります。Node では require が基本なので、形だけでも押さえておきます。
        </p>
      </div>,
      {
        samplePrompt: `Node.js で、greet という関数を export した utils.js と、それを require して呼び出す index.js の 2 ファイルの最小例を書いてください。`,
      }
    ),
  ],
}
