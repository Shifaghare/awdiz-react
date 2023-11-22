// import React, { useState } from 'react'

// const NewTodo2 = () => {
//   const [todo,setTodo]=useState([])
//   const [newww,setNewww]=useState('')
 
//   function set(){
//     setTodo([...todo,newww])
//   }


//  function getValue(event){
//   setNewww(event.target.value)
//  }


    
//   return (
//     <>
//     <div>
//       <button onClick={set}> ADD TODO </button>
//       <input type='text'onChange={getValue}/>
//     </div>

//     {todo.map((todo)=>(
    
//     <div>
//       {todo}
//     </div>

//     ))}
//     </>
//   )}
  
  

// export default NewTodo2





// import { useState } from "react"


// const NewTodo2 = () => {
// const [todo, setTodo ]= useState([])
// const [neww,setNeww]=useState('')

// function set(){
//   setTodo([...todo,neww])
// }

// function getValue(event){
//   setNeww(event.target.value)

// }





//   return (
//     <>
//     <div>
// <button onClick={set}>Add Todo</button>
// <input type='text' onChange={getValue}/>
// </div>


// {todo.map((todo)=>(
// <div>{todo}</div>

// ))}

//     </>
//   )
// }



// export default NewTodo2
import { useState } from "react"

const NewTodo2 = () => {
  const[todo,setTodo]=useState([])
  const [neww,setNeww]=useState('')



function set(event){

  setTodo([...todo,neww])
  setNeww('')

}

function getValue(event){
  setNeww(event.target.value)
  
}

  return (
    <>
    <div>
     <button onClick={set}>Add todo</button>
     <input type="text" onChange={getValue}/>
    </div>
{todo.map((todo)=>(
  <div>{todo}</div>
))}


</>
  )
}

export default NewTodo2

























































