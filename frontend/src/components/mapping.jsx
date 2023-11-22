import React from 'react'

const Mapping = ({ names}) => {
    // console.log(names)
    return (
        <div>
            <div>(Mapping)</div>
          
            {names.map((name, i) => (
            <div>
            <h3>name: {name} welcome :) </h3>
            <h4>Your id -{i} </h4>
            </div>))}
        </div>
    )
}

export default Mapping


 