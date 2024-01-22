'use client'

//mui components
import { Box, Typography, Rating, Avatar, Stack } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

const Testimonial = () => {
  const galleryCount = new Array(9).fill(null)
  return (
    <Box
      sx={{
        display: 'flex',
        padding: { xs: '80px 24px', md: '80px 171px' },
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Grid container spacing={3}>
        <Grid xs={12} md={6}>
          <Typography
            variant="h2"
            fontWeight={700}
            fontSize="24px"
            sx={{ textAlign: 'center', lineHeight: '32px', mb: '28px' }}
          >
            What they say about us
          </Typography>
          <Stack spacing={2.5} sx={{ padding: '30px 35px', alignItems: 'center' }}>
            <Avatar
              alt="Regina Miles"
              src="/assets/images/testimonial/testimonial-1.png"
              sx={{ width: 90, height: 90 }}
            />
            <Rating name="read-only" value={4} readOnly sx={{ padding: '5px 8px' }} />
            <Typography variant="h5" fontWeight={700} fontSize="14px" color="text.secondary">
              Slate helps you see how many more days you need to work to reach your financial goal.
            </Typography>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" fontWeight={700} fontSize="14px" color="#23A6F0">
                Regina Miles
              </Typography>
              <Typography variant="h5" fontWeight={700} fontSize="14px" color="text.primary">
                Designer
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid xs={12} md={6} sx={{ justifyContent: 'center' }}>
          <Grid container rowSpacing={1} columnSpacing={2}>
            {galleryCount.map((_, index) => (
              <Grid key={index} xs={4} sm={3} md={4}>
                <Box
                  component="img"
                  src={`/assets/images/testimonial/gallery-${index + 1}.png`}
                  sx={{ width: { xs: '112px', md: '142px' }, height: { xs: '112px', md: '142px' } }}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Testimonial
