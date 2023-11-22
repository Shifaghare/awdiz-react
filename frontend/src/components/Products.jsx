import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        toast.success("Page rendered on browser..")
        async function getProducts() {
            try {
                // const { data } = await axios.get('https://fakestoreapi.com/products');
                const { data } = await axios.get('http://localhost:8000/api/v1/product/getallproducts');

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
    return (
        <div>{products?.length ? <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
            {products.map((pro) => (
                <div style={{ border: "1px solid black", width: "20%", height: "400px", marginBottom: "10px" }}>
                    <img style={{ width: "70%", height: "200px" }} src={pro.image} alt=''/>
                    <h1>Name :{pro.name}</h1>
                    <h3>Price :{pro.price}</h3>
                    <button>Add to cart</button>
                </div>
            ))}
        </div> : <div>Loading...</div>}</div>
    )
}

export default Products