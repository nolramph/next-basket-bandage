'use client'

import Link from 'next/link'

//constants
import { FOOTER_LINKS } from '@/constants'

//mui components
import { Box, Typography, List, ListItem, ListItemButton, Stack } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import InputWithButton from '@/components/ui/input-with-button'

const FooterNav = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          width: '100%',
          padding: { xs: '20px 24px', md: '80px 90px', lg: '80px 150px' },
        }}
      >
        <List>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={{ xs: 1, sm: 4, md: 8, lg: 20, xl: 22 }}
            flexWrap="wrap"
          >
            {FOOTER_LINKS.map(({ main }, index) => (
              <Box key={index}>
                {main.map(({ label, href, isHeading }, index) => (
                  <Box
                    key={index}
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                  >
                    {label.includes('Get In Touch') ? (
                      <>
                        <Typography
                          variant="h6"
                          fontWeight={700}
                          fontSize="16px"
                          sx={{
                            color: isHeading ? '#252B42' : '#737373',
                            pb: isHeading ? '20px' : '10px',
                          }}
                        >
                          {label}
                        </Typography>
                        <InputWithButton placeholder="Your Email" label={'Subscribe'} />
                      </>
                    ) : (
                      <Link href={href} passHref style={{ textDecoration: 'none' }}>
                        <ListItem disablePadding disableGutters>
                          <ListItemButton
                            component="a"
                            sx={{
                              textDecoration: 'none',
                              padding: 0,
                              fontWeight: isHeading ? 700 : 400,
                              color: isHeading ? '#252B42' : '#737373',
                              pb: isHeading ? '20px' : '10px',
                              flexDirection: 'column',
                            }}
                          >
                            {label}
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    )}
                  </Box>
                ))}
              </Box>
            ))}
          </Stack>
        </List>
      </Box>
      <Box
        sx={{
          padding: { xs: '25px 24px', md: '25px 171px', background: '#FAFAFA' },
        }}
      >
        <Grid container spacing={{ xs: 1, md: 2 }}>
          <Grid xs sm={3} sx={{ display: { md: 'none' } }}></Grid>
          <Grid xs={6} sm={6} md={8}>
            <Typography
              variant="h6"
              fontWeight={700}
              fontSize="14px"
              sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' }, color: '#737373' }}
            >
              Made With Love By Finland All Right Reserved
            </Typography>
          </Grid>
          <Grid xs sm={3} md={4}></Grid>
        </Grid>
      </Box>
    </>
  )
}

export default FooterNav
