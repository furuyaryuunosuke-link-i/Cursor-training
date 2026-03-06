import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { WebServiceChapter } from './types'
import { step } from './types'

export const WEB_SERVICE_CHAPTER_1: WebServiceChapter = {
  id: 'ws-ch1',
  title: '第1章：ローカルから「サービス」へ',
  steps: [
    step(
      '1-1',
      'ローカルツールと Web サービスの違い',
      <div className="space-y-4">
        <p>
          自分の PC で動かす<strong>ローカルツール</strong>と、
          <GlossaryTerm name="server">サーバー</GlossaryTerm>に置いて<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>からアクセスする
          <strong>Web サービス</strong>の違いを押さえます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          同じ処理でも「誰が・どこから」使うかで、デプロイや認証・<GlossaryTerm name="config">設定</GlossaryTerm>の考え方が変わります。
          サービス化すると、チームで共有したり、スケジュール実行しやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `今はローカルで動かしている Python の業務ツールを、社内の他の人もブラウザから使えるようにしたいです。

ローカル実行と「サーバーに置いて Web で公開する」の違いと、必要な準備（サーバー・ポート・起動方法）を教えてください。`,
      }
    ),
    step(
      '1-2',
      '公開範囲と認証のイメージ',
      <div className="space-y-4">
        <p>
          社内限定で使う場合、<strong>誰がアクセスできるか</strong>をどう制御するか（IP 制限・簡易ログイン・<GlossaryTerm name="oauth">OAuth</GlossaryTerm> など）を決めます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          そのまま公開すると、意図しない人が触れたりデータが見えたりする危険があります。
          最小限の認証やネットワークの前提を決めておくと、安全にサービス化できます。
        </p>
      </div>,
      {
        samplePrompt: `社内だけが使う簡単な Web ツールで、認証をどうするか検討しています。パスワード 1 本の簡易認証と、OAuth の違いを、導入の手軽さと安全性の観点で教えてください。`,
      }
    ),
  ],
}
