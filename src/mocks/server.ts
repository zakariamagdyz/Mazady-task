import { setupServer } from 'msw/node'

import { APIHandlers } from './handlers'

export const mockedServer = setupServer(...APIHandlers)
