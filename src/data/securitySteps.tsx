import { SECURITY_CHAPTER_1 } from './security/securityCh1'
import { SECURITY_CHAPTER_2 } from './security/securityCh2'
import { SECURITY_CHAPTER_3 } from './security/securityCh3'
import { SECURITY_CHAPTER_4 } from './security/securityCh4'
import { SECURITY_CHAPTER_5 } from './security/securityCh5'
import { SECURITY_CHAPTER_6 } from './security/securityCh6'
import { SECURITY_CHAPTER_7 } from './security/securityCh7'
import { SECURITY_CHAPTER_8 } from './security/securityCh8'
import type { SecurityChapter, SecurityStep } from './security/types'

export type { SecurityChapter, SecurityStep } from './security/types'

export const SECURITY_CHAPTERS: SecurityChapter[] = [
  SECURITY_CHAPTER_1,
  SECURITY_CHAPTER_2,
  SECURITY_CHAPTER_3,
  SECURITY_CHAPTER_4,
  SECURITY_CHAPTER_5,
  SECURITY_CHAPTER_6,
  SECURITY_CHAPTER_7,
  SECURITY_CHAPTER_8,
]

export function getSecurityStepById(stepId: string): {
  chapterTitle: string
  step: SecurityStep
} | null {
  for (const ch of SECURITY_CHAPTERS) {
    const step = ch.steps.find((s) => s.id === stepId)
    if (step) return { chapterTitle: ch.title, step }
  }
  return null
}

export function getSecurityPrevNext(stepId: string): {
  prev: string | null
  next: string | null
} {
  const ids: string[] = []
  for (const ch of SECURITY_CHAPTERS) {
    for (const s of ch.steps) ids.push(s.id)
  }
  const i = ids.indexOf(stepId)
  if (i < 0) return { prev: null, next: null }
  return {
    prev: i > 0 ? ids[i - 1]! : null,
    next: i < ids.length - 1 ? ids[i + 1]! : null,
  }
}

export function isValidSecurityStepId(stepId: string): boolean {
  for (const ch of SECURITY_CHAPTERS) {
    if (ch.steps.some((s) => s.id === stepId)) return true
  }
  return false
}
