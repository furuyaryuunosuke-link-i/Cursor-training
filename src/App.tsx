import { useState, useEffect } from 'react'
import { flushSync } from 'react-dom'
import { Layout } from './components/Layout'
import { type TabId } from './components/TabNav'
import { IntroPanel } from './components/panels/IntroPanel'
import { IntroStepView } from './components/panels/IntroStepView'
import { IntermediatePanel } from './components/panels/IntermediatePanel'
import { IntermediateStepView } from './components/panels/IntermediateStepView'
import { AdvancedPanel } from './components/panels/AdvancedPanel'
import { AdvancedStepView } from './components/panels/AdvancedStepView'
import { SecurityPanel } from './components/panels/SecurityPanel'
import { SecurityStepView } from './components/panels/SecurityStepView'
import { WebServicePanel } from './components/panels/WebServicePanel'
import { WebServiceStepView } from './components/panels/WebServiceStepView'
import { FrontendPanel } from './components/panels/FrontendPanel'
import { FrontendStepView } from './components/panels/FrontendStepView'
import { GitHubPanel } from './components/panels/GitHubPanel'
import { GitHubStepView } from './components/panels/GitHubStepView'
import { GlossaryPanel } from './components/panels/GlossaryPanel'
import { isValidIntroStepId } from './data/introSteps'
import { isValidIntermediateStepId } from './data/intermediateSteps'
import { isValidAdvancedStepId } from './data/advancedSteps'
import { isValidSecurityStepId } from './data/securitySteps'
import { isValidWebServiceStepId } from './data/webServiceSteps'
import { isValidFrontendStepId } from './data/frontendSteps'
import { isValidGitHubStepId } from './data/githubSteps'

const TAB_STORAGE_KEY = 'cursor-training-active-tab'
const INTRO_HASH_PREFIX = '#intro'
const INTERMEDIATE_HASH_PREFIX = '#intermediate'
const ADVANCED_HASH_PREFIX = '#advanced'
const SECURITY_HASH_PREFIX = '#security'
const WEB_SERVICE_HASH_PREFIX = '#webService'
const FRONTEND_HASH_PREFIX = '#frontend'
const GITHUB_HASH_PREFIX = '#github'
const GLOSSARY_HASH_PREFIX = '#glossary'

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

function parseAdvancedStepIdFromHash(): string | null {
  if (typeof window === 'undefined') return null
  const h = window.location.hash
  if (h !== ADVANCED_HASH_PREFIX && !h.startsWith(ADVANCED_HASH_PREFIX + '/')) return null
  if (h === ADVANCED_HASH_PREFIX || h === ADVANCED_HASH_PREFIX + '/') return null
  const stepId = h.slice(ADVANCED_HASH_PREFIX.length + 1)
  return isValidAdvancedStepId(stepId) ? stepId : null
}

function parseSecurityStepIdFromHash(): string | null {
  if (typeof window === 'undefined') return null
  const h = window.location.hash
  if (h !== SECURITY_HASH_PREFIX && !h.startsWith(SECURITY_HASH_PREFIX + '/')) return null
  if (h === SECURITY_HASH_PREFIX || h === SECURITY_HASH_PREFIX + '/') return null
  const stepId = h.slice(SECURITY_HASH_PREFIX.length + 1)
  return isValidSecurityStepId(stepId) ? stepId : null
}

function parseWebServiceStepIdFromHash(): string | null {
  if (typeof window === 'undefined') return null
  const h = window.location.hash
  if (h !== WEB_SERVICE_HASH_PREFIX && !h.startsWith(WEB_SERVICE_HASH_PREFIX + '/')) return null
  if (h === WEB_SERVICE_HASH_PREFIX || h === WEB_SERVICE_HASH_PREFIX + '/') return null
  const stepId = h.slice(WEB_SERVICE_HASH_PREFIX.length + 1)
  return isValidWebServiceStepId(stepId) ? stepId : null
}

function parseFrontendStepIdFromHash(): string | null {
  if (typeof window === 'undefined') return null
  const h = window.location.hash
  if (h !== FRONTEND_HASH_PREFIX && !h.startsWith(FRONTEND_HASH_PREFIX + '/')) return null
  if (h === FRONTEND_HASH_PREFIX || h === FRONTEND_HASH_PREFIX + '/') return null
  const stepId = h.slice(FRONTEND_HASH_PREFIX.length + 1)
  return isValidFrontendStepId(stepId) ? stepId : null
}

