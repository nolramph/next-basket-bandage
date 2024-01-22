'use client'

import Link from 'next/link'

//components
import ProductCard from './product-card'

//duxs
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts, incrementPage } from '@/store/slices/productsSlice'
import { AppDispatch, RootState } from '@/store'

//hooks
import useEffectExceptOnMount from '@/hooks/use-effect-except-on-mount'

//mui components
import Grid from '@mui/material/Unstable_Grid2'
import { Box, Button, Typography } from '@mui/material'

//utils
import { formatToUSD } from '@/utils/format-utils'

const Products = () => {
  const dispatch = useDispatch<AppDispatch>()
  const products = useSelector((state: RootState) => state.products.items)
  const status = useSelector((state: RootState) => state.products.status)
  const error = useSelector((state: RootState) => state.products.error)
  const page = useSelector((state: RootState) => state.products.page)

  useEffectExceptOnMount(() => {
    dispatch(fetchProducts())
  }, [dispatch, page])

  const handleLoadMore = () => {
    dispatch(incrementPage())
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
      <Grid container spacing={{ xs: 2, md: 2, lg: 3 }}>
        {/* TODO: Convert to a single responsibility component */}
        {error && (
          <Typography color="error" variant="body2">
            There was an error fetching products
          </Typography>
        )}
        {/* TODO: Add loading state component / enhancement */}
        {status === 'loading' && <Typography>Loading...</Typography>}
        {status === 'succeeded' &&
          products &&
          products.length &&
          products.map(product => (
            <Grid key={product.id} xs={12} sm={4} md={3} lg={2}>
              <Button href={`/products/${product.id}`} LinkComponent={Link}>
                <ProductCard
                  key={product.id}
                  imageUrl={product.thumbnail}
                  title={product.title}
                  category={product.category}
                  price={formatToUSD(product.price)}
                />
              </Button>
            </Grid>
          ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          onClick={handleLoadMore}
          variant="outlined"
          size="medium"
          sx={{ width: 'auto', textTransform: 'uppercase' }}
        >
          Load More Products
        </Button>
      </Box>
    </Box>
  )
}

export default Products
