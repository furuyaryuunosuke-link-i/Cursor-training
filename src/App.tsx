import { useState, useEffect } from 'react'
import { Layout } from './components/Layout'
import { type TabId } from './components/TabNav'
import { IntroPanel } from './components/panels/IntroPanel'
import { IntermediatePanel } from './components/panels/IntermediatePanel'
import { AdvancedPanel } from './components/panels/AdvancedPanel'
import { GitHubPanel } from './components/panels/GitHubPanel'

const TAB_STORAGE_KEY = 'cursor-training-active-tab'

function App() {
  const [activeTab, setActiveTab] = useState<TabId>('intro')
  const [isDark, setIsDark] = useState(true)

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

  const handleTabChange = (tab: TabId) => setActiveTab(tab)
  const handleThemeToggle = () => setIsDark((prev) => !prev)

  return (
    <Layout
      activeTab={activeTab}
      onTabChange={handleTabChange}
      isDark={isDark}
      onThemeToggle={handleThemeToggle}
    >
      {activeTab === 'intro' && <IntroPanel />}
      {activeTab === 'intermediate' && <IntermediatePanel />}
      {activeTab === 'advanced' && <AdvancedPanel />}
      {activeTab === 'github' && <GitHubPanel />}
    </Layout>
  )
}

export default App
