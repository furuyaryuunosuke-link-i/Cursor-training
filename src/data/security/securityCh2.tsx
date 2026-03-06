import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { SecurityChapter } from './types'
import { step } from './types'

export const SECURITY_CHAPTER_2: SecurityChapter = {
  id: 'sec-ch2',
  title: '第2章：入力・データの検証とサニタイズ',
  steps: [
    step(
      '2-1',
      '入力を信頼しない（バリデーション・ホワイトリスト）',
      <div className="space-y-4">
        <p>
          フォームやファイル・<GlossaryTerm name="api">API</GlossaryTerm>から受け取った入力は、そのまま処理せず、
          <strong>形式・範囲・必須項目</strong>を<GlossaryTerm name="validation">バリデーション</GlossaryTerm>してから使います。許可する値を<GlossaryTerm name="whitelist">ホワイトリスト</GlossaryTerm>で決めると安全です。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          想定外の文字列や長い入力が入ると、エラーや<GlossaryTerm name="injection">インジェクション</GlossaryTerm>の原因になります。<GlossaryTerm name="enterprise">エンタープライズ</GlossaryTerm>の<GlossaryTerm name="vulnerability">脆弱性</GlossaryTerm>診断では入力検証の有無が重点的に確認されます。
        </p>
      </div>,
      {
        samplePrompt: `Python で、ユーザーが入力した CSV ファイルのパスを受け取って処理するツールを作っています。パスが存在するか・拡張子が .csv か・文字コードは何にするか、といったチェックを入れる方法を教えてください。`,
      }
    ),
    step(
      '2-2',
      'パス・コマンドの安全な扱い（パストラバーサル・コマンドインジェクション）',
      <div className="space-y-4">
        <p>
          ファイル<GlossaryTerm name="path">パス</GlossaryTerm>や外部<GlossaryTerm name="command">コマンド</GlossaryTerm>を組み立てるときは、入力に「..」や「|」「;」などが含まれていないか確認し、<GlossaryTerm name="pathTraversal">パストラバーサル</GlossaryTerm>や<GlossaryTerm name="injection">コマンドインジェクション</GlossaryTerm>を防ぎます。引数は<GlossaryTerm name="whitelist">ホワイトリスト</GlossaryTerm>で許可する形にします。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          入力された文字列をそのまま<GlossaryTerm name="path">パス</GlossaryTerm>や<GlossaryTerm name="command">コマンド</GlossaryTerm>に埋め込むと、意図しないファイルへのアクセスや任意コマンド実行の危険があります。<GlossaryTerm name="penetration">ペネトレーション</GlossaryTerm>テストでよく検証される項目です。
        </p>
      </div>,
      {
        samplePrompt: `ユーザーが指定したフォルダ内のファイルだけを処理する Python スクリプトを書いています。「..」で親ディレクトリに抜けないようにする、正規化とチェックの方法を教えてください。`,
      }
    ),
    step(
      '2-3',
      '出力のエスケープと XSS 対策（HTML/JS に出すときの無害化）',
      <div className="space-y-4">
        <p>
          ユーザー入力をそのまま<GlossaryTerm name="html">HTML</GlossaryTerm>や<GlossaryTerm name="javascript">JavaScript</GlossaryTerm>に埋め込むと、<GlossaryTerm name="xss">XSS（クロスサイトスクリプティング）</GlossaryTerm>の原因になります。表示するときは<GlossaryTerm name="escape">エスケープ</GlossaryTerm>するか、テンプレートの自動エスケープ機能を使います。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          XSS は <GlossaryTerm name="owasp">OWASP</GlossaryTerm> Top 10 に含まれる代表的な<GlossaryTerm name="vulnerability">脆弱性</GlossaryTerm>です。監査では「入力の出力時の<GlossaryTerm name="escape">エスケープ</GlossaryTerm>」が確認されます。<GlossaryTerm name="react">React</GlossaryTerm> などはデフォルトでエスケープしますが、<GlossaryTerm name="dangerouslySetInnerHTML">dangerouslySetInnerHTML</GlossaryTerm> を使う場合は注意が必要です。
        </p>
      </div>,
      {
        samplePrompt: `ユーザーが入力したテキストを Web ページに表示するとき、XSS を防ぐためにエスケープしたいです。HTML の特殊文字（&lt; &gt; &quot; など）をエスケープする JavaScript の関数の例と、React で安全に表示する方法を教えてください。`,
      }
    ),
    step(
      '2-4',
      'ファイルアップロードと個人情報（拡張子・MIME・PII の取り扱い）',
      <div className="space-y-4">
        <p>
          ファイルアップロードでは、<strong><GlossaryTerm name="extension">拡張子</GlossaryTerm>・<GlossaryTerm name="mimeType">MIME タイプ</GlossaryTerm>・内容</strong>を検証し、実行可能ファイルやスクリプトを拒否します。個人情報（<GlossaryTerm name="pii">PII</GlossaryTerm>）を含むデータは、保存場所・アクセス制御・<GlossaryTerm name="logging">ログ</GlossaryTerm>に出すかどうかを決めておきます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          悪意あるファイルのアップロードや、個人情報の漏洩は監査・法規制で重大な指摘になります。アップロード先の<GlossaryTerm name="path">パス</GlossaryTerm>と権限、<GlossaryTerm name="logging">ログ</GlossaryTerm>に <GlossaryTerm name="pii">PII</GlossaryTerm> を出さないことも重要です。
        </p>
      </div>,
      {
        samplePrompt: `Web アプリで画像ファイルのアップロードを受け付ける API を作っています。拡張子だけでなく MIME タイプやマジックバイトで検証する方法と、保存先のファイル名を安全に生成する方法を教えてください。`,
      }
    ),
  ],
}
