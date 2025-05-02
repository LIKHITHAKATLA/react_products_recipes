import React from 'react'
import Receipe from './Receipe'
import "./Receipes.css"

const Receipes = ({receipedata}) => {
    // console.log(receipedata)
  return (
    <div className='receipe-container'>
        {receipedata.map((val)=>{
            return (
                <div>
                    <Receipe singlereceipe={val} />
                </div>
            )

        })}
    </div>
  )
}

export default Receipes