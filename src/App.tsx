import { useState, useEffect } from 'react'
import { Layout } from './components/Layout'
import { type TabId } from './components/TabNav'
import { IntroPanel } from './components/panels/IntroPanel'
import { IntroStepView } from './components/panels/IntroStepView'
import { IntermediatePanel } from './components/panels/IntermediatePanel'
import { IntermediateStepView } from './components/panels/IntermediateStepView'
import { AdvancedPanel } from './components/panels/AdvancedPanel'
import { GitHubPanel } from './components/panels/GitHubPanel'
import { isValidIntroStepId } from './data/introSteps'
import { isValidIntermediateStepId } from './data/intermediateSteps'

const TAB_STORAGE_KEY = 'cursor-training-active-tab'
const INTRO_HASH_PREFIX = '#intro'
const INTERMEDIATE_HASH_PREFIX = '#intermediate'

function parseIntroStepIdFromHash(): string | null {
  if (typeof window === 'undefined') return null
  const h = window.location.hash
  if (h !== INTRO_HASH_PREFIX && !h.startsWith(INTRO_HASH_PREFIX + '/')) return null
  if (h === INTRO_HASH_PREFIX || h === INTRO_HASH_PREFIX + '/') return null
  const stepId = h.slice(INTRO_HASH_PREFIX.length + 1)
  return isValidIntroStepId(stepId) ? stepId : null
}

function parseIntermediateStepIdFromHash(): string | null {
  if (typeof window === 'undefined') return null
  const h = window.location.hash
  if (h !== INTERMEDIATE_HASH_PREFIX && !h.startsWith(INTERMEDIATE_HASH_PREFIX + '/')) return null
  if (h === INTERMEDIATE_HASH_PREFIX || h === INTERMEDIATE_HASH_PREFIX + '/') return null
  const stepId = h.slice(INTERMEDIATE_HASH_PREFIX.length + 1)
  return isValidIntermediateStepId(stepId) ? stepId : null
}

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('intro')
  const [isDark, setIsDark] = useState(true)
  const [introStepId, setIntroStepId] = useState<string | null>(parseIntroStepIdFromHash)
  const [intermediateStepId, setIntermediateStepId] = useState<string | null>(
    parseIntermediateStepIdFromHash
  )

  useEffect(() => {
    const stored = localStorage.getItem(TAB_STORAGE_KEY) as TabId | null
    if (stored && ['intro', 'intermediate', 'advanced', 'github'].includes(stored)) {
      setActiveTab(stored)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(TAB_STORAGE_KEY, activeTab)
  }, [activeTab])

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    if (activeTab !== 'intro') return
    const sync = () => setIntroStepId(parseIntroStepIdFromHash())
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [activeTab])

  useEffect(() => {
    if (activeTab !== 'intermediate') return
    const sync = () => setIntermediateStepId(parseIntermediateStepIdFromHash())
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [activeTab])

  const handleTabChange = (tab: TabId) => setActiveTab(tab)
  const handleThemeToggle = () => setIsDark((prev) => !prev)

  const handleIntroStepSelect = (stepId: string) => {
    window.location.hash = INTRO_HASH_PREFIX + '/' + stepId
  }

  const handleIntroNavigateToStep = (stepId: string | null) => {
    window.location.hash = stepId ? INTRO_HASH_PREFIX + '/' + stepId : INTRO_HASH_PREFIX
  }

  const handleIntermediateStepSelect = (stepId: string) => {
    window.location.hash = INTERMEDIATE_HASH_PREFIX + '/' + stepId
  }

  const handleIntermediateNavigateToStep = (stepId: string | null) => {
    window.location.hash = stepId
      ? INTERMEDIATE_HASH_PREFIX + '/' + stepId
      : INTERMEDIATE_HASH_PREFIX
  }

  return (
    <Layout
      activeTab={activeTab}
      onTabChange={handleTabChange}
      isDark={isDark}
      onThemeToggle={handleThemeToggle}
    >
      {activeTab === 'intro' &&
        (introStepId ? (
          <IntroStepView
            stepId={introStepId}
            onNavigateToStep={handleIntroNavigateToStep}
          />
        ) : (
          <IntroPanel onStepSelect={handleIntroStepSelect} />
        ))}
      {activeTab === 'intermediate' &&
        (intermediateStepId ? (
          <IntermediateStepView
            stepId={intermediateStepId}
            onNavigateToStep={handleIntermediateNavigateToStep}
          />
        ) : (
          <IntermediatePanel onStepSelect={handleIntermediateStepSelect} />
        ))}
      {activeTab === 'advanced' && <AdvancedPanel />}
      {activeTab === 'github' && <GitHubPanel />}
    </Layout>
  )
}

export default App
