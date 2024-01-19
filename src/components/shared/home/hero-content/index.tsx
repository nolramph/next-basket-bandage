// TODO: Static for now as we don't see any differentiation in terms of content
import Typography from '@mui/material/Typography'

const HeroContent = () => {
  return (
    <>
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
          lineHeight: '24px',
          letterSpacing: '0.2px',
        }}
      >
        Read More
      </Typography>
    </>
  )
}

export default HeroContent
