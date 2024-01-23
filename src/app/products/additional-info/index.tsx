'use client'

import Link from 'next/link'

//constant
import { ADDITIONAL_INFO_NAVIGATION_HEADER } from '@/constants'

//mui components
import { Box, Divider, ListItem, Stack, Typography } from '@mui/material'

/** TODO: Can be potentially explore for product in depth details to maximize ADDITIONAL_INFO_NAVIGATION_HEADER  */
const AdditionalInfo = () => {
  const review = 0
  return (
    <Box
      sx={{
        padding: { xs: '80px 24px 0', md: '80px 130px 0', lg: '80px 171px 0' },
        width: '100%',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 8, lg: 5 }}
        sx={{ justifyContent: 'center', pb: '24px' }}
      >
        {ADDITIONAL_INFO_NAVIGATION_HEADER.map(({ title, link, isActive }, index) => (
          <Link key={index} href={link} passHref style={{ textDecoration: 'none' }}>
            <ListItem
              disablePadding
              disableGutters
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
              }}
            >
              <Typography
                variant="h6"
                fontWeight={isActive ? 600 : 700}
                fontSize="14px"
                sx={{
                  color: '#737373',
                }}
              >
                {title} {title.includes('Review') && review && `review (${review})`}
              </Typography>
            </ListItem>
          </Link>
        ))}
      </Stack>

      <Divider sx={{ mb: '20px' }} />

      <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ padding: '24px 0 48px' }} gap={5}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px', width: { lg: '50%' } }}>
          <Typography
            variant="h6"
            fontWeight={700}
            fontSize="24px"
            sx={{
              lineHeight: '32px',
              color: '#252B42',
            }}
          >
            the quick fox jumps over
          </Typography>
          <Typography
            variant="h6"
            fontSize="14px"
            sx={{
              lineHeight: '20px',
              color: '#737373',
            }}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
            consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </Typography>
          <Box sx={{ borderLeft: '4px solid #23856D', pl: '24px' }}>
            <Typography
              variant="h6"
              fontSize="14px"
              sx={{
                lineHeight: '20px',
                color: '#737373',
              }}
            >
              Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
              consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
            </Typography>
          </Box>
          <Typography
            variant="h6"
            fontSize="14px"
            sx={{
              lineHeight: '20px',
              color: '#737373',
            }}
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official
            consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </Typography>
        </Box>
        <Box sx={{ width: { md: '50%', lg: 'auto' } }}>
          <Box
            component="img"
            src="/assets/images/additional-image-mock.png"
            alt="empty cart"
            sx={{
              textAlign: 'left',
              width: '100%',
              height: '100%',
            }}
          />
        </Box>
      </Stack>
    </Box>
  )
}

export default AdditionalInfo
