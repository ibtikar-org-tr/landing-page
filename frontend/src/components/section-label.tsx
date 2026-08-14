import { cn } from '@/lib/utils'

export function SectionLabel({
  index,
  title,
  className,
  tone = 'dark',
}: {
  index: string
  title: string
  className?: string
  tone?: 'dark' | 'light'
}) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="font-mono text-xs tracking-[0.25em] uppercase text-accent">{index}</span>
      <span className={cn('h-px w-10', tone === 'dark' ? 'bg-navy-foreground/30' : 'bg-border')} />
      <span
        className={cn(
          'font-mono text-xs tracking-[0.25em] uppercase',
          tone === 'dark' ? 'text-navy-foreground/70' : 'text-muted-foreground',
        )}
      >
        {title}
      </span>
    </div>
  )
}
