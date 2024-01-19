'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import { BandageImageCard, HeroContent } from '@/components'

export default function HomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: { xs: '20px 0', md: '80px 147px' },
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

            <Grid xs={12}>
              <Grid container spacing={{ xs: 1, md: 2 }}>
                <Grid xs={12} md={6} lg={6} sx={{ width: '100%', justifyContent: 'center' }}>
                  <BandageImageCard
                    src="/assets/images/hero/3.png"
                    cardMediaStyles={{ height: { xs: 300, md: 297, lg: 300 }, objectFit: 'cover' }}
                  >
                    <HeroContent />
                  </BandageImageCard>
                </Grid>
                <Grid xs={12} md={6} lg={6} sx={{ width: '100%', justifyContent: 'center' }}>
                  <BandageImageCard
                    src="/assets/images/hero/4.png"
                    cardMediaStyles={{ height: { xs: 300, md: 297, lg: 300 }, objectFit: 'cover' }}
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
  )
}
