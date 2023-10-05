import { FC } from 'react'

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { TransformedFormData } from '../types'

type TableLayoutProps = {
  values: TransformedFormData[]
}
const TableLayout: FC<TableLayoutProps> = ({ values }) => {
  return (
    <Table className='text-base'>
      <TableCaption>A list of maazady form values</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Key</TableHead>
          <TableHead className='text-right'>Value</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {values.map(({ key, value }) => (
          <TableRow key={key}>
            <TableCell className='font-medium'>{key}</TableCell>
            <TableCell className='text-right'>{value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default TableLayout
