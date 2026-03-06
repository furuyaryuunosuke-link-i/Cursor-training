import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { FrontendChapter } from './types'
import { step } from './types'

export const FRONTEND_CHAPTER_5: FrontendChapter = {
  id: 'fe-ch5',
  title: '第5章：レスポンシブとアクセシビリティ',
  steps: [
    step(
      '5-1',
      'レスポンシブの考え方',
      <div className="space-y-4">
        <p>
          <strong>画面幅に応じてレイアウトを変える</strong>（<GlossaryTerm name="responsive">レスポンシブ</GlossaryTerm>。スマホ・タブレット・PC で見やすくする）考え方を押さえます。
          メディアクエリで「〇〇px 以下なら縦並び」のように切り替えるイメージです。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          業務ツールも画面サイズは様々です。小さい画面で横並びのままにすると見づらくなるため、幅に応じたレイアウトを決めておくとよいです。
        </p>
      </div>,
      {
        samplePrompt: `CSS で、画面幅が 768px 以下のときは要素を縦に並べ、それ以上なら横に並べるレスポンシブなレイアウトを書きたいです。メディアクエリの書き方を教えてください。`,
      }
    ),
    step(
      '5-2',
      'Tailwind でのブレークポイント',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="tailwind">Tailwind</GlossaryTerm>では <strong><GlossaryTerm name="sm">sm</GlossaryTerm> / <GlossaryTerm name="md">md</GlossaryTerm> / <GlossaryTerm name="lg">lg</GlossaryTerm></strong> などのプレフィックスで、
          「この幅以上のときだけこのスタイルを当てる」と書けます。
          <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1">md:flex-row</code> のように、<GlossaryTerm name="breakpoint">ブレークポイント</GlossaryTerm>付きの<GlossaryTerm name="cssClass">class</GlossaryTerm>で<GlossaryTerm name="responsive">レスポンシブ</GlossaryTerm>を組み立てます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          このアプリも<GlossaryTerm name="tailwind">Tailwind</GlossaryTerm>でレイアウトしているので、同じ考え方で「小さい画面ではナビを折り返す」などができます。<GlossaryTerm name="breakpoint">ブレークポイント</GlossaryTerm>の値と意味を押さえておくと便利です。
        </p>
      </div>,
      {
        samplePrompt: `Tailwind で、スマホでは 1 列、タブレット以上では 2 列のグリッドにしたいです。grid とブレークポイントの指定例を教えてください。`,
      }
    ),
    step(
      '5-3',
      'アクセシビリティの基礎',
      <div className="space-y-4">
        <p>
          <strong><GlossaryTerm name="semantic">セマンティック</GlossaryTerm>な HTML</strong>（見出しは h1〜h6、ボタンは button）、
          <strong>ラベルと入力の対応</strong>、<strong>色のコントラスト</strong>、
          <strong><GlossaryTerm name="screenReader">スクリーンリーダー</GlossaryTerm>で読まれる順序</strong>を意識すると、
          多くの人に使いやすい<GlossaryTerm name="ui">UI</GlossaryTerm>になります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="accessibility">アクセシビリティ</GlossaryTerm>は「障害者向け」だけでなく、キーボードだけの操作や小さな文字が読みづらい人にも役立ちます。最初から少し意識しておくと後から直す手間が減ります。
        </p>
      </div>,
      {
        samplePrompt: `フォームの入力欄に、スクリーンリーダーでも「必須」「エラー時はエラー内容」が読まれるようにしたいです。label、aria-required、aria-describedby の使い方の例を教えてください。`,
      }
    ),
    step(
      '5-4',
      'キーボードとフォーカス',
      <div className="space-y-4">
        <p>
          <strong><GlossaryTerm name="tabKey">Tab</GlossaryTerm>で操作できる</strong>ようにし、<strong><GlossaryTerm name="focus">フォーカス</GlossaryTerm>がどこにあるか分かる</strong>（フォーカスリング）ようにします。
          <GlossaryTerm name="modal">モーダル</GlossaryTerm>を開いたときはフォーカスをモーダル内に閉じ込め、閉じたら元の要素に戻すといった配慮も重要です。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          マウスを使わない人や、キーボード操作を好む人は多いです。フォーカス順序と見た目を整えておくと、誰でも同じように操作できます。
        </p>
      </div>,
      {
        samplePrompt: `React で、モーダルを開いたときにフォーカスをモーダル内の最初のフォーカス可能要素に移し、閉じたときに開く前の要素にフォーカスを戻したいです。実装の考え方を教えてください。`,
      }
    ),
  ],
}
