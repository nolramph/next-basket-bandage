'use client'
import { Montserrat } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

/* eslint-disable no-unused-vars */
// Extend the Palette and PaletteOptions interfaces
declare module '@mui/material/styles/createPalette' {
  interface Palette {
    base: PaletteColor
    content: PaletteColor
  }
  interface PaletteOptions {
    base: PaletteColorOptions
    content: PaletteColorOptions
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    content: React.CSSProperties
  }

  interface TypographyVariantsOptions {
    content: React.CSSProperties
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    content: true
  }
}

/* eslint-disable no-unused-vars */

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  palette: {
    mode: 'light',
    base: {
      main: '#252B42',
    },
    primary: {
      main: '#23A6F0',
    },
    content: {
      main: '#737373',
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    fontSize: 14,
    content: {
      fontSize: '14px',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1019,
      lg: 1400,
      xl: 1536,
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: '#60a5fa',
          }),
        }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
})

export default theme
