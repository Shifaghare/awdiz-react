import React from 'react'
import { useState } from 'react'

const Register = () => {
    const [userData, setUserData] = useState({name:'',email:'',password:''})
    const [saveUser,setSaveUser] = useState([])
    // console.log(userData,setUserData)
const handleChange=(event)=>{
    console.log(event.target.value,"value",  event.target.name,"name")
    setUserData({...userData,[event.target.name]:event.target.value})
    

}

const handleSubmit =(event)=>{
  event.preventDefault()
  setSaveUser(...saveUser,userData)
  console.log(saveUser)
}
  return (
    <div>
        <h1>register</h1><br/>
      <form onSubmit={handleSubmit}>
      <label>name</label><br/>
      <input name='name' type='text' onChange={handleChange}/><br/><br/>
      <label>email</label><br/>
      <input name='email' type='email'  onChange={handleChange}/><br/><br/>
      <label>password</label><br/>
      <input name='password' type='password'  onChange={handleChange}/><br/><br/>
      <button>submit</button>




      </form>
    </div>
  )
}

export default Register
