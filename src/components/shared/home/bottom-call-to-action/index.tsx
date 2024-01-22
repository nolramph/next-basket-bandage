'use client'

//mui components
import { Box, Typography, Button } from '@mui/material'

const BottomCallToAction = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        padding: { xs: '112px 0', md: '160px 195px' },
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundImage: `url(/assets/images/cta-section-bg.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        minHeight: '712px',
        gap: '30px',
        margin: 0,
      }}
    >
      <Typography
        variant="h5"
        fontWeight={700}
        fontSize="14px"
        sx={{ textAlign: 'center', color: '#23A6F0', lineHeight: '24px' }}
      >
        Designing Better Experience
      </Typography>
      <Typography
        variant="h2"
        fontWeight={700}
        fontSize="40px"
        sx={{ textAlign: 'center', lineHeight: '50px' }}
      >
        Problems trying to resolve the conflict between
      </Typography>
      <Typography
        variant="h5"
        fontWeight={700}
        fontSize="24px"
        sx={{ textAlign: 'center', color: '#23856D', lineHeight: '32px' }}
      >
        $16.48
      </Typography>
      <Typography
        variant="body2"
        fontSize="14px"
        color="text.secondary"
        sx={{ textAlign: 'center', lineHeight: '20px' }}
      >
        Problems trying to resolve the conflict between the two major realms of Classical physics:
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          sx={{
            textTransform: 'uppercase',
            fontSize: '14px',
            fontWeight: 700,
            width: 'auto',
            color: '#FFF',
            padding: '15px 40px',
          }}
        >
          Add Your Call To Action
        </Button>
      </Box>
    </Box>
  )
}

export default BottomCallToAction
