import { transformFormValues } from './transform-form-values'

describe('transformFormValues', () => {
  it('should transform form values correctly', () => {
    const data = {
      name: 'John Doe',
      age: 25,
      country: 'US',
    }

    const expected = [
      { key: 'name', value: 'John Doe' },
      { key: 'age', value: 25 },
      { key: 'country', value: 'US' },
    ]

    expect(transformFormValues(data)).toEqual(expected)
  })

  it('should filter out other option, empty, and null values', () => {
    const data = {
      name: 'John Doe',
      age: 25,
      email: null,
      gender: '',
      country: 'US',
    }

    const expected = [
      { key: 'name', value: 'John Doe' },
      { key: 'age', value: 25 },
      { key: 'country', value: 'US' },
    ]

    expect(transformFormValues(data)).toEqual(expected)
  })

  it('should return an empty array if all values are other option, empty, or null', () => {
    const data = {
      name: '',
      age: null,
      email: '',
      gender: -1,
      country: '',
    }

    expect(transformFormValues(data)).toEqual([])
  })
})
