import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { AdvancedChapter } from './types'
import { step } from './types'

export const ADVANCED_CHAPTER_5: AdvancedChapter = {
  id: 'adv-ch5',
  title: '第5章：卒業課題・自分の業務用ツールを形にする',
  steps: [
    step(
      '5-1',
      '自動化したい業務を 1 つ選ぶ',
      <div className="space-y-4">
        <p>
          入門・中級・上級で学んだことを踏まえ、
          <strong>「自分の担当業務のうち、<GlossaryTerm name="automation">自動化</GlossaryTerm>したいフローを 1 つ」</strong>選びます。
        </p>
        <p><GlossaryTerm name="browser">ブラウザ</GlossaryTerm>操作・ファイル変換・スプレッドシート連携など、すでに学んだ要素の組み合わせで実現できる範囲がおすすめです。</p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          卒業課題は「教材の再現」ではなく、自分の業務を題材にすると、要件の曖昧さや変更への対応を体験できます。
          無理に大きくせず、1 つのフローに絞ることで、設計から実装・確認まで一通りやり切れます。
        </p>
      </div>,
      {
        samplePrompt: `自分の業務で、次のどれかに当てはまる「自動化したいフロー」を 1 つ選びたいです。

- 毎回同じ手順でブラウザや Excel を操作している
- 複数ファイルの変換・集約を手作業でやっている
- 同じ形式のデータを別システムに入力している

選ぶときの観点（工数削減・ミス防止・再現性）と、最初は小さく「ここだけ自動化」と決めるコツを教えてください。`,
      }
    ),
    step(
      '5-2',
      '要件を文章でまとめる',
      <div className="space-y-4">
        <p>
          選んだフローについて、<strong>「誰が・何を・どの入力で・どの出力を得るか」</strong>を文章でまとめます。
        </p>
        <ul>
          <li>入力：ファイルの形式・置き場所、または画面で入力する内容</li>
          <li>処理：どの手順を<GlossaryTerm name="automation">自動化</GlossaryTerm>するか（分岐があれば条件も）</li>
          <li>出力：作成するファイル・更新する画面・<GlossaryTerm name="logging">ログ</GlossaryTerm>に残す内容</li>
        </ul>
        <p>このメモを <GlossaryTerm name="cursor">Cursor</GlossaryTerm> に渡すと、設計や実装の相談がしやすくなります。</p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          曖昧なまま実装を始めると、あとから「ここは想定と違う」が増えがちです。
          先に要件を文章化しておくことで、AI との対話でも「この部分を変えたい」と具体的に伝えられます。
        </p>
      </div>,
      {
        samplePrompt: `自分が自動化したい業務フローを、AI に相談しやすい形で要件としてまとめたいです。

「入力」「処理」「出力」「例外時どうするか」を、どのような見出しと項目で書くとよいか、テンプレートを提案してください。`,
      }
    ),
    step(
      '5-3',
      'AI と相談しながら実装する',
      <div className="space-y-4">
        <p>
          要件メモをもとに、<GlossaryTerm name="cursor">Cursor</GlossaryTerm> の <GlossaryTerm name="askMode">Ask モード</GlossaryTerm>で設計（どの関数に分けるか・設定はどこに置くか）を相談し、
          <GlossaryTerm name="agentMode">Agent モード</GlossaryTerm>で <GlossaryTerm name="code">コード</GlossaryTerm>を生成してもらいます。
        </p>
        <p>
          <strong>一度で完璧を目指さず、「動く骨組み → 少しずつ肉付け・修正」</strong>の順で進め、<GlossaryTerm name="logging">ログ</GlossaryTerm>・<GlossaryTerm name="config">設定</GlossaryTerm>・エラー表示も忘れずに足します。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          実務では、要件が最初から固まっていないことも多いです。
          AI と対話しながら少しずつ形にしていく練習をしておくと、卒業後も自分でツールを拡張しやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `次のような業務フローを、ローカルツールとして実装したいです。（ここに自分の要件を貼る）

まず Ask モードで、全体をどのようなモジュール・関数に分けるとよいか、Python とブラウザ自動化・設定ファイルを前提に設計案を出してください。

そのあと、Agent モードで「〇〇の処理から実装して」と頼んで、少しずつコードを足していきたいです。`,
      }
    ),
    step(
      '5-4',
      'チェックポイントと引き継ぎを決める',
      <div className="space-y-4">
        <p>
          ツールが<strong>「正しく動いていると言える状態」</strong>を自分なりに定義し、
          「どこを確認すればよいか」「想定外のときはどこを見るか」をメモや <GlossaryTerm name="readme">README</GlossaryTerm> に残します。
        </p>
        <p><GlossaryTerm name="logging">ログ</GlossaryTerm>の見方・<GlossaryTerm name="config">設定</GlossaryTerm>の変更方法・よくある失敗と対処を書いておくと、自分以外の人にも引き継ぎやすくなります。</p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="automation">自動化</GlossaryTerm>ツールは、作って終わりではなく、環境の変化や仕様変更に付き合っていく必要があります。
          「ここを見ておけば安心」というチェックポイントと、簡単なドキュメントを残しておくことで、運用と<GlossaryTerm name="maintenance">保守</GlossaryTerm>が続けやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `自分が作った自動化ツールについて、<GlossaryTerm name="readme">README</GlossaryTerm> に「動いているかどうかの確認方法」と「よくある失敗と対処」を書きたいです。

チェックリストの例（ログの確認・出力ファイルの確認・設定の確認）と、<GlossaryTerm name="readme">README</GlossaryTerm> に書く項目のテンプレートを提案してください。`,
      }
    ),
  ],
}
