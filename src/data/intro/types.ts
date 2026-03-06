import type { ReactNode } from 'react'

export type IntroStep = {
  id: string
  title: string
  content: ReactNode
  imageSrc?: string
  imageAlt?: string
  imageSecondarySrc?: string
  imageSecondaryAlt?: string
  samplePrompt?: string | string[]
}

export type IntroChapter = {
  id: string
  title: string
  steps: IntroStep[]
}

export function step(
  id: string,
  title: string,
  content: ReactNode,
  opts?: {
    imageSrc?: string
    imageAlt?: string
    imageSecondarySrc?: string
    imageSecondaryAlt?: string
    samplePrompt?: string | string[]
  }
): IntroStep {
  return { id, title, content, ...opts }
}
