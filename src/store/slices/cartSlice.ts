import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from './productsSlice'

export type CartItem = Product & { quantity: number }

interface CartState {
  items: CartItem[]
  isCartModalOpen: boolean
}

const initialState: CartState = {
  items: [],
  isCartModalOpen: false,
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
    // Reducer to reduce the quantity of an item
    reduceCartQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(item => item.id === action.payload)
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1
      } else {
        state.items = state.items.filter(item => item.id !== action.payload)
      }
    },
    //Reducer to remove an item from the cart
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    //Reducer to manage the cart modal
    toggleCartModal: state => {
      state.isCartModalOpen = !state.isCartModalOpen
    },
    openCartModal: state => {
      state.isCartModalOpen = true
    },
    closeCartModal: state => {
      state.isCartModalOpen = false
    },
  },
})

export const {
  addToCart,
  reduceCartQuantity,
  removeFromCart,
  toggleCartModal,
  openCartModal,
  closeCartModal,
} = cartSlice.actions
export default cartSlice.reducer
