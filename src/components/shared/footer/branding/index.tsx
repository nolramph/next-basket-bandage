'use client'

import Link from 'next/link'
import { useTheme } from '@mui/material'

//constants
import { BRAND_NAME, HEADER_SOCIAL_LINKS_ICONS } from '@/constants'

//mui components
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Button,
} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

const FooterBranding = () => {
  const theme = useTheme()
  return (
    <Box sx={{ flexGrow: 1, width: '100%', padding: { xs: '20px 0', md: '80px 147px' } }}>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        <Grid xs={12} md={6}>
          <Button href="/" LinkComponent={Link} sx={{ textTransform: 'capitalize' }}>
            <Typography variant="h6" color={theme.palette.base.main} sx={{ fontWeight: 700 }}>
              {BRAND_NAME}
            </Typography>
          </Button>
        </Grid>
        <Grid xs={12} md={6} sx={{ textAlign: 'right' }}>
          <Box>
            <List
              sx={{
                flexGrow: 0,
                display: 'flex',
                justifyContent: { xs: 'flex-start', md: 'flex-end' },
                gap: 2,
              }}
            >
              {HEADER_SOCIAL_LINKS_ICONS.map(({ href, icon }) => (
                <ListItem key={href} disablePadding disableGutters sx={{ width: 'auto' }}>
                  <ListItemButton component={Link} href={href} sx={{ padding: 0 }}>
                    <ListItemIcon
                      color={theme.palette.primary.main}
                      sx={{ minWidth: { xs: '5px' } }}
                    >
                      {icon({ color: theme.palette.primary.main })}
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default FooterBranding
