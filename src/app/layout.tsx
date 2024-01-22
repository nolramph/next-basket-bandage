import CssBaseline from '@mui/material/CssBaseline'

//components
import { Header, HeaderContacts, Footer } from '@/components'

//mui components
import Box from '@mui/material/Box'

//providers
import Providers from '@/providers'

export const metadata = {
  title: 'Bandage',
  description: 'Bandage is a Next.js app with Material UI v5 for Next Basket Task.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <CssBaseline />
          <HeaderContacts />
          <Header />
          <Box>
            {children}
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  )
}
