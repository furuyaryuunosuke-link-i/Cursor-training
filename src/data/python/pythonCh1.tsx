import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { PythonChapter } from './types'
import { step } from './types'

export const PYTHON_CHAPTER_1: PythonChapter = {
  id: 'py-ch1',
  title: '第1章：環境と実行',
  steps: [
    step(
      '1-1',
      'Python が動くか確認する',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="terminal">ターミナル</GlossaryTerm>を開き、
          <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">python --version</code> または
          <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">py --version</code> を実行し、
          <GlossaryTerm name="python">Python</GlossaryTerm> がインストールされているか確認します。バージョン番号が表示されれば OK です。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          スクリプトを実行するには、まず <GlossaryTerm name="python">Python</GlossaryTerm> が入っているか確認する必要があります。Windows では <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">py</code> コマンドを使うことが多いです。
        </p>
      </div>,
      {
        samplePrompt: `Windows の PowerShell で、Python がインストールされているか確認するコマンドを教えてください。インストールされていない場合の簡単な案内も知りたいです。`,
      }
    ),
    step(
      '1-2',
      'スクリプトを書いて実行する',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="textFile">テキストファイル</GlossaryTerm>に <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">print("Hello")</code> と書いて <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">hello.py</code> として保存します。
          <GlossaryTerm name="terminal">ターミナル</GlossaryTerm>でそのフォルダに移動し、
          <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">python hello.py</code> で実行します。画面に Hello と表示されれば成功です。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          「ファイルに書く → コマンドで実行する」という流れが、<GlossaryTerm name="python">Python</GlossaryTerm> で<GlossaryTerm name="script">スクリプト</GlossaryTerm>を動かす基本です。Cursor でコードを書いてもらい、この手順で実行できるようにします。
        </p>
      </div>,
      {
        samplePrompt: `Python で「Hello, Python」と表示するだけのスクリプトを書いてください。ファイル名は hello.py で、ターミナルから python hello.py で実行する想定です。`,
      }
    ),
    step(
      '1-3',
      'エラーが出たときの見方',
      <div className="space-y-4">
        <p>
          意図的に <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">print("test"</code> のように括弧を閉じ忘れて実行すると、エラーメッセージが出ます。どの行で何が問題か（SyntaxError など）が表示されるので、その行番号とメッセージを Cursor に貼って「直して」と聞くと修正案が出ます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          Cursor が生成した<GlossaryTerm name="code">コード</GlossaryTerm>でもエラーになることはあります。エラーメッセージを読んで Cursor に伝えられると、自分で直しやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `Python で「SyntaxError: invalid syntax」や「NameError: name 'xxx' is not defined」が出たとき、何を確認すればよいか教えてください。エラーメッセージの見方のコツも知りたいです。`,
      }
    ),
  ],
}
