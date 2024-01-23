'use client'
//constant
import { CLIENT_LOGO_SECTION } from '@/constants'

//mui components
import { Box, ListItem, ListItemIcon, Stack } from '@mui/material'

const Clients = () => {
  return (
    <Box
      sx={{
        padding: { xs: '80px 24px', md: '80px 171px' },
      }}
    >
      {
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 8, lg: 5 }}>
          {CLIENT_LOGO_SECTION.map((icon, index) => (
            <ListItem
              key={index}
              disablePadding
              disableGutters
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
              }}
            >
              <ListItemIcon sx={{ width: { xs: 150, md: 72 }, height: { xs: 150, md: 72 } }}>
                {icon()}
              </ListItemIcon>
            </ListItem>
          ))}
        </Stack>
      }
    </Box>
  )
}

export default Clients
