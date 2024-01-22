'use client'

import { useState } from 'react'

//mui components
import { Box, IconButton } from '@mui/material'

//mui icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const ImageSlider = ({ images }: { images: Array<string> }) => {
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = images.length

  const handleNext = () => {
    setActiveStep(prevActiveStep => (prevActiveStep + 1 >= maxSteps ? 0 : prevActiveStep + 1))
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => (prevActiveStep - 1 < 0 ? maxSteps - 1 : prevActiveStep - 1))
  }

  const handleThumbnailClick = (index: number) => {
    setActiveStep(index)
  }

  return (
    <>
      <Box sx={{ position: 'relative', maxWidth: 506, maxHeight: 450, flexGrow: 1 }}>
        <Box
          sx={{
            width: '100%',
            height: '450px',
            backgroundImage: `url(${images[activeStep]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
          {activeStep > 0 && (
            <IconButton
              size="small"
              onClick={handleBack}
              sx={{
                position: 'absolute',
                top: '50%',
                left: 16,
                transform: 'translateY(-50%)',
                zIndex: 1,
                color: 'white',
                bgcolor: '#23A6F0',
                '&:hover': {
                  bgcolor: '#23A6F0',
                  opacity: 0.9,
                },
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>
          )}
          {activeStep < maxSteps - 1 && (
            <IconButton
              size="small"
              onClick={handleNext}
              sx={{
                position: 'absolute',
                top: '50%',
                right: 16,
                transform: 'translateY(-50%)',
                zIndex: 1,
                color: 'white',
                bgcolor: '#23A6F0',
                '&:hover': {
                  bgcolor: '#23A6F0',
                  opacity: 0.9,
                },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          )}
        </Box>
      </Box>
      <Box sx={{ display: 'flex', mt: 2, textAlign: 'left' }}>
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              border: index === activeStep ? '2px solid blue' : '2px solid transparent',
              cursor: 'pointer',
              p: '2px',
            }}
            onClick={() => handleThumbnailClick(index)}
          >
            <Box
              sx={{
                width: '50px',
                height: '50px',
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </Box>
        ))}
      </Box>
    </>
  )
}

export default ImageSlider
