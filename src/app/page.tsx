'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import { Card, CardContent, CardMedia, Typography } from '@mui/material'

export default function HomePage() {
  return (
    <Box sx={{ display: 'flex', padding: { xs: '20px 0', md: '80px 147px' } }}>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        <Grid xs={12} sm={12} md={6}>
          <Card sx={{ width: '100%', position: 'relative' }}>
            <CardMedia
              component="img"
              height="100%"
              image="/assets/images/hero/1.png" // Replace with your image path
              alt="background image"
              sx={{ height: { xs: 300, md: 616 }, objectFit: 'cover' }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                width: '100%',
              }}
            >
              <CardContent sx={{ padding: '24px' }}>
                <Typography
                  gutterBottom
                  component="div"
                  sx={{
                    fontWeight: 700,
                    mb: '5px',
                    color: '#2DC071',
                    lineHeight: '24px',
                    letterSpacing: '0.2px',
                  }}
                >
                  5 Items
                </Typography>
                <Typography
                  gutterBottom
                  component="div"
                  sx={{
                    fontWeight: 700,
                    fontSize: '40px',
                    textTransform: 'uppercase',
                    mb: '5px',
                    lineHeight: '50px',
                    letterSpacing: '0.2px',
                  }}
                >
                  Furniture
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: '14px',
                    lineHeight: '50px',
                    letterSpacing: '0.2px',
                  }}
                >
                  Read More
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
        <Grid container xs={12} md={6}>
          <Grid xs={12} sm={12} md={12}>
            <Card sx={{ width: '100%', position: 'relative' }}>
              <CardMedia
                component="img"
                height="100%"
                image="/assets/images/hero/2.png" // Replace with your image path
                alt="background image"
                sx={{ height: { xs: 300, md: 295 }, objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  width: '100%',
                }}
              >
                <CardContent sx={{ padding: '24px' }}>
                  <Typography
                    gutterBottom
                    component="div"
                    sx={{
                      fontWeight: 700,
                      mb: '5px',
                      color: '#2DC071',
                      lineHeight: '24px',
                      letterSpacing: '0.2px',
                    }}
                  >
                    5 Items
                  </Typography>
                  <Typography
                    gutterBottom
                    component="div"
                    sx={{
                      fontWeight: 700,
                      fontSize: '24px',
                      textTransform: 'uppercase',
                      mb: '5px',
                      lineHeight: '32px',
                      letterSpacing: '0.2px',
                    }}
                  >
                    Furniture
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: '14px',
                      lineHeight: '50px',
                      letterSpacing: '0.2px',
                    }}
                  >
                    Read More
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid container xs={12} sm={12}>
            <Grid xs={12} sm={6} lg={6}>
              <Card sx={{ width: '100%', position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image="/assets/images/hero/3.png" // Replace with your image path
                  alt="background image"
                  sx={{ height: { xs: 300, md: 295 }, objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                  }}
                >
                  <CardContent sx={{ padding: '24px' }}>
                    <Typography
                      gutterBottom
                      component="div"
                      sx={{
                        fontWeight: 700,
                        mb: '5px',
                        color: '#2DC071',
                        lineHeight: '24px',
                        letterSpacing: '0.2px',
                      }}
                    >
                      5 Items
                    </Typography>
                    <Typography
                      gutterBottom
                      component="div"
                      sx={{
                        fontWeight: 700,
                        fontSize: '24px',
                        textTransform: 'uppercase',
                        mb: '5px',
                        lineHeight: '32px',
                        letterSpacing: '0.2px',
                      }}
                    >
                      Furniture
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '50px',
                        letterSpacing: '0.2px',
                      }}
                    >
                      Read More
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
            <Grid xs={12} md={6} lg={6}>
              <Card sx={{ width: '100%', position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="100%"
                  image="/assets/images/hero/4.png" // Replace with your image path
                  alt="background image"
                  sx={{ height: { xs: 300, md: 295 }, objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    width: '100%',
                  }}
                >
                  <CardContent sx={{ padding: '24px' }}>
                    <Typography
                      gutterBottom
                      component="div"
                      sx={{
                        fontWeight: 700,
                        mb: '5px',
                        color: '#2DC071',
                        lineHeight: '24px',
                        letterSpacing: '0.2px',
                      }}
                    >
                      5 Items
                    </Typography>
                    <Typography
                      gutterBottom
                      component="div"
                      sx={{
                        fontWeight: 700,
                        fontSize: '24px',
                        textTransform: 'uppercase',
                        mb: '5px',
                        lineHeight: '32px',
                        letterSpacing: '0.2px',
                      }}
                    >
                      Furniture
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: '14px',
                        lineHeight: '50px',
                        letterSpacing: '0.2px',
                      }}
                    >
                      Read More
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
