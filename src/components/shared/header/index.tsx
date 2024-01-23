import Link from 'next/link'

//components
import { NavItems, ActionItems, MobileNav } from '@/components'

//constants
import {
  BRAND_NAME,
  HEADER_CONTACT_LINKS,
  HEADER_CONTACT_TEXT,
  HEADER_SOCIAL_LINKS_ICONS,
} from '@/constants'

//mui components
import {
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Box,
  Typography,
} from '@mui/material'
import { AppModals } from '@/components'

const Header = () => {
  return (
    <>
      <AppBar position="fixed" sx={{ zIndex: 2000, bgcolor: 'background.default' }}>
        <Toolbar
          sx={{
            display: { xs: 'none', md: 'flex' },
            justifyContent: { xs: 'space-between' },
            background: '#23856D',
          }}
        >
          {/* Contact details */}
          <Box>
            <List
              sx={{
                flexGrow: 0,
                display: { xs: 'none', md: 'flex' },
                color: 'text.primary',
                gap: 3,
              }}
            >
              {HEADER_CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
                <ListItem key={href} disablePadding disableGutters>
                  <ListItemButton component={Link} href={href} sx={{ padding: 0 }}>
                    {Icon && (
                      <ListItemIcon sx={{ minWidth: { xs: '25px' } }}>
                        <Icon fontSize="small" sx={{ color: '#FFF' }} />
                      </ListItemIcon>
                    )}
                    <ListItemText
                      disableTypography
                      sx={{ fontSize: '14px', fontWeight: 700, color: '#FFF' }}
                      primary={label}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* Extra info */}
          <Box>
            <Typography variant="content" fontWeight={700} sx={{ color: '#FFF' }}>
              {HEADER_CONTACT_TEXT}
            </Typography>
          </Box>

          {/* Socials info */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
            }}
          >
            <Typography variant="content" fontWeight={700} sx={{ color: '#FFF' }}>
              Follow Us <span style={{ paddingLeft: '10px' }}>:</span>
            </Typography>
            <List
              sx={{
                flexGrow: 0,
                display: { xs: 'none', md: 'flex' },
                color: 'text.primary',
                gap: 1,
              }}
            >
              {HEADER_SOCIAL_LINKS_ICONS.map(({ href, icon }) => (
                <ListItem key={href} disablePadding disableGutters>
                  <ListItemButton component={Link} href={href} sx={{ padding: 0 }}>
                    <ListItemIcon sx={{ minWidth: { xs: '5px' } }}>{icon()}</ListItemIcon>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
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
