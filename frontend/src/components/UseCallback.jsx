import React, { useCallback, useState } from 'react'
import Todos from './Todos'

const UseCallback = () => {
  
    const [todos, setTodos] = useState([]);


    const addTodo = useCallback(() => {
        setTodos([...todos, "New todo"])
    }, [todos])

    return (
        <div>
         
            <Todos todos={todos} addTodo={addTodo} />
        </div>
    )
}

export default UseCallback