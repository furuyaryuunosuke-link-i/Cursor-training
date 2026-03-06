import { PYTHON_CHAPTER_1 } from './python/pythonCh1'
import { PYTHON_CHAPTER_2 } from './python/pythonCh2'
import { PYTHON_CHAPTER_3 } from './python/pythonCh3'
import { PYTHON_CHAPTER_4 } from './python/pythonCh4'
import { PYTHON_CHAPTER_5 } from './python/pythonCh5'
import type { PythonChapter, PythonStep } from './python/types'

export type { PythonChapter, PythonStep } from './python/types'

export const PYTHON_CHAPTERS: PythonChapter[] = [
  PYTHON_CHAPTER_1,
  PYTHON_CHAPTER_2,
  PYTHON_CHAPTER_3,
  PYTHON_CHAPTER_4,
  PYTHON_CHAPTER_5,
]

export function getPythonStepById(stepId: string): {
  chapterTitle: string
  step: PythonStep
} | null {
  for (const ch of PYTHON_CHAPTERS) {
    const step = ch.steps.find((s) => s.id === stepId)
    if (step) return { chapterTitle: ch.title, step }
  }
  return null
}

export function getPythonPrevNext(stepId: string): {
  prev: string | null
  next: string | null
} {
  const ids: string[] = []
  for (const ch of PYTHON_CHAPTERS) {
    for (const s of ch.steps) ids.push(s.id)
  }
  const i = ids.indexOf(stepId)
  if (i < 0) return { prev: null, next: null }
  return {
    prev: i > 0 ? ids[i - 1]! : null,
    next: i < ids.length - 1 ? ids[i + 1]! : null,
  }
}

export function isValidPythonStepId(stepId: string): boolean {
  for (const ch of PYTHON_CHAPTERS) {
    if (ch.steps.some((s) => s.id === stepId)) return true
  }
  return false
}
