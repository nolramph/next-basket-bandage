'use client'

//components
import FeatureImageCard from '@/components/ui/featured-image-card'

//constants
import { FEATURED_SECTION } from '@/constants'

//mui components
import { Box } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

const FeaturedProducts = () => {
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
        {FEATURED_SECTION.map(({ title, content, time, comments, cardImage, category }, index) => (
          <Grid key={index} xs={12} md={4}>
            <FeatureImageCard
              title={title}
              content={content}
              time={time}
              comments={comments}
              cardImage={cardImage}
              category={category}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default FeaturedProducts
