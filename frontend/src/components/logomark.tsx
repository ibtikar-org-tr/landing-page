import { cn } from '@/lib/utils'
import { useLocale } from '@/i18n/locale-provider'

export function Logomark({ className, dark }: { className?: string; dark?: boolean }) {
  const { t } = useLocale()

  return (
    <img
      src={dark ? '/white_long_logo.svg' : '/blue_long_logo.svg'}
      alt={t.brand}
      className={cn('h-8 w-auto', className)}
    />
  )
}
