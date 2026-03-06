import { INTRO_CHAPTERS } from '../data/introSteps'
import { INTERMEDIATE_CHAPTERS } from '../data/intermediateSteps'
import { ADVANCED_CHAPTERS } from '../data/advancedSteps'
import { SECURITY_CHAPTERS } from '../data/securitySteps'
import { WEB_SERVICE_CHAPTERS } from '../data/webServiceSteps'
import { FRONTEND_CHAPTERS } from '../data/frontendSteps'
import { GITHUB_CHAPTERS } from '../data/githubSteps'
import { PYTHON_CHAPTERS } from '../data/pythonSteps'
import { NODE_CHAPTERS } from '../data/nodejsSteps'

type Summary = {
  completed: number
  total: number
}

function loadCompletionMap(storageKey: string): Record<string, boolean> {
  if (typeof window === 'undefined') return {}
  try {
    const raw = window.localStorage.getItem(storageKey)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as unknown
    if (parsed && typeof parsed === 'object') {
      return parsed as Record<string, boolean>
    }
  } catch {
    // ignore
  }
  return {}
}

function summarizeFromChapters(
  chapters: { steps: { id: string }[] }[],
  storageKey: string
): Summary {
  const completedMap = loadCompletionMap(storageKey)
  let total = 0
  let completed = 0
  for (const ch of chapters) {
    for (const step of ch.steps) {
      total += 1
      if (completedMap[step.id]) completed += 1
    }
  }
  return { completed, total }
}

export function getHomeProgressSummary() {
  return {
    intro: summarizeFromChapters(INTRO_CHAPTERS, 'intro-step-completion'),
    intermediate: summarizeFromChapters(
      INTERMEDIATE_CHAPTERS,
      'intermediate-step-completion'
    ),
    advanced: summarizeFromChapters(ADVANCED_CHAPTERS, 'advanced-step-completion'),
    security: summarizeFromChapters(SECURITY_CHAPTERS, 'security-step-completion'),
    webService: summarizeFromChapters(
      WEB_SERVICE_CHAPTERS,
      'web-service-step-completion'
    ),
    frontend: summarizeFromChapters(FRONTEND_CHAPTERS, 'frontend-step-completion'),
    github: summarizeFromChapters(GITHUB_CHAPTERS, 'github-step-completion'),
    python: summarizeFromChapters(PYTHON_CHAPTERS, 'python-step-completion'),
    nodejs: summarizeFromChapters(NODE_CHAPTERS, 'nodejs-step-completion'),
  }
}

