import React from 'react'
import "./Product.css"
import { Link } from 'react-router-dom'
const Product = ({singleproduct}) => {
    // console.log(singleproduct)
  return (
    <div className="product-card">
        <img src={singleproduct.thumbnail} alt="" />
        <h1>{singleproduct.title}</h1>
        <p>{singleproduct.description}</p>
        <h3>${singleproduct.price}</h3>
        <Link to={`/Products/Product/${singleproduct.id}`}>
            <span>View Details</span>
        </Link>
        

    </div>
  )
}

export default Product