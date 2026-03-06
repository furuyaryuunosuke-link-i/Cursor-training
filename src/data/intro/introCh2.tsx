import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { IntroChapter } from './types'
import { step } from './types'

export const INTRO_CHAPTER_2: IntroChapter = {
  id: 'ch2',
  title: '第2章：HTMLを書こう',
  steps: [
    step(
      '2-1',
      'ファイル構成を理解する',
      <div className="space-y-4">
        <p>
          一般的な静的サイトでは、<strong><GlossaryTerm name="indexHtml">index.html</GlossaryTerm></strong> が入口になります。<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>はこのファイルを開いて表示します。
        </p>
        <p>
          見た目は <strong><GlossaryTerm name="css">CSS</GlossaryTerm></strong>、動き（チェックや保存など）は{' '}
          <strong><GlossaryTerm name="javascript">JavaScript</GlossaryTerm></strong> で書きます。ファイルは <GlossaryTerm name="html">HTML</GlossaryTerm> / <GlossaryTerm name="css">CSS</GlossaryTerm> / <GlossaryTerm name="javascript">JS</GlossaryTerm>
          に分けておくと、あとから修正しやすくなります。
        </p>
        <p>
          <GlossaryTerm name="cursor">Cursor</GlossaryTerm> に「index.html と CSS、<GlossaryTerm name="javascript">JS</GlossaryTerm> を分けて作って」と伝えれば、適切なファイル構成で生成してくれます。どのファイルを編集すればどこが変わるか、少しずつ慣れていきましょう。
        </p>
      </div>,
      {
        imageSrc: '/screenshots/js,html,css分割.png',
        imageAlt: 'プロジェクト内の HTML / CSS / JS のファイル分割例。index.html、styles.css、app.js が並ぶ。',
      }
    ),
    step(
      '2-2',
      '骨組みのHTMLを生成する',
      <div className="space-y-4">
        <p>
          <GlossaryTerm name="composer">Composer</GlossaryTerm> や<GlossaryTerm name="chat">チャット</GlossaryTerm>で「今日のやることページの <GlossaryTerm name="indexHtml">index.html</GlossaryTerm> を作って」と指示し、AI
          に骨組みの <GlossaryTerm name="html">HTML</GlossaryTerm> を生成してもらいます。
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          ここからは、<strong><GlossaryTerm name="agentMode">Agent モード</GlossaryTerm>に切り替えて</strong>、実際に HTML / CSS / JS
          のファイルを生成してもらいます。
        </p>
        <p>
          生成されたファイルはプロジェクトフォルダ内に保存されます。<GlossaryTerm name="editor">エディタ</GlossaryTerm>左のファイル一覧で
          <code className="bg-white/20 dark:bg-black/20 px-1 rounded text-sm">index.html</code>{' '}
          を選んで中身を確認できます。
        </p>
      </div>,
      {
        imageSrc: '/screenshots/Cursor2-2指示.png',
        imageAlt: 'Agentモードで骨組み HTML の生成を依頼している Cursor の画面。',
        samplePrompt: `さきほど決めた「今日のやることページ」の要件に沿って、最低限表示できる骨組みの HTML を作ってください。

条件:
- ファイルは index.html / styles.css / app.js に分割する
- index.html には Bento っぽくカードが並ぶレイアウトの枠だけ用意する（細かい見た目はあとで調整）
- 今日のやることリストのエリアと、テーマ切替ボタンのエリアだけ分かるようにしておく
- scripts と styles の読み込みタグも含めてください。`,
      }
    ),
    step(
      '2-3',
      '中身を追加・編集する',
      <div className="space-y-4">
        <p>
          骨組みができたら、「ここに〇〇というテキストを追加して」「リストを 3 件にして」など、AI
          に指示して中身を追加・編集していきます。
        </p>
        <p>
          編集したいファイルを開いた状態で、該当箇所を選択してから指示を出すと、変更が適用されやすくなります。
        </p>
      </div>,
      {
        imageSrc: '/screenshots/2-3一枚目.png',
        imageAlt: '今日のやることリストの見出しテキストを変更し、ブラウザ側の表示も変わっている様子。',
      }
    ),
    step(
      '2-4',
      '生成されたコードを少し直す',
      <div className="space-y-4">
        <p>
          AI が作った<GlossaryTerm name="code">コード</GlossaryTerm>の<strong>「ここを変えるとこうなる」</strong>を体験してみましょう。
        </p>
        <ul>
          <li><GlossaryTerm name="html">HTML</GlossaryTerm> の文言を自分で書き換えて保存し、<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>で表示が変わることを確認する。</li>
          <li>class 名を変えて、スタイルが変わる様子を見る（第3章で <GlossaryTerm name="css">CSS</GlossaryTerm> を触るとより分かります）。</li>
        </ul>
        <p>
          <GlossaryTerm name="code">コード</GlossaryTerm>を編集したら、<strong>Ctrl+S で保存</strong>し、<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>をリロードして変化を確認してみてください。
        </p>
        <p><GlossaryTerm name="code">コード</GlossaryTerm>を「読む・直す」の第一歩として、少しずつ触ってみてください。</p>
      </div>,
      {
        imageSrc: '/screenshots/step-2-4-1.png',
        imageAlt: 'HTML の見出しテキストを変更しているエディタ画面。',
        imageSecondarySrc: '/screenshots/step-2-4-2.png',
        imageSecondaryAlt: '変更後の見出しがブラウザに反映されている様子。',
      }
    ),
    step(
      '2-5',
      'ブラウザで確認する',
      <div className="space-y-4">
        <p>
          編集した <code className="bg-white/20 dark:bg-black/20 px-1 rounded text-sm">index.html</code>{' '}
          を<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>で開いて表示を確認します。
        </p>
        <ul>
          <li>
            <strong>file:// で開く</strong>：エクスプローラーで index.html
            をダブルクリックするか、<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>のアドレス欄にファイルのパスを入力する。
          </li>
          <li>
            <strong><GlossaryTerm name="liveServer">Live Server</GlossaryTerm> など</strong>：<GlossaryTerm name="cursor">Cursor</GlossaryTerm> / <GlossaryTerm name="vsCode">VS Code</GlossaryTerm> の拡張機能「Live
            Server」を使うと、保存のたびに自動でリロードされ、確認しやすくなります。
          </li>
        </ul>
        <p>表示を変えたら保存 → <GlossaryTerm name="browser">ブラウザ</GlossaryTerm>でリロード、の流れで確認してください。</p>
      </div>,
      {
        imageSrc: '/screenshots/2-3一枚目.png',
        imageAlt: '今日のやることリストの見出しテキストを変更し、ブラウザ側の表示も変わっている様子。',
      }
    ),
    step(
      '2-6',
      'うまくいかないときの確認',
      <div className="space-y-4">
        <p>表示されない・真っ白・エラーが出るときは、次を確認しましょう。</p>
        <ul>
          <li>ファイルを保存したか（Ctrl+S など）。</li>
          <li><GlossaryTerm name="browser">ブラウザ</GlossaryTerm>をリロードしたか（F5 や Ctrl+R）。</li>
          <li>開いているファイルのパスは正しいか（<GlossaryTerm name="indexHtml">index.html</GlossaryTerm> を開いているか）。</li>
          <li>
            <GlossaryTerm name="devTools">開発者ツール</GlossaryTerm>のコンソール（F12 → Console）にエラーが出ていないか。出ている場合はそのメッセージを
            AI に貼って対処法を聞くこともできます。
          </li>
        </ul>
      </div>,
      {
        samplePrompt: `画面が真っ白で何も表示されません。いま開いているフォルダ内の index.html / styles.css / app.js を順番に読んで、原因になりそうな箇所を一緒に探してほしいです。

このあとブラウザのコンソールエラーも貼るので、その内容も踏まえて直し方を提案してください。`,
      }
    ),
  ],
}
