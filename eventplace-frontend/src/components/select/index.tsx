import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface SelectOption {
  label: string
  value: string
}

interface SelectFieldProps {
  label?: string
  placeholder?: string
  options: SelectOption[]
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  triggerClassName?: string
}

export function SelectField({
  label,
  placeholder = 'Selecione uma opção',
  options,
  value,
  onValueChange,
  className,
  triggerClassName,
}: SelectFieldProps) {
  return (
    <div className={className}>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className={`w-full ${triggerClassName ?? ''}`}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            {label && <SelectLabel>{label}</SelectLabel>}

            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}