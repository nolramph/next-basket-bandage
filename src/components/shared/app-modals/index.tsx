'use client'

import { useSelector, useDispatch } from 'react-redux'

//duxs
import { AppDispatch, RootState } from '@/store'
import { addToCart, reduceCartQuantity, closeCartModal } from '@/store/slices/cartSlice'
import { addToWishList, closeWishListModal, removeFromWishList } from '@/store/slices/wishListSlice'

//cart
import { CartModal } from '@/components'
import WishListModal from '../wish-list-modal'

const AppModals = () => {
  const dispatch = useDispatch<AppDispatch>()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const isCartModalOpen = useSelector((state: RootState) => state.cart.isCartModalOpen)
  const wishListItems = useSelector((state: RootState) => state.wishList.items)
  const isWishListModalOpen = useSelector((state: RootState) => state.wishList.isWishListModalOpen)

  return (
    <>
      <CartModal
        items={cartItems}
        open={isCartModalOpen}
        onClose={() => dispatch(closeCartModal())}
        onAddItem={product => dispatch(addToCart(product))}
        onRemoveItem={product => dispatch(reduceCartQuantity(product.id))}
      />

      <WishListModal
        items={wishListItems}
        open={isWishListModalOpen}
        onClose={() => dispatch(closeWishListModal())}
        onAddItem={product => dispatch(addToWishList(product))}
        onRemoveItem={product => dispatch(removeFromWishList(product.id))}
      />
    </>
  )
}

export default AppModals
