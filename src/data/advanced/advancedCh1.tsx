import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { AdvancedChapter } from './types'
import { step } from './types'

export const ADVANCED_CHAPTER_1: AdvancedChapter = {
  id: 'adv-ch1',
  title: '第1章：既存のローカルツールの構造を読む',
  steps: [
    step(
      '1-1',
      'ツールの全体像を把握する',
      <div className="space-y-4">
        <p>
          ローカルで動かす業務ツール（<GlossaryTerm name="python">Python</GlossaryTerm> や <GlossaryTerm name="node">Node</GlossaryTerm> で起動し、<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>で操作画面を開くタイプ）の
          <strong>「どこに何があるか」</strong>を、フォルダ構成と役割で整理します。
        </p>
        <ul>
          <li>エントリポイント（起動用のスクリプトや <GlossaryTerm name="api">API</GlossaryTerm> サーバ）</li>
          <li>画面（<GlossaryTerm name="html">HTML</GlossaryTerm> / JS）と<GlossaryTerm name="backend">バックエンド</GlossaryTerm>のつながり</li>
          <li>設定ファイル・認証・<GlossaryTerm name="logging">ログ</GlossaryTerm>の置き場所</li>
        </ul>
        <h3>なぜこのステップが必要か</h3>
        <p>
          いきなり同じレベルのツールをゼロから作ろうとすると負荷が大きいです。
          まず「動いているツールを分解して読む」ことで、どこが難所で、どこなら自分で手を入れられそうかが見えるようになります。
        </p>
      </div>,
      {
        samplePrompt: `ローカルで動かしている業務用ツール（Python で起動してブラウザで操作するタイプ）のフォルダ構成を、役割ごとに整理したいです。

エントリポイント・フロントのHTML/JS・バックエンドのAPI・設定ファイル・ログの置き場所を、どのように分けて説明すると分かりやすいか、テンプレートを提案してください。`,
      }
    ),
    step(
      '1-2',
      'エントリポイントと処理の流れを追う',
      <div className="space-y-4">
        <p>
          「実行すると最初にどの <GlossaryTerm name="code">コード</GlossaryTerm> が動くか」を入口に、
          <strong>ボタン操作や <GlossaryTerm name="api">API</GlossaryTerm> 呼び出しが、どの関数までつながっているか</strong>を追います。
        </p>
        <p>例：Run.<GlossaryTerm name="bat">bat</GlossaryTerm> → main.py → <GlossaryTerm name="routing">ルーティング</GlossaryTerm> → 各処理<GlossaryTerm name="module">モジュール</GlossaryTerm>、といった流れを図やメモに起こします。</p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          機能を追加・変更するとき、「どこに手を入れると安全か」を判断するには、処理の流れが頭に入っている必要があります。
          入口から 1 本の線で追えるようになると、AI に相談するときも「この関数の後で〇〇をしたい」と具体的に伝えやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `Python で起動するローカルツールで、「画面のボタンを押したら、どの Python の関数が呼ばれるか」を追いかけたいです。

フロント（HTML/JS）からバックエンド（Python）へのリクエストの流れを、初心者向けに図解するためのステップと、コード上でどこを見ればよいかを教えてください。`,
      }
    ),
    step(
      '1-3',
      '設定・認証・ログの役割を押さえる',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="config">設定</GlossaryTerm>（YAML / .env）、認証（<GlossaryTerm name="token">トークン</GlossaryTerm>や <GlossaryTerm name="oauth">OAuth</GlossaryTerm>）、
          <GlossaryTerm name="logging">ログ</GlossaryTerm>が、ツール内でどのファイル・どの処理に使われているかを確認します。
        </p>
        <p>「機密情報はどこに置いているか」「失敗時にどこに<GlossaryTerm name="logging">ログ</GlossaryTerm>が出るか」をメモしておきます。</p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="config">設定</GlossaryTerm>や認証を誤ると動かなくなったり、<GlossaryTerm name="logging">ログ</GlossaryTerm>の出し方を知らないとトラブル時に原因を追えません。
          役割を押さえておくと、自分で新しい連携や<GlossaryTerm name="config">設定</GlossaryTerm>を足すときに「どこを真似すればよいか」が分かります。
        </p>
      </div>,
      {
        samplePrompt: `既存のローカルツールで、設定ファイル（.env や YAML）・認証（トークン）・ログが、それぞれどのディレクトリ・どの処理で使われているかを整理したいです。

「設定」「認証」「ログ」ごとに、コード上で何を確認すればよいかのチェックリストを教えてください。`,
      }
    ),
    step(
      '1-4',
      '1つのボタン操作をコードまで追う',
      <div className="space-y-4">
        <p>
          画面上の<strong>「1つのボタン」</strong>を選び、クリックから<GlossaryTerm name="backend">バックエンド</GlossaryTerm>の処理・レスポンスまで、
          どのファイルのどの行（またはどの関数）に相当するかを実際に追ってメモします。
        </p>
        <p><GlossaryTerm name="devTools">開発者ツール</GlossaryTerm>の<GlossaryTerm name="networkTab">ネットワークタブ</GlossaryTerm>や、<GlossaryTerm name="backend">バックエンド</GlossaryTerm>のログ出力を頼りにすると追いやすいです。</p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          「このボタンの挙動を変えたい」「ここにチェックを足したい」といった変更は、この 1 本の線が分かっていれば着手しやすくなります。
          上級のあとの章で自分で <GlossaryTerm name="api">API</GlossaryTerm> と UI をつなぐときも、同じ考え方で設計できます。
        </p>
      </div>,
      {
        samplePrompt: `ローカルツールの画面で「実行」ボタンを押したときに、フロントのどのコードが動き、どの API が呼ばれ、バックエンドのどの関数が実行されるかを追いかけたいです。

Chrome の<GlossaryTerm name="devTools">開発者ツール</GlossaryTerm>（<GlossaryTerm name="networkTab">Network タブ</GlossaryTerm>）と、<GlossaryTerm name="backend">バックエンド</GlossaryTerm>のログをどう使えばよいか、手順を教えてください。`,
      }
    ),
  ],
}
