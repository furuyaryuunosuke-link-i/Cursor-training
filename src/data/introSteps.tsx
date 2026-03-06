import { type ReactNode } from 'react'
import { GlossaryTerm } from '../components/GlossaryTerm'

const code = (s: string) => (
  <code className="bg-white/20 dark:bg-black/20 px-1.5 py-0.5 rounded text-sm font-mono">
    {s}
  </code>
)

export type IntroStep = {
  id: string
  title: string
  content: ReactNode
  /** ステップ用のスクリーンショット（public からのパス例: /screenshots/xxx.png） */
  imageSrc?: string
  imageAlt?: string
  /** 2枚目以降のスクリーンショットが必要な場合に使用 */
  imageSecondarySrc?: string
  imageSecondaryAlt?: string
  /** Cursor にそのまま貼れるサンプルプロンプト（1つまたは複数） */
  samplePrompt?: string | string[]
}

export type IntroChapter = {
  id: string
  title: string
  steps: IntroStep[]
}

const step = (
  id: string,
  title: string,
  content: ReactNode,
  opts?: {
    imageSrc?: string
    imageAlt?: string
    imageSecondarySrc?: string
    imageSecondaryAlt?: string
    samplePrompt?: string | string[]
  }
): IntroStep => ({
  id,
  title,
  content,
  ...opts,
})

