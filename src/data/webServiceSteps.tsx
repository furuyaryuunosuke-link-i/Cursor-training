import { WEB_SERVICE_CHAPTER_1 } from './webService/webServiceCh1'
import { WEB_SERVICE_CHAPTER_2 } from './webService/webServiceCh2'
import { WEB_SERVICE_CHAPTER_3 } from './webService/webServiceCh3'
import { WEB_SERVICE_CHAPTER_4 } from './webService/webServiceCh4'
import { WEB_SERVICE_CHAPTER_5 } from './webService/webServiceCh5'
import { WEB_SERVICE_CHAPTER_6 } from './webService/webServiceCh6'
import type { WebServiceChapter, WebServiceStep } from './webService/types'

export type { WebServiceChapter, WebServiceStep } from './webService/types'

export const WEB_SERVICE_CHAPTERS: WebServiceChapter[] = [
  WEB_SERVICE_CHAPTER_1,
  WEB_SERVICE_CHAPTER_2,
  WEB_SERVICE_CHAPTER_3,
  WEB_SERVICE_CHAPTER_4,
  WEB_SERVICE_CHAPTER_5,
  WEB_SERVICE_CHAPTER_6,
]

export function getWebServiceStepById(stepId: string): {
  chapterTitle: string
  step: WebServiceStep
} | null {
  for (const ch of WEB_SERVICE_CHAPTERS) {
    const step = ch.steps.find((s) => s.id === stepId)
    if (step) return { chapterTitle: ch.title, step }
  }
  return null
}

export function getWebServicePrevNext(stepId: string): {
  prev: string | null
  next: string | null
} {
  const ids: string[] = []
  for (const ch of WEB_SERVICE_CHAPTERS) {
    for (const s of ch.steps) ids.push(s.id)
  }
  const i = ids.indexOf(stepId)
  if (i < 0) return { prev: null, next: null }
  return {
    prev: i > 0 ? ids[i - 1]! : null,
    next: i < ids.length - 1 ? ids[i + 1]! : null,
  }
}

export function isValidWebServiceStepId(stepId: string): boolean {
  for (const ch of WEB_SERVICE_CHAPTERS) {
    if (ch.steps.some((s) => s.id === stepId)) return true
  }
  return false
}
