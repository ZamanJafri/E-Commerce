import React from 'react'
import CategoryItem from './CategoryItem'
import Featurs from '../front/Featurs'

const CategoryComp = () => {
  return (
    <>
      <div className="container-fluid pt-5">
      <Featurs/>
        <div className="row px-xl-5 pb-5">
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
        </div>
      </div>
    </>
  )
}

export default CategoryComp
