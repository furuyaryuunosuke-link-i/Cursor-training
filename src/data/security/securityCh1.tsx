import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { SecurityChapter } from './types'
import { step } from './types'

export const SECURITY_CHAPTER_1: SecurityChapter = {
  id: 'sec-ch1',
  title: '第1章：秘密・認証情報の管理',
  steps: [
    step(
      '1-1',
      'コードに秘密を書かない（.env・環境変数・.gitignore）',
      <div className="space-y-4">
        <p>
          パスワードや<GlossaryTerm name="token">トークン</GlossaryTerm>、<GlossaryTerm name="apiKey">API キー</GlossaryTerm>は
          <GlossaryTerm name="envFile">.env ファイル</GlossaryTerm>や
          <GlossaryTerm name="environmentVariable">環境変数</GlossaryTerm>に置き、
          <GlossaryTerm name="code">コード</GlossaryTerm>内に直接書かないようにします。.env は .gitignore に含め、チームでは .env.example で必要なキー名だけ共有します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          秘密情報をコードに書くと、Git にコミットしたときにリポジトリに残り、漏洩の原因になります。<GlossaryTerm name="enterprise">エンタープライズ</GlossaryTerm>の監査では「<GlossaryTerm name="secret">シークレット</GlossaryTerm>が<GlossaryTerm name="source">ソース</GlossaryTerm>に含まれていないか」がチェックされます。
        </p>
      </div>,
      {
        samplePrompt: `業務用ツールで API キーやパスワードを .env で管理したいです。コード内で環境変数を読み込む方法と、.gitignore に .env を追加する理由を、初心者向けに教えてください。`,
      }
    ),
    step(
      '1-2',
      'シークレットの格納場所（環境変数 vs シークレットマネージャ）',
      <div className="space-y-4">
        <p>
          小規模なら環境変数や .env で十分ですが、本番やチーム運用では<GlossaryTerm name="secretManager">シークレットマネージャ</GlossaryTerm>（<GlossaryTerm name="awsSecretsManager">AWS Secrets Manager</GlossaryTerm>、<GlossaryTerm name="hashicorpVault">HashiCorp Vault</GlossaryTerm>、<GlossaryTerm name="azureKeyVault">Azure Key Vault</GlossaryTerm> など）の利用を検討します。アクセス制御・監査ログ・ローテーションがしやすくなります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="enterprise">エンタープライズ</GlossaryTerm>では「誰がいつ<GlossaryTerm name="secret">シークレット</GlossaryTerm>にアクセスしたか」の証跡や、鍵の一括ローテーションが求められることがあります。シークレットマネージャはその要件を満たしやすくします。
        </p>
      </div>,
      {
        samplePrompt: `ローカル開発では .env を使い、本番では AWS Secrets Manager から秘密を読みたいです。環境ごとに切り替える設計と、Python で Secrets Manager を参照する最小例を教えてください。`,
      }
    ),
    step(
      '1-3',
      '秘密の受け渡しとローテーション（有効期限・再発行の考え方）',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="apiKey">API キー</GlossaryTerm>や<GlossaryTerm name="token">トークン</GlossaryTerm>には<strong>有効期限</strong>を設け、期限切れ前に再発行（ローテーション）する運用にします。受け渡しはメールやチャットではなく、シークレットマネージャや安全な共有手段を使います。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          漏洩しても被害を時間で限定でき、監査では「定期的なローテーション」が推奨されています。受け渡しの履歴が残らない方法だと追跡が難しくなるため、管理可能な経路を使います。
        </p>
      </div>,
      {
        samplePrompt: `API トークンの有効期限を 90 日にして、期限切れ前にアラートを出してローテーションする運用をしたいです。実装の考え方と、.env や設定ファイルに「有効期限」を書いておく場合の注意点を教えてください。`,
      }
    ),
    step(
      '1-4',
      'CI/CD やスクリプトで秘密を扱うときの注意（マスク・履歴に残さない）',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="ci">CI</GlossaryTerm>/<GlossaryTerm name="cd">CD</GlossaryTerm>（GitHub Actions など）やスクリプトで<GlossaryTerm name="secret">シークレット</GlossaryTerm>を使うときは、<strong>ログに出力しない・マスクする</strong>設定にします。環境変数で渡す場合も、シェルの履歴や<GlossaryTerm name="job">ジョブ</GlossaryTerm>ログに残らないようにします。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="build">ビルド</GlossaryTerm>ログや<GlossaryTerm name="job">ジョブ</GlossaryTerm>履歴は共有されやすく、<GlossaryTerm name="secret">シークレット</GlossaryTerm>が平文で出ていると漏洩につながります。多くの CI では「secret」を設定するとログでマスクされるため、その仕組みを正しく使う必要があります。
        </p>
      </div>,
      {
        samplePrompt: `GitHub Actions でデプロイするときに、API キーを Secrets で渡して使いたいです。ワークフロー内で環境変数に設定する方法と、ログに秘密が出力されないようにする設定を教えてください。`,
      }
    ),
  ],
}
