
import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import api from '../../helpers/AxiosConfig'
import { AuthContext } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa';

const AddProduct = () => {

    const router = useNavigate();

    const { state } = useContext(AuthContext)

    const [productData, setProductData] = useState({ name: "", price: "", image: "", category: "" })

    // console.log(productData, "productData")

    const handleChange = (event) => {
        // console.log(event.target.value)
        setProductData({ ...productData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (productData.name && productData.category && productData.image && productData.price > 0) {
            try {
                const { data } = await api.post("/product/addproduct", { name: productData.name, price: productData.price, image: productData.image, category: productData.category, id: state?.user?.id })
                // console.log(data, "response from  post request")
                if (data.success) {
                    router('/yourproducts')
                    toast.success(data.message)
                    setProductData({ name: "", price: "", image: "", category: "" })
                }
            } catch (error) {
                console.log(error)
                toast.error(error.response.data.message)
            }
        } else {
            toast.error("All fields are mandtory and price must be greater than 0.")
        }

    }

    useEffect(() => {

        if (state?.user && state?.user?.name === undefined) {
            router('/login')
            toast.error("Please login to access this page.")
        }
    }, [state])

    return (
        <div>
     
     <ul style={{ listStyleType: 'none', margin: '0px 1px 10px 1px', padding: 0, backgroundColor: '#333', overflow: 'hidden' }}>
      <li style={{ float: 'left' }}>                            
        <a href="/" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>
          Home
        </a>
      </li>
      <li style={{ float: 'left' }}>
        <a href="/yourproducts" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>
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
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit}>
                <label>Product Name</label><br />
                <input type='text' name="name" onChange={handleChange} value={productData.name} /><br />
                <label>Product Category</label><br />
                <input type='text' name="category" onChange={handleChange} value={productData.category} /><br />
                <label>Product Price</label><br />
                <input type='number' name='price' onChange={handleChange} value={productData.price} /><br />
                <label>Product Image</label><br />
                <input type='url' name='image' onChange={handleChange} value={productData.image} /><br />
                <input type='submit' />
            </form>
        </div >
    )
}

export default AddProduct