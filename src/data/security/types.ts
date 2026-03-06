import type { ReactNode } from 'react'

export type SecurityStep = {
  id: string
  title: string
  content: ReactNode
  samplePrompt?: string | string[]
}

export type SecurityChapter = {
  id: string
  title: string
  steps: SecurityStep[]
}

export function step(
  id: string,
  title: string,
  content: ReactNode,
  opts?: { samplePrompt?: string | string[] }
): SecurityStep {
  return { id, title, content, ...opts }
}
