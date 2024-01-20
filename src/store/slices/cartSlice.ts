import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from './productsSlice'

export type CartItem = Omit<Product, 'category' | 'rating' | 'images'> & { quantity: number }

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Existing addToCart reducer
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    // New reducer to reduce the quantity of an item
    reduceCartQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(item => item.id === action.payload)
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1
      } else {
        state.items = state.items.filter(item => item.id !== action.payload)
      }
    },
    // New reducer to remove an item from the cart
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
  },
})

export const { addToCart, reduceCartQuantity, removeFromCart } = cartSlice.actions
export default cartSlice.reducer
