'use client'

import { useState } from 'react'

//mui components
import { Box, IconButton, Tooltip } from '@mui/material'

interface ColorPickerProps {
  colors: string[]
  onSelect: (color: string) => void // eslint-disable-line no-unused-vars
}

const ColorPicker = ({ colors, onSelect }: ColorPickerProps) => {
  const [selectedColor, setSelectedColor] = useState<string>('')

  const handleColorSelect = (color: string) => {
    setSelectedColor(color)
    onSelect(color)
  }

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      {colors.map(color => (
        <Tooltip key={color} title={color} placement="top">
          <IconButton
            onClick={() => handleColorSelect(color)}
            sx={{
              bgcolor: color,
              color: color,
              width: 30,
              height: 30,
              border: selectedColor === color ? '2px solid black' : 'none',
              borderRadius: '50%',
              '&:hover': {
                bgcolor: color,
              },
            }}
          />
        </Tooltip>
      ))}
    </Box>
  )
}

export default ColorPicker
