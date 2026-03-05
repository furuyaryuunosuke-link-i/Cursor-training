import { INTRO_CHAPTERS } from '../../data/introSteps'
import { useStepCompletion } from '../../hooks/useStepCompletion'

type IntroPanelProps = {
  onStepSelect: (stepId: string) => void
}

export function IntroPanel({ onStepSelect }: IntroPanelProps) {
  const { isStepCompleted, toggleStep } = useStepCompletion('intro-step-completion')

  return (
    <section
      id="panel-intro"
      role="tabpanel"
      aria-labelledby="tab-intro"
      className="space-y-8"
    >
      {INTRO_CHAPTERS.map((chapter) => (
        <div key={chapter.id} className="space-y-3">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            {chapter.title}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {chapter.steps.map((step) => {
              const completed = isStepCompleted(step.id)
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => onStepSelect(step.id)}
                  className={
                    'relative text-left rounded-2xl bg-white/30 dark:bg-white/5 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-lg p-5 hover:bg-white/40 dark:hover:bg-white/10 hover:border-white/60 dark:hover:border-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-white/30 dark:focus-visible:ring-white/20 outline-none ' +
                    (completed
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
                      checked={completed}
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
      ))}
    </section>
  )
}
