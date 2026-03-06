import {
  getWebServiceStepById,
  getWebServicePrevNext,
} from '../../data/webServiceSteps'
import { GlassCard } from '../GlassCard'
import { StepNavBar } from '../StepNavBar'

type WebServiceStepViewProps = {
  stepId: string
  onNavigateToStep: (stepId: string | null) => void
}

export function WebServiceStepView({
  stepId,
  onNavigateToStep,
}: WebServiceStepViewProps) {
  const resolved = getWebServiceStepById(stepId)
  const { prev, next } = getWebServicePrevNext(stepId)

  if (!resolved) {
    return (
      <section
        id="panel-webService-step"
        role="tabpanel"
        aria-labelledby="tab-webService"
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
      id="panel-webService-step"
      role="tabpanel"
      aria-labelledby="tab-webService"
      className="space-y-6"
    >
      <div className="sticky top-[72px] z-10 -mx-4 px-4 py-2 mb-4 bg-slate-100/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200/80 dark:border-white/10">
        <StepNavBar onNavigateToStep={onNavigateToStep} prev={prev} next={next} />
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
                    navigator.clipboard.writeText(joined).catch(() => {})
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
      </GlassCard>

      <div className="pt-4 border-t border-slate-200/80 dark:border-white/10">
        <StepNavBar onNavigateToStep={onNavigateToStep} prev={prev} next={next} />
      </div>
    </section>
  )
}
