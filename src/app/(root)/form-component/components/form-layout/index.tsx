'use client'
import { FC } from 'react'

import { Button } from '@/components/ui/button'
import { Form, FormField } from '@/components/ui/form'

import useCategoriesForm from '../../hooks/use-cat-form'
import { Category, TransformedFormData } from '../../types'
import FormSelect from './form-select'
import PropertySelect from './property-select'

type FormLayoutProps = {
  allCats: Category[]
  handleTableData: (data: TransformedFormData[]) => void
  resetTableData: () => void
}

const FormLayout: FC<FormLayoutProps> = ({ allCats, handleTableData, resetTableData }) => {
  const { form, handleSubmit, catProperties, mainCatOptions, subCatOptions, isLoading } = useCategoriesForm({
    allCats,
    handleTableData,
    resetTableData,
  })
  return (
    <Form {...form}>
      <form className='space-y-6' onSubmit={handleSubmit}>
        <FormField
          control={form.control}
          name='mainCategory'
          render={({ field, fieldState }) => (
            <FormSelect
              isRequired
              field={field}
              fieldState={fieldState}
              options={mainCatOptions}
              label='Main Category'
              placeholder='Select Main Category'
            />
          )}
        />
        <FormField
          control={form.control}
          name='subCategory'
          render={({ field, fieldState }) => (
            <FormSelect
              isRequired
              field={field}
              fieldState={fieldState}
              options={subCatOptions}
              label='Sub Category'
              placeholder='Select Sub Category'
              isLoading={isLoading}
            />
          )}
        />

        {catProperties?.map(prop => <PropertySelect key={prop.id} property={prop} control={form.control} />)}

        <Button type='submit' className='w-full p-6 text-2xl  font-bold' size={'lg'}>
          Submit
        </Button>
      </form>
    </Form>
  )
}

export default FormLayout
