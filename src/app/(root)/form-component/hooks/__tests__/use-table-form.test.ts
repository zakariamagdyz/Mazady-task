import { act, renderHook } from '@testing-library/react'

import { TransformedFormData } from '../../types'
import useTableData from '../use-table-form-data'

describe('useTableData', () => {
  test('should initialize tableData as an empty array', () => {
    const { result } = renderHook(() => useTableData())

    expect(result.current.tableData).toEqual([])
  })

  test('should update tableData when handleTableData is called', () => {
    const { result } = renderHook(() => useTableData())

    const newData: TransformedFormData[] = [
      { key: 'John', value: 1 },
      { key: 'Jane', value: 2 },
    ]

    act(() => {
      result.current.handleTableData(newData)
    })

    expect(result.current.tableData).toEqual(newData)
  })

  test('should reset tableData when resetTableData is called', () => {
    const { result } = renderHook(() => useTableData())

    const initialData: TransformedFormData[] = [
      { key: 'John', value: 1 },
      { key: 'Jane', value: 2 },
    ]

    act(() => {
      result.current.handleTableData(initialData)
    })

    act(() => {
      result.current.resetTableData()
    })

    expect(result.current.tableData).toEqual([])
  })
})
