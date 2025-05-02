import React from 'react'

const Receipe = ({singlereceipe}) => {
  return (
    <div className='receipe-card'>
        <img src={singlereceipe.image} alt="" />
        <h1>{singlereceipe.name}</h1>

    </div>
  )
}

export default Receipe