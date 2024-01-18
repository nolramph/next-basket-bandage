'use client'

import Link from 'next/link'
import { ACTION_LINKS } from '@/constants'
import useTheme from '@mui/material/styles/useTheme'
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Box } from '@mui/material'

const ActionItems = () => {
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
                <ListItemIcon sx={{ minWidth: { xs: '25px' } }}>
                  <Icon fontSize="small" sx={{ color: theme.palette.primary.main }} />
                </ListItemIcon>
              )}
              <ListItemText
                disableTypography
                sx={{ textWrap: 'nowrap', fontSize: '14px', fontWeight: 700 }}
                primary={label}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default ActionItems
