import { type ReactNode } from 'react'
import { GlossaryTerm } from '../components/GlossaryTerm'

const code = (s: string) => (
  <code className="bg-white/20 dark:bg-black/20 px-1.5 py-0.5 rounded text-sm font-mono">
    {s}
  </code>
)

export type IntermediateStep = {
  id: string
  title: string
  content: ReactNode
  /** Cursor にそのまま貼れるサンプルプロンプト（1つまたは複数） */
  samplePrompt?: string | string[]
}

export type IntermediateChapter = {
  id: string
  title: string
  steps: IntermediateStep[]
}

const step = (
  id: string,
  title: string,
  content: ReactNode,
  opts?: {
    samplePrompt?: string | string[]
  }
): IntermediateStep => ({
  id,
  title,
  content,
  ...opts,
})

export const INTERMEDIATE_CHAPTERS: IntermediateChapter[] = [
  {
    id: 'mid-ch1',
    title: '第1章：Pythonで表データを触ってみよう',
    steps: [
      step(
        '1-1',
        'この章のゴールを言葉にする',
        <div className="space-y-4">
          <p>
            まずは、自分の担当業務のなかで
            <strong>「どんな表作業を<GlossaryTerm name="python">Python</GlossaryTerm>で置き換えたいか」</strong>を具体的に書き出します。
          </p>
          <ul>
            <li>候補者一覧のフィルタや重複チェック</li>
            <li>送客リストの整形・並び替え</li>
            <li>経営サマリ用の集計</li>
          </ul>
          <h3>なぜこのステップが必要か</h3>
          <p>
            目的がぼんやりしたまま
            <GlossaryTerm name="code">コード</GlossaryTerm>
            だけ学ぶと、ただの「お勉強」で終わってしまいます。
            <GlossaryTerm name="cursor">Cursor</GlossaryTerm> を使うときも、
            <strong>最初にゴールをはっきり言葉にしてAIに伝える</strong>
            ことで、「自分の仕事に直結するツールを作る」という方向性を保ちやすくなります。
          </p>
        </div>
      ),
      step(
        '1-2',
        'Pythonコードを書いて実行してみる',
        <div className="space-y-4">
          <p>
            Windows に <GlossaryTerm name="python">Python</GlossaryTerm> をインストールし、
            <a
              href="https://www.python.org/downloads/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 underline hover:no-underline"
            >
              公式サイト（https://www.python.org/downloads/）
            </a>
            からセットアップしたうえで、
            {code('print()')}
            だけのシンプルな
            <GlossaryTerm name="script">スクリプト</GlossaryTerm>
            を実行してみます。
          </p>
          <h3>なぜこのステップが必要か</h3>
          <p>
            「<GlossaryTerm name="python">Python</GlossaryTerm> を動かしたことがない」という心理的ハードルを下げるのが目的です。
            ここで
            <strong>「<GlossaryTerm name="script">スクリプト</GlossaryTerm>が1本動く」</strong>
            体験をしておくと、後の章でファイル操作や自動化の
            <GlossaryTerm name="code">コード</GlossaryTerm>
            を書いたときも「この中身が実行されている」とイメージしやすくなります。
          </p>
        </div>,
        {
          samplePrompt: `Windows に Python をインストールして、hello.py というファイルで次のコードを動かしたいです。

print(\"Hello, Python!\"）

インストール方法と、コマンドプロンプトやターミナルでこのファイルを実行する手順を、初心者向けに順番に教えてください。`,
        }
      ),
      step(
        '1-3',
        '辞書とリストで「候補者一覧」を表現する',
        <div className="space-y-4">
          <p>
            {code('{ "name": "山田太郎", "status": "面談済み" }')}
            のように、1人分の情報を辞書で表し、それをリストに並べて「候補者一覧」を表現します。
          </p>
          <p>
            <GlossaryTerm name="forLoop">forループ</GlossaryTerm>
            で回して、「面談済みだけ表示」などの簡単なフィルタを試します。
          </p>
          <h3>なぜこのステップが必要か</h3>
          <p>
            Excel の1行は <GlossaryTerm name="python">Python</GlossaryTerm> では「1件のレコード」、シート全体は「レコードの一覧」として扱います。
            この感覚がつかめると、「表データを
            <GlossaryTerm name="code">コード</GlossaryTerm>
            で操作する」イメージが持てるようになり、どんな業種のデータでも同じ考え方で整理できるようになります。
          </p>
        </div>,
        {
          samplePrompt: `次のような「候補者1人分」の情報を表す Python の辞書と、
それを複数並べたリストのサンプルコードを書いてください。

- 名前（name）
- メールアドレス（email）
- ステータス（status）: 例「説明会予約」「面談済み」「内定」など

さらに、そのリストを for ループで回して、
status が「面談済み」の候補者だけを print するコードも付けてください。`,
        }
      ),
      step(
        '1-4',
        'CSVから一覧を読み込んでフィルタする',
        <div className="space-y-4">
          <p>サンプルの候補者CSVを用意し、<GlossaryTerm name="python">Python</GlossaryTerm>で読み込んで条件に合う行だけを取り出します。</p>
          <ul>
            <li>
              <GlossaryTerm name="csv">csv</GlossaryTerm> <GlossaryTerm name="module">モジュール</GlossaryTerm>や{' '}
              <GlossaryTerm name="pandas">pandas</GlossaryTerm> を使ってファイルを開く。
            </li>
            <li>status が「面談済み」の行だけを抽出する。</li>
          </ul>
          <h3>なぜこのステップが必要か</h3>
          <p>
            実務では、ほとんどの場合「既にあるExcel/
            <GlossaryTerm name="csv">CSV</GlossaryTerm>
            」を読み取って加工します。
            <GlossaryTerm name="hardCoding">ハードコーディング</GlossaryTerm>
            したデータだけ触れていても現場では役に立ちません。
            ここを押さえておくと、「手元の表ファイルを<GlossaryTerm name="python">Python</GlossaryTerm>で読み取って条件抽出する」という
            一般的なパターンが身につき、どんなデータにも応用しやすくなります。
          </p>
        </div>,
        {
          samplePrompt: `candidates.csv というファイルに、次のような列があるとします。

- name
- email
- status

この CSV ファイルを Python で読み込み、status が「面談済み」の行だけを取り出して
名前とメールアドレスを表示するサンプルコードを書いてください。

標準ライブラリの csv <GlossaryTerm name="module">モジュール</GlossaryTerm>を使った例と、
pandas を使った例の 2 パターンをそれぞれ教えてください。`,
        }
      ),
      step(
        '1-5',
        'CSVを書き出して「整形ツール」の原型を作る',
        <div className="space-y-4">
          <p>
            読み込んだ一覧から、列名や列数を変えて
            <strong>新しいCSVファイルとして書き出す</strong>
            練習をします。
          </p>
          <p>例：氏名・メールアドレス・最終ステータスだけに絞ったCSVを作る、など。</p>
          <h3>なぜこのステップが必要か</h3>
          <p>
            多くの自動化ツールは、
            <strong>「Aという形式のファイル → Bという形式のファイル」に変換する“変換器”</strong>
            として動いています。
            ここで小さな変換ツールを自分で作れるようになると、
            「新しいフォーマットが増えたときに、自分でマッピングを変えて対応する」イメージが持てるようになります。
          </p>
        </div>,
        {
          samplePrompt: `candidates.csv というファイルから、
次の3列だけを抜き出して別のファイルに保存する Python コードを書いてください。

- 氏名 → name
- メールアドレス → email
- 最終ステータス → final_status（元の status 列をそのまま使う）

入力ファイル名: candidates.csv
出力ファイル名: candidates_export.csv

標準ライブラリだけを使ったシンプルな実装でお願いします。`,
        }
      ),
      step(
        '1-6',
        'ミニ自己チェック：最初からCSV変換を組んでみる',
        <div className="space-y-4">
          <p>
            これまでのステップを見返しながら、
            <strong>「サンプルCSV → 条件で絞り込み → 別のCSVに保存」</strong>
            までを一度通して作ってみます。
          </p>
          <h3>なぜこのステップが必要か</h3>
          <p>
            この章は、中級以降のすべての土台になります。
            ここで「手順を見れば一人で組める」状態になっていると、
            後の章で <GlossaryTerm name="python">Python</GlossaryTerm> 自体に悩む時間を減らせます。
            もしつまずいた部分があれば、その箇所をメモしておき、
            <GlossaryTerm name="cursor">Cursor</GlossaryTerm> の <GlossaryTerm name="askMode">Ask モード</GlossaryTerm>で相談材料にしましょう。
          </p>
        </div>,
        {
          samplePrompt: `サンプルの candidates.csv を読み込んで、
status が「面談済み」の候補者だけを別の CSV に書き出す Python コードを一緒に組み立ててください。

やりたいこと:
- 入力: candidates.csv
- 出力: candidates_filtered.csv
- 列は元ファイルと同じで構いません

最初にどんな関数や処理の分け方にすると良いかを提案してから、
少しずつコードを足していく形で教えてください。`,
        }
      ),
    ],
  },
  {
    id: 'mid-ch2',
    title: '第2章：設定ファイル・.env・ログを使いこなす',
    steps: [
      step(
        '2-1',
        '「コードに書かない情報」を決める',
        <div className="space-y-4">
          <p>
            まずは、これから作るツールの中で
            <strong>「<GlossaryTerm name="code">コード</GlossaryTerm>に直接書かず、設定やファイルに分けておきたい情報」</strong>
            を洗い出します。
          </p>
          <ul>
            <li>接続先のファイルパスやシート名</li>
            <li>列名のマッピング（例：氏名 → name）</li>
            <li>ユーザー名やパスワードなどの機密情報</li>
          </ul>
          <h3>なぜこのステップが必要か</h3>
          <p>
            何でも
            <GlossaryTerm name="code">コード</GlossaryTerm>
            に直接書いてしまうと、あとで修正や再利用がしづらくなります。
            先に「<GlossaryTerm name="config">設定</GlossaryTerm>として外に出すもの」と「<GlossaryTerm name="code">コード</GlossaryTerm>に残すもの」を切り分けておくことで、
            変更に強く、ほかの人にも渡しやすいツールになります。
          </p>
        </div>,
        {
          samplePrompt: `次のような CSV 変換ツールを作るときに、
「コードに直接書かず、設定ファイルや .env に分けておいた方がよい情報」を洗い出したいです。

- 入力: candidates.csv
- 出力: candidates_export.csv
- 列マッピング: 氏名→name, メール→email, 最終ステータス→final_status

どの情報を設定ファイルや .env に分けるべきか、一覧にして教えてください。`,
        }
      ),
      step(
        '2-2',
        '.env と環境変数のイメージをつかむ',
        <div className="space-y-4">
          <p>
            パスワードやAPIキーのような値は、
            <GlossaryTerm name="envFile">.envファイル</GlossaryTerm>
            や
            <GlossaryTerm name="environmentVariable">環境変数</GlossaryTerm>
            として外に出しておきます。
          </p>
          <p>
            ここでは、ダミーのユーザー名・パスワードを
            <GlossaryTerm name="envFile">.env</GlossaryTerm>
            に書き、<GlossaryTerm name="python">Python</GlossaryTerm> から読み取る練習をします。
          </p>
          <h3>なぜこのステップが必要か</h3>
          <p>
            <GlossaryTerm name="code">コード</GlossaryTerm>の中にIDやパスワードを書き込んでしまうと、共有や管理が危険になります。
            <GlossaryTerm name="envFile">.env</GlossaryTerm>
            や
            <GlossaryTerm name="environmentVariable">環境変数</GlossaryTerm>
            を使えるようになると、
            「<GlossaryTerm name="code">コード</GlossaryTerm>は共有しても、機密情報は手元にだけ置く」という安全な運用がしやすくなります。
          </p>
        </div>,
        {
          samplePrompt: `Python から .env ファイルを読み込んで、
USER_NAME と USER_PASSWORD という 2 つの値を取得するサンプルコードを書いてください。

.env ファイルの例も一緒に示してほしいです。
ライブラリを使う場合は、初心者向けにインストール方法と import の書き方も教えてください。`,
        }
      ),
      step(
        '2-3',
        'YAML で「列マッピング」を外だしする',
        <div className="space-y-4">
          <p>
            CSV の「列名マッピング」のようなルールは、
            <GlossaryTerm name="yaml">YAML</GlossaryTerm>
            で設定ファイルとして外に出しておくと便利です。
          </p>
          <p>
            ここでは、「元の列名 → 変換後の列名」の対応表を <GlossaryTerm name="yaml">YAML</GlossaryTerm> で書き、
            <GlossaryTerm name="python">Python</GlossaryTerm> から読み取って変換に使うイメージをつかみます。
          </p>
          <h3>なぜこのステップが必要か</h3>
          <p>
            列名やシート名が変わるたびに
            <GlossaryTerm name="code">コード</GlossaryTerm>
            を書き換えていると、だんだん管理が大変になります。
            <GlossaryTerm name="yaml">YAML</GlossaryTerm>
            でマッピングを定義しておくと、「<GlossaryTerm name="config">設定</GlossaryTerm>だけ差し替えて同じツールを別案件でも使う」といった再利用がしやすくなります。
          </p>
        </div>,
        {
          samplePrompt: `次のような列マッピングを YAML ファイルに書きたいです。

- 氏名 → name
- メールアドレス → email
- 最終ステータス → final_status

1. このマッピングを表現した YAML ファイルの例
2. その YAML を Python で読み込み、辞書として扱うサンプルコード

の 2 つを教えてください。`,
        }
      ),
      step(
        '2-4',
        'logging で動作ログを残す',
        <div className="space-y-4">
          <p>
            <GlossaryTerm name="python">Python</GlossaryTerm> の
            <GlossaryTerm name="logging">logging</GlossaryTerm>{' '}
            <GlossaryTerm name="module">モジュール</GlossaryTerm>を使って、処理の開始・終了・エラー内容を<GlossaryTerm name="logging">ログ</GlossaryTerm>ファイルに残す練習をします。
          </p>
          <p>
            ここでは、CSV 読み込みと書き出しの前後でメッセージを出し、エラー時には例外の情報を<GlossaryTerm name="logging">ログ</GlossaryTerm>に書くようにします。
          </p>
          <h3>なぜこのステップが必要か</h3>
          <p>
            ツールが失敗したとき、「どこまで進んで、どこで止まったのか」が分からないと原因を追いにくくなります。
            <GlossaryTerm name="logging">ログ</GlossaryTerm>
            を仕込んでおけば、あとからでも「いつ・どのファイルで・どんなエラーが出たか」を確認でき、トラブル対応が楽になります。
          </p>
        </div>,
        {
          samplePrompt: `Python の logging <GlossaryTerm name="module">モジュール</GlossaryTerm>を使って、
次のような CSV 変換処理にログ出力を追加したいです。

- 変換処理の開始時と終了時に INFO レベルでメッセージを出す
- 例外が起きたときは ERROR レベルでスタックトレース付きでログに書く
- ログは console と file の両方に出す（ファイル名: tool.log）

シンプルなサンプルコードを教えてください。`,
        }
      ),
      step(
        '2-5',
        '設定とコードを分けたミニツールを組み立てる',
        <div className="space-y-4">
          <p>
            これまでの内容を組み合わせて、
            <GlossaryTerm name="envFile">.env</GlossaryTerm>
            ・
            <GlossaryTerm name="yaml">YAML</GlossaryTerm>
            ・
            <GlossaryTerm name="logging">ログ</GlossaryTerm>
            を使った小さな CSV 変換ツールの設計を考えます。
          </p>
          <p>
            ここでは、処理をどんな関数に分けるか、どの情報を<GlossaryTerm name="config">設定</GlossaryTerm>に寄せるかを文章で整理し、それをもとに AI
            に実装を手伝ってもらう準備をします。
          </p>
          <h3>なぜこのステップが必要か</h3>
          <p>
            設定・機密情報・<GlossaryTerm name="logging">ログ</GlossaryTerm>の責務を分けておくと、規模が大きくなっても破綻しにくくなります。
            中級の時点で「設定と<GlossaryTerm name="code">コード</GlossaryTerm>を分ける」意識を持っておくと、上級で複数機能を束ねたツールを作るときにもスムーズに応用できます。
          </p>
        </div>,
        {
          samplePrompt: `次の要素を使って、小さな CSV 変換ツールの設計を一緒に考えてください。

- .env に入れたい情報（例: 入力フォルダパス、出力フォルダパス）
- YAML に書く列マッピング（元列名 → 変換後列名）
- logging で残したいメッセージ

1. どんな関数やファイル構成にすると分かりやすいか
2. それぞれの責務（.env / YAML / Python コード / ログ）をどう分けるか

を文章で提案してから、必要であればサンプルコードも少しずつ書いてください。`,
        }
      ),
    ],
  },
  {
    id: 'mid-ch3',
    title: '第3章：ブラウザ自動操作の基礎',
    steps: [
      step(
        '3-1',
        'ブラウザ自動化でできることを知る',
        <div className="space-y-4">
          <p>
            まずは、<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>自動化で
            <strong>どんな作業を置き換えられるか</strong>
            を整理します。
          </p>
          <ul>
            <li>毎回同じ画面で情報を入力しているフォーム作業</li>
            <li>一覧画面からリンクを順番に開いて情報を集める作業</li>
            <li>ボタンを何十回もクリックするステータス更新作業</li>
          </ul>
          <h3>なぜこのステップが必要か</h3>
          <p>
            <GlossaryTerm name="browser">ブラウザ</GlossaryTerm>自動化 =
            <GlossaryTerm name="automation">自動化</GlossaryTerm>
            と聞くと難しく感じますが、中身は「人がクリックしている手順をそのまま<GlossaryTerm name="code">コード</GlossaryTerm>に落とす」イメージです。
            どの作業が向いているかを知っておくと、「ここは自動化しよう／ここは人が判断しよう」と切り分けやすくなります。
          </p>
        </div>,
        {
          samplePrompt: `自分の業務の中で、ブラウザ上で毎回同じ操作を繰り返している作業を洗い出したいです。

ブラウザ自動化で置き換えやすい作業の具体例と、
「自動化した方がよい作業」「人がやった方がよい作業」の考え方を教えてください。`,
        }
      ),
      step(
        '3-2',
        'ログインフォームの構造を観察する',
        <div className="space-y-4">
          <p>
            サンプルのログイン画面を開き、<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>の
            <GlossaryTerm name="devTools">開発者ツール</GlossaryTerm>
            で「どの要素にどんな
            <GlossaryTerm name="locator">セレクタ</GlossaryTerm>
            が付いているか」を確認する練習をします。
          </p>
          <p>
            ここでは、ユーザー名入力欄・パスワード入力欄・ログインボタンの 3
            つに注目し、id / name / class などをメモしておきます。
          </p>
          <h3>なぜこのステップが必要か</h3>
          <p>
            <GlossaryTerm name="browser">ブラウザ</GlossaryTerm>自動化<GlossaryTerm name="code">コード</GlossaryTerm>は、「どのボタンを押すか」「どの入力欄に文字を入れるか」を
            <GlossaryTerm name="locator">ロケーター</GlossaryTerm>
            で指定します。
            画面構造を観察するクセを付けておくと、あとでセレクタが変わったときにも自分で対応しやすくなります。
          </p>
        </div>,
        {
          samplePrompt: `任意のログイン画面を開いて、ユーザー名・パスワード・ログインボタンの 3 つについて、
開発者ツールで id / name / class などの情報を調べる手順を、初心者向けに教えてください。

セレクタをメモするときのコツや、避けた方がよいセレクタの例もあれば知りたいです。`,
        }
      ),
      step(
        '3-3',
        'Selenium でログイン操作を自動化する',
        <div className="space-y-4">
          <p>
            <GlossaryTerm name="selenium">Selenium</GlossaryTerm>
            などのライブラリを使って、<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>を起動し、ログインフォームに自動で入力してログインする<GlossaryTerm name="code">コード</GlossaryTerm>を書いてみます。
          </p>
          <p>
            ユーザー名・パスワードは
            <GlossaryTerm name="envFile">.env</GlossaryTerm>
            から読み取り、セレクタは前のステップで調べた情報を使います。
          </p>
          <h3>なぜこのステップが必要か</h3>
          <p>
            ログイン処理は多くの業務フローの最初に出てくる共通部分です。
            ここを自動化できるようになると、その先の画面遷移やボタンクリックも同じパターンで実装しやすくなります。
          </p>
        </div>,
        {
          samplePrompt: `Python と Selenium を使って、次のようなログインの自動操作コードを書いてください。

- 指定した URL のログインページを開く
- .env から USER_NAME / USER_PASSWORD を読み込む
- ユーザー名とパスワードの入力欄にそれぞれ値を入力する
- ログインボタンをクリックする

開発者ツールで調べた id / name / class を差し替えれば使えるような形で、サンプルコードをお願いしたいです。`,
        }
      ),
      step(
        '3-4',
        '要素が見つからないときのトラブルシュート',
        <div className="space-y-4">
          <p>
            自動化<GlossaryTerm name="code">コード</GlossaryTerm>を書いていると、
            <code>NoSuchElementException</code>
            のように「要素が見つからない」エラーに出会うことがあります。
          </p>
          <p>
            ここでは、待ち時間を入れる・セレクタを見直す・画面遷移を確認する、といった基本的な対処パターンを整理します。
          </p>
          <h3>なぜこのステップが必要か</h3>
          <p>
            <GlossaryTerm name="browser">ブラウザ</GlossaryTerm>自動化は、画面の変更や通信のタイミングに影響を受けやすい分野です。
            エラーに出会ったときにあわてず、「どこを確認すればよいか」のチェックリストを持っておくと、実務で壊れにくい自動化が作れます。
          </p>
        </div>,
        {
          samplePrompt: `Selenium のコードで「要素が見つかりません」というエラーが出たときに、
どの順番で原因を切り分ければよいか、チェックリスト形式で教えてください。

待ち時間（明示的な wait）の入れ方や、セレクタを見直すときのポイントもあれば合わせて知りたいです。`,
        }
      ),
    ],
  },
  {
    id: 'mid-ch4',
    title: '第4章：1つの業務フローを自動化してみる',
    steps: [
      step(
        '4-1',
        '自動化したい業務フローを書き出す',
        <div className="space-y-4">
          <p>
            最後に、これまで学んだ内容を使って
            <strong>自分の業務フローを 1 つ選び、自動化の設計をしてみます。</strong>
          </p>
          <p>
            「どの画面で」「何を見て」「どんな条件で」「どのボタンを押すか」を、紙やメモにステップごとに書き出します。
          </p>
          <h3>なぜこのステップが必要か</h3>
          <p>
            実際の業務は、画面遷移や判断がいくつも重なった流れになっています。
            最初に手順を文章で整理しておくことで、
            <GlossaryTerm name="cursor">Cursor</GlossaryTerm>
            にも「このフローを<GlossaryTerm name="code">コード</GlossaryTerm>にしてほしい」と伝えやすくなります。
          </p>
        </div>,
        {
          samplePrompt: `自分の担当している業務の中から、ブラウザ操作を含むフローを 1 つ選んで自動化したいです。

フローを分解するときに、
「画面」「入力」「判断」「ボタン操作」などをどう書き出せばよいか、
例を交えながら教えてください。`,
        }
      ),
      step(
        '4-2',
        '入力データと出力結果をはっきりさせる',
        <div className="space-y-4">
          <p>
            フローが書き出せたら、
            <strong>その自動化で「何を入力にして、最終的に何を得たいのか」</strong>
            を明確にします。
          </p>
          <ul>
            <li>入力ファイル（<GlossaryTerm name="csv">CSV</GlossaryTerm> / Excel）の形式や保管場所</li>
            <li><GlossaryTerm name="browser">ブラウザ</GlossaryTerm>上で参照する情報</li>
            <li>出力ファイルや更新したい画面</li>
          </ul>
          <h3>なぜこのステップが必要か</h3>
          <p>
            入力と出力があいまいなままだと、<GlossaryTerm name="code">コード</GlossaryTerm>を書いても「結局何ができたのか」が分かりにくくなります。
            先にゴールをはっきりさせておくことで、AI に相談するときも具体的な指示が出せるようになります。
          </p>
        </div>,
        {
          samplePrompt: `自分の業務フローを自動化するときに、
「入力データ」と「出力結果」をはっきりさせるための質問リストを作りたいです。

どんな観点で洗い出すとよいか、チェックリスト形式で提案してください。`,
        }
      ),
      step(
        '4-3',
        '全体フローを AI に相談しながらコードにする',
        <div className="space-y-4">
          <p>
            ここまで整理した情報をもとに、
            <GlossaryTerm name="cursor">Cursor</GlossaryTerm>
            の <GlossaryTerm name="askMode">Ask モード</GlossaryTerm>で全体フローの設計相談をし、<GlossaryTerm name="agentMode">Agent モード</GlossaryTerm>で<GlossaryTerm name="code">コード</GlossaryTerm>を生成してもらいます。
          </p>
          <p>
            一度で完璧な<GlossaryTerm name="code">コード</GlossaryTerm>を求めるのではなく、
            <strong>「まずは骨組み → 少しずつ肉付け・修正」</strong>
            という順番で進めることを意識します。
          </p>
          <h3>なぜこのステップが必要か</h3>
          <p>
            現実の業務フローは、最初から完全に言語化できないことも多いです。
            AI と対話しながら少しずつ形にしていく練習をしておくと、
            大きめのフローでも「分割して相談する」感覚が身につきます。
          </p>
        </div>,
        {
          samplePrompt: `次のような業務フローを、自動化ツールとして実装したいです。（ここに自分のフロー概要を書く）

まずは <GlossaryTerm name="askMode">Ask モード</GlossaryTerm>として、全体をどのようなステップや関数に分けるとよいか、
Python と<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>自動化を組み合わせる前提で設計案を出してください。

そのあと、<GlossaryTerm name="agentMode">Agent モード</GlossaryTerm>で少しずつコードを書いていきたいです。`,
        }
      ),
      step(
        '4-4',
        '「うまくいっているか」のチェックポイントを決める',
        <div className="space-y-4">
          <p>
            最後に、その自動化が
            <strong>「正しく動いていると言える状態」</strong>
            を自分なりに定義します。
          </p>
          <ul>
            <li><GlossaryTerm name="logging">ログ</GlossaryTerm>にどんなメッセージが出ていれば安心か</li>
            <li><GlossaryTerm name="browser">ブラウザ</GlossaryTerm>や出力ファイルのどこを見て確認するか</li>
            <li>想定外のケースが起きたとき、どこで気づけるようにしておくか</li>
          </ul>
          <h3>なぜこのステップが必要か</h3>
          <p>
            自動化は、一度作って終わりではなく、あとからの変更やトラブルにも付き合っていく必要があります。
            「ここを見ておけば安心」というチェックポイントを決めておくことで、自分以外のメンバーにも引き継ぎやすくなります。
          </p>
        </div>,
        {
          samplePrompt: `自分が作った自動化ツールについて、
「うまく動いているかどうか」を確認するチェックポイントを整理したいです。

ログ・画面・出力ファイルのそれぞれで、
どんな項目を見ればよいかの例を挙げながら、チェックリストを提案してください。`,
        }
      ),
    ],
  },
]

export function getIntermediateStepById(stepId: string): {
  chapterTitle: string
  step: IntermediateStep
} | null {
  for (const ch of INTERMEDIATE_CHAPTERS) {
    const step = ch.steps.find((s) => s.id === stepId)
    if (step) return { chapterTitle: ch.title, step }
  }
  return null
}

export function getIntermediatePrevNext(stepId: string): {
  prev: string | null
  next: string | null
} {
  const ids: string[] = []
  for (const ch of INTERMEDIATE_CHAPTERS) {
    for (const s of ch.steps) ids.push(s.id)
  }
  const i = ids.indexOf(stepId)
  if (i < 0) return { prev: null, next: null }
  return {
    prev: i > 0 ? ids[i - 1]! : null,
    next: i < ids.length - 1 ? ids[i + 1]! : null,
  }
}

export function isValidIntermediateStepId(stepId: string): boolean {
  for (const ch of INTERMEDIATE_CHAPTERS) {
    if (ch.steps.some((s) => s.id === stepId)) return true
  }
  return false
}

