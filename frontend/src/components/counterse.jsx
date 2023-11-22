import React from 'react'
import { useEffect, useState } from 'react'

const Counterse = () => {
    const [counter, setCounter] = useState(0);
    // c
    function UpdateCounter() {
        setCounter((prevValue) => prevValue + 1);
    }
    useEffect(() => {
        if (counter === 10) {
            alert("Heyyaaa")
        }
        else if(counter===20){
            alert("helloo")
        }
    }, [counter])
    return (
        <div>
            <h1>Counter - {counter}</h1>
            <button onClick={UpdateCounter}>+</button>
        </div>
    )
}

export default Counterse