import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { WebServiceChapter } from './types'
import { step } from './types'

export const WEB_SERVICE_CHAPTER_1: WebServiceChapter = {
  id: 'ws-ch1',
  title: '第1章：サービス像と公開範囲',
  steps: [
    step(
      '1-1',
      'ローカルツールと Web サービスの違い',
      <div className="space-y-4">
        <p>
          自分の PC で動かす<GlossaryTerm name="localTool">ローカルツール</GlossaryTerm>と、
          <GlossaryTerm name="server">サーバー</GlossaryTerm>に置いて<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>からアクセスする
          <GlossaryTerm name="webService">Web サービス</GlossaryTerm>の違いを押さえます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          同じ処理でも「誰が・どこから」使うかで、<GlossaryTerm name="deploy">デプロイ</GlossaryTerm>や<GlossaryTerm name="authentication">認証</GlossaryTerm>・<GlossaryTerm name="config">設定</GlossaryTerm>の考え方が変わります。
          サービス化すると、チームで共有したり、スケジュール実行しやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `今はローカルで動かしている Python の業務ツールを、社内の他の人もブラウザから使えるようにしたいです。ローカル実行と「サーバーに置いて Web で公開する」の違いと、必要な準備（サーバー・ポート・起動方法）を教えてください。`,
      }
    ),
    step(
      '1-2',
      '公開範囲を決める（社内のみ・特定ドメイン・一般公開）',
      <div className="space-y-4">
        <p>
          <strong>誰がアクセスしてよいか</strong>を決めます。社内のみ・特定<GlossaryTerm name="domain">ドメイン</GlossaryTerm>（例: @company.co.jp）・一般公開のどれに近いかで、認証の要否・ネットワークの前提・コストが変わります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          公開範囲が曖昧だと、あとから「想定外の人が触れる」ことになり、セキュリティや運用の手間が増えます。最初に「社内のみ」などと決めておくと設計がしやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `社内限定で使う Web ツールと、不特定多数に公開するサービスの違いを、認証・ネットワーク・コストの観点で教えてください。社内のみにしたい場合の典型的な構成も知りたいです。`,
      }
    ),
    step(
      '1-3',
      '認証・アクセス制御のイメージ（IP 制限・簡易認証・OAuth・API キー）',
      <div className="space-y-4">
        <p>
          社内限定でも<strong>誰がアクセスできるか</strong>をどう制御するか（<GlossaryTerm name="ipRestriction">IP 制限</GlossaryTerm>・簡易ログイン・<GlossaryTerm name="oauth">OAuth</GlossaryTerm>・<GlossaryTerm name="apiKey">API キー</GlossaryTerm>など）を決めます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          そのまま公開すると、意図しない人が触れたりデータが見えたりする危険があります。最小限の<GlossaryTerm name="authentication">認証</GlossaryTerm>やネットワークの前提を決めておくと、安全にサービス化できます。
        </p>
      </div>,
      {
        samplePrompt: `社内だけが使う簡単な Web ツールで、認証をどうするか検討しています。パスワード 1 本の簡易認証と、OAuth の違いを、導入の手軽さと安全性の観点で教えてください。`,
      }
    ),
    step(
      '1-4',
      '利用規約・利用ポリシーの前提（社内利用でも「何をしてよいか」を決めておく）',
      <div className="space-y-4">
        <p>
          社内利用でも、<strong>「何をしてよいか」「データの持ち出しはどうするか」</strong>を簡易的にでよいので決めておくと、トラブル時に説明しやすくなります。利用規約までは不要でも、README や社内<GlossaryTerm name="wiki">Wiki</GlossaryTerm>にポリシーを書いておくことを検討します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          サービスを広げるほど「想定外の使い方」が増えます。事前に方針を書いておくと、運用や監査で「何を許容しているか」が明確になります。
        </p>
      </div>,
      {
        samplePrompt: `社内向けの業務 Web ツールで、利用ポリシーを README や社内ドキュメントに書いておきたいです。最低限含めておくとよい項目（利用目的・データの取り扱い・禁止事項など）の例を教えてください。`,
      }
    ),
  ],
}
