import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

//types
import { RootState } from '../index'

export interface Product {
  id: number
  title: string
  category: string
  thumbnail: string
  price: number
  rating: number
  images: Array<string>
  brand: string
  stock: number
  description: string
}

interface ProductsState {
  items: Product[]
  currentProduct: Product | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
  page: number
  limit: number
}

export const initialState: ProductsState = {
  items: [],
  currentProduct: null,
  status: 'idle',
  error: null,
  page: 1,
  limit: 10,
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { getState }) => {
  const state = getState() as RootState
  const { page, limit } = state.products
  const response = await axios.get(
    `https://dummyjson.com/products?skip=${(page - 1) * limit}&limit=${limit}`,
  )
  return response.data.products as Product[]
})

export const fetchProductById = createAsyncThunk('product/fetchById', async (productId: string) => {
  const response = await axios.get(`https://dummyjson.com/products/${productId}`)
  return response.data
})

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    incrementPage(state) {
      state.page += 1
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.status = 'succeeded'
        //Avoid duplicate records
        const newProducts = action.payload.filter(
          newProduct => !state.items.find(existingProduct => existingProduct.id === newProduct.id),
        )
        state.items.push(...newProducts)
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Something went wrong'
      })
      .addCase(fetchProductById.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.currentProduct = action.payload
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Something went wrong'
      })
  },
})

export const { incrementPage } = productsSlice.actions
export default productsSlice.reducer
