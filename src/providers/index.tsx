'use client'

import { ReactNode } from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../store'

import theme from '@/theme'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>{children}</ReduxProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

export default Providers
