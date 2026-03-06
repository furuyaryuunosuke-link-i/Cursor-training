import { FRONTEND_CHAPTER_1 } from './frontend/frontendCh1'
import { FRONTEND_CHAPTER_2 } from './frontend/frontendCh2'
import { FRONTEND_CHAPTER_3 } from './frontend/frontendCh3'
import { FRONTEND_CHAPTER_4 } from './frontend/frontendCh4'
import { FRONTEND_CHAPTER_5 } from './frontend/frontendCh5'
import { FRONTEND_CHAPTER_6 } from './frontend/frontendCh6'
import type { FrontendChapter, FrontendStep } from './frontend/types'

export type { FrontendChapter, FrontendStep } from './frontend/types'

export const FRONTEND_CHAPTERS: FrontendChapter[] = [
  FRONTEND_CHAPTER_1,
  FRONTEND_CHAPTER_2,
  FRONTEND_CHAPTER_3,
  FRONTEND_CHAPTER_4,
  FRONTEND_CHAPTER_5,
  FRONTEND_CHAPTER_6,
]

export function getFrontendStepById(stepId: string): {
  chapterTitle: string
  step: FrontendStep
} | null {
  for (const ch of FRONTEND_CHAPTERS) {
    const step = ch.steps.find((s) => s.id === stepId)
    if (step) return { chapterTitle: ch.title, step }
  }
  return null
}

export function getFrontendPrevNext(stepId: string): {
  prev: string | null
  next: string | null
} {
  const ids: string[] = []
  for (const ch of FRONTEND_CHAPTERS) {
    for (const s of ch.steps) ids.push(s.id)
  }
  const i = ids.indexOf(stepId)
  if (i < 0) return { prev: null, next: null }
  return {
    prev: i > 0 ? ids[i - 1]! : null,
    next: i < ids.length - 1 ? ids[i + 1]! : null,
  }
}

export function isValidFrontendStepId(stepId: string): boolean {
  for (const ch of FRONTEND_CHAPTERS) {
    if (ch.steps.some((s) => s.id === stepId)) return true
  }
  return false
}
