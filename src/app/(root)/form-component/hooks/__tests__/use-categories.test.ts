import { renderHook, waitFor } from '@testing-library/react'

import { Categories } from '@/mocks/data/categories'
import { SWRMockProvider } from '@/mocks/providers/swr-mock-provider'

import useCategories from '../use-categories'

describe('useCategories', () => {
  test('should set initial state of subCategories to an empty array', () => {
    const { result } = renderHook(() => useCategories({ allCats: [], mainCatValue: null, subCatValue: null }), {
      wrapper: SWRMockProvider,
    })

    expect(result.current.subCatOptions).toEqual([])
  })

  test('should set mainCatOptions based on allCats', () => {
    const { result } = renderHook(() => useCategories({ allCats: Categories, mainCatValue: 1, subCatValue: null }), {
      wrapper: SWRMockProvider,
    })

    expect(result.current.mainCatOptions).toEqual([{ value: Categories[0].id, label: Categories[0].name }])
  })

  test('should set subCatOptions based on subCategories', async () => {
    const { result } = renderHook(() => useCategories({ allCats: Categories, mainCatValue: 1, subCatValue: 13 }), {
      wrapper: SWRMockProvider,
    })

    await waitFor(() => {
      expect(result.current.isLoading).toBeTruthy()
    })
    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy()
    })

    expect(result.current.subCatOptions).toEqual([{ value: 13, label: 'سيارات' }])
  })
  test('should set catProperties based on subCategories', async () => {
    const { result } = renderHook(() => useCategories({ allCats: Categories, mainCatValue: 1, subCatValue: 13 }), {
      wrapper: SWRMockProvider,
    })

    await waitFor(() => {
      expect(result.current.isLoading).toBeTruthy()
    })
    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy()
    })

    expect(result.current.catProperties).toEqual(
      expect.arrayContaining([expect.objectContaining({ name: 'brand', slug: 'brand' })])
    )
  })
})
