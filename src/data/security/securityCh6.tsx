import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { SecurityChapter } from './types'
import { step } from './types'

export const SECURITY_CHAPTER_6: SecurityChapter = {
  id: 'sec-ch6',
  title: '第6章：ログ・監査証跡',
  steps: [
    step(
      '6-1',
      'ログに秘密を出さない（マスキング・フィルタ）',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="logging">ログ</GlossaryTerm>には、エラー内容や処理の流れを残す一方で、
          パスワード・<GlossaryTerm name="token">トークン</GlossaryTerm>・個人情報は出力しないようにします。<GlossaryTerm name="masking">マスキング</GlossaryTerm>（*** に置き換え）や、<GlossaryTerm name="confidentialField">機密フィールド</GlossaryTerm>をフィルタする処理を入れます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          ログファイルが共有・バックアップされるとき、<GlossaryTerm name="secret">シークレット</GlossaryTerm>が含まれていると漏洩リスクになります。監査では「ログに機密が含まれていないか」が確認されます。
        </p>
      </div>,
      {
        samplePrompt: `Python のログで、API レスポンスをデバッグ用に出力したいのですが、トークンやパスワードが含まれないようにするにはどうすればよいですか？ マスキングやフィルタの実装例を教えてください。`,
      }
    ),
    step(
      '6-2',
      '監査に必要な情報を残す（誰が・いつ・何をしたか）',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="auditTrail">監査証跡</GlossaryTerm>として、「誰が（ユーザー/サービス）・いつ・何をしたか」をログに残します。ログイン・権限変更・重要データの参照・更新など、後から追えるようにします。タイムスタンプは UTC などで統一するとよいです。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="soc2">SOC2</GlossaryTerm> や <GlossaryTerm name="iso27001">ISO 27001</GlossaryTerm> では監査証跡が要件になっています。<GlossaryTerm name="incident">インシデント</GlossaryTerm>時の原因追及にも必要です。
        </p>
      </div>,
      {
        samplePrompt: `Web アプリで、ログイン・ログアウト・重要 API の呼び出しを監査ログに残したいです。ログに含めるべき項目（ユーザーID、時刻、アクション、結果）と、Python で構造化ログ（JSON）に書く例を教えてください。`,
      }
    ),
    step(
      '6-3',
      'ログの保存と保持期間（改ざん防止・バックアップ・リテンション）',
      <div className="space-y-4">
        <p>
          ログは<strong>改ざんされにくい</strong>場所に保存し、必要に応じてバックアップと保持期間（<GlossaryTerm name="retention">リテンション</GlossaryTerm>）を決めます。本番ではログの書き込み権限を制限し、集中ログ（<GlossaryTerm name="cloudWatch">CloudWatch</GlossaryTerm>、<GlossaryTerm name="splunk">Splunk</GlossaryTerm> など）に送る構成も検討します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          監査では「ログが改ざんされていないか」「保持期間が守られているか」が問われることがあります。
        </p>
      </div>,
      {
        samplePrompt: `アプリのログをファイルに書き、30 日でローテーションして 90 日分保持したいです。Python の logging で RotatingFileHandler を使う例と、ログファイルの権限設定の考え方を教えてください。`,
      }
    ),
    step(
      '6-4',
      '障害時のエラーメッセージ（ユーザー向けと内部向けの切り分け）',
      <div className="space-y-4">
        <p>
          ユーザーに返す<strong>エラーメッセージ</strong>は、内部の実装詳細（<GlossaryTerm name="stackTrace">スタックトレース</GlossaryTerm>・<GlossaryTerm name="path">パス</GlossaryTerm>・<GlossaryTerm name="db">DB</GlossaryTerm> 名）を含めず、簡潔な文言にします。詳細はサーバー側のログだけに残し、本番ではデバッグモードをオフにします。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          エラーに内部情報が含まれると、攻撃者にヒントを与え、<GlossaryTerm name="vulnerability">脆弱性</GlossaryTerm>診断で指摘されます。
        </p>
      </div>,
      {
        samplePrompt: `Flask で、本番ではユーザーに汎用的なエラーメッセージだけ返し、詳細はログにだけ書きたいです。例外ハンドリングとログ出力のパターン、DEBUG をオフにする設定を教えてください。`,
      }
    ),
  ],
}
