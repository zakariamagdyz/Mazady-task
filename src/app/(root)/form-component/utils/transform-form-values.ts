import { OTHER_OPTION } from '../constants'
import { TransformedFormData } from '../types'

export type DataValue = number | string | null

export function transformFormValues(data: Record<string, DataValue>): TransformedFormData[] {
  const transformed = Object.entries(data).map(([key, value]) => ({
    key: key,
    value: value || null,
  }))
  return transformed.filter(record => record.value !== OTHER_OPTION.id && record.value !== '' && record.value !== null)
}
