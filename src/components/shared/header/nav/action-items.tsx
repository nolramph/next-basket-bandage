'use client'

import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'

//components
import { useSnackbar } from '@/providers/snackbar-provider'

//constants
import { ACTION_LINKS } from '@/constants'

//duxs
import { AppDispatch, RootState } from '@/store'
import { toggleCartModal } from '@/store/slices/cartSlice'
import { toggleWishListModal } from '@/store/slices/wishListSlice'

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
  const dispatch = useDispatch<AppDispatch>()
  const { showSnackbar } = useSnackbar()

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
            {Icon && (
              <>
                {href.includes('cart') ? (
                  <ListItemButton
                    onClick={() => {
                      if (cartItems.length === 0) {
                        return showSnackbar('Your cart is empty', 'warning')
                      }
                      dispatch(toggleCartModal())
                    }}
                    sx={{ padding: 0 }}
                  >
                    <Badge badgeContent={extractTotalQuantity(cartItems)} color="secondary">
                      {CustomListItemContent({ label, icon: Icon, theme })}
                    </Badge>
                  </ListItemButton>
                ) : href.includes('wishlist') ? (
                  <ListItemButton
                    onClick={() => {
                      if (wishListItems.length === 0) {
                        return showSnackbar('Your wishlist is empty', 'warning')
                      }
                      dispatch(toggleWishListModal())
                    }}
                    sx={{ padding: 0 }}
                  >
                    <Badge badgeContent={extractTotalQuantity(wishListItems)} color="secondary">
                      {CustomListItemContent({ label, icon: Icon, theme })}
                    </Badge>
                  </ListItemButton>
                ) : (
                  <ListItemButton component={Link} href={href} sx={{ padding: 0 }}>
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
}

export default ActionItems

const CustomListItemContent = ({ label, icon: Icon, theme }: any) => (
  <>
    <ListItemIcon sx={{ minWidth: { xs: '25px' } }}>
      <Icon fontSize="small" sx={{ color: theme.palette.primary.main }} />
    </ListItemIcon>
    {label && (
      <ListItemText
        disableTypography
        sx={{ textWrap: 'nowrap', fontSize: '14px', fontWeight: 700 }}
        primary={label}
      />
    )}
  </>
)
