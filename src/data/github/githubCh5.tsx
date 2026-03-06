import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { GitHubChapter } from './types'
import { step } from './types'

export const GITHUB_CHAPTER_5: GitHubChapter = {
  id: 'gh-ch5',
  title: '第5章：GitHub Actions の基礎',
  steps: [
    step(
      '5-1',
      'ワークフローとは',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="github">GitHub</GlossaryTerm> Actions では、<strong><GlossaryTerm name="push">push</GlossaryTerm> や <GlossaryTerm name="pullRequest">Pull Request</GlossaryTerm></strong> をトリガーに、自動でスクリプト（テスト・<GlossaryTerm name="build">ビルド</GlossaryTerm>・デプロイなど）を実行できます。
          設定は<GlossaryTerm name="repository">リポジトリ</GlossaryTerm>内の <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">.github/workflows/*.yml</code> に YAML で書きます。CI/CD の入口としてよく使われます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          手動で「テストしてから <GlossaryTerm name="push">push</GlossaryTerm>」を忘れがちなので、<GlossaryTerm name="push">push</GlossaryTerm> したら自動でテストや<GlossaryTerm name="build">ビルド</GlossaryTerm>が走るようにしておくと安心です。
        </p>
      </div>,
      {
        samplePrompt: `GitHub Actions のワークフローとは何か、push したときに自動で何か実行するにはどうすればよいかを、初心者向けに教えてください。`,
      }
    ),
    step(
      '5-2',
      'push でワークフローを動かす',
      <div className="space-y-4">
        <p>
          <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">.github/workflows/ci.yml</code> のようなファイルを作り、<strong>on: push</strong> で「<GlossaryTerm name="push">push</GlossaryTerm> されたときに実行」と書きます。
          jobs の中で run でコマンド（例: npm ci && npm run build）を実行します。保存して <GlossaryTerm name="push">push</GlossaryTerm> すると、Actions タブで実行履歴が確認できます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          最小限の「<GlossaryTerm name="push">push</GlossaryTerm> で何か動かす」を体験しておくと、あとからテストやデプロイを追加しやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `main ブランチに push したときに、npm ci と npm run build を実行する GitHub Actions のワークフローファイルの最小例を教えてください。`,
      }
    ),
    step(
      '5-3',
      'Secrets の使い方',
      <div className="space-y-4">
        <p>
          ワークフロー内でパスワードや API キーを使うときは、<strong>Secrets</strong> に登録してから参照します。
          <GlossaryTerm name="repository">リポジトリ</GlossaryTerm>の Settings → Secrets and variables → Actions で追加し、YAML では <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">{'${{ secrets.名前 }}'}</code> で参照します。ログには出さないよう、GitHub がマスクしてくれます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="code">コード</GlossaryTerm>に秘密を書くと漏洩の原因になります。Secrets に置いてワークフローからだけ参照すると、安全にデプロイや外部 API 連携ができます。
        </p>
      </div>,
      {
        samplePrompt: `GitHub Actions のワークフローで、デプロイ用の API キーを使いたいです。Secrets に登録する手順と、YAML 内で参照する書き方を教えてください。ログに出力されないようにする注意点も知りたいです。`,
      }
    ),
    step(
      '5-4',
      'デプロイ連携のイメージ',
      <div className="space-y-4">
        <p>
          push をトリガーに、テスト→ビルド→本番やステージングへのデプロイ、という流れを自動化できます。
          Render や Vercel などは GitHub 連携で「push したらデプロイ」が設定しやすく、より細かい制御をしたい場合は Actions から API を叩いてデプロイする方法もあります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          手動デプロイは手順の抜けや環境差が起きやすいです。<GlossaryTerm name="push">push</GlossaryTerm> で自動デプロイされるようにしておくと、再現性が上がります。
        </p>
      </div>,
      {
        samplePrompt: `GitHub の main に push したら自動で Render にデプロイされるようにしたいです。GitHub Actions でデプロイする方法と、Render の GitHub 連携で「push でデプロイ」にする方法の違いを教えてください。`,
      }
    ),
  ],
}
