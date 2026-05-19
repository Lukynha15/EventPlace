import type { ChangeEvent, ReactNode } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

type LoginFieldProps = React.ComponentProps<typeof Input> & {
  id: string
  label: string
  action?: ReactNode
  trailingIcon?: ReactNode
  clickable?: boolean
  mask?: (value: string) => string
}

export function LoginField({
  id,
  label,
  action,
  trailingIcon,
  className,
  clickable = true,
  disabled,
  required,
  mask,
  onChange,
  ...props
}: LoginFieldProps) {
  const isDisabled = disabled || !clickable

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (mask) {
      event.target.value = mask(event.target.value)
    }

    onChange?.(event)
  }

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <Label
          htmlFor={isDisabled ? undefined : id}
          className="text-[0.82rem] font-medium tracking-wide text-white/90"
        >
          {label}

          {required && (
            <span className="ml-1 text-red-400" aria-hidden="true">
              *
            </span>
          )}
        </Label>

        {action}
      </div>

      <div className={cn('relative', isDisabled && 'cursor-not-allowed')}>
        <Input
          id={id}
          disabled={isDisabled}
          required={required}
          aria-required={required}
          onChange={handleChange}
          className={cn(
            'h-10 rounded-lg border-white/25 bg-white/8 px-3.5 text-sm text-white shadow-sm shadow-black/20 placeholder:text-white/35 focus-visible:border-white/60 focus-visible:ring-white/15',
            trailingIcon && !isDisabled && 'pr-10',

            isDisabled &&
            'pointer-events-none border-white/10 bg-white/3 text-white/40 shadow-none placeholder:text-white/20 disabled:opacity-100',

            className,
          )}
          {...props}
        />

        {!isDisabled && trailingIcon}
      </div>
    </div>
  )
}