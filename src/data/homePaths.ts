import type { TabId } from '../components/TabNav'

export type HomeLearningStep = {
  tab: TabId
  label: string
}

export type HomeLearningPath = {
  id: string
  title: string
  description: string
  steps: HomeLearningStep[]
}

export const HOME_LEARNING_PATHS: HomeLearningPath[] = [
  {
    id: 'default',
    title: '基本ルート',
    description: 'まずは基礎〜上級までを順番に押さえ、そのあと Web サービスやフロントエンド、ツールに広げていく標準ルートです。',
    steps: [
      { tab: 'intro', label: '入門：全体像と Cursor の使い方' },
      { tab: 'intermediate', label: '中級：既存ツールの読み解きと拡張' },
      { tab: 'advanced', label: '上級：ゼロから設計する自動化ツール' },
      { tab: 'webService', label: 'Webサービス：API とホスティング' },
      { tab: 'frontend', label: 'フロントエンド：画面と API の連携' },
      { tab: 'github', label: 'GitHub：履歴管理と CI' },
      { tab: 'python', label: 'Python：スクリプト自動化の基礎' },
      { tab: 'nodejs', label: 'Node.js：JavaScript での自動化' },
    ],
  },
]

