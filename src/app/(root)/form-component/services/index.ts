import { API_URL, PRIVATE_KEY } from '../constants'
import { AllCategoriesResponse, Category, PropertiesResponse, Property } from '../types'

export const getAllCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${API_URL}/get_all_cats`, {
    headers: {
      'private-key': PRIVATE_KEY,
    },
    next: {
      revalidate: 0,
    },
  })
  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.message)
  }
  return (data as AllCategoriesResponse).data.categories
}

export const getCatProps = async (id: number | string): Promise<Property[]> => {
  const res = await fetch(`${API_URL}/properties?cat=${id}`, {
    headers: {
      'private-key': PRIVATE_KEY,
    },
  })
  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.message)
  }
  return (data as PropertiesResponse).data
}

export const getPropOptions = async (id: number | string): Promise<Property[]> => {
  const res = await fetch(`${API_URL}/get-options-child/${id}`, {
    headers: {
      'private-key': PRIVATE_KEY,
    },
  })
  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.message)
  }
  return (data as PropertiesResponse).data
}
