import { INTRO_CHAPTER_1 } from './intro/introCh1'
import { INTRO_CHAPTER_2 } from './intro/introCh2'
import { INTRO_CHAPTER_3 } from './intro/introCh3'
import { INTRO_CHAPTER_4 } from './intro/introCh4'
import type { IntroChapter, IntroStep } from './intro/types'

export type { IntroChapter, IntroStep } from './intro/types'

export const INTRO_CHAPTERS: IntroChapter[] = [
  INTRO_CHAPTER_1,
  INTRO_CHAPTER_2,
  INTRO_CHAPTER_3,
  INTRO_CHAPTER_4,
]

export function getAllIntroStepIds(): string[] {
  const ids: string[] = []
  for (const ch of INTRO_CHAPTERS) {
    for (const s of ch.steps) ids.push(s.id)
  }
  return ids
}

export function getIntroStepById(stepId: string): {
  chapterTitle: string
  step: IntroStep
} | null {
  for (const ch of INTRO_CHAPTERS) {
    const step = ch.steps.find((s) => s.id === stepId)
    if (step) return { chapterTitle: ch.title, step }
  }
  return null
}

export function getIntroPrevNext(stepId: string): {
  prev: string | null
  next: string | null
} {
  const ids = getAllIntroStepIds()
  const i = ids.indexOf(stepId)
  if (i < 0) return { prev: null, next: null }
  return {
    prev: i > 0 ? ids[i - 1]! : null,
    next: i < ids.length - 1 ? ids[i + 1]! : null,
  }
}

export function isValidIntroStepId(stepId: string): boolean {
  return getAllIntroStepIds().includes(stepId)
}
