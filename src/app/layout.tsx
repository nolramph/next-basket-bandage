import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import theme from '@/theme'

//components
import { Header, HeaderContacts, Footer } from '@/components'

//mui components
import Box from '@mui/material/Box'

export const metadata = {
  title: 'Bandage',
  description: 'Bandage is a Next.js app with Material UI v5 for Next Basket Task.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <HeaderContacts />
            <Header />
            <Box sx={{ padding: '0 24px' }}>
              {children}
              <Footer />
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
