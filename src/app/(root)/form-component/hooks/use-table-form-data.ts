import React, { useCallback } from 'react'

import { TransformedFormData } from '../types'

const useTableData = () => {
  const [tableData, setTableData] = React.useState<TransformedFormData[]>([])
  const handleTableData = useCallback((data: TransformedFormData[]) => {
    setTableData(data)
  }, [])
  const resetTableData = useCallback(() => {
    setTableData([])
  }, [])

  return {
    tableData,
    handleTableData,
    resetTableData,
  }
}

export default useTableData
