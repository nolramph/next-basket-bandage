'use client'

//mui components
import { Box, Typography, useTheme } from '@mui/material'

interface ProductCardProps {
  imageUrl: string
  title: string
  category: string
  price: string
}

const ProductCard = ({ imageUrl, title, category, price }: ProductCardProps) => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '238px',
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '25px',
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontSize="16px"
          fontWeight={700}
          color={theme.palette.base.main}
          sx={{ lineHeight: '24px' }}
        >
          {title}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontWeight={700}
          fontSize="14px"
          color={theme.palette.content.main}
          sx={{ lineHeight: '24px' }}
        >
          {category}
        </Typography>
        <Typography
          variant="h5"
          fontWeight={700}
          fontSize="16px"
          color="#23856D"
          sx={{ lineHeight: '24px' }}
        >
          {price}
        </Typography>
      </Box>
    </Box>
  )
}

export default ProductCard
