import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { NodeChapter } from './types'
import { step } from './types'

export const NODE_CHAPTER_1: NodeChapter = {
  id: 'node-ch1',
  title: '第1章：環境と実行',
  steps: [
    step(
      '1-1',
      'Node.js が動くか確認する',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="terminal">ターミナル</GlossaryTerm>を開き、
          <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">node --version</code> を実行し、
          <GlossaryTerm name="node">Node.js</GlossaryTerm> がインストールされているか確認します。バージョン番号が表示されれば OK です。<GlossaryTerm name="npm">npm</GlossaryTerm> も <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">npm --version</code> で確認できます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          スクリプトを実行するには、まず <GlossaryTerm name="node">Node.js</GlossaryTerm> が入っているか確認する必要があります。<GlossaryTerm name="npm">npm</GlossaryTerm> はパッケージのインストールに使うので、あわせて確認しておきます。
        </p>
      </div>,
      {
        samplePrompt: `Windows の PowerShell で、Node.js がインストールされているか確認するコマンドを教えてください。npm の確認方法と、未インストールの場合の案内も知りたいです。`,
      }
    ),
    step(
      '1-2',
      'スクリプトを書いて実行する',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="textFile">テキストファイル</GlossaryTerm>に <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">console.log("Hello");</code> と書いて <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">index.js</code> として保存します。
          <GlossaryTerm name="terminal">ターミナル</GlossaryTerm>でそのフォルダに移動し、
          <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">node index.js</code> で実行します。画面に Hello と表示されれば成功です。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          「ファイルに書く → node で実行する」という流れが、<GlossaryTerm name="node">Node.js</GlossaryTerm> で<GlossaryTerm name="script">スクリプト</GlossaryTerm>を動かす基本です。Cursor でコードを書いてもらい、この手順で実行できるようにします。
        </p>
      </div>,
      {
        samplePrompt: `Node.js で「Hello, Node.js」と表示するだけのスクリプトを書いてください。ファイル名は index.js で、ターミナルから node index.js で実行する想定です。`,
      }
    ),
    step(
      '1-3',
      'エラーが出たときの見方',
      <div className="space-y-4">
        <p>
          意図的に <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">console.log("test"</code> のように括弧を閉じ忘れて実行すると、エラーメッセージが出ます。どの行で何が問題かが表示されるので、その行番号とメッセージを Cursor に貼って「直して」と聞くと修正案が出ます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          Cursor が生成した<GlossaryTerm name="code">コード</GlossaryTerm>でもエラーになることはあります。エラーメッセージを読んで Cursor に伝えられると、自分で直しやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `Node.js で「SyntaxError」や「ReferenceError」が出たとき、何を確認すればよいか教えてください。エラーメッセージの見方のコツも知りたいです。`,
      }
    ),
  ],
}
