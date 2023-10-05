import { useEffect, useMemo, useState } from 'react'
import toast from 'react-hot-toast'
import useSWR from 'swr'

import { getCatProps } from '../services'
import { Category } from '../types'

type useCategoriesProps = {
  mainCatValue: number | null
  subCatValue: number | null
  allCats: Category[]
}
const useCategories = ({ allCats, mainCatValue, subCatValue }: useCategoriesProps) => {
  const [subCategories, setSubCategories] = useState<Category[]>([])
  const { data: catProperties, isLoading, error } = useSWR(() => (subCatValue ? subCatValue : null), getCatProps)
  if (error) toast.error(error.message)

  const mainCatOptions = useMemo(
    () =>
      allCats?.map(category => ({
        value: category.id,
        label: category.name,
      })),
    [allCats]
  )

  const subCatOptions = useMemo(
    () =>
      subCategories.map(category => ({
        value: category.id,
        label: category.name,
      })),
    [subCategories]
  )

  useEffect(() => {
    if (!mainCatValue) return
    const category = allCats.find(category => category.id === mainCatValue)
    if (category) {
      setSubCategories(category.children || [])
    }
  }, [mainCatValue, allCats])

  return { mainCatOptions, subCatOptions, catProperties, isLoading }
}

export default useCategories
