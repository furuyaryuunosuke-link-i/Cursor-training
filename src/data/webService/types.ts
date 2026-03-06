import type { ReactNode } from 'react'

export type WebServiceStep = {
  id: string
  title: string
  content: ReactNode
  samplePrompt?: string | string[]
}

export type WebServiceChapter = {
  id: string
  title: string
  steps: WebServiceStep[]
}

export function step(
  id: string,
  title: string,
  content: ReactNode,
  opts?: { samplePrompt?: string | string[] }
): WebServiceStep {
  return { id, title, content, ...opts }
}
