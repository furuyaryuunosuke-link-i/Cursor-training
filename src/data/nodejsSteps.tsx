import { NODE_CHAPTER_1 } from './nodejs/nodeCh1'
import { NODE_CHAPTER_2 } from './nodejs/nodeCh2'
import { NODE_CHAPTER_3 } from './nodejs/nodeCh3'
import { NODE_CHAPTER_4 } from './nodejs/nodeCh4'
import { NODE_CHAPTER_5 } from './nodejs/nodeCh5'
import type { NodeChapter, NodeStep } from './nodejs/types'

export type { NodeChapter, NodeStep } from './nodejs/types'

export const NODE_CHAPTERS: NodeChapter[] = [
  NODE_CHAPTER_1,
  NODE_CHAPTER_2,
  NODE_CHAPTER_3,
  NODE_CHAPTER_4,
  NODE_CHAPTER_5,
]

export function getNodeStepById(stepId: string): {
  chapterTitle: string
  step: NodeStep
} | null {
  for (const ch of NODE_CHAPTERS) {
    const step = ch.steps.find((s) => s.id === stepId)
    if (step) return { chapterTitle: ch.title, step }
  }
  return null
}

export function getNodePrevNext(stepId: string): {
  prev: string | null
  next: string | null
} {
  const ids: string[] = []
  for (const ch of NODE_CHAPTERS) {
    for (const s of ch.steps) ids.push(s.id)
  }
  const i = ids.indexOf(stepId)
  if (i < 0) return { prev: null, next: null }
  return {
    prev: i > 0 ? ids[i - 1]! : null,
    next: i < ids.length - 1 ? ids[i + 1]! : null,
  }
}

export function isValidNodeStepId(stepId: string): boolean {
  for (const ch of NODE_CHAPTERS) {
    if (ch.steps.some((s) => s.id === stepId)) return true
  }
  return false
}