export const INTRO_CHAPTERS: IntroChapter[] = [
  {
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
  },
  {
    id: 'ch2',
    title: '第2章：HTMLを書こう',
    steps: [
      step(
        '2-1',
        'ファイル構成を理解する',
        <div className="space-y-4">
          <p>
            一般的な静的サイトでは、<strong><GlossaryTerm name="indexHtml">index.html</GlossaryTerm></strong> が入口になります。<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>はこのファイルを開いて表示します。
          </p>
          <p>
            見た目は <strong><GlossaryTerm name="css">CSS</GlossaryTerm></strong>、動き（チェックや保存など）は{' '}
            <strong><GlossaryTerm name="javascript">JavaScript</GlossaryTerm></strong> で書きます。ファイルは <GlossaryTerm name="html">HTML</GlossaryTerm> / <GlossaryTerm name="css">CSS</GlossaryTerm> / <GlossaryTerm name="javascript">JS</GlossaryTerm>
            に分けておくと、あとから修正しやすくなります。
          </p>
          <p>
            <GlossaryTerm name="cursor">Cursor</GlossaryTerm> に「index.html と CSS、<GlossaryTerm name="javascript">JS</GlossaryTerm> を分けて作って」と伝えれば、適切なファイル構成で生成してくれます。どのファイルを編集すればどこが変わるか、少しずつ慣れていきましょう。
          </p>
        </div>,
        {
          imageSrc: '/screenshots/js,html,css分割.png',
          imageAlt: 'プロジェクト内の HTML / CSS / JS のファイル分割例。index.html、styles.css、app.js が並ぶ。',
        }
      ),
      step(
        '2-2',
        '骨組みのHTMLを生成する',
        <div className="space-y-4">
          <p>
            <GlossaryTerm name="composer">Composer</GlossaryTerm> や<GlossaryTerm name="chat">チャット</GlossaryTerm>で「今日のやることページの <GlossaryTerm name="indexHtml">index.html</GlossaryTerm> を作って」と指示し、AI
            に骨組みの <GlossaryTerm name="html">HTML</GlossaryTerm> を生成してもらいます。
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            ここからは、<strong><GlossaryTerm name="agentMode">Agent モード</GlossaryTerm>に切り替えて</strong>、実際に HTML / CSS / JS
            のファイルを生成してもらいます。
          </p>
          <p>
            生成されたファイルはプロジェクトフォルダ内に保存されます。<GlossaryTerm name="editor">エディタ</GlossaryTerm>左のファイル一覧で
            <code className="bg-white/20 dark:bg-black/20 px-1 rounded text-sm">index.html</code>{' '}
            を選んで中身を確認できます。
          </p>
        </div>,
        {
          imageSrc: '/screenshots/Cursor2-2指示.png',
          imageAlt: 'Agentモードで骨組み HTML の生成を依頼している Cursor の画面。',
          samplePrompt: `さきほど決めた「今日のやることページ」の要件に沿って、最低限表示できる骨組みの HTML を作ってください。

条件:
- ファイルは index.html / styles.css / app.js に分割する
- index.html には Bento っぽくカードが並ぶレイアウトの枠だけ用意する（細かい見た目はあとで調整）
- 今日のやることリストのエリアと、テーマ切替ボタンのエリアだけ分かるようにしておく
- scripts と styles の読み込みタグも含めてください。`,
        }
      ),
      step(
        '2-3',
        '中身を追加・編集する',
        <div className="space-y-4">
          <p>
            骨組みができたら、「ここに〇〇というテキストを追加して」「リストを 3 件にして」など、AI
            に指示して中身を追加・編集していきます。
          </p>
          <p>
            編集したいファイルを開いた状態で、該当箇所を選択してから指示を出すと、変更が適用されやすくなります。
          </p>
        </div>,
        {
          imageSrc: '/screenshots/2-3一枚目.png',
          imageAlt: '今日のやることリストの見出しテキストを変更し、ブラウザ側の表示も変わっている様子。',
        }
      ),
      step(
        '2-4',
        '生成されたコードを少し直す',
        <div className="space-y-4">
          <p>
            AI が作った<GlossaryTerm name="code">コード</GlossaryTerm>の<strong>「ここを変えるとこうなる」</strong>を体験してみましょう。
          </p>
          <ul>
            <li><GlossaryTerm name="html">HTML</GlossaryTerm> の文言を自分で書き換えて保存し、<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>で表示が変わることを確認する。</li>
            <li>class 名を変えて、スタイルが変わる様子を見る（第3章で <GlossaryTerm name="css">CSS</GlossaryTerm> を触るとより分かります）。</li>
          </ul>
          <p>
            <GlossaryTerm name="code">コード</GlossaryTerm>を編集したら、<strong>Ctrl+S で保存</strong>し、<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>をリロードして変化を確認してみてください。
          </p>
          <p><GlossaryTerm name="code">コード</GlossaryTerm>を「読む・直す」の第一歩として、少しずつ触ってみてください。</p>
        </div>,
        {
          imageSrc: '/screenshots/step-2-4-1.png',
          imageAlt: 'HTML の見出しテキストを変更しているエディタ画面。',
          imageSecondarySrc: '/screenshots/step-2-4-2.png',
          imageSecondaryAlt: '変更後の見出しがブラウザに反映されている様子。',
        }
      ),
      step(
        '2-5',
        'ブラウザで確認する',
        <div className="space-y-4">
          <p>
            編集した <code className="bg-white/20 dark:bg-black/20 px-1 rounded text-sm">index.html</code>{' '}
            を<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>で開いて表示を確認します。
          </p>
          <ul>
            <li>
              <strong>file:// で開く</strong>：エクスプローラーで index.html
              をダブルクリックするか、<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>のアドレス欄にファイルのパスを入力する。
            </li>
            <li>
              <strong><GlossaryTerm name="liveServer">Live Server</GlossaryTerm> など</strong>：<GlossaryTerm name="cursor">Cursor</GlossaryTerm> / <GlossaryTerm name="vsCode">VS Code</GlossaryTerm> の拡張機能「Live
              Server」を使うと、保存のたびに自動でリロードされ、確認しやすくなります。
            </li>
          </ul>
          <p>表示を変えたら保存 → <GlossaryTerm name="browser">ブラウザ</GlossaryTerm>でリロード、の流れで確認してください。</p>
        </div>,
        {
          imageSrc: '/screenshots/2-3一枚目.png',
          imageAlt: '今日のやることリストの見出しテキストを変更し、ブラウザ側の表示も変わっている様子。',
        }
      ),
      step(
        '2-6',
        'うまくいかないときの確認',
        <div className="space-y-4">
          <p>表示されない・真っ白・エラーが出るときは、次を確認しましょう。</p>
          <ul>
            <li>ファイルを保存したか（Ctrl+S など）。</li>
            <li><GlossaryTerm name="browser">ブラウザ</GlossaryTerm>をリロードしたか（F5 や Ctrl+R）。</li>
            <li>開いているファイルのパスは正しいか（<GlossaryTerm name="indexHtml">index.html</GlossaryTerm> を開いているか）。</li>
            <li>
              <GlossaryTerm name="devTools">開発者ツール</GlossaryTerm>のコンソール（F12 → Console）にエラーが出ていないか。出ている場合はそのメッセージを
              AI に貼って対処法を聞くこともできます。
            </li>
          </ul>
        </div>,
        {
          samplePrompt: `画面が真っ白で何も表示されません。いま開いているフォルダ内の index.html / styles.css / app.js を順番に読んで、原因になりそうな箇所を一緒に探してほしいです。

このあとブラウザのコンソールエラーも貼るので、その内容も踏まえて直し方を提案してください。`,
        }
      ),
    ],
  },
  {
    id: 'ch3',
    title: '第3章：デザインを調整しよう',
    steps: [
      step(
        '3-1',
        '見た目を整える（CSS）',
        <div className="space-y-4">
          <p>
            <strong><GlossaryTerm name="css">CSS</GlossaryTerm></strong> は、色・フォント・余白・レイアウトなど「見た目」を決めるための言語です。
          </p>
          <p>
            「背景を暗くして」「カードに角丸と影をつけて」など、やりたいことを文章で
            AI に伝えると、<GlossaryTerm name="css">CSS</GlossaryTerm> を提案してくれます。別ファイル（例：style.css）に書くか、<GlossaryTerm name="html">HTML</GlossaryTerm>
            内の style に書くかも指示で指定できます。
          </p>
        </div>,
        {
          imageSrc: '/screenshots/3-1CSS.png',
          imageAlt: 'CSS でカードレイアウトとスタイルを調整しているエディタ画面とブラウザ表示の例。',
          samplePrompt: `既にある styles.css をベースに、Bento Grid とグラスモーフィズムっぽい見た目に整えてください。

条件:
- 背景は暗めで、カードは半透明＋ぼかしでガラスっぽく
- 角丸と薄いシャドウを付けて、カード同士の余白も調整
- テキストが読みにくくならないようにコントラストを保つ
- 変更は styles.css に対する差分で提案してください。`,
        }
      ),
      step(
        '3-2',
        'レイアウトを変える',
        <div className="space-y-4">
          <p>
            <GlossaryTerm name="bentoGrid">Bento Grid</GlossaryTerm>・カード型のレイアウト・<GlossaryTerm name="glassmorphism">グラスモーフィズム</GlossaryTerm>風の見た目などは、「含めるとよい要素」として
            AI に伝えておくと、それに合わせたコードを生成してくれます。
          </p>
          <p>
            例：「<GlossaryTerm name="bentoGrid">Bento Grid</GlossaryTerm> でカードを並べて」「<GlossaryTerm name="glassmorphism">グラスモーフィズム</GlossaryTerm>でガラスっぽいパネルにして」と指示してみましょう。
          </p>
        </div>
      ),
      step(
        '3-3',
        '動きとテーマを足す',
        <div className="space-y-4">
          <p>
            チェックボックスでタスクに取り消し線を付けたり、ダークモード切替や <GlossaryTerm name="localStorage">localStorage</GlossaryTerm>
            での保存は、<strong><GlossaryTerm name="javascript">JavaScript</GlossaryTerm></strong> で実装します。
          </p>
          <p>
            「チェックしたら取り消し線」「テーマ切替ボタンでライト/ダーク」「リロードしてもタスクが残るように
            <GlossaryTerm name="localStorage">localStorage</GlossaryTerm> で保存」など、やりたいことをそのまま AI に伝えれば、コード例を出してくれます。
          </p>
        </div>,
        {
          imageSrc: '/screenshots/3-3JS.png',
          imageAlt: 'チェックボックスやテーマ切替などの挙動を JavaScript で実装した画面の例。',
          samplePrompt: `app.js に、次の挙動を追加・整理してください。

- チェックボックスをオンにしたタスクには取り消し線を付ける
- テーマ切替ボタンでライト/ダークを切り替える（body などにクラスを付け替え）
- タスク一覧とテーマ設定を localStorage に保存し、ページをリロードしても復元する

既存のコードを読んだうえで、足りない部分を追記・整理する形で実装してほしいです。`,
        }
      ),
      step(
        '3-4',
        '達成条件を自分で確認する',
        <div className="space-y-4">
          <p>入門の達成条件を、自分でいちど確認しましょう。</p>
          <ul>
            <li><GlossaryTerm name="browser">ブラウザ</GlossaryTerm>で開いて表示できるか。</li>
            <li>チェック・テーマ切替が動くか。</li>
            <li>リロード後もタスクが残るか。</li>
          </ul>
          <p>
            すべて満たせたら、次の第4章「<GlossaryTerm name="github">GitHub</GlossaryTerm> にアップロードしよう」に進みます。
          </p>
        </div>
      ),
    ],
  },
  {
    id: 'ch4',
    title: '第4章：GitHubにアップロードしよう',
    steps: [
      step(
        '4-1',
        'GitHubの準備',
        <div className="space-y-4">
          <p>
            <GlossaryTerm name="github">GitHub</GlossaryTerm> のアカウントを持っていない場合は作成し、
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-dotted underline-offset-2"
            >
              ログインページ（https://github.com/）
            </a>
            にアクセスしてログインします。
          </p>
          <p>
            画面上で「New repository」から新しいリポジトリを作成します。リポジトリ名は任意です。<GlossaryTerm name="readme">README</GlossaryTerm>
            や .gitignore は、既にローカルにファイルがある場合は追加しなくて構いません。
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            作成後、リポジトリの URL（例：https://github.com/your-username/your-repo.git）を控えておきます。次のステップで使います。
          </p>
        </div>,
        {
          imageSrc: '/screenshots/4-1.png',
          imageAlt: 'GitHub の Repositories 画面で、新しいリポジトリ作成ボタンが表示されている様子。',
        }
      ),
      step(
        '4-2',
        'ターミナルでGitを動かす',
        <div className="space-y-4">
          <p>プロジェクトフォルダで<GlossaryTerm name="terminal">ターミナル</GlossaryTerm>を開きます。<GlossaryTerm name="cursor">Cursor</GlossaryTerm> の<GlossaryTerm name="terminal">ターミナル</GlossaryTerm>でも、PowerShell やコマンドプロンプトでもかまいません。</p>
          <ol>
            <li>
              <strong>初回のみ：<GlossaryTerm name="git">Git</GlossaryTerm> を初期化</strong>
              <br />
              {code('git init')}
            </li>
            <li>
              <strong>リモートを追加</strong>（URL は自分のリポジトリに置き換える）
              <br />
              {code('git remote add origin https://github.com/your-username/your-repo.git')}
            </li>
            <li>
              <strong>全ファイルをステージ</strong>
              <br />
              {code('git add .')}
            </li>
            <li>
              <strong>コミット</strong>
              <br />
              {code('git commit -m "Initial commit: 今日のやることページ"')}
            </li>
          </ol>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            <GlossaryTerm name="github">GitHub</GlossaryTerm> へのログインを求められたら、<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>または認証情報でログインしてください。
          </p>
        </div>,
        {
          samplePrompt: `いま開いているフォルダを、新しく作った GitHub リポジトリに push したいです。PowerShell で実行することを想定して、git init から最初の push までの手順とコマンドを教えてください。

前提:
- まだ Git の初期化はしていないか、よく分かりません。
- GitHub 上には空のリポジトリ（<GlossaryTerm name="readme">README</GlossaryTerm> などなし）を作ってあります。
- ブランチ名は main を使いたいです。`,
        }
      ),
      step(
        '4-3',
        'プッシュと公開',
        <div className="space-y-4">
          <p>main ブランチでプッシュします。</p>
          <ol>
            <li>
              {code('git branch -M main')}
            </li>
            <li>
              {code('git push -u origin main')}
            </li>
          </ol>
          <p>
            プッシュが成功すると、<GlossaryTerm name="github">GitHub</GlossaryTerm> のリポジトリページにファイルが反映されます。
          </p>
          <h3>任意：<GlossaryTerm name="githubPages">GitHub Pages</GlossaryTerm> で公開</h3>
          <p className="text-sm">
            リポジトリの Settings → Pages から、Source を「Deploy from a branch」にし、branch を
            main、フォルダを / (root) または /docs にすると、静的サイトが URL で公開されます。
          </p>
        </div>,
        {
          samplePrompt: `git push や GitHub Pages の設定でエラーが出たときに、どう調べればよいか教えてください。

このあと実際に<GlossaryTerm name="terminal">ターミナル</GlossaryTerm>のエラー文や <GlossaryTerm name="github">GitHub</GlossaryTerm> のスクリーンショットを貼るので、その内容をもとに原因と対処法を一緒に整理してほしいです。`,
        }
      ),
      step(
        '4-4',
        '入門クリア！おつかれさまでした',
        <div className="space-y-4">
          <p>
            ここまでで、<GlossaryTerm name="cursor">Cursor</GlossaryTerm> を使ってシンプルなページを作り、
            見た目を整え、<GlossaryTerm name="github">GitHub</GlossaryTerm> にプッシュするところまで到達しました。
          </p>
          <p>
            もしまだうまくいっていない箇所があれば、気になっている画面のスクリーンショットやエラーメッセージを
            AI に貼り付けて相談してみてください。入門の各ステップに戻って、分からないところだけやり直してもOKです。
          </p>
          <p>
            ここから先は、今日のやることリストを自分のチーム向けにアレンジしたり、別のページを作ってみたりと、
            自分の業務に近い形に広げていきましょう。
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            「一覧に戻る」ボタンから、気になる章・ステップを復習できます。
          </p>
        </div>
      ),
    ],
  },
]

/** 全ステップIDを章順・ステップ順で返す */
export function getAllIntroStepIds(): string[] {
  const ids: string[] = []
  for (const ch of INTRO_CHAPTERS) {
    for (const s of ch.steps) ids.push(s.id)
  }
  return ids
}

/** stepId からステップと章タイトルを取得 */
export function getIntroStepById(stepId: string): {
  chapterTitle: string
  step: IntroStep
} | null {
  for (const ch of INTRO_CHAPTERS) {
    const step = ch.steps.find((s) => s.id === stepId)
    if (step) return { chapterTitle: ch.title, step }
  }
  return null
}

/** 前後のステップID。ない場合は null */
export function getIntroPrevNext(stepId: string): {
  prev: string | null
  next: string | null
} {
  const ids = getAllIntroStepIds()
  const i = ids.indexOf(stepId)
  if (i < 0) return { prev: null, next: null }
  return {
    prev: i > 0 ? ids[i - 1]! : null,
    next: i < ids.length - 1 ? ids[i + 1]! : null,
  }
}

export function isValidIntroStepId(stepId: string): boolean {
  return getAllIntroStepIds().includes(stepId)
}
