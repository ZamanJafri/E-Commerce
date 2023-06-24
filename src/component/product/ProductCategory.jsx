import React from 'react'
import ProductItem from './ProductItem'

const ProductCategory = () => {
  return (
    <>
      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
        <h2 className="section-title px-5">
        <span className="px-2">Trandy Products</span>
        </h2>
        </div>
          <div className="row px-xl-5 pb-3">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>        
      </div>
    </>
  )
}

export default ProductCategory
