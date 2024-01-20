import { ReactNode } from 'react'

//mui components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'

//mui types
import { SxProps } from '@mui/material'

interface BandageImageCardProps {
  cardMediaStyles: SxProps
  src: string
  children: ReactNode
}

const BandageImageCard = ({ src, cardMediaStyles, children }: BandageImageCardProps) => {
  return (
    <Card sx={{ width: '100%', position: 'relative' }}>
      <CardMedia
        component="img"
        height="100%"
        image={src}
        alt="background image"
        sx={cardMediaStyles}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          width: '100%',
        }}
      >
        <CardContent sx={{ padding: '24px' }}>{children}</CardContent>
      </Box>
    </Card>
  )
}

export default BandageImageCard
