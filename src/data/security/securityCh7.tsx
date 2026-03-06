import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { SecurityChapter } from './types'
import { step } from './types'

export const SECURITY_CHAPTER_7: SecurityChapter = {
  id: 'sec-ch7',
  title: '第7章：設定・デプロイのハードニング',
  steps: [
    step(
      '7-1',
      'デフォルト設定の変更（デフォルトパスワード・デバッグモードオフ）',
      <div className="space-y-4">
        <p>
          本番では<strong>デフォルトパスワード</strong>を必ず変更し、デバッグモードや管理画面のデフォルトパスを無効化します。<GlossaryTerm name="framework">フレームワーク</GlossaryTerm>や<GlossaryTerm name="middleware">ミドルウェア</GlossaryTerm>の「そのまま」の設定は、チェックリストで確認してから公開します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          デフォルトのままの設定は、スキャンや<GlossaryTerm name="penetration">ペネトレーション</GlossaryTerm>テストで即検出されます。<GlossaryTerm name="enterprise">エンタープライズ</GlossaryTerm>では<GlossaryTerm name="hardening">ハードニング</GlossaryTerm>チェックリストの実施が求められることが多いです。
        </p>
      </div>,
      {
        samplePrompt: `Flask を本番で動かすとき、DEBUG をオフにし、SECRET_KEY を環境変数から読み、デフォルトの設定で危険なものがないかチェックリストを作りたいです。確認すべき項目を教えてください。`,
      }
    ),
    step(
      '7-2',
      '環境の分離（開発／検証／本番・シークレットの切り替え）',
      <div className="space-y-4">
        <p>
          <strong>開発・検証・本番</strong>を環境として分離し、本番の<GlossaryTerm name="config">設定</GlossaryTerm>や<GlossaryTerm name="secret">シークレット</GlossaryTerm>を他環境と混在させません。デプロイ時は環境ごとの設定ファイルや環境変数で切り替えます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          本番の秘密が開発環境に漏れると、誤操作や漏洩の原因になります。監査では環境分離が確認されます。
        </p>
      </div>,
      {
        samplePrompt: `開発・ステージング・本番で、接続先 DB と API キーを切り替えたいです。環境変数で ENV=production などを設定し、それに応じて設定を読み分ける Python の設計例を教えてください。`,
      }
    ),
    step(
      '7-3',
      '実行権限とネットワーク（最小権限・必要なポートだけ開く）',
      <div className="space-y-4">
        <p>
          アプリや<GlossaryTerm name="server">サーバー</GlossaryTerm>は<strong>必要最小限の権限</strong>で実行し、<GlossaryTerm name="root">root</GlossaryTerm> や管理者で動かさないようにします。ネットワークでは、必要な<GlossaryTerm name="port">ポート</GlossaryTerm>だけを開放し、管理用は <GlossaryTerm name="vpn">VPN</GlossaryTerm> や <GlossaryTerm name="ipRestriction">IP 制限</GlossaryTerm>で保護します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          過剰な権限は、侵害されたときの影響を大きくします。<GlossaryTerm name="enterprise">エンタープライズ</GlossaryTerm>では「最小権限」と「必要なだけ開く」が基本です。
        </p>
      </div>,
      {
        samplePrompt: `Linux で Python アプリを systemd で動かすとき、root ではなく専用ユーザーで実行したいです。ユーザー作成と、そのユーザーでしか読めない設定ファイルの権限設定を教えてください。`,
      }
    ),
    step(
      '7-4',
      '設定のコード管理とレビュー（設定のバージョン管理・機密の混入防止）',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="config">設定</GlossaryTerm>は<GlossaryTerm name="git">Git</GlossaryTerm>などで<GlossaryTerm name="version">バージョン</GlossaryTerm>管理し、変更履歴を残します。ただし<strong><GlossaryTerm name="secret">シークレット</GlossaryTerm>はリポジトリに含めず</strong>、.env.example やテンプレートだけをコミットし、本番値は別経路で注入します。設定変更はレビューしてから反映します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          設定の誤りや秘密の混入は、本番障害や漏洩につながります。変更の追跡可能性は監査でも重要です。
        </p>
      </div>,
      {
        samplePrompt: `設定ファイルを Git で管理したいが、パスワードは含めたくありません。config.example.yaml にプレースホルダを書き、本番では環境変数で上書きするパターンの例を教えてください。`,
      }
    ),
  ],
}
