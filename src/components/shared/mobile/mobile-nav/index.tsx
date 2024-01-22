'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'

//components
import { Hamburger } from '@/components'

//constants
import { HEADER_LINKS, ACTION_LINKS } from '@/constants'

//duxs
import { extractTotalQuantity } from '@/utils/helper-utils'
import { AppDispatch, RootState } from '@/store'

//mui components
import {
  IconButton,
  SvgIcon,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
  Badge,
} from '@mui/material'

//utils
import { toggleCartModal } from '@/store/slices/cartSlice'

const MobileNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const wishListItems = useSelector((state: RootState) => state.wishList.items)
  const dispatch = useDispatch<AppDispatch>()

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
            {Icon && (
              <>
                {href.includes('cart') ? (
                  <ListItemButton onClick={() => dispatch(toggleCartModal())} sx={{ padding: 0 }}>
                    <Badge badgeContent={extractTotalQuantity(cartItems)} color="secondary">
                      {CustomListItemContent({ label, icon: Icon, theme })}
                    </Badge>
                  </ListItemButton>
                ) : href.includes('wishlist') ? (
                  <ListItemButton onClick={() => alert('Open wishlist')} sx={{ padding: 0 }}>
                    <Badge badgeContent={extractTotalQuantity(wishListItems)} color="secondary">
                      {CustomListItemContent({ label, icon: Icon, theme })}
                    </Badge>
                  </ListItemButton>
                ) : (
                  <ListItemButton
                    component={Link}
                    href={href}
                    sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}
                  >
                    {CustomListItemContent({ label, icon: Icon, theme })}
                  </ListItemButton>
                )}
              </>
            )}
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

const CustomListItemContent = ({ label, icon: Icon, theme }: any) => (
  <>
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
  </>
)
