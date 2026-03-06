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
          入力欄（テキスト・選択・チェックボックス）の値を state に紐づけ、
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
        samplePrompt: `JavaScript で、フォームの送信時に「必須項目が空でないか」「メール形式か」をチェックし、エラーなら送信を止めてメッセージを表示する処理を書きたいです。シンプルな例を教えてください。`,
      }
    ),
    step(
      '2-2',
      'エラー表示とアクセシビリティ',
      <div className="space-y-4">
        <p>
          バリデーションエラーを<strong>どの要素の近くに表示するか</strong>、
          <strong>スクリーンリーダーに読ませる</strong>（aria-describedby など）を意識すると、
          使いやすく障害の少ない UI になります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          エラーが分かりにくいと操作ミスや問い合わせが増えます。表示位置とラベル・フォーカスの扱いを決めておくとよいです。
        </p>
      </div>,
      {
        samplePrompt: `HTML のフォームで、バリデーションエラーのメッセージを入力欄の下に表示し、aria-describedby でエラーと入力欄を関連付けたいです。書き方の例を教えてください。`,
      }
    ),
  ],
}
