import React, { useState, useEffect } from 'react'
import PLUS_ICON from '../resources/Home/add-icon.svg'
import 'react-alice-carousel/lib/alice-carousel.css'

import shopService from '../service/shopService'

const Cart = (data) => {
  const [products, setProducts] = useState(null)
  const [count, setCount] = useState(0)

  const handleCountInc = () => {
    if (count > -1) {
      setCount(count + 1)
    }
  }
  const handleCountDec = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  useEffect(() => {
    shopService.getAllProduct().then((products) => {
      setProducts(products)
    })
  }, [])
  return (
    <>
      <div className='row p-2 m-2'>
        {products &&
          products.map((product, index = 0) => (
            // <div className='row d-flex'>
            <div className='card col-lg-5 col-md-5 m-2 rounded product-card text-left'>
              <img className='' alt='product image' src={product.image} />
              <div className='card-body'>
                <p className='text-title'>{product.name}</p>
                <p className='text-description'>Lorem, ipsum dolor.</p>
                <div class='btn-group border' role='group'>
                  <button
                    type='button'
                    class='btn btn-white'
                    onClick={() => {
                      handleCountDec()
                    }}
                  >
                    -
                  </button>
                  <button type='button' class='btn btn-white'>
                    {count}
                  </button>
                  <button
                    type='button'
                    class='btn btn-white'
                    onClick={() => {
                      handleCountInc()
                    }}
                  >
                    +
                  </button>
                </div>
                {/* <p className='text-yellow text-description'>
                  <strong>Shop Now </strong>
                  <img className='arrow-right' />
                </p> */}
              </div>
            </div>
            // </div>
          ))}
      </div>
      <div>
        <div className='row p-0 m-0'>
          <div className='col-12 d-flex justify-content-between'>
            <p>Subtotal</p>
            <p>$102.00</p>
          </div>
          <div className='col-12 d-flex justify-content-between'>
            <p>Shipping and Handling</p>
            <p>$0.00</p>
          </div>
          <div className='col-12 d-flex justify-content-between'>
            <p>Discount</p>
            <p>$0.00</p>
          </div>
          <div className='col-12 d-flex justify-content-between'>
            <p>Grand total</p>
            <p>$102.00</p>
          </div>
          <div className='col-12 d-flex justify-content-center'>
            <button className='btn btn-dark rounded-0 btn-block p-3 m-4'>
              <strong>GO TO CHECKOUT</strong>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
