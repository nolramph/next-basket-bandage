'use client'

//constants
import { SERVICES_SECTION } from '@/constants'

//mui components
import { Box, ListItem, ListItemIcon, Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

const Services = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: 'flex',
        padding: { xs: '80px 24px', md: '80px 171px' },
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ paddingBottom: '80px' }}>
        <Typography
          variant="h2"
          fontWeight={700}
          fontSize="20px"
          color={theme.palette.content.main}
          sx={{ textAlign: 'center', lineHeight: '30px' }}
        >
          Featured Products
        </Typography>
        <Typography
          variant="h3"
          fontWeight={700}
          fontSize="24px"
          sx={{ textAlign: 'center', lineHeight: '32px', textTransform: 'uppercase' }}
        >
          The Best Services
        </Typography>
        <Typography
          variant="subtitle1"
          color={theme.palette.content.main}
          sx={{ textAlign: 'center', lineHeight: '20px' }}
        >
          Problems trying to resolve the conflict between
        </Typography>
      </Box>
      <Box>
        <Grid container>
          {SERVICES_SECTION.map(({ title, content, icon: Icon }, index) => (
            <Grid key={index} xs={12} md={4}>
              <ListItem
                disablePadding
                disableGutters
                sx={{ flexDirection: 'column', textAlign: 'center', pb: '30px' }}
              >
                <ListItemIcon sx={{ width: 72, height: 72, pb: '20px' }}>
                  <Icon color={theme.palette.primary.main} />
                </ListItemIcon>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  fontSize="24px"
                  color={theme.palette.base.main}
                  sx={{ lineHeight: '32px', pb: '20px' }}
                >
                  {title}
                </Typography>
                <Typography
                  variant="h5"
                  fontSize="14px"
                  color={theme.palette.content.main}
                  sx={{ lineHeight: '20px', pb: '20px' }}
                >
                  {content}
                </Typography>
              </ListItem>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default Services
