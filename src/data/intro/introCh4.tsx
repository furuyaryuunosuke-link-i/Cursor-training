import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { IntroChapter } from './types'
import { step } from './types'

const code = (s: string) => (
  <code className="bg-white/20 dark:bg-black/20 px-1.5 py-0.5 rounded text-sm font-mono">
    {s}
  </code>
)

export const INTRO_CHAPTER_4: IntroChapter = {
  id: 'ch4',
  title: '第4章：GitHubにアップロードしよう',
  steps: [
    step(
      '4-1',
      'GitHubの準備',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="github">GitHub</GlossaryTerm> のアカウントを持っていない場合は作成し、
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-dotted underline-offset-2"
          >
            ログインページ（https://github.com/）
          </a>
          にアクセスしてログインします。
        </p>
        <p>
          画面上で「New repository」から新しい<GlossaryTerm name="repository">リポジトリ</GlossaryTerm>を作成します。<GlossaryTerm name="repository">リポジトリ</GlossaryTerm>名は任意です。<GlossaryTerm name="readme">README</GlossaryTerm>
          や <GlossaryTerm name="gitignore">.gitignore</GlossaryTerm> は、既にローカルにファイルがある場合は追加しなくて構いません。
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          作成後、<GlossaryTerm name="repository">リポジトリ</GlossaryTerm>の URL（例：https://github.com/your-username/your-repo.git）を控えておきます。次のステップで使います。
        </p>
      </div>,
      {
        imageSrc: '/screenshots/4-1.png',
        imageAlt: 'GitHub の Repositories 画面で、新しいリポジトリ作成ボタンが表示されている様子。',
      }
    ),
    step(
      '4-2',
      'ターミナルでGitを動かす',
      <div className="space-y-4">
        <p>プロジェクトフォルダで<GlossaryTerm name="terminal">ターミナル</GlossaryTerm>を開きます。<GlossaryTerm name="cursor">Cursor</GlossaryTerm> の<GlossaryTerm name="terminal">ターミナル</GlossaryTerm>でも、PowerShell や<GlossaryTerm name="command">コマンド</GlossaryTerm>プロンプトでもかまいません。</p>
        <ol>
          <li>
            <strong>初回のみ：<GlossaryTerm name="git">Git</GlossaryTerm> を初期化</strong>
            <br />
            {code('git init')}
          </li>
          <li>
            <strong><GlossaryTerm name="remote">リモート</GlossaryTerm>を追加</strong>（URL は自分の<GlossaryTerm name="repository">リポジトリ</GlossaryTerm>に置き換える）
            <br />
            {code('git remote add origin https://github.com/your-username/your-repo.git')}
          </li>
          <li>
            <strong>全ファイルを<GlossaryTerm name="stage">ステージ</GlossaryTerm></strong>
            <br />
            {code('git add .')}
          </li>
          <li>
            <strong><GlossaryTerm name="commit">コミット</GlossaryTerm></strong>
            <br />
            {code('git commit -m "Initial commit: 今日のやることページ"')}
          </li>
        </ol>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          <GlossaryTerm name="github">GitHub</GlossaryTerm> へのログインを求められたら、<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>または<GlossaryTerm name="authentication">認証</GlossaryTerm>情報でログインしてください。
        </p>
      </div>,
      {
        samplePrompt: `いま開いているフォルダを、新しく作った GitHub リポジトリに push したいです。PowerShell で実行することを想定して、git init から最初の push までの手順とコマンドを教えてください。

前提:
- まだ Git の初期化はしていないか、よく分かりません。
- GitHub 上には空のリポジトリ（README などなし）を作ってあります。
- ブランチ名は main を使いたいです。`,
      }
    ),
    step(
      '4-3',
      'プッシュと公開',
      <div className="space-y-4">
        <p>main <GlossaryTerm name="branch">ブランチ</GlossaryTerm>で<GlossaryTerm name="push">プッシュ</GlossaryTerm>します。</p>
        <ol>
          <li>
            {code('git branch -M main')}
          </li>
          <li>
            {code('git push -u origin main')}
          </li>
        </ol>
        <p>
          <GlossaryTerm name="push">プッシュ</GlossaryTerm>が成功すると、<GlossaryTerm name="github">GitHub</GlossaryTerm> の<GlossaryTerm name="repository">リポジトリ</GlossaryTerm>ページにファイルが反映されます。
        </p>
        <h3>任意：<GlossaryTerm name="githubPages">GitHub Pages</GlossaryTerm> で公開</h3>
        <p className="text-sm">
          <GlossaryTerm name="repository">リポジトリ</GlossaryTerm>の Settings → Pages から、<GlossaryTerm name="pagesSource">Source</GlossaryTerm> を「Deploy from a branch」にし、<GlossaryTerm name="branch">branch</GlossaryTerm> を
          main、フォルダを / (root) または /docs にすると、<GlossaryTerm name="staticSite">静的サイト</GlossaryTerm>が URL で公開されます。
        </p>
      </div>,
      {
        samplePrompt: `git push や GitHub Pages の設定でエラーが出たときに、どう調べればよいか教えてください。

このあと実際にターミナルのエラー文や GitHub のスクリーンショットを貼るので、その内容をもとに原因と対処法を一緒に整理してほしいです。`,
      }
    ),
    step(
      '4-4',
      '入門クリア！おつかれさまでした',
      <div className="space-y-4">
        <p>
          ここまでで、<GlossaryTerm name="cursor">Cursor</GlossaryTerm> を使ってシンプルなページを作り、
          見た目を整え、<GlossaryTerm name="github">GitHub</GlossaryTerm> に<GlossaryTerm name="push">プッシュ</GlossaryTerm>するところまで到達しました。
        </p>
        <p>
          もしまだうまくいっていない箇所があれば、気になっている画面のスクリーンショットやエラーメッセージを
          AI に貼り付けて相談してみてください。入門の各ステップに戻って、分からないところだけやり直してもOKです。
        </p>
        <p>
          ここから先は、今日のやることリストを自分のチーム向けにアレンジしたり、別のページを作ってみたりと、
          自分の業務に近い形に広げていきましょう。
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          「一覧に戻る」ボタンから、気になる章・ステップを復習できます。
        </p>
      </div>
    ),
  ],
}
