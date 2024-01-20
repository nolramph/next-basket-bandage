'use client'

import Link from 'next/link'
import { useSelector } from 'react-redux'

//constants
import { ACTION_LINKS } from '@/constants'

//duxs
import { RootState } from '../../../../store'

//mui components
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Box,
  Badge,
} from '@mui/material'
//theme
import useTheme from '@mui/material/styles/useTheme'

//utils
import { extractTotalQuantity } from '@/utils/helper-utils'

const ActionItems = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const wishListItems = useSelector((state: RootState) => state.wishList.items)

  const theme = useTheme()
  return (
    <Box sx={{ flexGrow: 0, display: 'flex' }}>
      {/* Navigation lists */}
      <List
        sx={{
          flexGrow: 0,
          display: { xs: 'none', md: 'flex' },
          color: theme.palette.primary.main,
          gap: 3,
        }}
      >
        {ACTION_LINKS.map(({ label, href, icon: Icon }) => (
          <ListItem key={href} disablePadding disableGutters>
            <ListItemButton component={Link} href={href} sx={{ padding: 0 }}>
              {Icon && (
                <>
                  {href.includes('cart') ? (
                    <Badge badgeContent={extractTotalQuantity(cartItems)} color="secondary">
                      {CustomListItemIcon({ icon: Icon, theme })}
                    </Badge>
                  ) : href.includes('wishlist') ? (
                    <Badge badgeContent={extractTotalQuantity(wishListItems)} color="secondary">
                      {CustomListItemIcon({ icon: Icon, theme })}
                    </Badge>
                  ) : (
                    CustomListItemIcon({ icon: Icon, theme })
                  )}
                </>
              )}
              {label && (
                <ListItemText
                  disableTypography
                  sx={{ textWrap: 'nowrap', fontSize: '14px', fontWeight: 700 }}
                  primary={label}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default ActionItems

const CustomListItemIcon = ({ icon: Icon, theme }: any) => (
  <ListItemIcon sx={{ minWidth: { xs: '25px' } }}>
    <Icon fontSize="small" sx={{ color: theme.palette.primary.main }} />
  </ListItemIcon>
)
