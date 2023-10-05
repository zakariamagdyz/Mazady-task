import { SWRConfig } from 'swr'

export const SWRMockProvider = ({ children }: { children: React.ReactNode }) => (
  <SWRConfig value={{ provider: () => new Map() }}>{children}</SWRConfig>
)
