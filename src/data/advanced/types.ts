import type { ReactNode } from 'react'

export type AdvancedStep = {
  id: string
  title: string
  content: ReactNode
  samplePrompt?: string | string[]
}

export type AdvancedChapter = {
  id: string
  title: string
  steps: AdvancedStep[]
}

export function step(
  id: string,
  title: string,
  content: ReactNode,
  opts?: { samplePrompt?: string | string[] }
): AdvancedStep {
  return { id, title, content, ...opts }
}
