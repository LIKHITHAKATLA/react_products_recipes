import React from 'react'

const Listrender = () => {
   const arr = ["syr","abs"]
   const num =[1,2,3,4,5]
   const obj=[
    {"a":12345678},
    {"b":2}
   ]
  return (
    <div>
    {obj.map((val,index)=>{
        console.log(val.a);
        return (
            val.a
        )
    })}
    </div>
  )
}

export default Listrender