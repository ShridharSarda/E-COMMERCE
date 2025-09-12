import React from 'react'
import CartItem from './CartItem'
import { Button, Divider } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCart } from '../../../State/Cart/Action';
const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector(store => store);
  const dispatch = useDispatch();

  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  useEffect(() => {
    dispatch(getCart());
  }, [cart.updateCartItem, cart.deleteCartItem]);

  return (
    <div>
      <div className='lg:grid grid-cols-3 lg:px-16 relative'>
        <div className='col-span-2'>
          {cart.cart?.cartItems.map((item) => <CartItem item={item} />)}
        </div>
        <div className='px-5 lg:sticky lg:top-0 lg:h-screen mt-5 lg:mt-0'>
          <div className='border'>
            <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
            <hr />
            <div className='space-y-3 font-semibold mb-10'>
              <div className='flex justify-between pt-3'>
                <span>Price</span>
                <span>{cart.cart?.totalPrice}</span>
              </div>
              <div className='flex justify-between pt-3 text-black'>
                <span>Discount</span>
                <span className='text-green-600'>₹{cart.cart?.discounte}</span>
              </div>
              <div className='flex justify-between pt-3 '>
                <span>Delivery Charge</span>
                <span className='text-green-600'>Free</span>
              </div>
              <div className='flex justify-between pt-3 font-bold'>
                <span>Total Amount</span>
                <span className='text-green-600'> ₹{(cart.cart?.totalPrice || 0) - (cart.cart?.discounte
                   || 0)}</span>
              </div>
            </div>

            <Button onClick={handleCheckout} variant="contained" className='w-full mt-5' sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}>
              Checkout
            </Button>
          </div>
        </div>

      </div>
    </div>




  )
}

export default Cart
