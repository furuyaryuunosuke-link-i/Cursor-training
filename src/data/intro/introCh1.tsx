import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { IntroChapter } from './types'
import { step } from './types'

export const INTRO_CHAPTER_1: IntroChapter = {
  id: 'ch1',
  title: '第1章：Cursorを触ってみよう',
  steps: [
    step(
      '1-1',
      '作るもののゴールを確認する',
      <div className="space-y-4">
        <p>
          この入門では、<strong>「今日のやること」ページ</strong>
          をゼロから作ります。最短で「お、できた！」を体験するのが目的です。
        </p>
        <h3>完成イメージ</h3>
        <p>
          <GlossaryTerm name="cursor">Cursor</GlossaryTerm> に指示を出して、<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>で開けるひとつのページができあがります。
          <GlossaryTerm name="bentoGrid">Bento Grid</GlossaryTerm>・
          <GlossaryTerm name="glassmorphism">グラスモーフィズム</GlossaryTerm>・タスクリスト・チェックで取り消し線・ダークモード切替・
          <GlossaryTerm name="localStorage">localStorage</GlossaryTerm> で保存、といった要素を含めていきます。
        </p>
        <h3>達成条件（入門が終わったとき）</h3>
        <ul>
          <li><GlossaryTerm name="browser">ブラウザ</GlossaryTerm>で開いて表示できる。</li>
          <li>チェック・テーマ切替が動く。</li>
          <li>リロード後もタスクが残る。</li>
        </ul>
      </div>
    ),
    step(
      '1-2',
      'Cursorとは・インストール',
      <div className="space-y-4">
        <p>
          <strong><GlossaryTerm name="cursor">Cursor</GlossaryTerm></strong>
          は、AI（大規模言語モデル）を組み込んだ<GlossaryTerm name="code">コード</GlossaryTerm>エディタです。<GlossaryTerm name="code">コード</GlossaryTerm>の生成・編集・説明を自然な言葉で指示できます。
        </p>
        <p>
          <a href="https://cursor.com/ja" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 underline hover:no-underline">
            公式サイト
          </a>
          からダウンロードし、インストールして起動してください。起動後は「フォルダを開く」で、これから作るプロジェクト用のフォルダを開けるようになります。
        </p>
      </div>,
      {
        imageSrc: '/screenshots/Cursorアイコン.png',
        imageAlt: 'Cursor のデスクトップアイコン。',
      }
    ),
    step(
      '1-3',
      'Cursorの画面の見方',
      <div className="space-y-4">
        <p><GlossaryTerm name="cursor">Cursor</GlossaryTerm> の主なエリアは次のとおりです。</p>
        <ul>
          <li>
            <strong><GlossaryTerm name="editor">エディタ</GlossaryTerm></strong>：<GlossaryTerm name="code">コード</GlossaryTerm>を書く・編集する中央のエリア。
          </li>
          <li>
            <strong><GlossaryTerm name="chat">チャット</GlossaryTerm> / <GlossaryTerm name="composer">Composer</GlossaryTerm></strong>
            ：AI に「〇〇を作って」「ここを直して」と指示を書く場所。ここに文章で伝えると、AI
            が<GlossaryTerm name="code">コード</GlossaryTerm>を提案してくれます。
          </li>
          <li>
            <strong><GlossaryTerm name="terminal">ターミナル</GlossaryTerm></strong>：コマンドを実行する場所。のちに <GlossaryTerm name="git">Git</GlossaryTerm>
            を使うときに使います。
          </li>
        </ul>
        <p>
          「何を作りたいか」は<GlossaryTerm name="chat">チャット</GlossaryTerm>や <GlossaryTerm name="composer">Composer</GlossaryTerm>
          に自分で文章にまとめて伝えます。完成したコードをそのまま渡すのではなく、「含めるとよい要素」だけを書くのがコツです。
        </p>
      </div>,
      {
        imageSrc: '/screenshots/Cursorホーム.png',
        imageAlt: 'Cursor のホーム画面。左にエクスプローラー、中央にショートカット、右にチャット、下にターミナル。',
      }
    ),
    step(
      '1-4',
      'プロジェクトフォルダを開く',
      <div className="space-y-4">
        <p>まず、これから作るプロジェクト用の<strong>空のフォルダ</strong>を用意します。</p>
        <ul>
          <li>エクスプローラーなどで、任意の場所に新しいフォルダを作成する。</li>
          <li><GlossaryTerm name="cursor">Cursor</GlossaryTerm> を開き、「ファイル」→「フォルダを開く」からそのフォルダを選ぶ。</li>
        </ul>
        <p>
          フォルダを開いた状態で、次のステップから「作りたいもの」を AI に伝えていきます。
        </p>
      </div>,
      {
        imageSrc: '/screenshots/CursorFileOpen.png',
        imageAlt: 'Cursor のファイルメニュー。「Open File」「Open Folder」の選択肢。',
      }
    ),
    step(
      '1-5',
      'AIに「作りたいもの」を伝える',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="cursor">Cursor</GlossaryTerm> の<GlossaryTerm name="chat">チャット</GlossaryTerm>や <GlossaryTerm name="composer">Composer</GlossaryTerm> に、<strong>自分で文章にまとめた要件</strong>
          を書いて伝えます。完成文（完成したコード）は渡さず、「含めるとよい要素」だけを書くようにしましょう。
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          このステップでは、<strong><GlossaryTerm name="cursor">Cursor</GlossaryTerm> を <GlossaryTerm name="askMode">Ask モード</GlossaryTerm>にして</strong>、まだコードは生成させません。要件の抜け漏れチェックや書き方の改善だけを AI に手伝ってもらいます。
        </p>
        <p className="font-medium text-neutral-800 dark:text-neutral-100">
          例：今日のやることページを作りたい。含めるとよい要素
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          <GlossaryTerm name="bentoGrid">Bento Grid</GlossaryTerm>・<GlossaryTerm name="glassmorphism">グラスモーフィズム</GlossaryTerm>・今日のやることリスト・チェックで取り消し線・ダークモード切替・<GlossaryTerm name="localStorage">localStorage</GlossaryTerm>
          で保存・サンプルタスク 2〜3 件・ファイルは <GlossaryTerm name="html">HTML</GlossaryTerm> / <GlossaryTerm name="css">CSS</GlossaryTerm> / <GlossaryTerm name="javascript">JS</GlossaryTerm>
          に分ける・日本語・デスクトップ想定。
        </p>
        <p>このように要素だけを列挙すると、AI が骨組みや<GlossaryTerm name="code">コード</GlossaryTerm>を提案してくれます。</p>
      </div>,
      {
        imageSrc: '/screenshots/Cursor1-5Ask.png',
        imageAlt: 'Askモードで要件レビューのプロンプトを入力している Cursor の画面。',
        samplePrompt: `今から「今日のやることページ」の要件を書きます。

このステップでは、コードは一切生成しないでください。
代わりに、次のことだけをお願いします。
- 要件として足りない観点があれば指摘する
- 曖昧な表現を、具体的な例に言い換える
- 要件を 5〜7 行程度に整理し直す

--- 要件（初版） ---
- Bento Grid・グラスモーフィズムガラスっぽい半透明・ぼかし効果を使ったデザインにしたい
- 今日のやることリスト（チェックで取り消し線になる）を表示したい
- ダークモード切替ボタンがほしい
- localStorage でタスクとテーマを保存し、リロードしても残るようにしたい
- サンプルタスクを 2〜3 件入れておきたい
- ファイルは index.html / styles.css / app.js に分割したい
- 表示は日本語・デスクトップ想定で作りたい`,
      }
    ),
  ],
}
