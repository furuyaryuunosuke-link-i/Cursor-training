export type HomeTipItem = {
  id: string
  title: string
  body: string
}

export const HOME_TIPS: HomeTipItem[] = [
  {
    id: 'ask-vs-agent',
    title: 'Ask モードと Agent モードの使い分け',
    body: '最初は Ask モードで「どう直せばよいか」「どんな構成がよいか」を相談し、方向性が固まってから Agent モードで具体的な編集を任せると安心です。',
  },
  {
    id: 'copy-prompts',
    title: 'サンプルプロンプトはそのまま試してみる',
    body: '各ステップのサンプルプロンプトは、そのまま貼り付けて動作を確認できるようになっています。まずは写経感覚で実行し、慣れてきたら自分の業務に合わせて書き換えていきましょう。',
  },
]

