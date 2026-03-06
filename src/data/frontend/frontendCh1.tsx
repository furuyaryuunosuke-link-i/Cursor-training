import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { FrontendChapter } from './types'
import { step } from './types'

export const FRONTEND_CHAPTER_1: FrontendChapter = {
  id: 'fe-ch1',
  title: '第1章：UI の状態管理',
  steps: [
    step(
      '1-1',
      '「状態」とは何か',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="frontend">フロント</GlossaryTerm>では、
          <strong>画面上の表示や入力値が「今どうなっているか」</strong>を「状態（state）」として持ち、
          それを更新すると表示が変わります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          フォームの入力・タブの選択・ローディング中かどうかなど、UI の変化はほぼすべて状態で表現されます。
          状態をどこに持つか・どう更新するかを決めると、<GlossaryTerm name="code">コード</GlossaryTerm>の見通しが良くなります。
        </p>
      </div>,
      {
        samplePrompt: `HTML と JavaScript で、入力フォームの値を「状態」として持ち、送信ボタンを押したときにその値を使う処理を書きたいです。状態を 1 つの変数で持つ場合の基本的な書き方を教えてください。`,
      }
    ),
    step(
      '1-2',
      '状態の持ち方（ローカル・共有）',
      <div className="space-y-4">
        <p>
          状態を<strong>そのコンポーネントだけが持つ（ローカル）</strong>か、
          <strong>親子や兄弟で共有する</strong>かを決めます。共有する場合は親で state を持ち、子に props で渡すパターンが基本です。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          状態をどこに置くかで、データの流れと修正のしやすさが変わります。小さく始めて、必要になったら「持ち上げる」とよいです。
        </p>
      </div>,
      {
        samplePrompt: `React で、親コンポーネントの state を子に渡して表示し、子のボタンで親の state を更新する（コールバックで渡す）パターンの最小例を教えてください。`,
      }
    ),
  ],
}
