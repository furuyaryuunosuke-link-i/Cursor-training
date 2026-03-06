import { createContext, useCallback, useContext, type ReactNode } from 'react'

type GlossaryNavigationContextValue = {
  navigateToTerm: (key: string) => void
} | null

const GlossaryNavigationContext = createContext<GlossaryNavigationContextValue>(null)

export function useGlossaryNavigation(): GlossaryNavigationContextValue {
  return useContext(GlossaryNavigationContext)
}

type GlossaryNavigationProviderProps = {
  setActiveTab: (tab: string) => void
  children: ReactNode
}

export function GlossaryNavigationProvider({
  setActiveTab,
  children,
}: GlossaryNavigationProviderProps) {
  const navigateToTerm = useCallback(
    (key: string) => {
      setActiveTab('glossary')
      const q = new URLSearchParams(window.location.search)
      q.set('term', key)
      const url = `${window.location.pathname}?${q.toString()}#glossary`
      window.history.replaceState(null, '', url)
    },
    [setActiveTab]
  )

  return (
    <GlossaryNavigationContext.Provider value={{ navigateToTerm }}>
      {children}
    </GlossaryNavigationContext.Provider>
  )
}

export { GlossaryNavigationContext }
