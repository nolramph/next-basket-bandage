//duxs

import { CartItem } from '@/store/slices/cartSlice'
import { WishListItem } from '@/store/slices/wishListSlice'

export const extractTotalQuantity = (items: CartItem[] | WishListItem[]) => {
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0)
  return totalQuantity
}
