const navButtonClass =
  'px-3 py-2 rounded font-medium text-sm bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/20 text-neutral-800 dark:text-white hover:bg-white/60 dark:hover:bg-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-white/30 outline-none shrink-0'

type StepNavBarProps = {
  onNavigateToStep: (stepId: string | null) => void
  prev: string | null
  next: string | null
}

export function StepNavBar({
  onNavigateToStep,
  prev,
  next,
}: StepNavBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={() => onNavigateToStep(null)}
        className={navButtonClass}
      >
        ← 一覧に戻る
      </button>
      {prev && (
        <button
          type="button"
          onClick={() => onNavigateToStep(prev)}
          className={navButtonClass}
        >
          前へ
        </button>
      )}
      {next && (
        <button
          type="button"
          onClick={() => onNavigateToStep(next)}
          className={navButtonClass}
        >
          次へ
        </button>
      )}
    </div>
  )
}
