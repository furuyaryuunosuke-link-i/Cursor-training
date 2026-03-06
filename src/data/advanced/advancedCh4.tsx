import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { AdvancedChapter } from './types'
import { step } from './types'

export const ADVANCED_CHAPTER_4: AdvancedChapter = {
  id: 'adv-ch4',
  title: '第4章：テスト・自己診断・ログで保守しやすくする',
  steps: [
    step(
      '4-1',
      'なぜテストを書くか',
      <div className="space-y-4">
        <p>
          自動化ツールは、修正や機能追加のたびに「前は動いていたのに壊れていないか」を確認する必要があります。
          <strong>テストを 1 本でも書いておく</strong>と、変更後にそれを実行するだけで安心材料になります。
        </p>
        <p>
          <GlossaryTerm name="pytest">pytest</GlossaryTerm> のようなテストフレームワークでは、「この関数にこの入力を渡したらこの出力になる」を
          <GlossaryTerm name="code">コード</GlossaryTerm>で書いておき、実行して結果を確認します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          テストがないと、「直したつもりが別のところを壊した」に気づきにくくなります。
          最初は 1 本だけでも、「ここはこう動くべき」という仕様がテストとして残ることで、自分や他の人があとから変更するときの指針になります。
        </p>
      </div>,
      {
        samplePrompt: `業務用の Python ツールで、これからテストを書き始めたいです。

「なぜテストを書くのか」「どの処理からテストすると効果的か」を、初心者向けに短く説明してください。あわせて、pytest で 1 本だけテストを書く最小限の例（テストする関数と test_ の書き方）も教えてください。`,
      }
    ),
    step(
      '4-2',
      '1本の処理にテストを 1 本書く',
      <div className="space-y-4">
        <p>
          ツールの中から、<strong>「入力が決まれば出力が決まる」</strong>ような関数を 1 つ選び（例：CSV の 1 行を整形する関数）、
          その関数に対して「この入力ならこの出力」というテストを 1 本、pytest で書きます。
        </p>
        <p>実行は <GlossaryTerm name="terminal">ターミナル</GlossaryTerm>で <code>pytest tests/</code> のように行い、成功・失敗を確認します。</p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          テストの書き方に慣れておくと、機能追加やリファクタのあとに「既存の振る舞いが変わっていないか」をすぐ確認できます。
          1 本から始めて、重要な処理に少しずつテストを足していく習慣がつくと、<GlossaryTerm name="maintenance">保守</GlossaryTerm>が楽になります。
        </p>
      </div>,
      {
        samplePrompt: `次のような Python の関数があるとします。

def format_row(row: dict) -> dict:
    # 氏名とメールだけを取り出してキー名を name, email に変える
    ...

この関数に対して、pytest で「特定の row を渡したときに、期待どおりの dict が返る」テストを 1 本書いてください。テストファイルの置き場所と、実行コマンドも教えてください。`,
      }
    ),
    step(
      '4-3',
      'ログで「どこで止まったか」を追う',
      <div className="space-y-4">
        <p>
          ツールが途中で止まったとき、<GlossaryTerm name="logging">ログ</GlossaryTerm>に「どの処理の直前まで進んだか」「どんな例外が出たか」が書かれていれば、原因のあたりが付けやすくなります。
        </p>
        <p>ここでは、既存の<GlossaryTerm name="logging">ログ</GlossaryTerm>出力を確認し、自分で 1 か所「ここまで到達した」という<GlossaryTerm name="logging">ログ</GlossaryTerm>を追加して、実行後に<GlossaryTerm name="logging">ログ</GlossaryTerm>ファイルで追えるようにします。</p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          本番に近い環境では、画面で見えない部分で止まることが多いです。
          <GlossaryTerm name="logging">ログ</GlossaryTerm>の設計（どこに何を書くか）を意識しておくと、トラブル時に「ログのこの行まで出ているから、この処理の前で止まっている」と切り分けやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `Python のツールで、処理の開始・終了・エラー時にログを出すようにしたいです。

logging モジュールで、ファイル（tool.log）とコンソールの両方に出力し、エラー時にはスタックトレースも含めて記録する設定の例を教えてください。`,
      }
    ),
    step(
      '4-4',
      '自己診断ログの設計',
      <div className="space-y-4">
        <p>
          「ツールが正常に動いているか」を定期的に確認するために、
          <strong>チェック項目（設定ファイルが読めるか、認証が有効か、必要なファイルがあるか）を実行して結果を<GlossaryTerm name="logging">ログ</GlossaryTerm>や <GlossaryTerm name="json">JSON</GlossaryTerm> に残す</strong>仕組みを、設計レベルで考えます。
        </p>
        <p>既存ツールにそのような仕組みがあれば、どこに書かれているかを確認します。</p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          運用し始めると、「動かなくなったが、設定ミスなのかコードの不具合なのか分からない」という状況が出てきます。
          自己診断の項目を決めておくと、その<GlossaryTerm name="logging">ログ</GlossaryTerm>を見るだけで「何が不足しているか」を判断しやすくなり、引き継ぎや障害対応が楽になります。
        </p>
      </div>,
      {
        samplePrompt: `ローカルで動かすツールで、「起動時に設定ファイル・認証トークン・必須ディレクトリの有無をチェックし、結果を 1 つの JSON ファイルに書き出す」自己診断スクリプトを設計したいです。

チェック項目の例と、結果をどのような <GlossaryTerm name="json">JSON</GlossaryTerm> 構造で書くと後から見やすいか、提案してください。`,
      }
    ),
  ],
}
