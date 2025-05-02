import React from 'react'
import Product from './Product'
import "./Products.css"
const Products = ({productsdata}) => {
  // console.log(productsdata)
  return (
    <div className="products-container">
      {productsdata.map((val)=>{
        return (
          <div>
            {/* <h1>{val.title}</h1> */}
            <Product singleproduct={val} />
          </div>
        )
      })}
        
    </div>
  )
}

export default Products