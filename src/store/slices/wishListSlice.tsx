import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from './productsSlice'

export type WishListItem = Product & { quantity: number }

interface WishListState {
  items: WishListItem[]
  isWishListModalOpen: boolean
}

const initialState: WishListState = {
  items: [],
  isWishListModalOpen: false,
}

const wishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    // Existing wishlist reducer
    addToWishList: (state, action: PayloadAction<WishListItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id)
      if (existingItem) {
        return
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
    },
    // New reducer to remove an item from the wishlist
    removeFromWishList: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    //Reducer to manage the wishlist modal
    toggleWishListModal: state => {
      state.isWishListModalOpen = !state.isWishListModalOpen
    },
    openWishListModal: state => {
      state.isWishListModalOpen = true
    },
    closeWishListModal: state => {
      state.isWishListModalOpen = false
    },
  },
})

export const {
  addToWishList,
  removeFromWishList,
  toggleWishListModal,
  openWishListModal,
  closeWishListModal,
} = wishListSlice.actions
export default wishListSlice.reducer
