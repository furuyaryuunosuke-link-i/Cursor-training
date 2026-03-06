import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { WebServiceChapter } from './types'
import { step } from './types'

export const WEB_SERVICE_CHAPTER_4: WebServiceChapter = {
  id: 'ws-ch4',
  title: '第4章：API とインターフェース',
  steps: [
    step(
      '4-1',
      'API の設計（エンドポイント・GET/POST の役割・JSON）',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="api">API</GlossaryTerm> の<GlossaryTerm name="endpoint">エンドポイント</GlossaryTerm>を決め、
          <GlossaryTerm name="get">GET</GlossaryTerm> / <GlossaryTerm name="post">POST</GlossaryTerm> の役割と、
          <GlossaryTerm name="json">JSON</GlossaryTerm> でのリクエスト・レスポンスの形を整理します。<GlossaryTerm name="rest">REST</GlossaryTerm>の慣例（リソース名は複数形・HTTP メソッドで操作を表す）に沿うと、利用しやすくなります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="frontend">フロント</GlossaryTerm>や他システムから同じ API を叩けるようにしておくと、再利用や連携がしやすくなります。一貫した設計にしておくとドキュメントも書きやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `Flask で作った API を、社内の別のツール（フロントや Excel マクロ）から呼びたいです。GET と POST の使い分けと、REST らしいエンドポイント名の付け方、CORS の設定方法を教えてください。`,
      }
    ),
    step(
      '4-2',
      'API 認証（API キー・トークン・OAuth の使い分け）',
      <div className="space-y-4">
        <p>
          外部から API を叩くときの<strong>認証</strong>をどうするか決めます。<GlossaryTerm name="apiKey">API キー</GlossaryTerm>をヘッダーに載せる方法、<GlossaryTerm name="token">トークン</GlossaryTerm>（<GlossaryTerm name="jwt">JWT</GlossaryTerm> など）で「誰か」を識別する方法、<GlossaryTerm name="oauth">OAuth</GlossaryTerm> で他サービス認証と連携する方法の違いと、社内ツールならどこまで必要かを押さえます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          認証なしだと誰でも API を叩けてしまい、漏洩や悪用のリスクがあります。社内限定でも、API キーやトークンで「許可したクライアントだけ」にすると安全です。
        </p>
      </div>,
      {
        samplePrompt: `社内向けの Flask API で、API キーをヘッダーで受け取って検証する方法を教えてください。キーの管理方法（環境変数で渡すなど）も知りたいです。`,
      }
    ),
    step(
      '4-3',
      'バージョニングと互換性（/v1/ など・破壊的変更を避ける）',
      <div className="space-y-4">
        <p>
          API を<strong>バージョン</strong>で管理し、破壊的変更（レスポンスの形を変える・必須引数を増やすなど）は新しいバージョン（例: /v2/）で出すようにします。旧バージョンは一定期間サポートし、廃止時期をドキュメントに書いておきます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          利用中のクライアントがいる状態でいきなり API を変えると、相手側が動かなくなります。バージョニングと互換性ポリシーを決めておくと、安全に進化させられます。
        </p>
      </div>,
      {
        samplePrompt: `Flask で API のバージョンを /v1/, /v2/ のようにパスで分けたいです。ルーティングの分け方と、旧バージョンをいつまでサポートするかのドキュメントの書き方の例を教えてください。`,
      }
    ),
    step(
      '4-4',
      'API ドキュメントと OpenAPI（仕様の共有・Swagger のイメージ）',
      <div className="space-y-4">
        <p>
          API の<strong>仕様を文章や <GlossaryTerm name="openApi">OpenAPI</GlossaryTerm>（<GlossaryTerm name="swagger">Swagger</GlossaryTerm>）形式</strong>で残し、利用者やフロント開発者が「どの<GlossaryTerm name="endpoint">エンドポイント</GlossaryTerm>に何を送ると何が返るか」を把握できるようにします。OpenAPI からドキュメントやクライアントコードを自動生成するツールも活用できます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          口頭やチャットだけの説明では不整合が起きやすく、ドキュメント化しておくとトラブルが減ります。監査や引き継ぎでも「API の仕様が書いてある」ことが求められることがあります。
        </p>
      </div>,
      {
        samplePrompt: `Flask で作った API の仕様を OpenAPI（Swagger）形式で書き、ドキュメントを自動生成したいです。flask-restx や Flasgger の使い方の例を教えてください。`,
      }
    ),
  ],
}
