import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import api from '../../helpers/AxiosConfig'

const UpdateProduct = () => {

    const {id} = useParams()
    const router = useNavigate()

    const [ productData , setProductData] = useState({})
    console.log(productData)
    async function getProductData(){  try{
        const response = await api.get(`/product/getsingleproduct?id=${id}`)
        if(response.data.success){
            console.log(response.data)
            setProductData(response.data.product)
        }
    }catch(error){
        toast.error(error.response.data.message)
    }
}

function handleChange(event){
    setProductData({...productData , [event.target.name]: event.target.value})
    console.log(productData)
} 


async function  handleSubmit(event) {
 event.preventDefault()
    try{
        const response = await api.post('/product/updateproduct',{productData})
        if(response.data.success){
            toast.success('product updated')
            router("/yourproducts")
        }
    }catch(error){
        console.log(error)
        toast.error(error.response.data.message)
    }

}

useEffect(()=>{
    if(id){
        getProductData()
        console.log(id)
    }

    },[id])
return (
<div>
  Update product

  <form onSubmit={handleSubmit} action="">
  <label htmlFor="">Name</label><br/>
            <input type="text" name="name" id="" onChange={handleChange} value={productData.name}/><br/>
            <label htmlFor="">Category</label><br/>
            <input type="text" name="category" id="" onChange={handleChange} value={productData.category}/><br/>
            <label htmlFor="">Image</label><br/>
            <input type="url"  name="image" id="" onChange={handleChange} value={productData.image}/><br/>
            <label htmlFor="">Product Price</label><br/>
            <input type="number" name="price" id="" onChange={handleChange} value={productData.price}/><br />
            <input type="submit" className='button' value="update Product" />
  </form>
</div>
)
}

export default UpdateProduct