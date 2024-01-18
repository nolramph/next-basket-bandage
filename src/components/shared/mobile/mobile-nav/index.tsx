'use client'

import { useState } from 'react'
import Link from 'next/link'

//components
import { Hamburger } from '@/components'

//constants
import { HEADER_LINKS, ACTION_LINKS } from '@/constants'

//mui
import {
  IconButton,
  SvgIcon,
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material'

//mui icons
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

const MobileNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setIsDrawerOpen(open)
  }

  const theme = useTheme()

  const showNavItems = () => (
    <Box
      sx={{ width: 'auto', color: theme.palette.content.main }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List
        sx={{
          flexGrow: 0,
        }}
      >
        {HEADER_LINKS.map(({ label, href }, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton component={Link} href={href} sx={{ textAlign: 'center' }}>
              <ListItemText
                disableTypography
                primary={label}
                sx={{
                  textWrap: 'nowrap',
                  fontSize: '30px',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {ACTION_LINKS.map(({ label, href, icon: Icon }, index) => (
          <ListItem key={index} disablePadding disableGutters>
            <ListItemButton
              component={Link}
              href={href}
              sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}
            >
              {Icon && (
                <ListItemIcon
                  sx={{
                    minWidth: { xs: '25px', textAlign: 'center' },
                    width: { xs: label.includes('Login') ? 'auto' : '100%' },
                    display: { xs: 'flex' },
                    justifyContent: { xs: 'center' },
                  }}
                >
                  <Icon fontSize="large" sx={{ color: theme.palette.primary.main }} />
                </ListItemIcon>
              )}
              {label && (
                <ListItemText
                  disableTypography
                  primary={label}
                  sx={{
                    textWrap: 'nowrap',
                    fontSize: '30px',
                    fontWeight: 700,
                    color: theme.palette.primary.main,
                    flexGrow: label.includes('Login') ? 0 : 1,
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
      <IconButton aria-label="mobile-nav-button" onClick={toggleDrawer(true)}>
        <SvgIcon>
          <Hamburger />
        </SvgIcon>
      </IconButton>
      <Drawer
        anchor="top"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        {showNavItems()}
      </Drawer>
    </Box>
  )
}

export default MobileNav
