import React from 'react'
import "./Productdetails.css"
import { useParams } from 'react-router-dom'
import data from './Pdata';
const Productdetails = () => {
    const params = useParams(); 
    console.log(params); 
    const matcheddata=data.products.find(x=>x.id === Number(params.id))
    // console.log(matcheddata)
    if(!matcheddata){
        return (
            <div>
                <h1>No data</h1>
            </div>
        )
    }
  return (
    <div className="product-details">
        <img src={matcheddata.thumbnail} alt="" />
        <h1>{matcheddata.title}</h1>
        <p>{matcheddata.description}</p>
        <p>{matcheddata.price}</p>
    </div>
  )
}

export default Productdetails