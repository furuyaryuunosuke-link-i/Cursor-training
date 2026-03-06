import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { GitHubChapter } from './types'
import { step } from './types'

export const GITHUB_CHAPTER_2: GitHubChapter = {
  id: 'gh-ch2',
  title: '第2章：履歴と変更の確認',
  steps: [
    step(
      '2-1',
      'コミット履歴を見る（log）',
      <div className="space-y-4">
        <p>
          <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">git log</code> で、これまでの<GlossaryTerm name="commit">コミット</GlossaryTerm>履歴を確認できます。
          どの<GlossaryTerm name="commit">コミット</GlossaryTerm>がいつ・誰によって行われたかが分かります。オプションで <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">--oneline</code> を使うと一行表示で見やすくなります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          「いつ何を変更したか」を追うときに履歴が役立ちます。問題が出たときに「どのコミットまで戻すか」の判断にも使います。
        </p>
      </div>,
      {
        samplePrompt: `git log でコミット履歴を見たいです。最近 5 件だけ、コミットメッセージを一行で表示する方法を教えてください。`,
      }
    ),
    step(
      '2-2',
      '変更状況を確認する（status / diff）',
      <div className="space-y-4">
        <p>
          <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">git status</code> で、どのファイルが変更されているか・<GlossaryTerm name="stage">ステージ</GlossaryTerm>されているかが分かります。
          <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">git diff</code> で、変更内容の差分を確認できます。<GlossaryTerm name="commit">コミット</GlossaryTerm>前に「何を変えたか」を確認するときに使います。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="status">status</GlossaryTerm> と <GlossaryTerm name="diff">diff</GlossaryTerm> で変更の全体像を把握しておくと、意図しないファイルを<GlossaryTerm name="commit">コミット</GlossaryTerm>するのを防げます。
        </p>
      </div>,
      {
        samplePrompt: `変更したファイルの一覧と、まだステージしていない変更の差分を見たいです。git status と git diff の使い分けを教えてください。`,
      }
    ),
    step(
      '2-3',
      'どのファイルが変わったかを追う',
      <div className="space-y-4">
        <p>
          業務では「何を直したか」を<GlossaryTerm name="commit">コミット</GlossaryTerm>メッセージと変更ファイルで残しておくと、あとから原因を追いやすくなります。
          特定のファイルの履歴を見るには <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">git log -- ファイル名</code> が使えます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          不具合が「いつ頃入ったか」を切り分けるとき、どのファイルのどの変更が影響しているかを追えると便利です。
        </p>
      </div>,
      {
        samplePrompt: `あるファイルがいつ・どのコミットで変更されたかを確認したいです。git log でそのファイルの履歴だけを見る方法を教えてください。`,
      }
    ),
    step(
      '2-4',
      '取り消しのイメージ（reset / checkout）',
      <div className="space-y-4">
        <p>
          まだ<GlossaryTerm name="commit">コミット</GlossaryTerm>していない変更を捨てるには <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">git checkout -- ファイル名</code> や
          <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">git restore ファイル名</code> が使えます。
          直前の<GlossaryTerm name="commit">コミット</GlossaryTerm>を取り消す（やり直す）には <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1 text-sm">git reset</code> がありますが、使い方によっては履歴が変わるため慎重に使います。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          誤って変更してしまったときや「やっぱり戻したい」ときに、取り消しの基本を知っていると安心です。<GlossaryTerm name="push">push</GlossaryTerm> 済みの履歴を変えるのは避けた方がよいです。
        </p>
      </div>,
      {
        samplePrompt: `まだコミットしていない変更を全部捨てて、最後のコミットの状態に戻したいです。安全な方法を教えてください。`,
      }
    ),
  ],
}
