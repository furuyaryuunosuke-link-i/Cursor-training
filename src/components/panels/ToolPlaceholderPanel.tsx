import { GlassCard } from '../GlassCard'

type ToolPlaceholderPanelProps = {
  title: string
}

export function ToolPlaceholderPanel({ title }: ToolPlaceholderPanelProps) {
  return (
    <GlassCard className="p-8">
      <h2 className="text-xl font-semibold text-neutral-800 dark:text-white">
        {title} トレーニング
      </h2>
      <p className="mt-3 text-neutral-600 dark:text-neutral-300">
        準備中です。続きは今後追加予定です。
      </p>
    </GlassCard>
  )
}
