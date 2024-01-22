'use client'

import { useSelector, useDispatch } from 'react-redux'

//duxs
import { AppDispatch, RootState } from '@/store'
import { addToCart, reduceCartQuantity, closeCartModal } from '@/store/slices/cartSlice'

//cart
import { CartModal } from '@/components'

const AppModals = () => {
  const dispatch = useDispatch<AppDispatch>()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const isCartModalOpen = useSelector((state: RootState) => state.cart.isCartModalOpen)
  //   const wishListItems = useSelector((state: RootState) => state.wishList.items)

  return (
    <>
      <CartModal
        cartItems={cartItems}
        open={isCartModalOpen}
        onClose={() => dispatch(closeCartModal())}
        onAddItem={product => dispatch(addToCart(product))}
        onRemoveItem={product => dispatch(reduceCartQuantity(product.id))}
      />
    </>
  )
}

export default AppModals
