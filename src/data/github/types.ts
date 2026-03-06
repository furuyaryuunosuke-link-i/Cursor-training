import type { ReactNode } from 'react'

export type GitHubStep = {
  id: string
  title: string
  content: ReactNode
  samplePrompt?: string | string[]
}

export type GitHubChapter = {
  id: string
  title: string
  steps: GitHubStep[]
}

export function step(
  id: string,
  title: string,
  content: ReactNode,
  opts?: { samplePrompt?: string | string[] }
): GitHubStep {
  return { id, title, content, ...opts }
}
