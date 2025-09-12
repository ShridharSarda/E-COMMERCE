import React, { useEffect } from 'react'
import AdressCard from '../AdressCard/AdressCard'
import { Button, TextField, Grid } from '@mui/material';
import CartItem from '../Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById } from '../../../State/Order/Action';
import { useLocation } from 'react-router-dom';
const OrderSummary = () => {
const savedAddress = JSON.parse(localStorage.getItem("shippingAddress")) || null;

  const dispatch=useDispatch();
  const location=useLocation();
  const {order}=useSelector(store=>store);
  console.log("Order from Redux:", order);

  const searchParams=new URLSearchParams(location.search);
  const orderId=searchParams.get("order_id")
   
  useEffect(()=>{
    dispatch(getOrderById(orderId))
  },[orderId])
  console.log("Order object:", order.order); // ← add this here

  return (
    
    <div>
      <div className='p-5 shadow-lg rounded-s-md border'>
      <AdressCard address={savedAddress}/>
      </div>
      
    <div>
      <div className='lg:grid grid-cols-3  relative'>
        <div className='col-span-2'>
          {order.order?.orderItems.map((item) => <CartItem item={item} />)}
        </div>
        <div className='px-5 lg:sticky lg:top-0 lg:h-screen mt-5 lg:mt-0'>
          <div className='border'>
            <p className='uppercase font-bold opacity-60 pb-4'>Price details</p>
            <hr />
            <div className='space-y-3 font-semibold mb-10'>
              <div className='flex justify-between pt-3'>
                <span>Price</span>
                <span>₹{order.order?.totalPrice}</span>
              </div>
              <div className='flex justify-between pt-3 text-black'>
                <span>Discount</span>
                <span className='text-green-600'>-₹{order.order?.discounte}</span>
              </div>
              <div className='flex justify-between pt-3 '>
                <span>Delivery Charge</span>
                <span className='text-green-600'>Free</span>
              </div>
              <div className='flex justify-between pt-3 font-bold'>
                <span>Total Amount</span>
    <span className="text-green-600">₹{(order.order?.totalPrice)-(order.order?.discounte)}</span>
              </div>
            </div>
            <Button variant="contained" className='w-full mt-5' sx={{ px: "2.5rem", py: ".7rem", bgcolor: "#9155fd" }}>
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default OrderSummary


