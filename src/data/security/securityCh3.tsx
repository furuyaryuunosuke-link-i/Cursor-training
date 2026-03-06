import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { SecurityChapter } from './types'
import { step } from './types'

export const SECURITY_CHAPTER_3: SecurityChapter = {
  id: 'sec-ch3',
  title: '第3章：認証・認可',
  steps: [
    step(
      '3-1',
      '認証と認可の違い（誰が・何をできるか）',
      <div className="space-y-4">
        <p>
          <strong><GlossaryTerm name="authentication">認証</GlossaryTerm>（Authentication）</strong>は「誰か」を確認すること（ログイン）。<strong>認可（Authorization）</strong>は「その人が何をしてよいか」を決めること（権限・ロール）。両方を明確に分けて設計すると、監査でも説明しやすくなります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="enterprise">エンタープライズ</GlossaryTerm>では「誰がどのリソースにアクセスできるか」の一貫性が問われます。<GlossaryTerm name="authentication">認証</GlossaryTerm>だけして認可を忘れると、ログインしたユーザーが他人のデータにアクセスできる<GlossaryTerm name="vulnerability">脆弱性</GlossaryTerm>になり得ます。
        </p>
      </div>,
      {
        samplePrompt: `小さな Web アプリで、ログインしたユーザーごとに「自分のデータだけ」見られるようにしたいです。認証（誰か）と認可（何にアクセスできるか）を分けて設計するときのポイントを教えてください。`,
      }
    ),
    step(
      '3-2',
      'パスワードと MFA（強度・保存方法・多要素認証の必要性）',
      <div className="space-y-4">
        <p>
          パスワードは<strong><GlossaryTerm name="hashing">ハッシュ化</GlossaryTerm></strong>して保存し、平文や可逆暗号で保存しないようにします。可能であれば<GlossaryTerm name="mfa">MFA（多要素認証）</GlossaryTerm>を有効にし、パスワード漏洩時でも第二の要素で守れるようにします。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          パスワードの平文保存や弱いハッシュは、監査で即指摘されます。<GlossaryTerm name="soc2">SOC2</GlossaryTerm> や <GlossaryTerm name="iso27001">ISO 27001</GlossaryTerm> では、特権アクセスに MFA を求めることが一般的です。
        </p>
      </div>,
      {
        samplePrompt: `Python でユーザーのパスワードを保存するとき、bcrypt でハッシュする方法と、ログイン時に照合する方法を教えてください。あわせて、MFA を導入する場合の一般的な流れ（TOTP など）も簡単に教えてください。`,
      }
    ),
    step(
      '3-3',
      'セッションとトークンの扱い（有効期限・ログアウト・保存場所）',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="token">トークン</GlossaryTerm>や<GlossaryTerm name="session">セッション</GlossaryTerm>には<strong>有効期限</strong>を設け、ログアウト時にはサーバー側で無効化します。<GlossaryTerm name="frontend">フロント</GlossaryTerm>ではトークンを<GlossaryTerm name="localStorage">localStorage</GlossaryTerm>に平文で置かず、HttpOnly <GlossaryTerm name="cookie">クッキー</GlossaryTerm>やメモリで扱うことを検討します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          トークンの長寿命化や XSS で盗まれる保存方法は、<GlossaryTerm name="sessionHijack">セッションハイジャック</GlossaryTerm>の原因になります。監査では<GlossaryTerm name="session">セッション</GlossaryTerm>管理のポリシーが確認されます。
        </p>
      </div>,
      {
        samplePrompt: `Flask で JWT を使った API 認証をしています。トークンの有効期限を短くし、リフレッシュトークンで更新する設計にしたいです。クライアント側でトークンをどこに保存するか（localStorage と HttpOnly cookie の違い）も教えてください。`,
      }
    ),
    step(
      '3-4',
      '最小権限の原則（必要な権限だけ付与・ロール設計の考え方）',
      <div className="space-y-4">
        <p>
          <strong>最小権限の原則</strong>では、ユーザーやプロセスには「必要な最小限の権限」だけを付与します。ロール（管理者・一般・閲覧のみなど）を決め、機能ごとに「どのロールがアクセスできるか」を明文化します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          全員に管理者権限を付けると、漏洩時の影響が大きくなります。<GlossaryTerm name="enterprise">エンタープライズ</GlossaryTerm>ではロールベースのアクセス制御（<GlossaryTerm name="rbac">RBAC</GlossaryTerm>）が標準的に求められます。
        </p>
      </div>,
      {
        samplePrompt: `社内ツールで「管理者」「編集者」「閲覧のみ」の 3 ロールを用意したいです。各ロールでできる操作を表にまとめ、API の認可チェックでロールをどう見るかの設計例を教えてください。`,
      }
    ),
  ],
}
