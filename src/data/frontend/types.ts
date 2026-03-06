import type { ReactNode } from 'react'

export type FrontendStep = {
  id: string
  title: string
  content: ReactNode
  samplePrompt?: string | string[]
}

export type FrontendChapter = {
  id: string
  title: string
  steps: FrontendStep[]
}

export function step(
  id: string,
  title: string,
  content: ReactNode,
  opts?: { samplePrompt?: string | string[] }
): FrontendStep {
  return { id, title, content, ...opts }
}
