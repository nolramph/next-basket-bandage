'use client'

//mui components
import { Modal, Box, Typography, Button, IconButton, Rating } from '@mui/material'

//mui icons
import CloseIcon from '@mui/icons-material/Close'

//types
import { CartModalProps as WishListModalProps } from '@/components/shared/cart-modal'

//utils
import { formatToUSD } from '@/utils/format-utils'

const WishListModal = ({ open, onClose, items, onAddItem, onRemoveItem }: WishListModalProps) => (
  <Modal open={open} onClose={onClose}>
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '80%', sm: '70%', md: '60%', lg: '50%', xl: '40%' },
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        maxHeight: '90vh',
        overflow: 'auto',
      }}
    >
      <IconButton onClick={onClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
        <CloseIcon />
      </IconButton>
      <Typography variant="h6" component="h2" fontWeight={700} sx={{ mb: 2 }}>
        WISHLIST
      </Typography>
      <Box>
        {items.map(item => (
          <Box key={item.id} sx={{ py: '10px' }}>
            <Typography variant="body1" fontWeight={700} sx={{ pb: '16px' }}>
              {item.title}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', fontSize: '14px' }}>
              <Box
                sx={{
                  width: 94,
                  height: 94,
                  backgroundImage: `url(${item.thumbnail})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              {/* TODO: Convert to a single responsibility component named counter component */}
              <Box>
                <Typography variant="body1" sx={{ lineHeight: 0.8, px: 1.5 }}>
                  {item.brand}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Rating
                    name="read-only"
                    value={Math.round(item?.rating || 0)}
                    readOnly
                    sx={{ padding: '5px 8px' }}
                  />
                  <Typography variant="body1" fontSize={14}>
                    {`(${item.rating})`}
                  </Typography>
                </Box>
                <Typography variant="body1" sx={{ lineHeight: 0.8, padding: '5px 8px' }}>
                  {`Stock: ${item.stock}`}
                </Typography>
                <Typography
                  variant="body1"
                  fontWeight={700}
                  sx={{ display: { xs: 'flex', sm: 'block', md: 'none' }, padding: '5px 8px' }}
                >
                  {formatToUSD(item.price * item.quantity)}
                </Typography>
                <Box
                  sx={{
                    display: { xs: 'block', sm: 'block', md: 'none' },
                    padding: '5px 8px',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 3, color: '#FFF' }}
                    onClick={() => onAddItem(item)}
                    fullWidth
                  >
                    Add to cart
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ mt: 3, color: '#FFF', backgroundColor: '#FF0000' }}
                    onClick={() => onRemoveItem(item)}
                    fullWidth
                  >
                    Remove
                  </Button>
                </Box>
              </Box>
              <Box
                sx={{
                  flexGrow: 2,
                  textAlign: 'right',
                  display: { xs: 'none', sm: 'none', md: 'block' },
                }}
              >
                <Typography variant="body1" fontWeight={700}>
                  {formatToUSD(item.price * item.quantity)}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mt: 3, color: '#FFF' }}
                  onClick={() => onAddItem(item)}
                >
                  Add to cart
                </Button>
                <Button
                  variant="contained"
                  sx={{ mt: 3, ml: 2, color: '#FFF', backgroundColor: '#FF0000' }}
                  onClick={() => onRemoveItem(item)}
                >
                  Remove
                </Button>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  </Modal>
)

export default WishListModal
