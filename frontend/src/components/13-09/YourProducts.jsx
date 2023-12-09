import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext' 
import toast from 'react-hot-toast' 
import { useNavigate } from 'react-router-dom'
import api from '../../helpers/AxiosConfig'
import './YourProducts.css'
import { FaCartPlus } from 'react-icons/fa'

const YourProducts = () => {
    const router = useNavigate()
    const {state} = useContext(AuthContext)
    // console.log(state)
    const [yourProducts , setYourProduct] = useState([])
    console.log(yourProducts,"all your products ")

    async function getYourProduct(){
        try{
            const response = await api.post('/product/yourproducts', { id: state?.user?.id })
            if(response.data.success){
                console.log(response.data)
                setYourProduct(response.data.allProducts)
            }
        }catch(error){
            console.log(error)
            toast.error(error?.response.data.message)
        }
    }
   

    async function deleteProduct(id){
        // alert(id)
        try{  
            const response = await api.delete('product/deleteproduct' , {params : {id}})
            if(response.data.success){
                toast.success(response.data.message)
                getYourProduct();
            }
        }catch(error){
            console.log(error)
            toast.error(error?.response.data.message)
        }
    }


    // async function deleteProduct(id){
    //     try{
    //         const response=await api.post('/product/deleteproduct',{params : {id}})
    //         if(response.data.success){
    //             toast.success(response.data.message)

                
    //         }

    //     } 
    //     catch(error){
    //         toast.error(error?.response.data.message)

    //     }
    // }

    useEffect(()=>{
        if(state?.user && state?.user?.name === undefined){
            toast.error("user not found")
            router('/login')
        }
        if (state?.user && state?.user?.name !== undefined) {
            // console.log("state?.user?.id", state)
            getYourProduct()
        }
    },[state])
    
  return (
    <div>
          <ul style={{ listStyleType: 'none', margin: '0px 1px 10px 1px', padding: 0, backgroundColor: '#333', overflow: 'hidden' }}>
      <li style={{ float: 'left' }}>                            
        <a href="/" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>
          Home
        </a>
      </li>
      <li style={{ float: 'left' }}>
        <a href="yourproducts" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>
          Your Products
        </a>
      </li>
      <li style={{ float: 'left' }}>
        <a href="/addproduct" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>
          Add Product
        </a>
      </li>
      <li style={{ float: 'right' }}>
        <a href="/addproduct" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>
          Profile

        </a>
      </li>
      <li style={{ float: 'right' }}>
        <a href="/products" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>
          All Products

        </a>
      </li>
      <li style={{ float: 'right' }}>
        <a href="/cart" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>
      Cart
      <FaCartPlus style={{fontSize:'13px'}}/>

        </a>
      </li>
      
    </ul>
        <h1>Your Products</h1>
       <div >
       {yourProducts?.length ? <div style={{display:'flex',flexWrap:'wrap'}}>
        {yourProducts.map((pro)=>(
            <div class='product' key={pro._id}>
                <div style={{height:"250px"}}>
                    <img style={{height:'180px'}} src={pro.image} alt="" />
                </div>
                <div style={{color:'black'}}>{pro.name}</div>
                <div style={{color:'black'}}> $ {pro.price}</div>
                <button onClick={()=>router(`/updateproduct/${pro._id}`)}>Update</button>
                <button onClick={()=>deleteProduct(pro._id)}>Delete</button>
 

            </div>
            
        ))}
       </div> : <div> loading.... </div> }
       </div>
    </div>
  )
}

export default YourProducts