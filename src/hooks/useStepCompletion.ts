import { useEffect, useState } from 'react'

type CompletionMap = Record<string, boolean>

type UseStepCompletionResult = {
  completed: CompletionMap
  isStepCompleted: (id: string) => boolean
  toggleStep: (id: string) => void
  setMany: (ids: string[], value: boolean) => void
}

export function useStepCompletion(storageKey: string): UseStepCompletionResult {
  const [completed, setCompleted] = useState<CompletionMap>({})

  // 初期値を localStorage から復元
  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const raw = window.localStorage.getItem(storageKey)
      if (!raw) return
      const parsed = JSON.parse(raw) as unknown
      if (parsed && typeof parsed === 'object') {
        setCompleted(parsed as CompletionMap)
      }
    } catch {
      // パースに失敗した場合は何もしない
    }
  }, [storageKey])

  // 変更を localStorage に保存
  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(completed))
    } catch {
      // 保存に失敗した場合は何もしない
    }
  }, [storageKey, completed])

  const isStepCompleted = (id: string) => !!completed[id]

  const toggleStep = (id: string) => {
    setCompleted((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const setMany = (ids: string[], value: boolean) => {
    setCompleted((prev) => {
      const next: CompletionMap = { ...prev }
      for (const id of ids) {
        next[id] = value
      }
      return next
    })
  }

  return {
    completed,
    isStepCompleted,
    toggleStep,
    setMany,
  }
}

