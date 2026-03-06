import { ADVANCED_CHAPTER_1 } from './advanced/advancedCh1'
import { ADVANCED_CHAPTER_2 } from './advanced/advancedCh2'
import { ADVANCED_CHAPTER_3 } from './advanced/advancedCh3'
import { ADVANCED_CHAPTER_4 } from './advanced/advancedCh4'
import { ADVANCED_CHAPTER_5 } from './advanced/advancedCh5'
import type { AdvancedChapter, AdvancedStep } from './advanced/types'

export type { AdvancedChapter, AdvancedStep } from './advanced/types'

export const ADVANCED_CHAPTERS: AdvancedChapter[] = [
  ADVANCED_CHAPTER_1,
  ADVANCED_CHAPTER_2,
  ADVANCED_CHAPTER_3,
  ADVANCED_CHAPTER_4,
  ADVANCED_CHAPTER_5,
]

export function getAdvancedStepById(stepId: string): {
  chapterTitle: string
  step: AdvancedStep
} | null {
  for (const ch of ADVANCED_CHAPTERS) {
    const step = ch.steps.find((s) => s.id === stepId)
    if (step) return { chapterTitle: ch.title, step }
  }
  return null
}

export function getAdvancedPrevNext(stepId: string): {
  prev: string | null
  next: string | null
} {
  const ids: string[] = []
  for (const ch of ADVANCED_CHAPTERS) {
    for (const s of ch.steps) ids.push(s.id)
  }
  const i = ids.indexOf(stepId)
  if (i < 0) return { prev: null, next: null }
  return {
    prev: i > 0 ? ids[i - 1]! : null,
    next: i < ids.length - 1 ? ids[i + 1]! : null,
  }
}

export function isValidAdvancedStepId(stepId: string): boolean {
  for (const ch of ADVANCED_CHAPTERS) {
    if (ch.steps.some((s) => s.id === stepId)) return true
  }
  return false
}
