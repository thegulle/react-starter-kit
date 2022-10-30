import React, { useEffect, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCartAsync, getCart } from 'store/CartStore'


function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(getCart)
  useEffect(() => {
    dispatch(getCartAsync());
  }, [dispatch]);
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems?.map((item, index) => {
          return <li key={index}>
            {item.name} - {item.price}
          </li>
        })}
      </ul>
    </div>
  )
}

export default memo(Cart)
