import React, { useState, useEffect } from 'react'
import TOP_BANNER from '../resources/Home/banner-top.svg'
import SEARCH_ICON from '../resources/Home/search-icon.svg'
import ARROW_RIGHT from '../resources/Home/arrow-right.svg'
import PLUS_ICON from '../resources/Home/add-icon.svg'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import shopService from '../service/shopService'

import '../styles/home.css'

const Home = () => {
  const [products, setProducts] = useState([])

  const responsive_collections = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  }

  const responsive_featured = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 5 },
  }

  const collection_proucts =
    products &&
    products.map((product, index = 0) => (
      <div className='item' data-value={index++}>
        <div className='row m-2'>
          <div className='m-4'>
            <div className='card border-0 product-card text-left p-2'>
              <img className='' alt='product image' src={product.image} />
              <div className='card-body'>
                <p className='text-title'>{product.name}</p>
                <p className='text-description'>{product.description}</p>
                <p className='text-yellow text-description'>
                  <strong>Shop Now </strong>
                  <img className='arrow-right' src={ARROW_RIGHT} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))

  const featured_products = products.map((product, index = 0) => (
    <div className='item m-3' data-value={index++}>
      <div className='my-4'>
        <div className='card product-card-bg border-0 p-4'>
          <div className='card-block'>
            <img className='img-fluid' src={product.image} />
            {/* <h4 className='card-title'>{product.name}</h4> */}
            <h6 className='card-subtitle text-muted mt-2'>{product.name}</h6>
            <p className='card-text p-y-1'>
             Designer
            </p>
            <a href='#' className='card-link'>
              ${product.price}
            </a>
            <a href='#' className='card-link'>
              <img className='arrow-right' src={PLUS_ICON} />
            </a>
          </div>
        </div>
      </div>
    </div>
  ))

  useEffect(() => {
    shopService.getAllProduct().then((products) => {
      setProducts(products)
    })
  }, [])

  console.log('products :', products)
  return (
    <>
      <section className='section-home-1'>
        <div className='row m-0 top-container d-flex'>
          <div className='col-12 p-0'>
            <img src={TOP_BANNER} className='img-fluid banner' alt='banner' />
          </div>
          <div className='input-group search-container m-4 rounded border'>
            <span className='input-group-text border-0'>
              <img src={SEARCH_ICON} className='img-fluid' alt='search' />
            </span>
            <input
              type='text'
              className='form-control border-0'
              placeholder='Search Product'
            />
          </div>
        </div>
        <div className='store-wrapper'>
          <div>
            <AliceCarousel
              mouseTracking
              items={collection_proucts}
              responsive={responsive_collections}
              controlsStrategy='alternate'
            />
          </div>
          <div>
            <div className='m-4 p-0'>
              <div className='d-flex justify-content-between'>
                <div className='display-4'>
                  <h4>
                    <strong>featured Products</strong>
                  </h4>
                </div>
                <div className=''>
                  <h6>See All</h6>
                </div>
              </div>
            </div>
          </div>

          <AliceCarousel
            mouseTracking
            items={featured_products}
            responsive={responsive_featured}
            controlsStrategy='alternate'
          />
        </div>
        <div className='container parent p-0 m-0'>
          <div className='row bottom-container child'>
            {/* {products.map((product) => (
              <div className='col-12 col-lg-3 col-md-4'>
                <div className='card p-4'>
                  <div className='card-block'>
                    <h4 className='card-title'>{product.name}</h4>
                    <img className='img-fluid' src={product.image} />
                    <h6 className='card-subtitle text-muted'>{product.name}</h6>
                    <p className='card-text p-y-1'>
                      Some quick example text to build on the card title.
                    </p>
                    <a href='#' className='card-link'>
                      {product.price}
                    </a>
                    <a href='#' className='card-link'>
                      <img className='arrow-right' src={PLUS_ICON} />
                    </a>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
