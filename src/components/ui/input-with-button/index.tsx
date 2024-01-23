'use client'

import React, { useState, ChangeEvent, MouseEvent } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

const CustomTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px 0 0 4px', // Adjust the border radius as needed
  },
})

const CustomButton = styled(Button)({
  borderRadius: '0 4px 4px 0', // Adjust the border radius as needed
  lineHeight: 2.75,
})

const InputWithButton = ({
  placeholder,
  label = 'Button',
}: {
  placeholder?: string
  label?: string
}) => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log('Button clicked with input:', inputValue)
  }

  return (
    <>
      <Grid container spacing={0} alignItems="center">
        <Grid item>
          <CustomTextField
            variant="outlined"
            value={inputValue}
            onChange={handleInputChange}
            label={placeholder}
          />
        </Grid>
        <Grid item>
          <CustomButton
            variant="contained"
            color="primary"
            size="large"
            onClick={handleButtonClick}
            sx={{ color: '#FFF' }}
          >
            {label}
          </CustomButton>
        </Grid>
      </Grid>
      <Typography variant="body1" fontSize={12} sx={{ lineHeight: '28px', color: '#737373' }}>
        Lore imp sum dolor Amit
      </Typography>
    </>
  )
}

export default InputWithButton
