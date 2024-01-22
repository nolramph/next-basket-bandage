'use client'

import Link from 'next/link'

//icon components
import { Clock, Graph } from '@/components/icons'

//mui components
import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'

//mui icons
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

interface FeatureImageCardProps {
  cardImage: number
  title: string
  content: string
  time: string
  comments: number
  category: Array<{ title: string; isActive: boolean }>
}

const FeatureImageCard = ({
  cardImage,
  title,
  content,
  time,
  comments,
  category,
}: FeatureImageCardProps) => {
  const image = `/assets/images/featured/${cardImage}.png`
  return (
    <Card sx={{ maxWidth: { xs: '100%', md: '348px' } }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        fontSize="12px"
        sx={{
          color: '#FFF',
          lineHeight: '24px',
          background: '#E74040',
          position: 'absolute',
          margin: '20px',
          px: '10px',
          borderRadius: '3px',
        }}
      >
        NEW
      </Typography>
      <CardMedia component="img" height="300" image={image} />
      <CardContent sx={{ padding: '25px', pb: 0 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {category.map(({ title, isActive }, index) => (
            <Typography
              key={index}
              gutterBottom
              variant="h5"
              component="div"
              fontSize="12px"
              sx={{ color: isActive ? '#23A6F0' : '#737373', lineHeight: '16px' }}
            >
              {title}
            </Typography>
          ))}
        </Box>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontSize="20px"
          sx={{ lineHeight: '30px' }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontSize="14px"
          sx={{ lineHeight: '20px' }}
        >
          {content}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', my: '25px' }}>
          <Box sx={{ display: 'flex' }}>
            <Clock />
            <Typography variant="body2" color="text.secondary">
              {time}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <Graph />
            <Typography variant="body2" color="text.secondary">
              {`${comments} comments`}
            </Typography>
          </Box>
        </Box>
      </CardContent>
      <CardActions sx={{ padding: '25px', pt: 0 }}>
        <Link href="/" passHref>
          <Button
            size="small"
            component="a"
            sx={{
              textTransform: 'capitalize',
              color: '#737373',
              fontSize: '14px',
              fontWeight: '700',
            }}
          >
            Learn More
            <ArrowForwardIosIcon sx={{ color: '#23A6F0', pl: '10px' }} />
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default FeatureImageCard
