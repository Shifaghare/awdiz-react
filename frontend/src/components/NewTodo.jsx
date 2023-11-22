import React, { useState } from 'react'

export const NewTodo = () => {

  const [todo, setTodo] = useState([])
  const [neww, setNeww] = useState('')

  function getValue(event) {
    setNeww(event.target.value)
    console.log(neww)
  }
  

  function set() {
    setTodo([...todo, neww])
  }

  return (
    <div>
      <input type='text' onChange={getValue} />

      <button onClick={set}>ADD TODO</button>

      
      {todo.map((todo) => (


        <div>
          {todo}
        </div>


      ))}

    </div>
  )
}
