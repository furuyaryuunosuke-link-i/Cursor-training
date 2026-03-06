import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { AdvancedChapter } from './types'
import { step } from './types'

export const ADVANCED_CHAPTER_3: AdvancedChapter = {
  id: 'adv-ch3',
  title: '第3章：外部サービス連携を追加する',
  steps: [
    step(
      '3-1',
      '認証（OAuth・トークン）のイメージをつかむ',
      <div className="space-y-4">
        <p>
          外部のサービス（クラウドストレージ・スプレッドシート・メールなど）と連携するとき、
          <strong>「誰がアクセスしているか」を証明する仕組み</strong>として
          <GlossaryTerm name="oauth">OAuth</GlossaryTerm> や
          <GlossaryTerm name="token">トークン</GlossaryTerm>が使われます。
        </p>
        <p>ここでは、<GlossaryTerm name="token">トークン</GlossaryTerm>をファイルに保存してプログラムから読み込む・期限切れで再認証する、といった流れを文章で整理します。</p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          連携を追加するとき、いちばんつまずきやすいのが認証周りです。
          「<GlossaryTerm name="token">トークン</GlossaryTerm>とは何か」「どこに置くか」「期限切れのときどうするか」のイメージを持っておくと、既存の連携コードを読んだり、新しいサービスを 1 つ足したりするときの理解が早くなります。
        </p>
      </div>,
      {
        samplePrompt: `外部の Web サービス（例：クラウドストレージやスプレッドシート）と連携するプログラムで、OAuth やトークンがどう使われているかを理解したいです。

「トークン」「OAuth」「リフレッシュ」の違いと、プログラムではどこにトークンを保存して、どう読み込むかの一般的なパターンを教えてください。`,
      }
    ),
    step(
      '3-2',
      '既存の連携コードを読む',
      <div className="space-y-4">
        <p>
          既存のツールに「Google や Box と連携している部分」があれば、その
          <GlossaryTerm name="code">コード</GlossaryTerm>（認証・API 呼び出し・エラー処理）を開き、
          <strong>どの順番で何をしているか</strong>をコメントやメモで追います。
        </p>
        <p>「認証ファイルのパス」「どの <GlossaryTerm name="api">API</GlossaryTerm> を叩いているか」「エラー時にどうしているか」を押さえます。</p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          新しい連携を 1 つ足すとき、既存の連携が「同じパターン」で書かれていれば、それをコピーして URL やスコープを変えるだけで済むことが多いです。
          まず既存<GlossaryTerm name="code">コード</GlossaryTerm>のパターンを読む習慣をつけておくと、追加実装が楽になります。
        </p>
      </div>,
      {
        samplePrompt: `既存の Python ツールで、Google API やクラウドストレージ API と連携している部分のコードを読んで、処理の流れを整理したいです。

認証（credentials / token）・API の呼び出し・エラー時のリトライやログ、のそれぞれで、コード上で何を確認すればよいかのチェックリストを教えてください。`,
      }
    ),
    step(
      '3-3',
      '新しい連携を 1 つ足す',
      <div className="space-y-4">
        <p>
          既存の連携（例：スプレッドシート読み取り）を参考に、
          <strong>「別のスプレッドシートを読む」「別の <GlossaryTerm name="api">API</GlossaryTerm> を 1 本呼ぶ」</strong>といった小さな連携を 1 つ追加する手順を、AI と相談しながら進めます。
        </p>
        <p>設定（URL・シート名・認証パス）は <GlossaryTerm name="config">設定ファイル</GlossaryTerm> や <GlossaryTerm name="envFile">.env</GlossaryTerm> に寄せ、<GlossaryTerm name="code">コード</GlossaryTerm> はなるべく共通化します。</p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          仕様変更や新しいデータソースの追加は、実務でよく発生します。
          ここで「既存パターンを真似して 1 つ足す」経験をしておくと、自分で<GlossaryTerm name="maintenance">保守</GlossaryTerm>・拡張できる範囲が広がります。
        </p>
      </div>,
      {
        samplePrompt: `既存のツールでは、Google スプレッドシートの A を読む連携があります。同じパターンで「スプレッドシート B の特定シートを読む」連携を 1 つ追加したいです。

設定（スプレッドシート ID やシート名）は YAML か .env に持たせ、コードは既存の読み取り処理を流用する形で、追加手順を提案してください。`,
      }
    ),
    step(
      '3-4',
      'エラーとリトライの考え方',
      <div className="space-y-4">
        <p>
          外部 API は、ネットワークの一時的な不調や<GlossaryTerm name="rateLimit">レート制限</GlossaryTerm>で失敗することがあります。
          <strong>「失敗したら何回かリトライする」「<GlossaryTerm name="logging">ログ</GlossaryTerm>に理由を残す」</strong>といった方針を、既存<GlossaryTerm name="code">コード</GlossaryTerm>でどう実装しているかを確認し、自分で 1 か所にリトライを入れてみます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          連携処理は、相手側の都合で一時的に失敗することがあります。
          リトライと<GlossaryTerm name="logging">ログ</GlossaryTerm>の設計を押さえておくと、本番に近い形で動かしたときの安定性と、トラブル時の原因追いがしやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `Python で外部 API（例：Google Sheets API）を呼ぶ処理に、失敗時に最大 3 回リトライし、その都度ログに理由を残す処理を追加したいです。

リトライの間隔（例：1 秒おき）と、どの例外でリトライするか・どの例外で諦めるかの方針を、サンプルコード付きで教えてください。`,
      }
    ),
  ],
}
