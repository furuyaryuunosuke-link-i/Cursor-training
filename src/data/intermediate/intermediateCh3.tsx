import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { IntermediateChapter } from './types'
import { step } from './types'

export const INTERMEDIATE_CHAPTER_3: IntermediateChapter = {
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
}
