import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { IntermediateChapter } from './types'
import { step } from './types'

const code = (s: string) => (
  <code className="bg-white/20 dark:bg-black/20 px-1.5 py-0.5 rounded text-sm font-mono">
    {s}
  </code>
)

export const INTERMEDIATE_CHAPTER_1: IntermediateChapter = {
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

標準ライブラリの csv モジュールを使った例と、
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
          <strong>「Aという形式のファイル → Bという形式のファイル」に変換する"変換器"</strong>
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
}
