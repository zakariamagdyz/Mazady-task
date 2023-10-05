/* eslint-disable testing-library/no-node-access */
import { screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { Categories } from '@/mocks/data/categories'
import { customRender } from '@/mocks/utils/custom-render'

import LayoutForm from '../index'

const allCats = Categories
const handleTableData = jest.fn()
const resetTableData = jest.fn()

describe('LayoutForm', () => {
  it('should render main category select and sub category select', async () => {
    customRender(<LayoutForm allCats={allCats} handleTableData={handleTableData} resetTableData={resetTableData} />)

    expect(getMainCategory()).toBeInTheDocument()
    expect(getSubCategory()).toBeInTheDocument()
  })

  it('should render main category option when user selects main category', async () => {
    customRender(<LayoutForm allCats={allCats} handleTableData={handleTableData} resetTableData={resetTableData} />)

    await userEvent.click(getMainCategory()!)

    const mainCategoryOption = screen.getByText('سيارات ودرجات ومستلزماتها')
    expect(mainCategoryOption).toBeInTheDocument()
  })

  it('should render sub category option when user selects main category', async () => {
    customRender(<LayoutForm allCats={allCats} handleTableData={handleTableData} resetTableData={resetTableData} />)

    await userEvent.click(getMainCategory()!)
    const mainCategoryOption = screen.getByText('سيارات ودرجات ومستلزماتها')
    await userEvent.click(mainCategoryOption)
    await userEvent.click(getSubCategory()!)

    const subCategoryOption = screen.getByText('سيارات')
    expect(subCategoryOption).toBeInTheDocument()
  })

  it("should render sub category's properties when user selects sub category", async () => {
    customRender(<LayoutForm allCats={allCats} handleTableData={handleTableData} resetTableData={resetTableData} />)

    await userEvent.click(getMainCategory()!)
    const mainCategoryOption = screen.getByText('سيارات ودرجات ومستلزماتها')
    await userEvent.click(mainCategoryOption)

    await userEvent.click(getSubCategory()!)
    const subCategoryOption = screen.getByText('سيارات')
    await userEvent.click(subCategoryOption)
    const propertySelect = await screen.findByText('Select brand')
    expect(propertySelect).toBeInTheDocument()
  })

  it("should render propertiy's options when user select property", async () => {
    customRender(<LayoutForm allCats={allCats} handleTableData={handleTableData} resetTableData={resetTableData} />)

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

    expect(modelOptionSelcet).toBeInTheDocument()
  })
})

const getMainCategory = () => document.getElementById('react-select-mainCategory-input')
const getSubCategory = () => document.getElementById('react-select-subCategory-input')
