import {
  getIntroStepById,
  getIntroPrevNext,
} from '../../data/introSteps'
import { GlassCard } from '../GlassCard'

type IntroStepViewProps = {
  stepId: string
  onNavigateToStep: (stepId: string | null) => void
}

export function IntroStepView({ stepId, onNavigateToStep }: IntroStepViewProps) {
  const resolved = getIntroStepById(stepId)
  const { prev, next } = getIntroPrevNext(stepId)

  if (!resolved) {
    return (
      <section
        id="panel-intro-step"
        role="tabpanel"
        aria-labelledby="tab-intro"
        className="space-y-6"
      >
        <GlassCard>
          <p className="text-neutral-700 dark:text-neutral-200">
            指定されたステップが見つかりません。
          </p>
          <button
            type="button"
            onClick={() => onNavigateToStep(null)}
            className="mt-4 px-4 py-2 rounded bg-white/50 dark:bg-white/10 border border-white/50 dark:border-white/20 text-neutral-800 dark:text-white hover:bg-white/70 dark:hover:bg-white/20 transition-colors"
          >
            一覧に戻る
          </button>
        </GlassCard>
      </section>
    )
  }

  const { chapterTitle, step } = resolved

  return (
    <section
      id="panel-intro-step"
      role="tabpanel"
      aria-labelledby="tab-intro"
      className="space-y-6"
    >
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => onNavigateToStep(null)}
          className="px-3 py-2 rounded font-medium text-sm bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/20 text-neutral-800 dark:text-white hover:bg-white/60 dark:hover:bg-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-white/30 outline-none"
        >
          ← 一覧に戻る
        </button>
        {prev && (
          <button
            type="button"
            onClick={() => onNavigateToStep(prev)}
            className="px-3 py-2 rounded font-medium text-sm bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/20 text-neutral-800 dark:text-white hover:bg-white/60 dark:hover:bg-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-white/30 outline-none"
          >
            前へ
          </button>
        )}
        {next && (
          <button
            type="button"
            onClick={() => onNavigateToStep(next)}
            className="px-3 py-2 rounded font-medium text-sm bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/20 text-neutral-800 dark:text-white hover:bg-white/60 dark:hover:bg-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-white/30 outline-none"
          >
            次へ
          </button>
        )}
      </div>

      <GlassCard>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
          {chapterTitle}
        </p>
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
          {step.id}：{step.title}
        </h2>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {step.content}
        </div>
        {step.samplePrompt && (
          <div className="mt-6 space-y-2">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">
                サンプルプロンプト（そのままコピーして使えます）
              </p>
              <button
                type="button"
                onClick={() => {
                  const texts = Array.isArray(step.samplePrompt)
                    ? step.samplePrompt
                    : [step.samplePrompt]
                  const joined = texts.join('\n\n')
                  if (navigator?.clipboard?.writeText) {
                    navigator.clipboard.writeText(joined).catch(() => {
                      // 失敗しても特に何もしない（ブラウザ制限など）
                    })
                  }
                }}
                className="text-xs px-2 py-1 rounded bg-white/40 dark:bg-white/10 border border-white/50 dark:border-white/20 text-neutral-800 dark:text-white hover:bg-white/60 dark:hover:bg-white/20 transition-colors"
              >
                コピー
              </button>
            </div>
            {Array.isArray(step.samplePrompt) ? (
              step.samplePrompt.map((text, idx) => (
                <pre
                  key={idx}
                  className="whitespace-pre-wrap text-sm font-mono bg-neutral-900/80 dark:bg-black/70 text-neutral-50 dark:text-neutral-100 rounded-lg px-3 py-2 border border-neutral-700/80"
                >
                  {text}
                </pre>
              ))
            ) : (
              <pre className="whitespace-pre-wrap text-sm font-mono bg-neutral-900/80 dark:bg-black/70 text-neutral-50 dark:text-neutral-100 rounded-lg px-3 py-2 border border-neutral-700/80">
                {step.samplePrompt}
              </pre>
            )}
          </div>
        )}
        {step.imageSrc && (
          <figure className="mt-6">
            <img
              src={step.imageSrc}
              alt={step.imageAlt ?? ''}
              className="max-w-full w-auto h-auto rounded-xl border border-white/30 dark:border-white/10 shadow-md"
            />
          </figure>
        )}
        {step.imageSecondarySrc && (
          <figure className="mt-4">
            <img
              src={step.imageSecondarySrc}
              alt={step.imageSecondaryAlt ?? ''}
              className="max-w-full w-auto h-auto rounded-xl border border-white/30 dark:border-white/10 shadow-md"
            />
          </figure>
        )}
      </GlassCard>
    </section>
  )
}
