import { rest } from 'msw'

import { API_URL } from '@/app/(root)/form-component/constants'

import { CatPropOptions } from './data/cat-prop-options'
import { CatProperties } from './data/cat-properties'
import { Categories } from './data/categories'

export const APIHandlers = [
  rest.get(`${API_URL}/get_all_cats`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: 200,
        msg: 'get Parent Cats with Children',
        data: Categories,
      })
    )
  }),
  rest.get(`${API_URL}/properties`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: 200,
        msg: 'getProps',
        data: CatProperties,
      })
    )
  }),
  rest.get(`${API_URL}/get-options-child/:id`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        code: 200,
        msg: 'option child',
        data: CatPropOptions,
      })
    )
  }),
]
