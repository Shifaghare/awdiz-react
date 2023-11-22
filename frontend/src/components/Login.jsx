import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
// import api from '../Context/AxiosConfig';

const Login = () => {
  const [userData, setUserData] = useState({  email: "", password: "" });
  const router = useNavigate();
  // console.log(userData,"userdata")

  const handleChange = (event) => {
    // console.log(event.target.value, "value", event.target.name, "name")
    setUserData({ ...userData, [event.target.name]: event.target.value })
  }

  const sendDataToBackend = async (event) => {
    event.preventDefault();
    // alert("Data submitted to backend..")
    if (userData.email && userData.password) {
      if (userData.password.length >= 8) {
        try {
          const response = await axios.post("http://localhost:8000/api/v1/auth/login",{userData});
          // const response = { data: { success: true } };
          if (response.data.success) {
            toast.success("login successful.")
            setUserData({  email: "", password: "" })
            router("/")
          } else {
            throw new Error("Something went wrong..")
          }
        } catch (error) {
          toast.error(error?.message)
          console.log(error, "error here")
        }
      } else {
        alert("Password must be 8 digit.")
      }
    } else {
      alert("Please fill the all values..")
    }
  }

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={sendDataToBackend}>

        <label>Email :</label><br />
        <input name='email' type='email' onChange={handleChange} /> <br />
        <label>Password :</label><br />
        <input name='password' type='password' onChange={handleChange} /> <br />
        <input type='submit' value="login here" /> <br />
      </form>
    </div>
  )
}

export default Login