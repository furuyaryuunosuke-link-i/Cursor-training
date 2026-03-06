import { GITHUB_CHAPTER_1 } from './github/githubCh1'
import { GITHUB_CHAPTER_2 } from './github/githubCh2'
import { GITHUB_CHAPTER_3 } from './github/githubCh3'
import { GITHUB_CHAPTER_4 } from './github/githubCh4'
import { GITHUB_CHAPTER_5 } from './github/githubCh5'
import { GITHUB_CHAPTER_6 } from './github/githubCh6'
import type { GitHubChapter, GitHubStep } from './github/types'

export type { GitHubChapter, GitHubStep } from './github/types'

export const GITHUB_CHAPTERS: GitHubChapter[] = [
  GITHUB_CHAPTER_1,
  GITHUB_CHAPTER_2,
  GITHUB_CHAPTER_3,
  GITHUB_CHAPTER_4,
  GITHUB_CHAPTER_5,
  GITHUB_CHAPTER_6,
]

export function getGitHubStepById(stepId: string): {
  chapterTitle: string
  step: GitHubStep
} | null {
  for (const ch of GITHUB_CHAPTERS) {
    const step = ch.steps.find((s) => s.id === stepId)
    if (step) return { chapterTitle: ch.title, step }
  }
  return null
}

export function getGitHubPrevNext(stepId: string): {
  prev: string | null
  next: string | null
} {
  const ids: string[] = []
  for (const ch of GITHUB_CHAPTERS) {
    for (const s of ch.steps) ids.push(s.id)
  }
  const i = ids.indexOf(stepId)
  if (i < 0) return { prev: null, next: null }
  return {
    prev: i > 0 ? ids[i - 1]! : null,
    next: i < ids.length - 1 ? ids[i + 1]! : null,
  }
}

export function isValidGitHubStepId(stepId: string): boolean {
  for (const ch of GITHUB_CHAPTERS) {
    if (ch.steps.some((s) => s.id === stepId)) return true
  }
  return false
}
