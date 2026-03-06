import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { AdvancedChapter } from './types'
import { step } from './types'

export const ADVANCED_CHAPTER_2: AdvancedChapter = {
  id: 'adv-ch2',
  title: '第2章：ローカルWeb UI とバックエンドのつなぎ方',
  steps: [
    step(
      '2-1',
      'ブラウザとサーバーがどう連携するか',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="localTool">ローカルツール</GlossaryTerm>では、<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>で表示している画面（<GlossaryTerm name="frontend">フロント</GlossaryTerm>）が、
          <strong>同じマシンで動いている<GlossaryTerm name="server">サーバー</GlossaryTerm>（<GlossaryTerm name="backend">バックエンド</GlossaryTerm>）にリクエストを送り、結果を受け取る</strong>形で動いています。
        </p>
        <p>
          <GlossaryTerm name="api">API</GlossaryTerm>（<GlossaryTerm name="endpoint">エンドポイント</GlossaryTerm>）の URL・メソッド・送受信するデータ形式（<GlossaryTerm name="json">JSON</GlossaryTerm> など）のイメージをつかみます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          「ボタンを押したら <GlossaryTerm name="python">Python</GlossaryTerm> の処理が走る」という流れは、多くのローカル業務ツールで共通です。
          この仕組みが分かっていないと、機能追加時に「<GlossaryTerm name="frontend">フロント</GlossaryTerm>を直すのか、<GlossaryTerm name="backend">バックエンド</GlossaryTerm>を直すのか」の判断がつきにくくなります。
        </p>
      </div>,
      {
        samplePrompt: `ローカルで動かすツールで、ブラウザ（フロント）と Python サーバー（バックエンド）がどう連携しているかを理解したいです。

「ボタンクリック → リクエスト送信 → サーバーで処理 → レスポンス返却」の流れを、初心者向けに図と用語（API・エンドポイント・JSON）で説明してください。`,
      }
    ),
    step(
      '2-2',
      '簡易 API を立ててみる',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="python">Python</GlossaryTerm> で
          <GlossaryTerm name="fastapi">FastAPI</GlossaryTerm> や <GlossaryTerm name="flask">Flask</GlossaryTerm> などの軽量フレームワークを使い、
          <strong>「<GlossaryTerm name="get">GET</GlossaryTerm> で〇〇を返す」「<GlossaryTerm name="post">POST</GlossaryTerm> でデータを受け取る」</strong>といった最小限の
          <GlossaryTerm name="api">API</GlossaryTerm> を 1 本立ち上げる練習をします。
        </p>
        <p>ここでは、<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>からアクセスできる URL と、返却する <GlossaryTerm name="json">JSON</GlossaryTerm> の形を自分で決めて実装します。</p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          既存ツールの「<GlossaryTerm name="api">API</GlossaryTerm> がどう動いているか」を読むだけでは、自分で 1 本追加する感覚が身につきません。
          ここで最小限の <GlossaryTerm name="api">API</GlossaryTerm> を自分で書いておくと、後の「新しい機能を 1 つ足す」がやりやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `Python で FastAPI を使って、次のような最小限の API を立ち上げたいです。

- GET /api/status → {"status": "ok"} を返す
- 起動後、ブラウザで http://127.0.0.1:8000/api/status を開くと JSON が表示される

必要なファイル（main.py など）と、実行コマンド、そしてブラウザで確認する手順を教えてください。`,
      }
    ),
    step(
      '2-3',
      '<GlossaryTerm name="frontend">フロント</GlossaryTerm>から API を呼ぶ',
      <div className="space-y-4">
        <p>
          シンプルな <GlossaryTerm name="html">HTML</GlossaryTerm> + <GlossaryTerm name="javascript">JavaScript</GlossaryTerm> のページから、
          <GlossaryTerm name="fetch">fetch</GlossaryTerm> で先ほど立てた API の URL にリクエストを送り、返ってきた <GlossaryTerm name="json">JSON</GlossaryTerm> を画面に表示する練習をします。
        </p>
        <p>「ボタンを押す → <GlossaryTerm name="fetch">fetch</GlossaryTerm> で API を叩く → 結果を表示する」の 1 往復を自分で書いてみます。</p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          既存の<GlossaryTerm name="localTool">ローカルツール</GlossaryTerm>の「ボタン → 処理」の流れは、ほとんどこのパターンです。
          ここを自分で書けるようになると、既存ツールに「新しいボタンと新しい <GlossaryTerm name="api">API</GlossaryTerm>」を 1 セットで追加するイメージが持てます。
        </p>
      </div>,
      {
        samplePrompt: `HTML のページにボタンを 1 つ置き、クリックしたら fetch で http://127.0.0.1:8000/api/status を GET して、返ってきた JSON を画面に表示したいです。

fetch の書き方と、取得したデータを DOM に反映する最小限の JavaScript の例を教えてください。`,
      }
    ),
    step(
      '2-4',
      'エラーと結果を画面に返す',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="api">API</GlossaryTerm> 側で「エラー時は HTTP ステータスとメッセージを返す」「成功時は結果オブジェクトを返す」といった形にし、
          <GlossaryTerm name="frontend">フロント</GlossaryTerm>では <code>response.ok</code> や <code>response.status</code> を見て成功・失敗を分岐し、ユーザーに分かりやすいメッセージを表示する流れを体験します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          実務では、ネットワークエラーや<GlossaryTerm name="validation">バリデーション</GlossaryTerm>エラーをどうユーザーに伝えるかが重要です。
          ここで「<GlossaryTerm name="backend">バックエンド</GlossaryTerm>が返す形式」と「<GlossaryTerm name="frontend">フロント</GlossaryTerm>の分岐」をセットで押さえておくと、自分で機能を足したときも一貫した挙動にしやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `FastAPI の API で、バリデーションエラーのときに 400 とメッセージを返し、フロントの fetch では response.ok が false のときに「エラーです」と表示したいです。

バックエンドの例外ハンドリング（HTTPException）と、フロントの fetch でエラー時にメッセージを表示するコード例を教えてください。`,
      }
    ),
  ],
}
