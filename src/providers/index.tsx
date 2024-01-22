'use client'

import { ReactNode } from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

//duxs
import { store, persistor } from '@/store'

// provider
import { SnackbarProvider } from './snackbar-provider'

//theme
import theme from '@/theme'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SnackbarProvider>{children}</SnackbarProvider>
          </PersistGate>
        </ReduxProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

export default Providers
