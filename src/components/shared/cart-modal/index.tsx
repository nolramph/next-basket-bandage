'use client'

//mui components
import { Modal, Box, Typography, Button, IconButton, Rating } from '@mui/material'

//mui icons
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import CloseIcon from '@mui/icons-material/Close'

//types
import { CartItem } from '@/store/slices/cartSlice'

//utils
import { formatToUSD } from '@/utils/format-utils'

export interface CartModalProps {
  open: boolean
  onClose: () => void
  items: CartItem[]
  onAddItem: (item: CartItem) => void // eslint-disable-line no-unused-vars
  onRemoveItem: (item: CartItem) => void // eslint-disable-line no-unused-vars
}

const CartModal = ({ open, onClose, items, onAddItem, onRemoveItem }: CartModalProps) => {
  const getTotalPrice = () =>
    formatToUSD(items.reduce((total, item) => total + item.quantity * item.price, 0))

  return (
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
          CART
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
                  <Rating
                    name="read-only"
                    value={Math.round(item?.rating || 0)}
                    readOnly
                    sx={{ padding: '5px 8px' }}
                  />
                  <Typography variant="body1" sx={{ lineHeight: 0.8, padding: '5px 8px' }}>
                    {formatToUSD(item.price)}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={() => onRemoveItem(item)}>
                      <RemoveCircleOutlineIcon />
                    </IconButton>
                    <Typography variant="body1" component="span" fontWeight={700}>
                      {item.quantity}
                    </Typography>
                    <IconButton onClick={() => onAddItem(item)}>
                      <AddCircleOutlineIcon />
                    </IconButton>
                  </Box>
                  <Typography
                    variant="body1"
                    fontWeight={700}
                    sx={{ display: { sm: 'block', md: 'none' }, padding: '5px 8px' }}
                  >
                    {formatToUSD(item.price * item.quantity)}
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  fontWeight={700}
                  sx={{ display: { sm: 'none', md: 'block', flexGrow: 2, textAlign: 'right' } }}
                >
                  {formatToUSD(item.price * item.quantity)}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Total:</Typography>
          <Typography variant="h6">{getTotalPrice()}</Typography>
        </Box>
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 3, color: '#FFF' }}>
          Checkout
        </Button>
      </Box>
    </Modal>
  )
}

export default CartModal
