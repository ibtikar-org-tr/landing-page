import { cn } from '@/lib/utils'

export function Logomark({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect
          x="1"
          y="1"
          width="26"
          height="26"
          rx="4"
          stroke={dark ? '#F5F5F7' : '#151A2E'}
          strokeWidth="1.5"
        />
        <path d="M14 6L21 14L14 22L7 14L14 6Z" fill="#FF5A29" />
        <path d="M14 6V22" stroke={dark ? '#151A2E' : '#F5F5F7'} strokeWidth="1.2" />
      </svg>
      <span
        className={cn(
          'font-mono text-[15px] font-bold tracking-[0.08em] uppercase',
          dark ? 'text-navy-foreground' : 'text-foreground',
        )}
      >
        IBTIKAR
      </span>
    </div>
  )
}
