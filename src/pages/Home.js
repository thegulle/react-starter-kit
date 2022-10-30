import React from 'react'
import { useDispatch } from 'react-redux'
import { storeCartAsync } from 'store/CartStore'

function Home() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(storeCartAsync({ id: Math.random(), name: 'Product random', quantity: 100, price: 200 }))}>add cart</button>
      Home
      <hr />
    </div>
  )
}

export default Home
