import Link from 'next/link'

//components
import { NavItems, ActionItems, MobileNav } from '@/components'

//constants
import { BRAND_NAME } from '@/constants'

//mui components
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

const Header = () => {
  return (
    <AppBar position="static" sx={{ zIndex: 2000, bgcolor: 'background.default' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: { xs: 'space-between' } }}>
        <Button href="/" LinkComponent={Link} sx={{ textTransform: 'capitalize' }}>
          <Typography variant="h6" color="text.primary" sx={{ fontWeight: 700 }}>
            {BRAND_NAME}
          </Typography>
        </Button>
        <NavItems />
        <ActionItems />
        <MobileNav />
      </Toolbar>
    </AppBar>
  )
}

export default Header
