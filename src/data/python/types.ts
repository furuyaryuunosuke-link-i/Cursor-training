import type { ReactNode } from 'react'

export type PythonStep = {
  id: string
  title: string
  content: ReactNode
  samplePrompt?: string | string[]
}

export type PythonChapter = {
  id: string
  title: string
  steps: PythonStep[]
}

export function step(
  id: string,
  title: string,
  content: ReactNode,
  opts?: { samplePrompt?: string | string[] }
): PythonStep {
  return { id, title, content, ...opts }
}
