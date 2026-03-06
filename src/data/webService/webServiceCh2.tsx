import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { WebServiceChapter } from './types'
import { step } from './types'

export const WEB_SERVICE_CHAPTER_2: WebServiceChapter = {
  id: 'ws-ch2',
  title: '第2章：デプロイの基礎',
  steps: [
    step(
      '2-1',
      'どこに載せるか（VPS・PaaS・コンテナ）',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="backend">バックエンド</GlossaryTerm>を動かす場所として、
          VPS（自分で OS を管理）・PaaS（Heroku、Render、Railway など）・コンテナ（Docker）の違いを理解します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          選び方で、初期構築の手間・運用の負荷・コストが変わります。
          小規模なら PaaS が手軽で、慣れてきたら VPS やコンテナも検討できます。
        </p>
      </div>,
      {
        samplePrompt: `Python の Flask で作った小さな API を、社内からアクセスできる形で公開したいです。VPS、PaaS（Render など）、Docker のどれが向いているか、メリット・デメリットを比較して教えてください。`,
      }
    ),
    step(
      '2-2',
      '起動方法とログの見方',
      <div className="space-y-4">
        <p>
          サービスとして常時動かすには、<strong>プロセスの起動方法</strong>（systemd・PaaS の起動コマンドなど）と、
          <GlossaryTerm name="logging">ログ</GlossaryTerm>の出力先・見方を押さえます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          落ちたときに再起動したり、不具合の原因をログで追うには、デプロイ環境の基本が分かっている必要があります。
        </p>
      </div>,
      {
        samplePrompt: `Render に Flask アプリをデプロイしました。アプリが落ちたときのログの確認方法と、再起動の設定を教えてください。`,
      }
    ),
  ],
}
