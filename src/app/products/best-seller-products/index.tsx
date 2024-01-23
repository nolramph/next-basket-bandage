'use client'

//components
import { Products } from '@/components'

//mui components
import { Box, Typography } from '@mui/material'

const BestSellerProducts = () => {
  return (
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
          variant="h3"
          fontWeight={700}
          fontSize="24px"
          sx={{ textAlign: 'center', lineHeight: '32px', textTransform: 'uppercase' }}
        >
          Best Seller Products
        </Typography>
      </Box>
      <Products loadMore={false} />
    </Box>
  )
}

export default BestSellerProducts
