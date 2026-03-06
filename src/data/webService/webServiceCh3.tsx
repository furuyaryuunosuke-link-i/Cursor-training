import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { WebServiceChapter } from './types'
import { step } from './types'

export const WEB_SERVICE_CHAPTER_3: WebServiceChapter = {
  id: 'ws-ch3',
  title: '第3章：デプロイとリリース',
  steps: [
    step(
      '3-1',
      'デプロイの流れ（手動・Git push 連動・CI/CD のイメージ）',
      <div className="space-y-4">
        <p>
          コードを本番に届ける<strong><GlossaryTerm name="deploy">デプロイ</GlossaryTerm>の流れ</strong>を押さえます。手動で<GlossaryTerm name="server">サーバー</GlossaryTerm>にアップロードする方法、Git の<GlossaryTerm name="push">push</GlossaryTerm>に連動して自動デプロイする方法、<GlossaryTerm name="ci">CI</GlossaryTerm>/<GlossaryTerm name="cd">CD</GlossaryTerm> でテストを通したあとに自動で本番に反映する方法の違いを理解します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          手動デプロイはミスや手順のばらつきが起きやすく、CI/CD にすると再現性と安全性が上がります。まずは「<GlossaryTerm name="push">push</GlossaryTerm>でデプロイ」から始めて、必要に応じてテストや承認を挟む形にするとよいです。
        </p>
      </div>,
      {
        samplePrompt: `GitHub の main ブランチに push したら自動で Render にデプロイされるようにしたいです。Render と GitHub の連携手順と、デプロイ時に実行されるコマンドの設定を教えてください。`,
      }
    ),
    step(
      '3-2',
      '環境の分離（開発・ステージング・本番とシークレット）',
      <div className="space-y-4">
        <p>
          <strong>開発・<GlossaryTerm name="staging">ステージング</GlossaryTerm>・本番</strong>を環境として分離し、本番の<GlossaryTerm name="config">設定</GlossaryTerm>や<GlossaryTerm name="secret">シークレット</GlossaryTerm>を他環境と混在させません。<GlossaryTerm name="deploy">デプロイ</GlossaryTerm>時は環境ごとの設定やブランチで切り替えます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          本番の秘密が開発環境に漏れると誤操作や漏洩の原因になります。PaaS では「Environment」や「Service」ごとに変数を分けられるため、その仕組みを活用します。
        </p>
      </div>,
      {
        samplePrompt: `Render で開発用と本番用のサービスを分けたいです。同じリポジトリで、ブランチや環境変数で開発・本番を切り替える構成の例を教えてください。`,
      }
    ),
    step(
      '3-3',
      '起動方法とプロセス管理（systemd・PaaS の起動コマンド・再起動）',
      <div className="space-y-4">
        <p>
          サービスとして常時動かすには、<strong>プロセスの起動方法</strong>（VPS なら<GlossaryTerm name="systemd">systemd</GlossaryTerm>、PaaS なら起動コマンドの指定）と、落ちたときの<strong>再起動</strong>の設定を押さえます。<GlossaryTerm name="logging">ログ</GlossaryTerm>の出力先・見方も確認します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          落ちたときに再起動されないとサービスが止まったままになり、不具合の原因をログで追うにはデプロイ環境の基本が分かっている必要があります。
        </p>
      </div>,
      {
        samplePrompt: `Render に Flask アプリをデプロイしました。アプリが落ちたときのログの確認方法と、再起動の設定を教えてください。また、起動コマンド（gunicorn など）の指定方法も知りたいです。`,
      }
    ),
    step(
      '3-4',
      'ロールバックとリリース手順（戻し方・ダウンタイムを減らす考え方）',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="deploy">デプロイ</GlossaryTerm>後に問題が出たときの<strong><GlossaryTerm name="rollback">ロールバック</GlossaryTerm></strong>（前のバージョンに戻す）手順を決めておきます。Git の<GlossaryTerm name="tag">タグ</GlossaryTerm>や<GlossaryTerm name="releaseNumber">リリース番号</GlossaryTerm>で「どのコミットを本番にしているか」を管理し、戻すときはそのコミットを再デプロイする形が一般的です。可能ならダウンタイムを減らすため、<GlossaryTerm name="blueGreen">ブルーグリーン</GlossaryTerm>や<GlossaryTerm name="canary">canary</GlossaryTerm>のイメージも知っておくとよいです。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          不具合が出たときに「すぐ戻す」手順がないと影響が広がります。<GlossaryTerm name="rollback">ロールバック</GlossaryTerm>手順をドキュメント化し、一度練習しておくと安心です。
        </p>
      </div>,
      {
        samplePrompt: `Render でデプロイしたアプリで、問題があったときに前のバージョンにロールバックする手順を決めたいです。Git のタグやコミットを指定してデプロイし直す方法を教えてください。`,
      }
    ),
  ],
}
