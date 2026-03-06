import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { SecurityChapter } from './types'
import { step } from './types'

export const SECURITY_CHAPTER_4: SecurityChapter = {
  id: 'sec-ch4',
  title: '第4章：通信の保護',
  steps: [
    step(
      '4-1',
      'HTTPS と証明書（常時 TLS・証明書の確認）',
      <div className="space-y-4">
        <p>
          本番の Web や<GlossaryTerm name="api">API</GlossaryTerm>は<strong><GlossaryTerm name="https">HTTPS</GlossaryTerm>（<GlossaryTerm name="tls">TLS</GlossaryTerm>）</strong>で提供し、通信を暗号化します。<GlossaryTerm name="certificate">証明書</GlossaryTerm>の有効期限を監視し、<GlossaryTerm name="selfSignedCertificate">自己署名証明書</GlossaryTerm>を本番で使わないようにします。クライアントから API を呼ぶときも、証明書の検証を無効にしないようにします。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          平文の <GlossaryTerm name="http">HTTP</GlossaryTerm> は盗聴・改ざんの対象になり、監査で指摘されます。<GlossaryTerm name="enterprise">エンタープライズ</GlossaryTerm>では「常時 TLS」と<GlossaryTerm name="certificate">証明書</GlossaryTerm>の適切な管理が前提です。
        </p>
      </div>,
      {
        samplePrompt: `Python の requests で外部 API を呼ぶとき、SSL 証明書の検証を有効にしたまま、タイムアウトとリトライを設定したいです。証明書エラーが出たときに無効化せずに確認する方法を教えてください。`,
      }
    ),
    step(
      '4-2',
      '安全な HTTP ヘッダー（CSP, X-Frame-Options, HSTS など）',
      <div className="space-y-4">
        <p>
          Web アプリでは<strong><GlossaryTerm name="securityHeader">セキュリティヘッダー</GlossaryTerm></strong>を設定します。<GlossaryTerm name="csp">CSP</GlossaryTerm>（Content-Security-Policy）でスクリプトの読み込み元を制限、<GlossaryTerm name="xFrameOptions">X-Frame-Options</GlossaryTerm> で<GlossaryTerm name="clickjacking">クリックジャッキング</GlossaryTerm>を防ぎ、HSTS で HTTPS への強制リダイレクトを促します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          ヘッダー不足は<GlossaryTerm name="vulnerability">脆弱性</GlossaryTerm>診断で指摘されやすく、<GlossaryTerm name="owasp">OWASP</GlossaryTerm> でも推奨されています。特に XSS や<GlossaryTerm name="clickjacking">クリックジャッキング</GlossaryTerm>の軽減に役立ちます。
        </p>
      </div>,
      {
        samplePrompt: `Flask アプリにセキュリティヘッダー（X-Frame-Options: DENY, X-Content-Type-Options: nosniff, Content-Security-Policy の基本）を追加したいです。ミドルウェアで設定する例を教えてください。`,
      }
    ),
    step(
      '4-3',
      'CORS と API のアクセス制御（許可オリジン・認証付き API）',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="frontend">フロント</GlossaryTerm>から別オリジンの<GlossaryTerm name="api">API</GlossaryTerm>を呼ぶときは<GlossaryTerm name="cors">CORS</GlossaryTerm>を正しく設定します。「*」で全<GlossaryTerm name="origin">オリジン</GlossaryTerm>を許可せず、必要な<GlossaryTerm name="origin">オリジン</GlossaryTerm>だけに絞り、認証付き API では <GlossaryTerm name="credentials">credentials</GlossaryTerm> と<GlossaryTerm name="origin">オリジン</GlossaryTerm>を組み合わせて設定します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          CORS の緩い設定は、意図しないサイトから API が呼ばれる原因になります。監査では「許可<GlossaryTerm name="origin">オリジン</GlossaryTerm>の明示」が確認されます。
        </p>
      </div>,
      {
        samplePrompt: `Flask で API を提供していて、特定のオリジン（https://myapp.example.com）だけから fetch でアクセスを許可したいです。CORS の設定例と、認証付き（Cookie 送信）の場合の注意点を教えてください。`,
      }
    ),
    step(
      '4-4',
      'レート制限とエラーレスポンス（DoS 軽減・スタックトレースを出さない）',
      <div className="space-y-4">
        <p>
          外部<GlossaryTerm name="api">API</GlossaryTerm>を呼ぶときは<GlossaryTerm name="rateLimit">レート制限</GlossaryTerm>を守り、自前の API では<strong>レート制限</strong>を実装して <GlossaryTerm name="dos">DoS</GlossaryTerm> を軽減します。エラーレスポンスでは<GlossaryTerm name="stackTrace">スタックトレース</GlossaryTerm>や内部<GlossaryTerm name="path">パス</GlossaryTerm>を返さず、ユーザー向けの簡潔なメッセージにします。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          過剰なリクエストでサービスが落ちたり、エラー内容から内部構造が漏れると、監査・<GlossaryTerm name="penetration">ペネトレーション</GlossaryTerm>で指摘されます。
        </p>
      </div>,
      {
        samplePrompt: `Python で外部 API を呼ぶスクリプトを書いています。レート制限に引っかからないように 1 リクエストごとに少し待つ方法と、429 が返ってきたときのリトライ方法を教えてください。あわせて、Flask で API にレート制限をかける簡単な方法も知りたいです。`,
      }
    ),
  ],
}
