import CssBaseline from '@mui/material/CssBaseline'

//components
import { Header, HeaderContacts, Footer } from '@/components'

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
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
