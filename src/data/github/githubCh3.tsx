import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { GitHubChapter } from './types'
import { step } from './types'

export const GITHUB_CHAPTER_3: GitHubChapter = {
  id: 'gh-ch3',
  title: '第3章：ブランチと共同作業',
  steps: [
    step(
      '3-1',
      'ブランチとは何か',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="branch">ブランチ</GlossaryTerm>は、main とは別の「枝」で作業するための仕組みです。
          新しい機能を試したり、本番のコードを壊さずに変更を加えたりするときに使います。<GlossaryTerm name="branch">ブランチ</GlossaryTerm>を作ってそこで<GlossaryTerm name="commit">コミット</GlossaryTerm>し、問題なければ main に取り込む（<GlossaryTerm name="merge">マージ</GlossaryTerm>）流れが基本です。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          直接 main で作業すると、失敗したときに戻しづらくなります。<GlossaryTerm name="branch">ブランチ</GlossaryTerm>で試してから main に反映すると、安全に変更を重ねられます。
        </p>
      </div>,
      {
        samplePrompt: `Git のブランチとは何か、main とその他のブランチの関係を、初心者向けに図や比喩で説明してください。`,
      }
    ),
    step(
      '3-2',
      'main と feature ブランチ',
      <div className="space-y-4">
        <p>
          通常、<strong>main</strong> は「常に動く状態」にしておき、新機能や大きな変更は <strong>feature/〇〇</strong> のような<GlossaryTerm name="branch">ブランチ</GlossaryTerm>で作業します。
          <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">git checkout -b feature/xxx</code> で新しい<GlossaryTerm name="branch">ブランチ</GlossaryTerm>を作成して切り替え、そこで<GlossaryTerm name="commit">コミット</GlossaryTerm>します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          main を安定させたまま、別の場所で試行できるようにすると、複数人で作業するときも混乱が減ります。
        </p>
      </div>,
      {
        samplePrompt: `main から新しいブランチ feature/add-form を作り、そのブランチでコミットする手順を教えてください。ブランチの切り替え方も知りたいです。`,
      }
    ),
    step(
      '3-3',
      'マージと pull のイメージ',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="branch">ブランチ</GlossaryTerm>の変更を main に取り込むことを<strong><GlossaryTerm name="merge">マージ</GlossaryTerm></strong>といいます。
          <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">git merge ブランチ名</code> で、現在の<GlossaryTerm name="branch">ブランチ</GlossaryTerm>に指定した<GlossaryTerm name="branch">ブランチ</GlossaryTerm>の変更を取り込みます。
          <GlossaryTerm name="remote">リモート</GlossaryTerm>の変更を自分のローカルに取り込むには <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">git pull</code> を使います。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          自分以外が <GlossaryTerm name="push">push</GlossaryTerm> した変更や、別<GlossaryTerm name="branch">ブランチ</GlossaryTerm>で進めた作業を main に反映するときに、<GlossaryTerm name="merge">merge</GlossaryTerm> と <GlossaryTerm name="pull">pull</GlossaryTerm> の流れを理解している必要があります。
        </p>
      </div>,
      {
        samplePrompt: `feature ブランチで作業が終わったので、main に切り替えてそのブランチをマージしたいです。手順と、マージ後に feature ブランチを削除してよいかも教えてください。`,
      }
    ),
    step(
      '3-4',
      'リモートとの同期（push / pull）',
      <div className="space-y-4">
        <p>
          日々の流れとして、作業前に <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">git pull</code> で<GlossaryTerm name="remote">リモート</GlossaryTerm>の最新を取り込み、作業後に<GlossaryTerm name="push">push</GlossaryTerm>して共有します。
          同じファイルを別の人が変更していると<strong><GlossaryTerm name="conflict">コンフリクト</GlossaryTerm></strong>が起きることがあります。<GlossaryTerm name="conflict">コンフリクト</GlossaryTerm>が起きたときは、該当ファイルを開いて「どちらの変更を残すか」を手で解決する必要があることを押さえておきます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          複数人で同じ<GlossaryTerm name="repository">リポジトリ</GlossaryTerm>を触る場合、<GlossaryTerm name="push">push</GlossaryTerm> と <GlossaryTerm name="pull">pull</GlossaryTerm> の習慣がないと相手の変更が上書きされたり、逆に自分の変更が古いままになったりします。
        </p>
      </div>,
      {
        samplePrompt: `毎日作業を始める前に git pull して、終わるときに push する習慣をつけたいです。pull のときに「コンフリクト」と出た場合、何をすればよいかも簡単に教えてください。`,
      }
    ),
  ],
}
