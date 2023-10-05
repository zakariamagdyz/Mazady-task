import { render, type RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'

import { SWRMockProvider } from '../providers/swr-mock-provider'

export const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: SWRMockProvider, ...options })
