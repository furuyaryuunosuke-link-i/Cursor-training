import type { ReactNode } from 'react'

export type IntermediateStep = {
  id: string
  title: string
  content: ReactNode
  samplePrompt?: string | string[]
}

export type IntermediateChapter = {
  id: string
  title: string
  steps: IntermediateStep[]
}

export function step(
  id: string,
  title: string,
  content: ReactNode,
  opts?: { samplePrompt?: string | string[] }
): IntermediateStep {
  return { id, title, content, ...opts }
}
