'use client'

//mui components
import { Breadcrumbs, Link, Box } from '@mui/material'

//mui icons
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

const BreadCrumb = () => {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault()
    console.info('You clicked a breadcrumb.')
  }

  const breadCrumbs = [
    <Link underline="hover" key="1" href="/" color="text.primary" onClick={handleLinkClick}>
      Home
    </Link>,
    <Link underline="hover" key="2" color="inherit" href="/shop" onClick={handleLinkClick}>
      Shop
    </Link>,
  ]

  return (
    <Box>
      {/* Breadcrumbs */}
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {breadCrumbs}
      </Breadcrumbs>
    </Box>
  )
}

export default BreadCrumb
