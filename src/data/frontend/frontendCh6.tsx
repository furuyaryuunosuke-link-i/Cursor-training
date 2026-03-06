import { GlossaryTerm } from '../../components/GlossaryTerm'
import type { FrontendChapter } from './types'
import { step } from './types'

export const FRONTEND_CHAPTER_6: FrontendChapter = {
  id: 'fe-ch6',
  title: '第6章：ルーティングと画面設計',
  steps: [
    step(
      '6-1',
      '画面と URL の対応',
      <div className="space-y-4">
        <p>
          <strong>「どの<GlossaryTerm name="url">URL</GlossaryTerm>でどの画面を出すか」</strong>を設計します。
          このアプリでは <code className="rounded bg-neutral-200 dark:bg-neutral-700 px-1">#frontend/1-1</code> のように<GlossaryTerm name="hash">ハッシュ</GlossaryTerm>でステップを指定し、同じ URL を開けば同じ画面が表示されます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          <GlossaryTerm name="url">URL</GlossaryTerm>と画面が対応していると、ブックマークや共有がしやすく、<GlossaryTerm name="browser">ブラウザ</GlossaryTerm>の戻るボタンでも期待どおり動きます。小さいツールでも「一覧」「詳細」で URL を分けておくと便利です。
        </p>
      </div>,
      {
        samplePrompt: `JavaScript で、URL のハッシュ（#xxx）の変化を監視して、ハッシュに応じて表示するコンテンツを切り替えたいです。window.location.hash と hashchange の使い方を教えてください。`,
      }
    ),
    step(
      '6-2',
      'ハッシュと履歴 API',
      <div className="space-y-4">
        <p>
          <strong><GlossaryTerm name="hash">ハッシュ</GlossaryTerm>（#）を変える</strong>と画面を切り替えられ、<strong><GlossaryTerm name="browser">ブラウザ</GlossaryTerm>の戻る</strong>で前の画面に戻れます。
          履歴 API（history.pushState）を使うと、ハッシュなしで同じことができますが、<GlossaryTerm name="server">サーバー</GlossaryTerm>設定が必要な場合があります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          ユーザーが「戻る」で前の画面に戻れると操作が自然になります。<GlossaryTerm name="hash">ハッシュ</GlossaryTerm>は<GlossaryTerm name="server">サーバー</GlossaryTerm>設定なしで使えるため、社内ツールではハッシュベースのルーティングがよく使われます。
        </p>
      </div>,
      {
        samplePrompt: `React で、リンクをクリックしたらハッシュを変えて表示を切り替え、ブラウザの戻るボタンで前の表示に戻れるようにしたいです。useEffect で hash を監視する例を教えてください。`,
      }
    ),
    step(
      '6-3',
      '画面遷移時の状態の保持',
      <div className="space-y-4">
        <p>
          一覧→詳細→戻る、としたときに<strong>一覧のスクロール位置や<GlossaryTerm name="filter">フィルタ</GlossaryTerm>を残す</strong>考え方を押さえます。
          <GlossaryTerm name="state">state</GlossaryTerm> を URL や親<GlossaryTerm name="component">コンポーネント</GlossaryTerm>に持っておく、あるいは一覧と詳細を同時にマウントして表示だけ切り替えるなどの方法があります。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          戻ったら一覧の先頭に飛んでしまうと、ユーザーはまたスクロールし直す必要があります。状態を保持する方針を決めておくと<GlossaryTerm name="ux">UX</GlossaryTerm>が良くなります。
        </p>
      </div>,
      {
        samplePrompt: `一覧画面から詳細画面に遷移し、戻るボタンで一覧に戻ったときに、以前のスクロール位置を復元したいです。React でスクロール位置を保持する方法の例を教えてください。`,
      }
    ),
    step(
      '6-4',
      'SPA のイメージと注意点',
      <div className="space-y-4">
        <p>
          <strong><GlossaryTerm name="spa">SPA</GlossaryTerm>（Single Page Application）</strong>は、1 枚の HTML を読み込み、以降は
          <GlossaryTerm name="javascript">JavaScript</GlossaryTerm>で画面を差し替える形です。
          初回表示がやや重い・ブックマークや<GlossaryTerm name="seo">SEO</GlossaryTerm>に配慮が必要、といった点を押さえておきます。
        </p>
        <h3>なぜこのステップが必要か</h3>
        <p>
          このトレーニングアプリも SPA に近い動きをしています。メリット（遷移が速い・状態を保持しやすい）とデメリット（初期ロード・<GlossaryTerm name="seo">SEO</GlossaryTerm>）を理解しておくと、設計の判断がしやすくなります。
        </p>
      </div>,
      {
        samplePrompt: `SPA と従来の「ページごとに HTML を返す」方式の違いを、初回表示・画面遷移・ブックマーク・SEO の観点で教えてください。社内業務ツールならどちらを選ぶとよいかも知りたいです。`,
      }
    ),
  ],
}
