import { combineReducers } from '@reduxjs/toolkit'
import productsReducer from './slices/productsSlice'
import cartReducer from './slices/cartSlice'
import wishListReducer from './slices/wishListSlice'

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  wishList: wishListReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
