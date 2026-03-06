import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { SecurityChapter } from './types'
import { step } from './types'

export const SECURITY_CHAPTER_8: SecurityChapter = {
  id: 'sec-ch8',
  title: '第8章：インシデント対応と復旧',
  steps: [
    step(
      '8-1',
      'インシデント対応の考え方（検知・封じ込め・復旧・事後対応）',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="incident">インシデント</GlossaryTerm>対応は<strong>検知 → 封じ込め → 復旧 → 事後対応</strong>の流れで考えます。検知は<GlossaryTerm name="logging">ログ</GlossaryTerm>やアラート、封じ込めは影響範囲を広げないための停止・隔離、復旧はバックアップからの復旧や<GlossaryTerm name="patch">パッチ</GlossaryTerm>適用、事後対応は原因分析と再発防止です。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="enterprise">エンタープライズ</GlossaryTerm>では<GlossaryTerm name="incident">インシデント</GlossaryTerm>対応手順の整備が求められます。手順がないと対応が遅れ、<GlossaryTerm name="secondaryDamage">二次被害</GlossaryTerm>が拡大します。
        </p>
      </div>,
      {
        samplePrompt: `小さな業務ツール向けに、インシデント対応の簡易手順書のテンプレートを作りたいです。「検知・封じ込め・復旧・事後対応」ごとに、チェックリスト形式で書く項目の例を教えてください。`,
      }
    ),
    step(
      '8-2',
      '連絡体制とエスカレーション（誰に・いつ・どう連絡するか）',
      <div className="space-y-4">
        <p>
          障害やセキュリティ事象が起きたときに<strong>誰に・いつ・どう連絡するか</strong>を決めておきます。<GlossaryTerm name="escalation">エスカレーション</GlossaryTerm>の条件（重大度・時間帯）と、連絡先一覧を<GlossaryTerm name="documentation">ドキュメント化</GlossaryTerm>し、定期的に確認します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          連絡が遅れると対応が遅れ、監査では「連絡体制の整備」が確認されることがあります。
        </p>
      </div>,
      {
        samplePrompt: `社内の業務ツールで障害が起きたときの連絡フローを 1 枚のドキュメントにまとめたいです。重大度の定義（S/M/L）と、誰にどう連絡するかのテンプレート例を教えてください。`,
      }
    ),
    step(
      '8-3',
      'バックアップとリストア（重要データのバックアップ・復旧手順の確認）',
      <div className="space-y-4">
        <p>
          重要なデータや<GlossaryTerm name="config">設定</GlossaryTerm>は<strong>定期的にバックアップ</strong>し、リストア手順を文書化して訓練します。バックアップの整合性確認と、復旧時間目標（<GlossaryTerm name="rto">RTO</GlossaryTerm>）を意識した頻度・保持期間を決めます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="ransomware">ランサムウェア</GlossaryTerm>や誤削除に備え、バックアップと復旧手順は監査・BCP で必須に近い項目です。
        </p>
      </div>,
      {
        samplePrompt: `業務ツールで使っている SQLite の DB と設定ファイルを、毎日バックアップしたいです。バックアップスクリプトの例と、リストア手順を README に書くときの項目例を教えてください。`,
      }
    ),
    step(
      '8-4',
      '事後分析と改善（ポストモーテム・再発防止策）',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="incident">インシデント</GlossaryTerm>の<strong>事後分析（<GlossaryTerm name="postMortem">ポストモーテム</GlossaryTerm>）</strong>で、原因・影響・対応の振り返りと再発防止策を記録します。非難ではなく「何が起きたか・どう防ぐか」に焦点を当て、<GlossaryTerm name="readme">README</GlossaryTerm> や社内ドキュメントに残します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          同じ事象の繰り返しを防ぎ、監査では「事後対応の記録」が求められることがあります。
        </p>
      </div>,
      {
        samplePrompt: `障害のポストモーテムを簡易テンプレートで残したいです。「起きたこと・原因・対応・再発防止策」を書くときの項目と、チームで振り返る際の進め方の例を教えてください。`,
      }
    ),
  ],
}
