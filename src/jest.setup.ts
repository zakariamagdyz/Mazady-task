import '@testing-library/jest-dom'
import 'whatwg-fetch'

import { mockedServer } from './mocks/server'

beforeAll(() => mockedServer.listen())
afterEach(() => mockedServer.resetHandlers())
afterAll(() => mockedServer.close())
