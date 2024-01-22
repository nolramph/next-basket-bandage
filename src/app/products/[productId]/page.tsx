'use client'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//components
import { BreadCrumb, ImageSlider, CircularIcon, ColorListPicker } from '@/components'
import { useSnackbar } from '@/providers/snackbar-provider'

//duxs
import { AppDispatch, RootState } from '@/store'
import { fetchProductById } from '@/store/slices/productsSlice'
import { addToCart } from '@/store/slices/cartSlice'
import { addToWishList } from '@/store/slices/wishListSlice'

//mui components
import { Box, Typography, Rating, Button, useTheme, Divider } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

//mui icons
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { formatToUSD } from '@/utils/format-utils'

export interface SearchParamProps {
  params: { productId: string }
}

const ProductDetails = ({ params: { productId } }: SearchParamProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const product = useSelector((state: RootState) => state.products.currentProduct)
  const wishListItems = useSelector((state: RootState) => state.wishList.items)
  const wishListIds = wishListItems.map(item => item.id)
  const { showSnackbar } = useSnackbar()

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId as string))
    }
  }, [dispatch, productId])

  const theme = useTheme()
  const formattedProduct = product && {
    ...product,
    quantity: 1,
  }

  const handleAddToCart = () => {
    if (formattedProduct) {
      dispatch(addToCart(formattedProduct))
      showSnackbar(`${formattedProduct.title} has been added to your cart`)
    }
  }
  const handleAddToWishList = () => {
    if (formattedProduct) {
      dispatch(addToWishList(formattedProduct))
      showSnackbar(`${formattedProduct.title} has been added to your wishlist`)
    }
  }

  return (
    <>
      <Box sx={{ padding: { xs: '20px 0', md: '24px 147px' } }}>
        <BreadCrumb />
      </Box>
      <Box
        sx={{
          display: 'flex',
          padding: { xs: '20px 0', md: '0 147px' },
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Grid container spacing={{ xs: 1, md: 2 }}>
          <Grid xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
              <ImageSlider images={product?.images || []} />
            </Box>
          </Grid>

          <Grid xs={12} md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box>
                <Typography
                  gutterBottom
                  fontSize={'20px'}
                  fontWeight={400}
                  sx={{ lineHeight: '30px' }}
                >
                  {product?.title}
                </Typography>
                <Box sx={{ display: 'flex', mb: '20px' }}>
                  <Rating name="read-only" value={Math.round(product?.rating || 0)} readOnly />
                  <Typography
                    fontWeight={700}
                    fontSize={'14px'}
                    sx={{ lineHeight: '24px', ml: '10px', color: theme.palette.content.main }}
                    component="legend"
                  >
                    10 Reviews
                  </Typography>
                </Box>
                <Typography
                  gutterBottom
                  fontWeight={700}
                  fontSize={'24px'}
                  sx={{ lineHeight: '32px', mb: '5px' }}
                  component="legend"
                >
                  {formatToUSD(product?.price || 0)}
                </Typography>
                <Box sx={{ display: 'flex', mb: '119px' }}>
                  <Typography
                    fontWeight={700}
                    fontSize={'14px'}
                    sx={{ lineHeight: '24px', color: theme.palette.content.main }}
                  >
                    Availability: &nbsp;
                  </Typography>
                  <Typography
                    fontWeight={700}
                    fontSize={'14px'}
                    sx={{ lineHeight: '24px', color: theme.palette.primary.main }}
                  >
                    In Stock
                  </Typography>
                </Box>
                <Divider light />
                <Box sx={{ mt: '29px' }}>
                  <ColorListPicker
                    colors={['#23A6F0', '#2DC071', '#E77C40', '#252B42']}
                    onSelect={color => alert(color)}
                  />
                </Box>
                <Box sx={{ display: 'flex', gap: '10px', mt: '67px' }}>
                  <Button variant="contained" sx={{ color: 'white' }}>
                    Selection Options
                  </Button>
                  <Button
                    onClick={handleAddToWishList}
                    disabled={!!product?.id && wishListIds.includes(product?.id)}
                  >
                    <CircularIcon Icon={FavoriteBorderIcon} borderColor="#E8E8E8" />
                  </Button>
                  <Button onClick={handleAddToCart}>
                    <CircularIcon Icon={ShoppingCartOutlinedIcon} borderColor="#E8E8E8" />
                  </Button>
                  <Button onClick={() => alert('Product is visible?')}>
                    <CircularIcon Icon={VisibilityIcon} borderColor="#E8E8E8" />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ProductDetails
