import React from 'react'

const CategoryItem = () => {
  return (
    <>
    
        <div className="col-lg-4 col-md-6 pb-1">
                <div className="cat-item d-flex flex-column border mb-4" style={{padding: "30px"}}>
                    <p className="text-right">15 Products</p>
                    <a href="" className="cat-img position-relative overflow-hidden mb-3">
                        <img className="img-fluid" src="img/cat-1.jpg" alt=""/>
                    </a>
                    <h5 className="font-weight-semi-bold m-0">Men's dresses</h5>
                </div>
            </div>
    </>
  )
}

export default CategoryItem

