import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { FrontendChapter } from './types'
import { step } from './types'

export const FRONTEND_CHAPTER_3: FrontendChapter = {
  id: 'fe-ch3',
  title: '第3章：コンポーネントと保守性',
  steps: [
    step(
      '3-1',
      '役割ごとにコンポーネントを分ける',
      <div className="space-y-4">
        <p>
          UI を<strong>「見出し」「カード」「ボタン」「フォーム」</strong>など、
          役割のまとまり（<GlossaryTerm name="module">モジュール</GlossaryTerm>的な単位）でコンポーネントに分けると、
          修正や再利用がしやすくなります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          1 ファイルに全部書くと読みづらく、変更の影響範囲も分かりにくくなります。
          小さなコンポーネントに分けておくと、<GlossaryTerm name="maintenance">保守</GlossaryTerm>しやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `React で、長いフォームを「基本情報」「連絡先」「備考」のようにセクションごとにコンポーネントに分けたいです。props で親から値を渡して表示する分割の例を教えてください。`,
      }
    ),
    step(
      '3-2',
      'スタイルとデザインの一貫性',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="css">CSS</GlossaryTerm> や Tailwind などで、
          <strong>色・余白・フォント</strong>を共通化し、コンポーネント間で一貫した見た目にします。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          バラバラのスタイルだと仕様変更時に直す箇所が増えます。変数やユーティリティクラスで一括管理しておくと楽です。
        </p>
      </div>,
      {
        samplePrompt: `Tailwind を使っているプロジェクトで、ボタンやカードのスタイルを共通化したいです。同じ class を何度も書かずに済むように、コンポーネント化する例を教えてください。`,
      }
    ),
  ],
}
