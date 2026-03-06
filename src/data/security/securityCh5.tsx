import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { SecurityChapter } from './types'
import { step } from './types'

export const SECURITY_CHAPTER_5: SecurityChapter = {
  id: 'sec-ch5',
  title: '第5章：依存関係とサプライチェーン',
  steps: [
    step(
      '5-1',
      '依存ライブラリの脆弱性把握（pip audit / npm audit / Dependabot）',
      <div className="space-y-4">
        <p>
          使っている<GlossaryTerm name="module">モジュール</GlossaryTerm>（ライブラリ）に既知の脆弱性がないか、<strong><GlossaryTerm name="pipAudit">pip audit</GlossaryTerm></strong>（Python）や<strong><GlossaryTerm name="npmAudit">npm audit</GlossaryTerm></strong>（Node）、GitHub の<strong><GlossaryTerm name="dependabot">Dependabot</GlossaryTerm></strong>で定期的に確認します。検出されたら優先度に応じてアップデートや回避策を取ります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          古いライブラリには既知の<GlossaryTerm name="vulnerability">脆弱性</GlossaryTerm>が含まれることがあり、サプライチェーン攻撃の入口になります。<GlossaryTerm name="enterprise">エンタープライズ</GlossaryTerm>では SBOM や<GlossaryTerm name="vulnerability">脆弱性</GlossaryTerm>スキャンが求められることが多いです。
        </p>
      </div>,
      {
        samplePrompt: `Python のプロジェクトで、使っているライブラリに既知の脆弱性がないか確認する方法を教えてください。pip audit の使い方と、Dependabot のアラートを有効にする手順も知りたいです。`,
      }
    ),
    step(
      '5-2',
      'SBOM とバージョン固定（何が入っているかの一覧・再現性）',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="sbom">SBOM（Software Bill of Materials）</GlossaryTerm>は、アプリに含まれるパッケージの一覧です。<GlossaryTerm name="requirementsTxt">requirements.txt</GlossaryTerm> や <GlossaryTerm name="lockFile">lock ファイル</GlossaryTerm>で<GlossaryTerm name="version">バージョン</GlossaryTerm>を固定し、<GlossaryTerm name="build">ビルド</GlossaryTerm>の再現性を確保します。SBOM を出力するツール（<GlossaryTerm name="syft">syft</GlossaryTerm> など）で監査や納品に備えます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          「何が入っているか」を明示することで、脆弱性の影響範囲の把握や、調達元の要件（SBOM 提出）に対応できます。
        </p>
      </div>,
      {
        samplePrompt: `Python プロジェクトで、依存関係を lock ファイル（pip freeze や pip-tools）で固定したいです。再現可能なビルドの手順と、SBOM を生成するツールの例（syft や cyclonedx）を教えてください。`,
      }
    ),
    step(
      '5-3',
      'ライセンス確認とポリシー（利用可否・義務表示）',
      <div className="space-y-4">
        <p>
          利用するライブラリの<strong><GlossaryTerm name="license">ライセンス</GlossaryTerm></strong>を確認し、社内ポリシー（<GlossaryTerm name="gpl">GPL</GlossaryTerm> 禁止など）に照らして利用可否を判断します。義務表示が必要な<GlossaryTerm name="license">ライセンス</GlossaryTerm>では、README や <GlossaryTerm name="oss">OSS</GlossaryTerm> 一覧に記載します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="license">ライセンス</GlossaryTerm>違反は法的リスクになり、<GlossaryTerm name="enterprise">エンタープライズ</GlossaryTerm>の調達では<GlossaryTerm name="license">ライセンス</GlossaryTerm>一覧の提出が求められることがあります。
        </p>
      </div>,
      {
        samplePrompt: `Python の requirements.txt に記載しているパッケージのライセンスを一覧化したいです。licensecheck や pip-licenses のようなツールの使い方と、GPL と MIT の違いを簡単に教えてください。`,
      }
    ),
    step(
      '5-4',
      'パッケージ取得元の信頼性（公式・checksum・プライベートレジストリ）',
      <div className="space-y-4">
        <p>
          パッケージは<strong>公式の<GlossaryTerm name="registry">レジストリ</GlossaryTerm></strong>（<GlossaryTerm name="pypi">PyPI</GlossaryTerm>、<GlossaryTerm name="npm">npm</GlossaryTerm> など）や社内のプライベート<GlossaryTerm name="registry">レジストリ</GlossaryTerm>から取得し、<GlossaryTerm name="checksum">checksum</GlossaryTerm> で改ざんを検知します。信頼できない URL や個人のミラーを安易に使わないようにします。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          サプライチェーン攻撃では、悪意あるパッケージが混入することがあります。取得元の制限と整合性確認が推奨されています。
        </p>
      </div>,
      {
        samplePrompt: `pip でインストールするパッケージの取得元を社内の PyPI ミラーに限定し、ハッシュで固定してインストールしたいです。pip の --index-url とハッシュ指定の方法を教えてください。`,
      }
    ),
  ],
}
