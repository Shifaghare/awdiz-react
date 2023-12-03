import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext' 
import toast from 'react-hot-toast' 
import { useNavigate } from 'react-router-dom'
import api from '../../helpers/AxiosConfig'
import './YourProducts.css'

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
        
        <h1>All Products</h1>
       <div >
       {yourProducts?.length ? <div class='product-container'>
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