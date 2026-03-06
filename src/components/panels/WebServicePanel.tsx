import { useEffect, useRef, useState } from 'react'
import { WEB_SERVICE_CHAPTERS } from '../../data/webServiceSteps'
import { useStepCompletion } from '../../hooks/useStepCompletion'

type WebServicePanelProps = {
  onStepSelect: (stepId: string) => void
}

export function WebServicePanel({ onStepSelect }: WebServicePanelProps) {
  const { completed, isStepCompleted, toggleStep, setMany } = useStepCompletion(
    'web-service-step-completion'
  )
  const [flashChapters, setFlashChapters] = useState<Record<string, boolean>>({})
  const prevAllCompletedRef = useRef<Record<string, boolean>>({})

  useEffect(() => {
    const prevAllCompleted = prevAllCompletedRef.current
    const nextAllCompleted: Record<string, boolean> = {}

    for (const chapter of WEB_SERVICE_CHAPTERS) {
      const allDone =
        chapter.steps.length > 0 &&
        chapter.steps.every((step) => !!completed[step.id])
      nextAllCompleted[chapter.id] = allDone

      if (allDone && !prevAllCompleted[chapter.id]) {
        setFlashChapters((current) => ({
          ...current,
          [chapter.id]: true,
        }))
        window.setTimeout(() => {
          setFlashChapters((current) => ({
            ...current,
            [chapter.id]: false,
          }))
        }, 800)
      }
    }

    prevAllCompletedRef.current = nextAllCompleted
  }, [completed])

  const handleToggleChapterAll = (chapterId: string, stepIds: string[], checked: boolean) => {
    setMany(stepIds, checked)
    if (checked) {
      setFlashChapters((current) => ({ ...current, [chapterId]: true }))
      window.setTimeout(() => {
        setFlashChapters((current) => ({ ...current, [chapterId]: false }))
      }, 800)
    }
  }

  return (
    <section
      id="panel-webService"
      role="tabpanel"
      aria-labelledby="tab-webService"
      className="space-y-8"
    >
      {WEB_SERVICE_CHAPTERS.map((chapter) => {
        const stepIds = chapter.steps.map((step) => step.id)
        const completedCount = stepIds.filter((id) => !!completed[id]).length
        const allCompleted = stepIds.length > 0 && completedCount === stepIds.length
        const isFlashing = !!flashChapters[chapter.id]

        return (
          <div
            key={chapter.id}
            className={
              'chapter-card space-y-3 ' +
              (allCompleted ? 'chapter-card--completed ' : '') +
              (isFlashing ? 'chapter-card--flash ' : '')
            }
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {chapter.title}
                </h2>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  {completedCount} / {stepIds.length} ステップ完了
                </p>
              </div>
              <label
                className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-300"
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 accent-emerald-500"
                  checked={allCompleted}
                  onChange={(e) =>
                    handleToggleChapterAll(chapter.id, stepIds, e.target.checked)
                  }
                />
                <span>この章をまとめて達成</span>
              </label>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {chapter.steps.map((step) => {
                const completedStep = isStepCompleted(step.id)
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => onStepSelect(step.id)}
                    className={
                      'relative text-left rounded-2xl bg-white/30 dark:bg-white/5 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-lg p-5 hover:bg-white/40 dark:hover:bg-white/10 hover:border-white/60 dark:hover:border-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-white/30 dark:focus-visible:ring-white/20 outline-none ' +
                      (completedStep
                        ? ' border-emerald-400/70 dark:border-emerald-400/70 ring-1 ring-emerald-400/60'
                        : '')
                    }
                  >
                    <label
                      className="absolute top-3 right-3 flex items-center gap-1 text-xs text-emerald-500 dark:text-emerald-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <input
                        type="checkbox"
                        className="h-3 w-3 accent-emerald-500"
                        checked={completedStep}
                        onChange={(e) => {
                          e.stopPropagation()
                          toggleStep(step.id)
                        }}
                      />
                      <span>達成</span>
                    </label>
                    <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                      {step.id}
                    </span>
                    <p className="mt-1 font-medium text-neutral-900 dark:text-white">
                      {step.title}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>
        )
      })}
    </section>
  )
}
