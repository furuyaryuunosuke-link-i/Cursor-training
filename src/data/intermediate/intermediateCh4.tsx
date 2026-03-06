import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { IntermediateChapter } from './types'
import { step } from './types'

export const INTERMEDIATE_CHAPTER_4: IntermediateChapter = {
  id: 'mid-ch4',
  title: '第4章：1つの業務フローを自動化してみる',
  steps: [
    step(
      '4-1',
      '自動化したい業務フローを書き出す',
      <div className="space-y-4">
        <p>
          最後に、これまで学んだ内容を使って
          <strong>自分の業務フローを 1 つ選び、自動化の設計をしてみます。</strong>
        </p>
        <p>
          「どの画面で」「何を見て」「どんな条件で」「どのボタンを押すか」を、紙やメモにステップごとに書き出します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          実際の業務は、画面遷移や判断がいくつも重なった流れになっています。
          最初に手順を文章で整理しておくことで、
          <GlossaryTerm name="cursor">Cursor</GlossaryTerm>
          にも「このフローを<GlossaryTerm name="code">コード</GlossaryTerm>にしてほしい」と伝えやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `自分の担当している業務の中から、ブラウザ操作を含むフローを 1 つ選んで自動化したいです。

フローを分解するときに、
「画面」「入力」「判断」「ボタン操作」などをどう書き出せばよいか、
例を交えながら教えてください。`,
      }
    ),
    step(
      '4-2',
      '入力データと出力結果をはっきりさせる',
      <div className="space-y-4">
        <p>
          フローが書き出せたら、
          <strong>その自動化で「何を入力にして、最終的に何を得たいのか」</strong>
          を明確にします。
        </p>
        <ul>
          <li>入力ファイル（<GlossaryTerm name="csv">CSV</GlossaryTerm> / Excel）の形式や保管場所</li>
          <li><GlossaryTerm name="browser">ブラウザ</GlossaryTerm>上で参照する情報</li>
          <li>出力ファイルや更新したい画面</li>
        </ul>
        <h3>なぜこのステップが必要か</h3>
        <p>
          入力と出力があいまいなままだと、<GlossaryTerm name="code">コード</GlossaryTerm>を書いても「結局何ができたのか」が分かりにくくなります。
          先にゴールをはっきりさせておくことで、AI に相談するときも具体的な指示が出せるようになります。
        </p>
      </div>,
      {
        samplePrompt: `自分の業務フローを自動化するときに、
「入力データ」と「出力結果」をはっきりさせるための質問リストを作りたいです。

どんな観点で洗い出すとよいか、チェックリスト形式で提案してください。`,
      }
    ),
    step(
      '4-3',
      '全体フローを AI に相談しながらコードにする',
      <div className="space-y-4">
        <p>
          ここまで整理した情報をもとに、
          <GlossaryTerm name="cursor">Cursor</GlossaryTerm>
          の <GlossaryTerm name="askMode">Ask モード</GlossaryTerm>で全体フローの設計相談をし、<GlossaryTerm name="agentMode">Agent モード</GlossaryTerm>で<GlossaryTerm name="code">コード</GlossaryTerm>を生成してもらいます。
        </p>
        <p>
          一度で完璧な<GlossaryTerm name="code">コード</GlossaryTerm>を求めるのではなく、
          <strong>「まずは骨組み → 少しずつ肉付け・修正」</strong>
          という順番で進めることを意識します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          現実の業務フローは、最初から完全に言語化できないことも多いです。
          AI と対話しながら少しずつ形にしていく練習をしておくと、
          大きめのフローでも「分割して相談する」感覚が身につきます。
        </p>
      </div>,
      {
        samplePrompt: `次のような業務フローを、自動化ツールとして実装したいです。（ここに自分のフロー概要を書く）

まずは Ask モードとして、全体をどのようなステップや関数に分けるとよいか、
Python とブラウザ自動化を組み合わせる前提で設計案を出してください。

そのあと、Agent モードで少しずつコードを書いていきたいです。`,
      }
    ),
    step(
      '4-4',
      '「うまくいっているか」のチェックポイントを決める',
      <div className="space-y-4">
        <p>
          最後に、その自動化が
          <strong>「正しく動いていると言える状態」</strong>
          を自分なりに定義します。
        </p>
        <ul>
          <li><GlossaryTerm name="logging">ログ</GlossaryTerm>にどんなメッセージが出ていれば安心か</li>
          <li><GlossaryTerm name="browser">ブラウザ</GlossaryTerm>や出力ファイルのどこを見て確認するか</li>
          <li>想定外のケースが起きたとき、どこで気づけるようにしておくか</li>
        </ul>
        <h3>なぜこのステップが必要か</h3>
        <p>
          自動化は、一度作って終わりではなく、あとからの変更やトラブルにも付き合っていく必要があります。
          「ここを見ておけば安心」というチェックポイントを決めておくことで、自分以外のメンバーにも引き継ぎやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `自分が作った自動化ツールについて、
「うまく動いているかどうか」を確認するチェックポイントを整理したいです。

ログ・画面・出力ファイルのそれぞれで、
どんな項目を見ればよいかの例を挙げながら、チェックリストを提案してください。`,
      }
    ),
  ],
}
