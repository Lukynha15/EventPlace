'use client'

import { format } from 'date-fns'
import { ChevronDownIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { cn } from '@/lib/utils'

type DatePickerFieldProps = {
  id: string
  label: string
  date?: Date
  onDateChange?: (date: Date | undefined) => void
  placeholder?: string
  className?: string
  labelClassName?: string
  contentClassName?: string
  required?: boolean
}

export function DatePickerField({
  id,
  label,
  date,
  onDateChange,
  placeholder = 'Selecione uma data',
  className,
  labelClassName,
  contentClassName,
  required = false,
}: DatePickerFieldProps) {
  return (
    <div className="space-y-1.5">
      <Label
        htmlFor={id}
        className={cn(
          'text-[0.82rem] font-medium tracking-wide text-white/90',
          labelClassName,
        )}
      >
        {label}

        
          {required && (
            <span className="ml-1 text-red-400" aria-hidden="true">
              *
            </span>
          )}
      </Label>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            id={id}
            type="button"
            variant="outline"
            data-empty={!date}
            className={cn(
              'h-10 w-full cursor-pointer justify-between rounded-lg border-white/25 bg-white/8 px-3.5 text-left text-sm font-normal text-white shadow-sm shadow-black/20',
              'hover:bg-white/10 hover:text-white',
              'focus:bg-white/8 focus:text-white',
              'focus-visible:border-white/60 focus-visible:ring-white/15',
              'active:bg-white/10 active:text-white',
              'data-[state=open]:bg-white/10 data-[state=open]:text-white',
              'data-[empty=true]:text-white/35',
              className,
            )}
          >
            {date ? format(date, 'PPP') : <span>{placeholder}</span>}

            <ChevronDownIcon className="size-4 text-white/70" />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          align="start"
          className={cn(
            'w-auto rounded-lg border-white/25 bg-zinc-950 p-0 text-white shadow-xl shadow-black/40',
            contentClassName,
          )}
        >
          <Calendar
            mode="single"
            selected={date}
            onSelect={onDateChange}
            defaultMonth={date}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}