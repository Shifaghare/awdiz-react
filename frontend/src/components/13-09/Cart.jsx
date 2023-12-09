import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import api from '../../helpers/AxiosConfig'
import { AuthContext } from '../Context/AuthContext'
import { FaCartPlus } from 'react-icons/fa'

const Cart = () => {
    const { state } = useContext(AuthContext)
    const [cartProducts, setCartProducts] = useState([])
    // const [endPrice , setTotalPrice] = useState(0)
    console.log(cartProducts)
    // console.log(cartProducts)
    async function getCartProducts(id) {
        const response = await api.post('/user/getcart', { id })
        if (response.data.success) {
            setCartProducts(response.data.yourCart)

            // console.log(response.data.yourCart)
        }
    }
   

    async function deleteProduct(productId) {
        try {
            const response = await api.post('/user/deletecart', { productId, userId: state?.user?.id })
            if (response.data.success) {
                toast.success(response.data.message)
                setCartProducts(response.data.products)
                
            }
        } catch (error) {
            console.log(error)
        }
    }

    // const specificKey = "price"
    // let totalPrice = 0
    // cartProducts.forEach(obj => {
    //     let value = obj[specificKey]
    //     totalPrice = totalPrice + value
    //     console.log("total" + totalPrice)
    // })


    

    useEffect(() => {
        if (state?.user && state?.user?.id === undefined) {
            alert("id not found")
        } else {
            if (state?.user?.id) {
                // toast(state?.user?.id)
                getCartProducts(state?.user?.id)
                // totalPrice(cartProducts)
            }
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
            <h1 style={{marginTop:'50px'}}>Your cart Products</h1>

            {cartProducts?.length ? <div >
                <div style={{ display: "flex", margin: "20px" }}>
                    {cartProducts.map((pro) => (
                        <div style={{ margin: "20px", height: "450px", width: "300px", overflow: "hidden", boxShadow: "0px 0px 4px black" }}>
                            <div>
                                <img style={{ height: "300px", width: "300px" }} src={pro.image} alt="" />
                            </div>
                            <div>
                                <h3> {pro.name}</h3>
                                <h4> {pro.price}$ </h4>
                                <button onClick={()=>deleteProduct(pro._id)} className="button">delete</button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* {cartProducts?.length !== 0 ? <h2> total amount - {totalPrice} $ </h2> : <h2>add Products</h2>} */}
            </div> : <div style={{ display: "flex", alignItems: "center", fontSize: "25px" }}>Loading <div style={{ marginLeft: "20px" }} class="spinner-border text-danger" role="status">
                <span class="visually-hidden">Loading...</span>
            </div></div>}
        </div>
    )
}

export default Cart