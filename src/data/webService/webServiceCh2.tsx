import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { WebServiceChapter } from './types'
import { step } from './types'

export const WEB_SERVICE_CHAPTER_2: WebServiceChapter = {
  id: 'ws-ch2',
  title: '第2章：ホスティングと実行環境',
  steps: [
    step(
      '2-1',
      'ホスティングの種類（VPS・PaaS・コンテナ・サーバーレス）',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="backend">バックエンド</GlossaryTerm>を動かす<GlossaryTerm name="hosting">ホスティング</GlossaryTerm>として、
          <GlossaryTerm name="vps">VPS</GlossaryTerm>（自分で OS を管理）・<GlossaryTerm name="paas">PaaS</GlossaryTerm>（<GlossaryTerm name="heroku">Heroku</GlossaryTerm>、<GlossaryTerm name="render">Render</GlossaryTerm>、<GlossaryTerm name="railway">Railway</GlossaryTerm> など）・<GlossaryTerm name="container">コンテナ</GlossaryTerm>（<GlossaryTerm name="docker">Docker</GlossaryTerm>）・<GlossaryTerm name="serverless">サーバーレス</GlossaryTerm>（<GlossaryTerm name="awsLambda">AWS Lambda</GlossaryTerm> など）の違いを理解します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          選び方で、初期構築の手間・運用の負荷・コストが変わります。小規模なら PaaS が手軽で、慣れてきたら VPS やコンテナも検討できます。
        </p>
      </div>,
      {
        samplePrompt: `Python の Flask で作った小さな API を、社内からアクセスできる形で公開したいです。VPS、PaaS（Render など）、Docker のどれが向いているか、メリット・デメリットを比較して教えてください。`,
      }
    ),
    step(
      '2-2',
      '選定の観点（コスト・運用負荷・スケール・ロックイン）',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="hosting">ホスティング</GlossaryTerm>を選ぶときは、<strong>コスト・運用負荷・<GlossaryTerm name="scale">スケール</GlossaryTerm>のしやすさ・<GlossaryTerm name="vendorLockIn">ベンダーロックイン</GlossaryTerm></strong>を比較します。小さいサービスから始めて、必要に応じて移行しやすい構成にしておく考え方も重要です。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          最初の選択が後からの移行コストを大きくすることがあります。「まず動かす」と「将来の拡張」のバランスを取って選ぶとよいです。
        </p>
      </div>,
      {
        samplePrompt: `Render と Railway と VPS で、月額コスト・運用の手軽さ・スケールのしやすさを比較したいです。社内向け小規模 API ならどれが向いているか、選定の観点を教えてください。`,
      }
    ),
    step(
      '2-3',
      'リージョンとネットワーク（遅延・データ所在地・VPC のイメージ）',
      <div className="space-y-4">
        <p>
          サービスを<strong>どの<GlossaryTerm name="region">リージョン</GlossaryTerm>（地域）</strong>に置くかで、アクセス遅延やデータの保存場所が変わります。社内からだけ使う場合は近いリージョン、個人情報を扱う場合はデータ所在地の要件も確認します。<GlossaryTerm name="vpc">VPC</GlossaryTerm> や<GlossaryTerm name="subnet">サブネット</GlossaryTerm>は「ネットワークの区切り」のイメージで押さえます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="region">リージョン</GlossaryTerm>によって<GlossaryTerm name="latency">レイテンシ</GlossaryTerm>や法規制の影響が変わります。最初に「どこに置くか」を決めておくと、あとからの変更が少なくて済みます。
        </p>
      </div>,
      {
        samplePrompt: `日本国内のユーザーが主に使う Web API を、レイテンシとデータ所在地を考慮してホスティングしたいです。主要クラウドのリージョン選びのポイントを教えてください。`,
      }
    ),
    step(
      '2-4',
      '実行環境の前提（ランタイム・メモリ・ディスク・環境変数の渡し方）',
      <div className="space-y-4">
        <p>
          選んだ<GlossaryTerm name="hosting">ホスティング</GlossaryTerm>で、<strong>どの<GlossaryTerm name="runtime">ランタイム</GlossaryTerm>（Python のバージョンなど）・メモリ・<GlossaryTerm name="disk">ディスク</GlossaryTerm></strong>が使えるか、<GlossaryTerm name="environmentVariable">環境変数</GlossaryTerm>や<GlossaryTerm name="secret">シークレット</GlossaryTerm>をどう渡すかを確認します。PaaS では設定画面や <GlossaryTerm name="yaml">YAML</GlossaryTerm> で指定することが多いです。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          ローカルでは動くが本番では動かない、という事象の多くは<GlossaryTerm name="runtime">ランタイム</GlossaryTerm>や<GlossaryTerm name="environmentVariable">環境変数</GlossaryTerm>の違いが原因です。事前に前提を押さえておくと<GlossaryTerm name="deploy">デプロイ</GlossaryTerm>がスムーズになります。
        </p>
      </div>,
      {
        samplePrompt: `Render に Python の Flask アプリをデプロイするとき、Python のバージョンと環境変数の設定方法を教えてください。requirements.txt の扱いと、本番用の設定の渡し方も知りたいです。`,
      }
    ),
  ],
}
