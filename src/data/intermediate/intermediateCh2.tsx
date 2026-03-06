import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { IntermediateChapter } from './types'
import { step } from './types'

export const INTERMEDIATE_CHAPTER_2: IntermediateChapter = {
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
          パスワードや<GlossaryTerm name="api">API</GlossaryTerm>キーのような値は、
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
        samplePrompt: `Python の logging モジュールを使って、
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
}
