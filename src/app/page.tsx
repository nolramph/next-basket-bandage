'use client'

import * as React from 'react'

//components
import {
  BandageImageCard,
  HeroContent,
  Products,
  Services,
  FeaturedProducts,
  Testimonial,
  BottomCallToAction,
} from '@/components'

//mui components
import { Box, Typography, useTheme } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

export default function HomePage() {
  const theme = useTheme()

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          display: 'flex',
          padding: { xs: '80px 24px', md: '80px 171px' },
          justifyContent: 'center',
        }}
      >
        <Grid container spacing={{ xs: 1, md: 2 }}>
          <Grid xs={12} md={6}>
            <BandageImageCard
              src="/assets/images/hero/1.png"
              cardMediaStyles={{ height: { xs: 300, md: 616 }, objectFit: 'cover' }}
            >
              <HeroContent />
            </BandageImageCard>
          </Grid>
          <Grid xs={12} md={6}>
            <Grid container spacing={{ xs: 1, md: 2 }}>
              <Grid xs={12}>
                <BandageImageCard
                  src="/assets/images/hero/2.png"
                  cardMediaStyles={{ height: { xs: 300, md: 297, lg: 300 }, objectFit: 'cover' }}
                >
                  <HeroContent />
                </BandageImageCard>
              </Grid>

              <Grid xs={12} md={12}>
                <Grid container spacing={{ xs: 1, md: 2 }}>
                  <Grid xs={12} md={6} lg={6} sx={{ width: { xs: '100%', lg: '50%' } }}>
                    <BandageImageCard
                      src="/assets/images/hero/3.png"
                      cardMediaStyles={{
                        height: { xs: 300, md: 297, lg: 300 },
                        objectFit: 'cover',
                      }}
                    >
                      <HeroContent />
                    </BandageImageCard>
                  </Grid>
                  <Grid xs={12} md={6} lg={6} sx={{ width: { xs: '100%', lg: '50%' } }}>
                    <BandageImageCard
                      src="/assets/images/hero/4.png"
                      cardMediaStyles={{
                        height: { xs: 300, md: 297, lg: 300 },
                        objectFit: 'cover',
                      }}
                    >
                      <HeroContent />
                    </BandageImageCard>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Product lists section */}
      <Box
        sx={{
          display: 'flex',
          padding: { xs: '80px 24px', md: '80px 171px' },
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ paddingBottom: '56px' }}>
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
            Best Seller Products
          </Typography>
          <Typography
            variant="subtitle1"
            color={theme.palette.content.main}
            sx={{ textAlign: 'center', lineHeight: '20px' }}
          >
            Problems trying to resolve the conflict between
          </Typography>
        </Box>
        <Products />
      </Box>

      {/* Service lists section */}
      <Services />

      {/* Featured products lists section */}
      <FeaturedProducts />

      {/* Testimonial section */}
      <Testimonial />

      {/* Testimonial section */}
      <BottomCallToAction />
    </>
  )
}
