'use client'
import { FC } from 'react'

import useTableData from '../hooks/use-table-form-data'
import { Category } from '../types'
import FormLayout from './form-layout'
import TableLayout from './table-layout'

type MainLayoutProps = {
  categories: Category[]
}

const MainLayout: FC<MainLayoutProps> = ({ categories }) => {
  const { tableData, handleTableData, resetTableData } = useTableData()
  return (
    <section className='mx-auto mt-6 grid max-w-screen-lg grid-cols-2 items-start gap-8'>
      <div className='rounded-lg p-3 shadow-lg'>
        <FormLayout allCats={categories} handleTableData={handleTableData} resetTableData={resetTableData} />
      </div>
      <aside className=' shadow-lg'>
        <TableLayout values={tableData} />
      </aside>
    </section>
  )
}

export default MainLayout
