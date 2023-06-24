import React from 'react'
import Slider from './front/Slider'
import CategoryComp from './category/CategoryComp'
import Advertise from './front/Advertise'
import ProductCategory from './product/ProductCategory'
import JustArrived from './JustArrived/JustArrived'

const Home = () => {
  return (
    <>
      <Slider />

      <CategoryComp />

      <Advertise />

      <ProductCategory />


      <JustArrived />
    </>
  )
}

export default Home
