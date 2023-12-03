import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import api from '../helpers/AxiosConfig';
// import './Dynamic.css'
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const router = useNavigate();

    useEffect(() => {
        toast.success("Page rendered on browser..")
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

    {products?.length ? 
    <div style={{ justifyContent: 'space-around', paddingBottom: '50px' }} >
        <h1 style={{ marginTop: "70px" }}>All Products</h1>
        <div style={{ display: "flex", flexWrap: 'wrap' }}>
            {products.map((pro) => (
                <div>
                    <div>

                        <div style={{ width: "300px", height: '300px' }}><img style={{ width: '100%', height: '100%', objectFit: '100%' }} src={pro.image} alt="" /></div>
                        <div >{pro.name}</div>
                        <div >{pro.price}$</div>
                        <div><input type="button" value="view" onClick={() => router(`/getsingleproduct/${pro._id}`)} style={{ width: '100px', height: '19px', margin: '20px ' }} /></div>
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