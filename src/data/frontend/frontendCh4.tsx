import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { FrontendChapter } from './types'
import { step } from './types'

export const FRONTEND_CHAPTER_4: FrontendChapter = {
  id: 'fe-ch4',
  title: '第4章：API 連携と非同期 UI',
  steps: [
    step(
      '4-1',
      'fetch と状態の組み合わせ',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="fetch">fetch</GlossaryTerm> で<GlossaryTerm name="api">API</GlossaryTerm>を呼ぶとき、
          <strong>「取得中」「成功」「失敗」</strong>を<GlossaryTerm name="state">state</GlossaryTerm>で持ち、それぞれのときに表示を切り替えます。
          データ・ローディング中フラグ・エラーメッセージを一組で管理するイメージです。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          非同期の結果を<GlossaryTerm name="state">state</GlossaryTerm>に反映しないと、ユーザーは「まだ読込中なのか」「失敗したのか」が分かりません。3 つの状態を意識すると<GlossaryTerm name="ui">UI</GlossaryTerm>が明確になります。
        </p>
      </div>,
      {
        samplePrompt: `React で、マウント時に fetch で API を呼び、結果を state にセットして表示したいです。ローディング中とエラー時の表示分けも含めた最小例を教えてください。`,
      }
    ),
    step(
      '4-2',
      'ローディングとエラー表示',
      <div className="space-y-4">
        <p>
          取得中は<strong><GlossaryTerm name="spinner">スピナー</GlossaryTerm>や<GlossaryTerm name="skeleton">スケルトン</GlossaryTerm></strong>、失敗時は<strong>エラーメッセージとリトライボタン</strong>を表示するパターンを押さえます。
          ユーザーに「今どうなっているか」を伝えると、待ち時間や障害時のストレスが減ります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          何も表示しないまま待たせたり、失敗時に真っ白のままだと、ユーザーは操作を続けていいか判断できません。状態に応じた表示を用意しておくとよいです。
        </p>
      </div>,
      {
        samplePrompt: `fetch で API を呼ぶとき、ローディング中は「読み込み中…」、エラー時は「エラーが発生しました。再試行」ボタンを表示したいです。React で state の分岐ごとに表示を変える例を教えてください。`,
      }
    ),
    step(
      '4-3',
      '再試行とキャッシュの考え方',
      <div className="space-y-4">
        <p>
          失敗時に<strong>もう一度リクエストする（再試行）</strong>ボタンや自動リトライを用意します。
          また、<strong>一度取ったデータをしばらく使い回す（キャッシュ）</strong>と、同じ画面を何度も開くときの体感が速くなります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          ネットワークの一時的な不調で失敗することはよくあります。再試行があるとユーザーが自分で回復しやすく、キャッシュは無駄な通信を減らせます。
        </p>
      </div>,
      {
        samplePrompt: `React で、API 取得に失敗したときに「再試行」ボタンを押したら同じ fetch を再度実行する処理を書きたいです。state のリセットの仕方も含めて教えてください。`,
      }
    ),
    step(
      '4-4',
      '楽観的更新のイメージ',
      <div className="space-y-4">
        <p>
          <strong>楽観的更新</strong>は、<GlossaryTerm name="api">API</GlossaryTerm>の応答を待たずに
          先に<GlossaryTerm name="ui">UI</GlossaryTerm>を「成功したときの状態」に更新し、失敗したら元に戻すやり方です。
          送信ボタンを押した直後に一覧に反映するなど、体感<GlossaryTerm name="ux">UX</GlossaryTerm>を上げたいときに検討します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          毎回サーバーの応答を待つと操作が遅く感じます。業務ツールでは「送信したらすぐ一覧に追加して、失敗時だけエラー表示」といった割り切りも有効です。
        </p>
      </div>,
      {
        samplePrompt: `React で、フォーム送信時に「送信した」と見せるために先に一覧に項目を追加し、API が失敗したらその項目を削除してエラーを表示する「楽観的更新」の例を教えてください。`,
      }
    ),
  ],
}
