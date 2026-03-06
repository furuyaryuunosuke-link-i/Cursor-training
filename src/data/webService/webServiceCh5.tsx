import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { WebServiceChapter } from './types'
import { step } from './types'

export const WEB_SERVICE_CHAPTER_5: WebServiceChapter = {
  id: 'ws-ch5',
  title: '第5章：監視と運用',
  steps: [
    step(
      '5-1',
      'ヘルスチェックと死活監視（/health・PaaS 連携）',
      <div className="space-y-4">
        <p>
          「サービスが生きているか」を確認する<strong><GlossaryTerm name="healthCheck">ヘルスチェック</GlossaryTerm>用の<GlossaryTerm name="endpoint">エンドポイント</GlossaryTerm></strong>（例: /health）を用意し、監視ツールや PaaS の死活監視と連携します。/health では DB 接続や依存サービスの状態も簡易チェックすると、より実態に即した監視になります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          障害時にいち早く気づいたり、自動再起動と組み合わせるには、<GlossaryTerm name="healthCheck">ヘルスチェック</GlossaryTerm>が標準的なやり方です。PaaS の多くはヘルスチェック URL を設定でき、応答がなければプロセスを再起動します。
        </p>
      </div>,
      {
        samplePrompt: `Flask アプリに /health のようなヘルスチェック用のエンドポイントを追加したいです。返すステータスコードとレスポンスの形式の慣例、以及び DB 接続チェックを入れる場合の例を教えてください。`,
      }
    ),
    step(
      '5-2',
      'ログの集約と確認（出力先・ログレベル・本番での見方）',
      <div className="space-y-4">
        <p>
          アプリの<GlossaryTerm name="logging">ログ</GlossaryTerm>の<strong>出力先・ログレベル・本番での見方</strong>を決めます。標準出力に出すと PaaS が集約してくれることが多く、本番ではログレベルを<GlossaryTerm name="logLevelInfo">INFO</GlossaryTerm>や<GlossaryTerm name="logLevelWarning">WARNING</GlossaryTerm>にし、エラー時だけ詳細を追えるようにします。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          障害の原因を追うにはログが必須です。どこにログが出ているか・どう検索するかを押さえておかないと、いざというときに手間取ります。
        </p>
      </div>,
      {
        samplePrompt: `Render にデプロイした Flask アプリのログを、本番で確認しやすくしたいです。Python の logging で標準出力に JSON 形式で出す設定と、Render のログ画面での見方を教えてください。`,
      }
    ),
    step(
      '5-3',
      'メトリクスとアラート（レスポンス時間・エラー率・閾値と通知）',
      <div className="space-y-4">
        <p>
          <strong><GlossaryTerm name="metrics">メトリクス</GlossaryTerm></strong>（レスポンス時間・エラー率・リクエスト数など）を取得し、閾値を超えたときに<strong><GlossaryTerm name="alert">アラート</GlossaryTerm></strong>（メール・Slack など）で通知する仕組みを検討します。PaaS の<GlossaryTerm name="dashboard">ダッシュボード</GlossaryTerm>や、外部の APM・監視サービスを利用する方法があります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          ログだけでは「気づいたときにはすでに障害が続いていた」になりがちです。<GlossaryTerm name="metrics">メトリクス</GlossaryTerm>と<GlossaryTerm name="alert">アラート</GlossaryTerm>で異常を早く検知すると、影響を小さくできます。
        </p>
      </div>,
      {
        samplePrompt: `小規模な Flask API で、レスポンス時間が遅いときやエラー率が高いときに Slack に通知したいです。無料で使える監視・アラートの方法（Uptime Robot や PaaS の機能など）を教えてください。`,
      }
    ),
    step(
      '5-4',
      'ダッシュボードと日常確認（何を毎日見るか・異常の見つけ方）',
      <div className="space-y-4">
        <p>
          運用で<strong>毎日・毎週確認する項目</strong>を決め、<GlossaryTerm name="dashboard">ダッシュボード</GlossaryTerm>やログの見方をドキュメント化します。レスポンス時間・エラー数・<GlossaryTerm name="disk">ディスク</GlossaryTerm>使用量・デプロイ履歴など、異常を疑うときのチェックリストがあると、属人化を防げます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          「何をどう見ればよいか」が分からないと、運用が形骸化します。最低限の確認項目と、異常時の<GlossaryTerm name="escalation">エスカレーション</GlossaryTerm>先を決めておくと安心です。
        </p>
      </div>,
      {
        samplePrompt: `社内向け Web API の日常運用で、毎日確認すべき項目をチェックリストにしたいです。レスポンス時間・エラー率・ログの確認方法と、異常時の連絡フローの例を教えてください。`,
      }
    ),
  ],
}
