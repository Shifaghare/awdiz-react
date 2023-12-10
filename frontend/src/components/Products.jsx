import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import api from '../helpers/AxiosConfig';
import { useNavigate } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa';

const Products = () => {
    const [products, setProducts] = useState([]);
    const router = useNavigate();

    useEffect(() => {
        // toast.success("Page rendered on browser..")
        async function getProducts() {
            try {
                // const { data } = await axios.get('https://fakestoreapi.com/products');
                const { data } = await api.get('product/getallproducts');

                // console.log(data, "data here")
                if(data.success){
                    setProducts(data.products)

                }
                
            } catch (error) {
                toast.error(error.message)
            }
        }
        getProducts()
    }, [])
    return   ( 
    <div >
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

    {products?.length ? 
    <div style={{ justifyContent: 'space-around', paddingBottom: '50px' }} >
        <h1 style={{ marginTop: "10px",marginBottom:'80px' }}>All Products</h1>
        <div style={{ display: "flex", flexWrap: 'wrap' }}>
            {products.map((pro) => (
                <div style={{justifyContent:'space-evenly'}}>
                    <div style={{justifyContent:'space-evenly'}}>

                        <div style={{ width: "220px", height: '270px',justifyContent:'space-evenly' }}>
                            <img style={{ width: '100%', height: '100%', objectFit: '100%' }} src={pro.image} alt="" /></div>
                        <div >{pro.name}</div>
                        <div >{pro.price}$</div>
                        <div><input type="button" value="view" onClick={() => router(`/singleproduct/${pro._id}`)} style={{ width: '100px', height: '19px', margin: '20px ' }} /></div>
                    </div>
                </div>
            ))}
        </div>
    </div> : <div style={{ display: "flex", alignItems: "center", fontSize: "25px" }}>Loading <div style={{ marginLeft: "20px" }} class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
    </div></div>}

</div>
)
}

       

export default Products