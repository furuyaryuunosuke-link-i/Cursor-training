import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { GitHubChapter } from './types'
import { step } from './types'

export const GITHUB_CHAPTER_6: GitHubChapter = {
  id: 'gh-ch6',
  title: '第6章：Issues と Pull Request',
  steps: [
    step(
      '6-1',
      'Issue でタスク管理',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="github">GitHub</GlossaryTerm> の<strong>Issues</strong>では、やること・バグ報告・質問を「1 件 1 Issue」で管理できます。
          タイトルと本文を書き、<GlossaryTerm name="label">ラベル</GlossaryTerm>や<GlossaryTerm name="milestone">マイルストーン</GlossaryTerm>を付けると、あとからフィルタや一覧で追いやすくなります。自分用の TODO としても使えます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          「何を直すか」「何を追加するか」を Issue に書いておくと、忘れずに済み、複数人で共有するときも役立ちます。
        </p>
      </div>,
      {
        samplePrompt: `GitHub のリポジトリで、やることを Issue に書いて管理したいです。Issue の作り方と、ラベルで「バグ」「機能追加」を分ける方法を教えてください。`,
      }
    ),
    step(
      '6-2',
      'Pull Request で変更を提案する',
      <div className="space-y-4">
        <p>
          <strong><GlossaryTerm name="pullRequest">Pull Request</GlossaryTerm>（<GlossaryTerm name="pr">PR</GlossaryTerm>）</strong>は、<GlossaryTerm name="branch">ブランチ</GlossaryTerm>で行った変更を main などに取り込む前に「この変更でよいか」を確認・議論するための仕組みです。
          <GlossaryTerm name="branch">ブランチ</GlossaryTerm>を <GlossaryTerm name="push">push</GlossaryTerm> したあと、GitHub 上で「Compare & pull request」から <GlossaryTerm name="pr">PR</GlossaryTerm> を作成し、変更内容の説明を書きます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          いきなり main に<GlossaryTerm name="merge">マージ</GlossaryTerm>せず、<GlossaryTerm name="pr">PR</GlossaryTerm> で一度レビューしてもらう習慣にすると、ミスや方針のずれを減らせます。
        </p>
      </div>,
      {
        samplePrompt: `feature ブランチで変更を push したあと、main にマージする前に Pull Request を作りたいです。PR の作成手順と、説明文に書いておくとよいことを教えてください。`,
      }
    ),
    step(
      '6-3',
      'レビューの流れ',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="pr">PR</GlossaryTerm> を作成すると、他の人が<strong>コードや説明にコメント</strong>できます。指摘されたら該当箇所を直し、再度<GlossaryTerm name="commit">コミット</GlossaryTerm>して <GlossaryTerm name="push">push</GlossaryTerm> すると <GlossaryTerm name="pr">PR</GlossaryTerm> に反映されます。
          問題なければ <strong>Approve</strong> してもらい、<GlossaryTerm name="merge">マージ</GlossaryTerm>できる状態にします。小さなチームでは「自分で確認してから<GlossaryTerm name="merge">マージ</GlossaryTerm>」でもよいです。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          レビューを挟むと、<GlossaryTerm name="typo">typo</GlossaryTerm> や設計の見落としに気づきやすくなります。コメントのやり取りも <GlossaryTerm name="pr">PR</GlossaryTerm> 上に残るので、あとから理由を追いやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `Pull Request にレビューコメントを付けてもらいたいです。レビューの依頼の仕方と、指摘を受けたときに修正して反映する流れを教えてください。`,
      }
    ),
    step(
      '6-4',
      'マージと運用',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="pr">PR</GlossaryTerm> が承認されたら、<strong>Merge</strong> ボタンで main に取り込みます。<GlossaryTerm name="merge">マージ</GlossaryTerm>後は、使った feature <GlossaryTerm name="branch">ブランチ</GlossaryTerm>を削除してかまいません。
          main は「常に動く・誰が使ってもよい」状態に保つと、共同作業がしやすくなります。保護ルールで「main に直接 <GlossaryTerm name="push">push</GlossaryTerm> 禁止・<GlossaryTerm name="pr">PR</GlossaryTerm> 必須」にすることもできます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="merge">マージ</GlossaryTerm>後の<GlossaryTerm name="branch">ブランチ</GlossaryTerm>削除で一覧がすっきりし、main を常に安定させる運用にすると、次の作業の起点が分かりやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `PR をマージしたあと、feature ブランチを削除してよいか、また main を保護して直接 push できないようにする設定を教えてください。`,
      }
    ),
  ],
}
