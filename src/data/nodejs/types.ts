import type { ReactNode } from 'react'

export type NodeStep = {
  id: string
  title: string
  content: ReactNode
  samplePrompt?: string | string[]
}

export type NodeChapter = {
  id: string
  title: string
  steps: NodeStep[]
}

export function step(
  id: string,
  title: string,
  content: ReactNode,
  opts?: { samplePrompt?: string | string[] }
): NodeStep {
  return { id, title, content, ...opts }
}
