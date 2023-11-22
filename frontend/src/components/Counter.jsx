import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)

  return (
    <div>
    <h1>Counter : {counter}</h1>  
    <button style={{marginRight :'20px'}} onClick={()=> setCounter((prevValue=>prevValue+1))}>+</button>
    <button style={{marginRight :'20px'}} onClick={()=> setCounter((prevValue=>prevValue-1))}>-</button>   
    {/* <button onClick={()=> setCounter((prevValue=>prevValue+10))}>+10</button>  */}
    <button onClick={()=> setCounter((prevValue=>prevValue*0))}>Reset</button>
    
    </div>
  )
}

export default Counter