function parseGitHubStepIdFromHash(): string | null {
  if (typeof window === 'undefined') return null
  const h = window.location.hash
  if (h !== GITHUB_HASH_PREFIX && !h.startsWith(GITHUB_HASH_PREFIX + '/')) return null
  if (h === GITHUB_HASH_PREFIX || h === GITHUB_HASH_PREFIX + '/') return null
  const stepId = h.slice(GITHUB_HASH_PREFIX.length + 1)
  return isValidGitHubStepId(stepId) ? stepId : null
}

function getTabFromHash(): TabId | null {
  if (typeof window === 'undefined') return null
  const h = window.location.hash
  if (h.startsWith(INTRO_HASH_PREFIX)) return 'intro'
  if (h.startsWith(INTERMEDIATE_HASH_PREFIX)) return 'intermediate'
  if (h.startsWith(ADVANCED_HASH_PREFIX)) return 'advanced'
  if (h.startsWith(SECURITY_HASH_PREFIX)) return 'security'
  if (h.startsWith(WEB_SERVICE_HASH_PREFIX)) return 'webService'
  if (h.startsWith(FRONTEND_HASH_PREFIX)) return 'frontend'
  if (h.startsWith(GITHUB_HASH_PREFIX)) return 'github'
  if (h.startsWith(GLOSSARY_HASH_PREFIX)) return 'glossary'
  return null
}

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('intro')
  const [isDark, setIsDark] = useState(true)
  const [introStepId, setIntroStepId] = useState<string | null>(parseIntroStepIdFromHash)
  const [intermediateStepId, setIntermediateStepId] = useState<string | null>(
    parseIntermediateStepIdFromHash
  )
  const [advancedStepId, setAdvancedStepId] = useState<string | null>(
    parseAdvancedStepIdFromHash
  )
  const [securityStepId, setSecurityStepId] = useState<string | null>(
    parseSecurityStepIdFromHash
  )
  const [webServiceStepId, setWebServiceStepId] = useState<string | null>(
    parseWebServiceStepIdFromHash
  )
  const [frontendStepId, setFrontendStepId] = useState<string | null>(
    parseFrontendStepIdFromHash
  )
  const [githubStepId, setGitHubStepId] = useState<string | null>(
    parseGitHubStepIdFromHash
  )

  // 直接URLで開いたとき（#intro/1-1, #advanced/2-1 など）は hash からタブを決定
  useEffect(() => {
    const tabFromHash = getTabFromHash()
    if (tabFromHash) {
      setActiveTab(tabFromHash)
      return
    }
    const stored = localStorage.getItem(TAB_STORAGE_KEY) as TabId | null
    if (
      stored &&
      [
        'intro',
        'intermediate',
        'advanced',
        'security',
        'webService',
        'frontend',
        'github',
        'glossary',
      ].includes(stored)
    ) {
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

  useEffect(() => {
    if (activeTab !== 'advanced') return
    const sync = () => setAdvancedStepId(parseAdvancedStepIdFromHash())
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [activeTab])

  useEffect(() => {
    if (activeTab !== 'security') return
    const sync = () => setSecurityStepId(parseSecurityStepIdFromHash())
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [activeTab])

  useEffect(() => {
    if (activeTab !== 'webService') return
    const sync = () => setWebServiceStepId(parseWebServiceStepIdFromHash())
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [activeTab])

  useEffect(() => {
    if (activeTab !== 'frontend') return
    const sync = () => setFrontendStepId(parseFrontendStepIdFromHash())
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [activeTab])

  useEffect(() => {
    if (activeTab !== 'github') return
    const sync = () => setGitHubStepId(parseGitHubStepIdFromHash())
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [activeTab])

  const handleTabChange = (tab: TabId) => setActiveTab(tab)
  const handleThemeToggle = () => setIsDark((prev) => !prev)

  const handleIntroStepSelect = (stepId: string) => {
    flushSync(() => setIntroStepId(stepId))
    window.location.hash = INTRO_HASH_PREFIX + '/' + stepId
  }

  const handleIntroNavigateToStep = (stepId: string | null) => {
    flushSync(() => setIntroStepId(stepId))
    window.location.hash = stepId ? INTRO_HASH_PREFIX + '/' + stepId : INTRO_HASH_PREFIX
  }

  const handleIntermediateStepSelect = (stepId: string) => {
    flushSync(() => setIntermediateStepId(stepId))
    window.location.hash = INTERMEDIATE_HASH_PREFIX + '/' + stepId
  }

  const handleIntermediateNavigateToStep = (stepId: string | null) => {
    flushSync(() => setIntermediateStepId(stepId))
    window.location.hash = stepId
      ? INTERMEDIATE_HASH_PREFIX + '/' + stepId
      : INTERMEDIATE_HASH_PREFIX
  }

  const handleAdvancedStepSelect = (stepId: string) => {
    flushSync(() => setAdvancedStepId(stepId))
    window.location.hash = ADVANCED_HASH_PREFIX + '/' + stepId
  }

  const handleAdvancedNavigateToStep = (stepId: string | null) => {
    flushSync(() => setAdvancedStepId(stepId))
    window.location.hash = stepId
      ? ADVANCED_HASH_PREFIX + '/' + stepId
      : ADVANCED_HASH_PREFIX
  }

  const handleSecurityStepSelect = (stepId: string) => {
    flushSync(() => setSecurityStepId(stepId))
    window.location.hash = SECURITY_HASH_PREFIX + '/' + stepId
  }

  const handleSecurityNavigateToStep = (stepId: string | null) => {
    flushSync(() => setSecurityStepId(stepId))
    window.location.hash = stepId
      ? SECURITY_HASH_PREFIX + '/' + stepId
      : SECURITY_HASH_PREFIX
  }

  const handleWebServiceStepSelect = (stepId: string) => {
    flushSync(() => setWebServiceStepId(stepId))
    window.location.hash = WEB_SERVICE_HASH_PREFIX + '/' + stepId
  }

  const handleWebServiceNavigateToStep = (stepId: string | null) => {
    flushSync(() => setWebServiceStepId(stepId))
    window.location.hash = stepId
      ? WEB_SERVICE_HASH_PREFIX + '/' + stepId
      : WEB_SERVICE_HASH_PREFIX
  }

  const handleFrontendStepSelect = (stepId: string) => {
    flushSync(() => setFrontendStepId(stepId))
    window.location.hash = FRONTEND_HASH_PREFIX + '/' + stepId
  }

  const handleFrontendNavigateToStep = (stepId: string | null) => {
    flushSync(() => setFrontendStepId(stepId))
    window.location.hash = stepId
      ? FRONTEND_HASH_PREFIX + '/' + stepId
      : FRONTEND_HASH_PREFIX
  }

  const handleGitHubStepSelect = (stepId: string) => {
    flushSync(() => setGitHubStepId(stepId))
    window.location.hash = GITHUB_HASH_PREFIX + '/' + stepId
  }

  const handleGitHubNavigateToStep = (stepId: string | null) => {
    flushSync(() => setGitHubStepId(stepId))
    window.location.hash = stepId
      ? GITHUB_HASH_PREFIX + '/' + stepId
      : GITHUB_HASH_PREFIX
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
      {activeTab === 'advanced' &&
        (advancedStepId ? (
          <AdvancedStepView
            stepId={advancedStepId}
            onNavigateToStep={handleAdvancedNavigateToStep}
          />
        ) : (
          <AdvancedPanel onStepSelect={handleAdvancedStepSelect} />
        ))}
      {activeTab === 'security' &&
        (securityStepId ? (
          <SecurityStepView
            stepId={securityStepId}
            onNavigateToStep={handleSecurityNavigateToStep}
          />
        ) : (
          <SecurityPanel onStepSelect={handleSecurityStepSelect} />
        ))}
      {activeTab === 'webService' &&
        (webServiceStepId ? (
          <WebServiceStepView
            stepId={webServiceStepId}
            onNavigateToStep={handleWebServiceNavigateToStep}
          />
        ) : (
          <WebServicePanel onStepSelect={handleWebServiceStepSelect} />
        ))}
      {activeTab === 'frontend' &&
        (frontendStepId ? (
          <FrontendStepView
            stepId={frontendStepId}
            onNavigateToStep={handleFrontendNavigateToStep}
          />
        ) : (
          <FrontendPanel onStepSelect={handleFrontendStepSelect} />
        ))}
      {activeTab === 'github' &&
        (githubStepId ? (
          <GitHubStepView
            stepId={githubStepId}
            onNavigateToStep={handleGitHubNavigateToStep}
          />
        ) : (
          <GitHubPanel onStepSelect={handleGitHubStepSelect} />
        ))}
      {activeTab === 'glossary' && <GlossaryPanel />}
    </Layout>
  )
}

export default App
