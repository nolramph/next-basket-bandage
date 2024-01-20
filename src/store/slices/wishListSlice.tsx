import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from './productsSlice'

export type WishListItem = Omit<Product, 'category' | 'rating' | 'images'> & { quantity: number }

interface CartState {
  items: WishListItem[]
}

const initialState: CartState = {
  items: [],
}

const wishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    // Existing wishlist reducer
    addToWishList: (state, action: PayloadAction<WishListItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    // New reducer to reduce the quantity of a wishlist
    reduceWishListQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(item => item.id === action.payload)
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1
      } else {
        state.items = state.items.filter(item => item.id !== action.payload)
      }
    },
    // New reducer to remove an item from the wishlist
    removeFromWishList: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
  },
})

export const { addToWishList, reduceWishListQuantity, removeFromWishList } = wishListSlice.actions
export default wishListSlice.reducer
