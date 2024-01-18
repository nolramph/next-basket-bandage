'use client'

import Link from 'next/link'
import { HEADER_LINKS } from '@/constants'
import useTheme from '@mui/material/styles/useTheme'
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Box } from '@mui/material'

//mui icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

const Nav = () => {
  const theme = useTheme()
  return (
    <Box sx={{ flexGrow: 0, display: 'flex' }}>
      {/* Navigation lists */}
      <List
        sx={{
          display: { xs: 'none', md: 'flex' },
          color: theme.palette.content.main,
        }}
      >
        {HEADER_LINKS.map(({ label, href }) => (
          <ListItem key={href} disablePadding>
            <ListItemButton component={Link} href={href}>
              <ListItemText primaryTypographyProps={{ fontSize: '14px' }} primary={label} />
              {label === 'Shop' && (
                <ListItemIcon sx={{ minWidth: { xs: '25px' } }}>
                  <ArrowDropDownIcon fontSize="small" />
                </ListItemIcon>
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

export default Nav
