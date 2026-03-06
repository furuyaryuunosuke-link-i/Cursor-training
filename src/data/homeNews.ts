export type HomeNewsItem = {
  date: string
  title: string
  description?: string
}

export const HOME_NEWS: HomeNewsItem[] = [
  {
    date: '2025-03',
    title: 'Home タブの追加',
    description: '学習の入口として Home を追加し、入門への導線とタブ全体の俯瞰カードを配置しました。',
  },
  {
    date: '2025-03',
    title: 'Python / Node.js タブの拡充',
    description: 'Cursor と対話しながら進める実践トレーニングとして、Python と Node.js のタブを追加しました。',
  },
]

