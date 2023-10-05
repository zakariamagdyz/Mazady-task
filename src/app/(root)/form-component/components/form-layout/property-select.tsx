import { FC, Fragment, useMemo } from 'react'
import { Control, useWatch } from 'react-hook-form'
import toast from 'react-hot-toast'
import useSWR from 'swr'

import { FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { OTHER_OPTION } from '../../constants'
import { getPropOptions } from '../../services'
import { FormValues, Property } from '../../types'
import FormSelect from './form-select'

type PropertySelectProps = {
  property: Property
  control: Control<FormValues>
}

const PropertySelect: FC<PropertySelectProps> = ({ control, property }) => {
  const propValue = useWatch({ control, name: property.slug })
  const currentPropOption = property.options?.find(option => option.id === propValue)
  const {
    data: propOptions,
    isLoading,
    error,
  } = useSWR(() => (currentPropOption?.child && propValue ? propValue : null), getPropOptions)
  const optionswithOtherValue = useMemo(() => [OTHER_OPTION, ...(property.options || [])], [property.options])

  if (error) toast.error(error.message)

  const optionSelect = (
    <fieldset className='space-y-2'>
      <FormField
        key={property.id}
        control={control}
        name={property.slug}
        render={({ field, fieldState }) => (
          <FormSelect
            field={field}
            fieldState={fieldState}
            options={optionswithOtherValue?.map(option => ({
              value: option.id,
              label: option.name,
            }))}
            label={property.name}
            placeholder={`Select ${property.slug}`}
            isLoading={isLoading}
          />
        )}
      />
      {propValue === -1 && (
        <FormField
          control={control}
          defaultValue={''}
          name={`other-${property.slug}`}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  value={field.value || ''}
                  className='rounded-lg border-2 px-2 py-6 placeholder:text-base placeholder:font-medium placeholder:text-[#808080]'
                  placeholder={`Enter new ${property.slug} value`}
                />
              </FormControl>
            </FormItem>
          )}
        />
      )}
    </fieldset>
  )

  if (!property.options?.length) {
    return (
      <FormField
        key={property.id}
        control={control}
        defaultValue={''}
        name={property.slug}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{property.name}</FormLabel>
            <FormControl>
              <Input
                {...field}
                value={field.value || ''}
                placeholder={`Enter ${property.slug} value`}
                className='rounded-lg border-2 px-2 py-6 placeholder:text-base placeholder:font-medium placeholder:text-[#808080]'
              />
            </FormControl>
          </FormItem>
        )}
      />
    )
  }

  return (
    <Fragment>
      {optionSelect}
      {propOptions?.map(propOption => <PropertySelect key={propOption.id} property={propOption} control={control} />)}
    </Fragment>
  )
}

export default PropertySelect
