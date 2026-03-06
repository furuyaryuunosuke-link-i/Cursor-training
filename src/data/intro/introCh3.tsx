import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { IntroChapter } from './types'
import { step } from './types'

export const INTRO_CHAPTER_3: IntroChapter = {
  id: 'ch3',
  title: '第3章：デザインを調整しよう',
  steps: [
    step(
      '3-1',
      '見た目を整える（CSS）',
      <div className="space-y-4">
        <p>
          <strong><GlossaryTerm name="css">CSS</GlossaryTerm></strong> は、色・フォント・余白・レイアウトなど「見た目」を決めるための言語です。
        </p>
        <p>
          「背景を暗くして」「カードに角丸と影をつけて」など、やりたいことを文章で
          AI に伝えると、<GlossaryTerm name="css">CSS</GlossaryTerm> を提案してくれます。別ファイル（例：style.css）に書くか、<GlossaryTerm name="html">HTML</GlossaryTerm>
          内の style に書くかも指示で指定できます。
        </p>
      </div>,
      {
        imageSrc: '/screenshots/3-1CSS.png',
        imageAlt: 'CSS でカードレイアウトとスタイルを調整しているエディタ画面とブラウザ表示の例。',
        samplePrompt: `既にある styles.css をベースに、Bento Grid とグラスモーフィズムっぽい見た目に整えてください。

条件:
- 背景は暗めで、カードは半透明＋ぼかしでガラスっぽく
- 角丸と薄いシャドウを付けて、カード同士の余白も調整
- テキストが読みにくくならないようにコントラストを保つ
- 変更は styles.css に対する差分で提案してください。`,
      }
    ),
    step(
      '3-2',
      'レイアウトを変える',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="bentoGrid">Bento Grid</GlossaryTerm>・カード型のレイアウト・<GlossaryTerm name="glassmorphism">グラスモーフィズム</GlossaryTerm>風の見た目などは、「含めるとよい要素」として
          AI に伝えておくと、それに合わせたコードを生成してくれます。
        </p>
        <p>
          例：「<GlossaryTerm name="bentoGrid">Bento Grid</GlossaryTerm> でカードを並べて」「<GlossaryTerm name="glassmorphism">グラスモーフィズム</GlossaryTerm>でガラスっぽいパネルにして」と指示してみましょう。
        </p>
      </div>
    ),
    step(
      '3-3',
      '動きとテーマを足す',
      <div className="space-y-4">
        <p>
          チェックボックスでタスクに取り消し線を付けたり、ダークモード切替や <GlossaryTerm name="localStorage">localStorage</GlossaryTerm>
          での保存は、<strong><GlossaryTerm name="javascript">JavaScript</GlossaryTerm></strong> で実装します。
        </p>
        <p>
          「チェックしたら取り消し線」「テーマ切替ボタンでライト/ダーク」「リロードしてもタスクが残るように
          <GlossaryTerm name="localStorage">localStorage</GlossaryTerm> で保存」など、やりたいことをそのまま AI に伝えれば、コード例を出してくれます。
        </p>
      </div>,
      {
        imageSrc: '/screenshots/3-3JS.png',
        imageAlt: 'チェックボックスやテーマ切替などの挙動を JavaScript で実装した画面の例。',
        samplePrompt: `app.js に、次の挙動を追加・整理してください。

- チェックボックスをオンにしたタスクには取り消し線を付ける
- テーマ切替ボタンでライト/ダークを切り替える（body などにクラスを付け替え）
- タスク一覧とテーマ設定を localStorage に保存し、ページをリロードしても復元する

既存のコードを読んだうえで、足りない部分を追記・整理する形で実装してほしいです。`,
      }
    ),
    step(
      '3-4',
      '達成条件を自分で確認する',
      <div className="space-y-4">
        <p>入門の達成条件を、自分でいちど確認しましょう。</p>
        <ul>
          <li><GlossaryTerm name="browser">ブラウザ</GlossaryTerm>で開いて表示できるか。</li>
          <li>チェック・テーマ切替が動くか。</li>
          <li>リロード後もタスクが残るか。</li>
        </ul>
        <p>
          すべて満たせたら、次の第4章「<GlossaryTerm name="github">GitHub</GlossaryTerm> にアップロードしよう」に進みます。
        </p>
      </div>
    ),
  ],
}
