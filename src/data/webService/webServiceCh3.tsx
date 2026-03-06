import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { WebServiceChapter } from './types'
import { step } from './types'

export const WEB_SERVICE_CHAPTER_3: WebServiceChapter = {
  id: 'ws-ch3',
  title: '第3章：API 公開とヘルスチェック',
  steps: [
    step(
      '3-1',
      'API を外部から叩けるようにする',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="api">API</GlossaryTerm> のエンドポイントを決め、
          <GlossaryTerm name="get">GET</GlossaryTerm> / <GlossaryTerm name="post">POST</GlossaryTerm> の役割と、
          <GlossaryTerm name="json">JSON</GlossaryTerm> でのリクエスト・レスポンスの形を整理します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="frontend">フロント</GlossaryTerm>や他システムから同じ API を叩けるようにしておくと、
          再利用や連携がしやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `Flask で作った API を、社内の別のツール（フロントや Excel マクロ）から呼びたいです。GET と POST の使い分けと、CORS の設定方法を教えてください。`,
      }
    ),
    step(
      '3-2',
      'ヘルスチェックと監視',
      <div className="space-y-4">
        <p>
          「サービスが生きているか」を確認する<strong>ヘルスチェック用のエンドポイント</strong>（例: /health）を用意し、
          監視ツールや PaaS の死活監視と連携する方法を学びます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          障害時にいち早く気づいたり、自動再起動と組み合わせるには、ヘルスチェックが標準的なやり方です。
        </p>
      </div>,
      {
        samplePrompt: `Flask アプリに /health のようなヘルスチェック用のエンドポイントを追加したいです。返すステータスコードとレスポンスの形式の慣例を教えてください。`,
      }
    ),
  ],
}
