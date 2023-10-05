import { ControllerFieldState, ControllerRenderProps, Path } from 'react-hook-form'

import CustomSelect from '@/components/custom-select'
import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

import { FormValues } from '../../types'

type OptionType = {
  value: number
  label: string
}

type FormSelectProps<TName extends Path<FormValues>> = {
  field: ControllerRenderProps<FormValues, TName>
  fieldState: ControllerFieldState
  options: OptionType[]
  label: string
  placeholder: string
  isRequired?: boolean
  isLoading?: boolean
}
const FormSelect = <TName extends Path<FormValues>>({
  field,
  fieldState,
  options,
  isRequired,
  label,
  placeholder,
  isLoading,
}: FormSelectProps<TName>) => {
  const { onChange, value, ...otherFieldValues } = field
  const isError = !!fieldState.error?.message
  const currentOption = options?.find(option => option.value === value) || null

  return (
    <FormItem>
      <FormLabel>
        {label} {isRequired && <span className='text-red-500'>*</span>}
      </FormLabel>
      <FormControl>
        <CustomSelect
          instanceId={field.name}
          isLoading={isLoading}
          isError={isError}
          value={currentOption}
          options={options}
          placeholder={placeholder}
          {...otherFieldValues}
          onChange={option => {
            if (isCorrectOption(option)) {
              onChange(option.value)
            }
          }}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )
}

export default FormSelect
const isCorrectOption = (option: unknown): option is OptionType => {
  return typeof option === 'object' && option !== null && 'label' in option && 'value' in option
}
