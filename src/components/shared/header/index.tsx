import Link from 'next/link'

//components
import { NavItems, ActionItems, MobileNav } from '@/components'

//constants
import { BRAND_NAME } from '@/constants'

//mui components
import { AppBar, Toolbar, Button } from '@mui/material'
import { AppModals } from '@/components'

const Header = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: 2000, bgcolor: 'background.default' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: { xs: 'space-between' } }}>
          <Link href="/" passHref>
            <Button
              component="a"
              sx={{
                textTransform: 'capitalize',
                fontWeight: 700,
                color: '#252B42',
                fontSize: '24px',
              }}
            >
              {BRAND_NAME}
            </Button>
          </Link>
          <NavItems />
          <ActionItems />
          <MobileNav />
        </Toolbar>
      </AppBar>

      <AppModals />
    </>
  )
}

export default Header
