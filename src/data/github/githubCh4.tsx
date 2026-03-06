import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { GitHubChapter } from './types'
import { step } from './types'

export const GITHUB_CHAPTER_4: GitHubChapter = {
  id: 'gh-ch4',
  title: '第4章：GitHub Pages で公開',
  steps: [
    step(
      '4-1',
      'GitHub Pages の設定',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="github">GitHub</GlossaryTerm> の<GlossaryTerm name="repository">リポジトリ</GlossaryTerm>で、<strong>Settings → Pages</strong> を開きます。
          <GlossaryTerm name="pagesSource">Source</GlossaryTerm> を「Deploy from a branch」にし、<GlossaryTerm name="staticSite">静的サイト</GlossaryTerm>を<GlossaryTerm name="branch">ブランチ</GlossaryTerm>から公開する形にします。無料で公開用の URL が発行されます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          作った HTML や React の<GlossaryTerm name="build">ビルド</GlossaryTerm>結果を、誰でもアクセスできる URL で見られるようにするときに GitHub Pages が手軽です。
        </p>
      </div>,
      {
        samplePrompt: `GitHub のリポジトリを GitHub Pages で公開したいです。Settings の Pages で「Deploy from a branch」を選ぶ手順を教えてください。`,
      }
    ),
    step(
      '4-2',
      'ブランチとフォルダの指定',
      <div className="space-y-4">
        <p>
          Pages の設定で、<strong>Branch</strong> に main（または gh-pages）、<strong>Folder</strong> に / (root) または /docs を選びます。
          ルートに index.html がある場合は root、<GlossaryTerm name="vite">Vite</GlossaryTerm> などで<GlossaryTerm name="build">ビルド</GlossaryTerm>結果を docs に出力している場合は /docs を指定します。保存すると数分で反映されます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          どの<GlossaryTerm name="branch">ブランチ</GlossaryTerm>のどのフォルダを「公開用」とするかを決めないと、Pages が正しいファイルを配信できません。
        </p>
      </div>,
      {
        samplePrompt: `Vite で作ったプロジェクトを GitHub Pages で公開したいです。ビルド出力を docs にして、Pages の Branch と Folder をどう設定すればよいか教えてください。`,
      }
    ),
    step(
      '4-3',
      '公開 URL とカスタムドメインのイメージ',
      <div className="space-y-4">
        <p>
          公開されると <strong>https://your-username.github.io/リポジトリ名/</strong> のような URL でアクセスできます。
          カスタムドメイン（自分で持っているドメイン）を割り当てることもできます。Pages の設定で Custom domain を指定し、<GlossaryTerm name="dns">DNS</GlossaryTerm> で <GlossaryTerm name="cname">CNAME</GlossaryTerm> を設定する流れです。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          まずはデフォルトの xxx.github.io の URL で公開できれば十分です。社内で「この URL で見て」と共有するときにも使えます。
        </p>
      </div>,
      {
        samplePrompt: `GitHub Pages で公開したサイトの URL の形式を教えてください。リポジトリ名が my-app で、ユーザー名が myuser の場合の URL も知りたいです。`,
      }
    ),
    step(
      '4-4',
      '更新の流れ（push で自動反映）',
      <div className="space-y-4">
        <p>
          ソースを変更して<GlossaryTerm name="push">push</GlossaryTerm>すると、GitHub Pages が自動で再デプロイし、数分以内に公開サイトに反映されます。
          <GlossaryTerm name="build">ビルド</GlossaryTerm>が必要なプロジェクト（<GlossaryTerm name="vite">Vite</GlossaryTerm> など）の場合は、main に <GlossaryTerm name="push">push</GlossaryTerm> する前に <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">npm run build</code> してから docs などを<GlossaryTerm name="commit">コミット</GlossaryTerm>するか、GitHub Actions で<GlossaryTerm name="build">ビルド</GlossaryTerm>〜デプロイを自動化する方法があります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          「<GlossaryTerm name="push">push</GlossaryTerm> すれば公開が更新される」という流れを押さえておくと、運用が楽になります。
        </p>
      </div>,
      {
        samplePrompt: `GitHub Pages にデプロイした静的サイトを更新したいです。ローカルで変更して push したら反映される流れを、確認の仕方も含めて教えてください。`,
      }
    ),
  ],
}
