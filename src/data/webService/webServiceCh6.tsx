import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { WebServiceChapter } from './types'
import { step } from './types'

export const WEB_SERVICE_CHAPTER_6: WebServiceChapter = {
  id: 'ws-ch6',
  title: '第6章：可用性と復旧',
  steps: [
    step(
      '6-1',
      '可用性の目標（稼働率・RTO・RPO の意味）',
      <div className="space-y-4">
        <p>
          <strong>稼働率</strong>（例: 99.9%）・<GlossaryTerm name="rto">RTO</GlossaryTerm>（復旧までに許容する時間）・<GlossaryTerm name="rpo">RPO</GlossaryTerm>（復旧時点で許容するデータ損失）の意味を押さえ、自社サービスでどこまでを目標にするかを決めます。目標に応じて、<GlossaryTerm name="redundancy">冗長化</GlossaryTerm>やバックアップのレベルが変わります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          「止まってもよい時間」「データをどこまで戻すか」を決めていないと、障害時の判断がぶれます。小さなサービスでも RTO・RPO をざっくり決めておくと、バックアップ頻度や<GlossaryTerm name="redundancy">冗長化</GlossaryTerm>の要不要が判断しやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `社内向けの小規模 Web API で、可用性の目標を決めたいです。RTO と RPO の意味と、目標の立て方（例: 稼働時間内は 1 時間以内に復旧など）を教えてください。`,
      }
    ),
    step(
      '6-2',
      '冗長化とスケーリング（複数インスタンス・オートスケールのイメージ）',
      <div className="space-y-4">
        <p>
          <strong><GlossaryTerm name="redundancy">冗長化</GlossaryTerm></strong>（複数<GlossaryTerm name="instance">インスタンス</GlossaryTerm>で 1 台落ちても続ける）と<strong><GlossaryTerm name="scaling">スケーリング</GlossaryTerm></strong>（負荷に応じて<GlossaryTerm name="instance">インスタンス</GlossaryTerm>を増やす）のイメージを押さえます。PaaS では<GlossaryTerm name="instance">インスタンス</GlossaryTerm>数や<GlossaryTerm name="autoScale">オートスケール</GlossaryTerm>の設定で対応できることが多く、まずは「複数インスタンスで動かす」ことの意味を理解します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          単一<GlossaryTerm name="instance">インスタンス</GlossaryTerm>だと、その 1 台の障害でサービス全体が止まります。可用性を上げるには<GlossaryTerm name="redundancy">冗長化</GlossaryTerm>が基本で、負荷が増えたときは<GlossaryTerm name="scale">スケール</GlossaryTerm>で対応します。
        </p>
      </div>,
      {
        samplePrompt: `Render で Web サービスを動かしています。複数インスタンスにすることで可用性を上げたいです。インスタンス数の設定と、ロードバランサー経由で振り分けるときの注意点を教えてください。`,
      }
    ),
    step(
      '6-3',
      'バックアップとリストア（データ・設定・復旧手順）',
      <div className="space-y-4">
        <p>
          重要な<strong>データや設定</strong>を<strong>定期的にバックアップ</strong>し、<GlossaryTerm name="restore">リストア</GlossaryTerm>（復旧）手順を文書化して訓練します。<GlossaryTerm name="db">DB</GlossaryTerm> を使っている場合はバックアップの取得方法と保持期間、設定ファイルや<GlossaryTerm name="secret">シークレット</GlossaryTerm>のバックアップ方針も決めておきます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="ransomware">ランサムウェア</GlossaryTerm>や誤削除に備え、バックアップと復旧手順は必須に近い項目です。手順を書いておき、実際に<GlossaryTerm name="restore">リストア</GlossaryTerm>の練習をしておくと安心です。
        </p>
      </div>,
      {
        samplePrompt: `Flask アプリで SQLite を使っています。本番の DB を定期的にバックアップし、障害時にリストアする手順をドキュメントにしたいです。バックアップの取得方法とリストアのコマンド例を教えてください。`,
      }
    ),
    step(
      '6-4',
      '障害時の手順とエスカレーション（誰が・何をするか・連絡フロー）',
      <div className="space-y-4">
        <p>
          障害が起きたときの<strong>手順（検知・切り分け・復旧・事後対応）</strong>と、<GlossaryTerm name="escalation">エスカレーション</GlossaryTerm>（誰に・いつ連絡するか）を決めておきます。担当者・連絡先・「何をしたらエスカレーションするか」を 1 枚のドキュメントにまとめておくと、慌てずに対応できます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          手順がないと対応が遅れ、<GlossaryTerm name="secondaryDamage">二次被害</GlossaryTerm>が広がることがあります。小規模サービスでも、最低限の手順と連絡フローを書いておくことをおすすめします。
        </p>
      </div>,
      {
        samplePrompt: `社内向け Web API で障害が起きたときの対応手順を 1 枚のドキュメントにまとめたいです。検知から復旧までのステップと、エスカレーションの条件・連絡先のテンプレート例を教えてください。`,
      }
    ),
  ],
}
