import { screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { CatPropOptions } from '@/mocks/data/cat-prop-options'
import { CatProperties } from '@/mocks/data/cat-properties'
import { Categories } from '@/mocks/data/categories'
import { customRender } from '@/mocks/utils/custom-render'

import MainLayout from '../main-layout'

const categories = Categories

describe('MainLayout', () => {
  it('should render form layout and table layout', async () => {
    customRender(<MainLayout categories={categories} />)

    const tableText = screen.getByText('A list of maazady form values')

    expect(getMainCategory()).toBeInTheDocument()
    expect(getSubCategory()).toBeInTheDocument()
    expect(tableText).toBeInTheDocument()
  })

  it('should submit form and render form values in table', async () => {
    customRender(<MainLayout categories={categories} />)

    await userEvent.click(getMainCategory()!)
    const mainCategoryOption = screen.getByText('سيارات ودرجات ومستلزماتها')
    await userEvent.click(mainCategoryOption)

    await userEvent.click(getSubCategory()!)
    const subCategoryOption = screen.getByText('سيارات')
    await userEvent.click(subCategoryOption)

    const propertySelect = await screen.findByText('Select brand')
    await userEvent.click(propertySelect)

    const propertyOptionSelcet = await screen.findByText('ABARTH')
    await userEvent.click(propertyOptionSelcet)

    const modelOptionSelcet = await screen.findByText('Select model')
    await userEvent.click(modelOptionSelcet)
    const modelOptionValue = await screen.findByText('Punto Evo')
    await userEvent.click(modelOptionValue)

    const submitButton = await screen.findByRole('button', { name: 'Submit' })

    await userEvent.click(submitButton)

    const categoryValue = Categories[0].id
    const subCatValue = Categories[0]['children'][0].id
    const brandValue = CatProperties[0].options[0].id
    const modelValue = CatPropOptions[0].options[0].id

    expect(screen.getByText(categoryValue)).toBeInTheDocument()
    expect(screen.getByText(subCatValue)).toBeInTheDocument()
    expect(screen.getByText(brandValue)).toBeInTheDocument()
    expect(screen.getByText(modelValue)).toBeInTheDocument()
  })

  it('should submit form with custom brand and display values in table', async () => {
    customRender(<MainLayout categories={categories} />)

    await userEvent.click(getMainCategory()!)
    const mainCategoryOption = screen.getByText('سيارات ودرجات ومستلزماتها')
    await userEvent.click(mainCategoryOption)

    await userEvent.click(getSubCategory()!)
    const subCategoryOption = screen.getByText('سيارات')
    await userEvent.click(subCategoryOption)

    const propertySelect = await screen.findByText('Select brand')
    await userEvent.click(propertySelect)

    const otherOption = await screen.findByText('Other')
    await userEvent.click(otherOption)

    const customBrandInput = screen.getByPlaceholderText('Enter new brand value')
    await userEvent.type(customBrandInput, 'Mazady brand')

    const submitButton = await screen.findByRole('button', { name: 'Submit' })

    await userEvent.click(submitButton)

    expect(screen.getByText('other-brand')).toBeInTheDocument()
    expect(screen.getByText('Mazady brand')).toBeInTheDocument()
  })
})

const getMainCategory = () => screen.getByText(/Select Main Category/)
const getSubCategory = () => screen.getByText(/Select Sub Category/)
