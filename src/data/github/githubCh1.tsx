import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { GitHubChapter } from './types'
import { step } from './types'

export const GITHUB_CHAPTER_1: GitHubChapter = {
  id: 'gh-ch1',
  title: '第1章：リポジトリと初回プッシュ',
  steps: [
    step(
      '1-1',
      'GitHub でリポジトリを作成する',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="github">GitHub</GlossaryTerm> の画面上で「New repository」から<GlossaryTerm name="repository">リポジトリ</GlossaryTerm>を作成します。
          <GlossaryTerm name="readme">README</GlossaryTerm> や <GlossaryTerm name="gitignore">.gitignore</GlossaryTerm> は、既にローカルにある場合は追加しなくてよいです。作成後に表示される<GlossaryTerm name="repository">リポジトリ</GlossaryTerm>の URL を控えておきます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          コードを置く「入れ物」を GitHub 上に用意しないと、あとから<GlossaryTerm name="push">push</GlossaryTerm>できません。空の<GlossaryTerm name="repository">リポジトリ</GlossaryTerm>で十分です。
        </p>
      </div>,
      {
        samplePrompt: `GitHub で新しいリポジトリを作りたいです。空のリポジトリ（README を追加しない）で作成する手順と、作成後に控えておく URL の確認方法を教えてください。`,
      }
    ),
    step(
      '1-2',
      'ローカルで Git を初期化し、リモートを追加する',
      <div className="space-y-4">
        <p>
          プロジェクトフォルダで<GlossaryTerm name="terminal">ターミナル</GlossaryTerm>を開き、
          <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">git init</code> で<GlossaryTerm name="git">Git</GlossaryTerm>を初期化します。
          続けて <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">git remote add origin https://github.com/your-username/your-repo.git</code> で<GlossaryTerm name="remote">リモート</GlossaryTerm>を追加します。URL は自分の<GlossaryTerm name="repository">リポジトリ</GlossaryTerm>に置き換えてください。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="init">init</GlossaryTerm> でこのフォルダを Git の管理下にし、<GlossaryTerm name="remote">remote</GlossaryTerm> で「どこに push するか」を紐づけます。一度設定すれば以降は <GlossaryTerm name="push">push</GlossaryTerm> するだけです。
        </p>
      </div>,
      {
        samplePrompt: `今開いているフォルダを Git で管理し、既に作った GitHub のリポジトリをリモートとして追加したいです。git init と git remote add origin の手順を、PowerShell で実行する想定で教えてください。`,
      }
    ),
    step(
      '1-3',
      'コミットしてプッシュする',
      <div className="space-y-4">
        <p>
          <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">git add .</code> で全ファイルを<GlossaryTerm name="stage">ステージ</GlossaryTerm>し、
          <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">git commit -m "Initial commit: 〇〇"</code> で<GlossaryTerm name="commit">コミット</GlossaryTerm>します。
          続けて <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">git branch -M main</code> と
          <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">git push -u origin main</code> で main <GlossaryTerm name="branch">ブランチ</GlossaryTerm>を<GlossaryTerm name="push">push</GlossaryTerm>します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          変更を「<GlossaryTerm name="commit">コミット</GlossaryTerm>」という単位で記録し、<GlossaryTerm name="push">push</GlossaryTerm> で GitHub に送ります。初回は -u で <GlossaryTerm name="upstream">upstream</GlossaryTerm> を設定しておくと、次からは git push だけで済みます。
        </p>
      </div>,
      {
        samplePrompt: `git add . と git commit、git push まで一気に実行したいです。コミットメッセージは「初回コミット」で、ブランチは main にしたいです。PowerShell で実行するコマンドの順番を教えてください。`,
      }
    ),
    step(
      '1-4',
      'プッシュの確認とよくあるエラー',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="push">push</GlossaryTerm>後、<GlossaryTerm name="github">GitHub</GlossaryTerm> の<GlossaryTerm name="repository">リポジトリ</GlossaryTerm>ページでファイルが反映されているか確認します。
          認証を求められたら<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>またはトークンでログインします。よくあるエラーとして、<GlossaryTerm name="remoteUrl">リモート URL</GlossaryTerm>の打ち間違い・<GlossaryTerm name="branch">ブランチ</GlossaryTerm>名の不一致・認証エラーがあります。エラーメッセージの意味と対処のイメージを押さえておきます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          初回 <GlossaryTerm name="push">push</GlossaryTerm> では認証や URL の設定ミスで失敗することがあります。どこを確認すればよいか分かっていると、自分で直しやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `git push で「Permission denied」や「remote: Repository not found」と出たときに、何を確認すればよいか教えてください。GitHub の設定と、リモート URL の確認方法も知りたいです。`,
      }
    ),
  ],
}
