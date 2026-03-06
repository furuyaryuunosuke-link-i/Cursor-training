import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { FrontendChapter } from './types'
import { step } from './types'

export const FRONTEND_CHAPTER_2: FrontendChapter = {
  id: 'fe-ch2',
  title: '第2章：フォームとバリデーション',
  steps: [
    step(
      '2-1',
      'フォーム入力の扱い',
      <div className="space-y-4">
        <p>
          入力欄（テキスト・選択・チェックボックス）の値を<GlossaryTerm name="state">state</GlossaryTerm>に紐づけ、
          送信時に<GlossaryTerm name="validation">バリデーション</GlossaryTerm>してから
          <GlossaryTerm name="api">API</GlossaryTerm>に送る流れを押さえます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          業務ツールではフォームが多く、入力ミスを防ぐために必須チェック・形式チェックが必要です。
          フロントで一度チェックすると、ユーザーにすぐフィードバックできます。
        </p>
      </div>,
      {
        samplePrompt: `JavaScript で、フォームの入力値を state に紐づけ、送信ボタンでまとめて API に送る流れを書きたいです。controlled component のイメージで、シンプルな例を教えてください。`,
      }
    ),
    step(
      '2-2',
      'バリデーションのタイミング',
      <div className="space-y-4">
        <p>
          <strong>送信時だけチェック</strong>するか、<strong>入力中（<GlossaryTerm name="blur">blur</GlossaryTerm>時など）にチェック</strong>するかを決めます。
          必須・形式（メール・数値範囲）・長さなどのルールを揃えておくと、<GlossaryTerm name="validation">バリデーション</GlossaryTerm>の見通しが良くなります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          チェックのタイミングがバラバラだと、ユーザーが「いつ直せばいいか」分かりにくくなります。送信時＋重要項目は blur 時など、方針を決めておくとよいです。
        </p>
      </div>,
      {
        samplePrompt: `JavaScript で、フォームの送信時に「必須項目が空でないか」「メール形式か」をチェックし、エラーなら送信を止めてメッセージを表示する処理を書きたいです。シンプルな例を教えてください。`,
      }
    ),
    step(
      '2-3',
      'エラー表示とフィードバック',
      <div className="space-y-4">
        <p>
          バリデーションエラーを<strong>どの入力の近くに表示するか</strong>（<GlossaryTerm name="inline">インライン</GlossaryTerm>）、
          <strong>まとめて上部に表示するか</strong>（<GlossaryTerm name="summary">サマリー</GlossaryTerm>）を決めます。
          色・アイコン・文言を統一すると、ユーザーが「何を直せばよいか」分かりやすくなります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          エラーが分かりにくいと操作ミスや問い合わせが増えます。表示位置とメッセージのルールを決めておくとよいです。
        </p>
      </div>,
      {
        samplePrompt: `React で、バリデーションエラーを各入力欄の直下に表示し、エラーがある入力には枠を赤くするスタイルを当てたいです。<GlossaryTerm name="state">state</GlossaryTerm>で errors を管理する例を教えてください。`,
      }
    ),
    step(
      '2-4',
      'フォームとアクセシビリティ',
      <div className="space-y-4">
        <p>
          エラーを<strong><GlossaryTerm name="screenReader">スクリーンリーダー</GlossaryTerm>に読ませる</strong>（<GlossaryTerm name="ariaDescribedby">aria-describedby</GlossaryTerm>・<GlossaryTerm name="ariaInvalid">aria-invalid</GlossaryTerm>）、
          <strong>ラベルと入力の対応</strong>（label の for や id）、
          <strong><GlossaryTerm name="focus">フォーカス</GlossaryTerm>移動</strong>（最初のエラー欄にフォーカスするなど）を意識すると、
          使いやすく障害の少ない<GlossaryTerm name="ui">UI</GlossaryTerm>になります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="accessibility">アクセシビリティ</GlossaryTerm>を考慮しておくと、キーボード操作や読み上げソフトを使う人にも同じように使ってもらえます。
        </p>
      </div>,
      {
        samplePrompt: `HTML のフォームで、バリデーションエラーのメッセージを入力欄の下に表示し、aria-describedby でエラーと入力欄を関連付けたいです。書き方の例を教えてください。`,
      }
    ),
  ],
}
