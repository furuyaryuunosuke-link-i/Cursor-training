import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { FrontendChapter } from './types'
import { step } from './types'

export const FRONTEND_CHAPTER_1: FrontendChapter = {
  id: 'fe-ch1',
  title: '第1章：状態とデータの流れ',
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
          状態を<strong>その<GlossaryTerm name="component">コンポーネント</GlossaryTerm>だけが持つ（ローカル）</strong>か、
          <strong><GlossaryTerm name="parentChild">親子</GlossaryTerm>や<GlossaryTerm name="sibling">兄弟</GlossaryTerm>で共有する</strong>かを決めます。共有する場合は親で<GlossaryTerm name="state">state</GlossaryTerm>を持ち、子に<GlossaryTerm name="props">props</GlossaryTerm>で渡すパターンが基本です。
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
    step(
      '1-3',
      '一方向データフロー',
      <div className="space-y-4">
        <p>
          データは<strong><GlossaryTerm name="parentChild">親</GlossaryTerm>から<GlossaryTerm name="parentChild">子</GlossaryTerm>へ一方方向</strong>に渡し、子から親への更新は<strong><GlossaryTerm name="callback">コールバック</GlossaryTerm>（イベントハンドラ）</strong>で伝えます。
          双方向バインディングと違い、「どこで値が変わったか」が追いやすくなります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          データの流れが一方向だと、不具合の原因を「どの<GlossaryTerm name="component">コンポーネント</GlossaryTerm>のどの更新でおかしくなったか」と切り分けやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `React で、親の state を子に props で渡し、子の入力変更を親の setState で反映する「一方向データフロー」の最小例を教えてください。`,
      }
    ),
    step(
      '1-4',
      'ライフサイクルと副作用',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="component">コンポーネント</GlossaryTerm>が<strong>表示されたとき・消えたとき・特定の値が変わったとき</strong>に、
          「一度だけ実行する」「あとで片付け（<GlossaryTerm name="cleanup">クリーンアップ</GlossaryTerm>）する」といった処理を書く考え方を押さえます。
          React の<GlossaryTerm name="useEffect">useEffect</GlossaryTerm>のイメージで、<GlossaryTerm name="api">API</GlossaryTerm> 取得や購読の解除などに使います。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          画面表示時にデータを取る・画面を離れるときにタイマーを止めるなど、<GlossaryTerm name="ui">UI</GlossaryTerm>のライフサイクルに合わせた処理がないと<GlossaryTerm name="memoryLeak">メモリリーク</GlossaryTerm>や<GlossaryTerm name="doubleExecution">二重実行</GlossaryTerm>の原因になります。
        </p>
      </div>,
      {
        samplePrompt: `React で、コンポーネントが表示されたときに一度だけ API を呼び、結果を state にセットするパターンを教えてください。useEffect の依存配列の考え方も知りたいです。`,
      }
    ),
  ],
}
