'use client'

//mui components
import { SvgIconProps, Box } from '@mui/material'

interface CircularIconProps {
  Icon: React.ComponentType<SvgIconProps>
  borderColor: string
  iconColor?: string
  size?: number
}

const CircularIcon = ({
  Icon,
  borderColor,
  iconColor = 'inherit',
  size = 40,
}: CircularIconProps) => {
  return (
    <Box
      sx={{
        color: iconColor,
        border: `1px solid ${borderColor}`,
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: size,
        height: size,
      }}
    >
      <Icon />
    </Box>
  )
}

export default CircularIcon
