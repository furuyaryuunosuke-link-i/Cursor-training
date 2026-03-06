import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { FrontendChapter } from './types'
import { step } from './types'

export const FRONTEND_CHAPTER_3: FrontendChapter = {
  id: 'fe-ch3',
  title: '第3章：コンポーネントと再利用',
  steps: [
    step(
      '3-1',
      '役割ごとにコンポーネントを分ける',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="ui">UI</GlossaryTerm>を<strong>「見出し」「カード」「ボタン」「フォーム」</strong>など、
          役割のまとまり（<GlossaryTerm name="module">モジュール</GlossaryTerm>的な単位）で<GlossaryTerm name="component">コンポーネント</GlossaryTerm>に分けると、
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
      'props とイベント（親子のやり取り）',
      <div className="space-y-4">
        <p>
          <strong><GlossaryTerm name="parentChild">親</GlossaryTerm>から<GlossaryTerm name="parentChild">子</GlossaryTerm>へ</strong>は<GlossaryTerm name="props">props</GlossaryTerm>でデータを渡し、<strong>子から親へ</strong>は
          <GlossaryTerm name="callback">コールバック</GlossaryTerm>（<GlossaryTerm name="onSubmit">onSubmit</GlossaryTerm>や<GlossaryTerm name="onChange">onChange</GlossaryTerm>など）で伝えます。
          子のボタンクリックで親の<GlossaryTerm name="state">state</GlossaryTerm>を更新するパターンが基本です。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="props">props</GlossaryTerm>とイベントの流れを決めておかないと、データがどこで更新されているか追いにくくなります。一方向にしておくと理解しやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `React で、子コンポーネントに「送信」ボタンを置き、クリックしたら親の state を更新して親で API を呼ぶ形にしたいです。コールバックの渡し方の例を教えてください。`,
      }
    ),
    step(
      '3-3',
      'スタイルとデザインの一貫性',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="css">CSS</GlossaryTerm> 変数や<GlossaryTerm name="tailwind">Tailwind</GlossaryTerm>などで、
          <strong>色・余白・フォント</strong>を共通化し、<GlossaryTerm name="component">コンポーネント</GlossaryTerm>間で一貫した見た目にします。
          ボタン・カードを<GlossaryTerm name="component">コンポーネント</GlossaryTerm>化して<GlossaryTerm name="cssClass">class</GlossaryTerm>をまとめて渡すと、同じスタイルを何度も書かずに済みます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          バラバラのスタイルだと仕様変更時に直す箇所が増えます。変数や<GlossaryTerm name="utilityClass">ユーティリティクラス</GlossaryTerm>で一括管理しておくと楽です。
        </p>
      </div>,
      {
        samplePrompt: `Tailwind を使っているプロジェクトで、ボタンやカードのスタイルを共通化したいです。同じ class を何度も書かずに済むように、コンポーネント化する例を教えてください。`,
      }
    ),
    step(
      '3-4',
      'リスト表示と key',
      <div className="space-y-4">
        <p>
          配列データを<strong><GlossaryTerm name="map">map</GlossaryTerm>でループして</strong>一覧表示するとき、
          各要素に<strong>一意の<GlossaryTerm name="key">key</GlossaryTerm></strong>を渡す必要があります。
          <GlossaryTerm name="key">key</GlossaryTerm>があると、どの要素が追加・削除・並び替えされたかが分かり、再描画が正しく行われます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="key">key</GlossaryTerm>を適切に付けないと、リストの更新で表示がずれたり、<GlossaryTerm name="focus">フォーカス</GlossaryTerm>が意図しない要素に移ったりすることがあります。id や一意になる値を使います。
        </p>
      </div>,
      {
        samplePrompt: `React で、API から取得した配列を一覧表示し、各行に編集・削除ボタンを付けたいです。key には何を使うべきか、インデックスではなぜ避けるべきかも含めて教えてください。`,
      }
    ),
  ],
}
