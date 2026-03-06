import { INTERMEDIATE_CHAPTER_1 } from './intermediate/intermediateCh1'
import { INTERMEDIATE_CHAPTER_2 } from './intermediate/intermediateCh2'
import { INTERMEDIATE_CHAPTER_3 } from './intermediate/intermediateCh3'
import { INTERMEDIATE_CHAPTER_4 } from './intermediate/intermediateCh4'
import type { IntermediateChapter, IntermediateStep } from './intermediate/types'

export type { IntermediateChapter, IntermediateStep } from './intermediate/types'

export const INTERMEDIATE_CHAPTERS: IntermediateChapter[] = [
  INTERMEDIATE_CHAPTER_1,
  INTERMEDIATE_CHAPTER_2,
  INTERMEDIATE_CHAPTER_3,
  INTERMEDIATE_CHAPTER_4,
]

export function getIntermediateStepById(stepId: string): {
  chapterTitle: string
  step: IntermediateStep
} | null {
  for (const ch of INTERMEDIATE_CHAPTERS) {
    const step = ch.steps.find((s) => s.id === stepId)
    if (step) return { chapterTitle: ch.title, step }
  }
  return null
}

export function getIntermediatePrevNext(stepId: string): {
  prev: string | null
  next: string | null
} {
  const ids: string[] = []
  for (const ch of INTERMEDIATE_CHAPTERS) {
    for (const s of ch.steps) ids.push(s.id)
  }
  const i = ids.indexOf(stepId)
  if (i < 0) return { prev: null, next: null }
  return {
    prev: i > 0 ? ids[i - 1]! : null,
    next: i < ids.length - 1 ? ids[i + 1]! : null,
  }
}

export function isValidIntermediateStepId(stepId: string): boolean {
  for (const ch of INTERMEDIATE_CHAPTERS) {
    if (ch.steps.some((s) => s.id === stepId)) return true
  }
  return false
}
