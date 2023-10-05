import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Category, FormValues, TransformedFormData } from '../types'
import { transformFormValues } from '../utils/transform-form-values'
import useCategories from './use-categories'

const formSchema = z
  .object({
    mainCategory: z
      .null()
      .refine(val => val !== null, { message: 'Main category is required' })
      .or(z.number()),
    subCategory: z
      .null()
      .refine(val => val !== null, { message: 'Sub category is required' })
      .or(z.number()),
  })
  .passthrough()

type useCategoriesFormProps = {
  allCats: Category[]
  handleTableData: (data: TransformedFormData[]) => void
  resetTableData: () => void
}

const useCategoriesForm = ({ allCats, handleTableData, resetTableData }: useCategoriesFormProps) => {
  const form = useForm<FormValues>({
    mode: 'all',
    resolver: zodResolver(formSchema),
    defaultValues: { mainCategory: null, subCategory: null },
  })
  const mainCatValue = form.watch('mainCategory')
  const subCatValue = form.watch('subCategory')
  const { catProperties, isLoading, mainCatOptions, subCatOptions } = useCategories({
    allCats,
    mainCatValue,
    subCatValue,
  })

  useEffect(() => {
    if (mainCatValue) {
      form.setValue('subCategory', null)
      resetTableData()
    }
  }, [mainCatValue, resetTableData, form])

  const onSubmit = (data: FormValues) => {
    handleTableData(transformFormValues(data))
    form.reset()
  }

  return { catProperties, isLoading, mainCatOptions, subCatOptions, form, handleSubmit: form.handleSubmit(onSubmit) }
}

export default useCategoriesForm
