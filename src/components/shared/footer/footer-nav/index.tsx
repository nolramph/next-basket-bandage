'use client'

//mui components
import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

const FooterNav = () => {
  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        <Grid xs={12} md={6}>
          Footer Nav
        </Grid>
      </Grid>
    </Box>
  )
}

export default FooterNav
