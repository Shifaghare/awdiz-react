import axios from "axios"
import { useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext"
import api from "../../helpers/AxiosConfig"

function SingleProduct() {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const router = useNavigate();
    const { state } = useContext(AuthContext);

    const addToCart = async (id) => {
        if (state.user.id && id) {
            try {
                const response = await api.post("/user/cart", { userId: state.user.id, productId: id })
                if (response.data.success) {
                    toast.success(response.data.message)
                }
            } catch (error) {
                toast.error(error.message);
            }
        } else {
            toast.error("Please login to add product to cart.")
        }
    }

    useEffect(() => {
        async function getProductDetails(){
            try{
                const { data } = await api.get(`/product/getsingleproduct?id=${id}`);
                if(data.success){
                    setProduct(data.product);
                }
            }catch(error){
                toast.error(error.response.data.message);
            }
            
        }
        if(id){
            getProductDetails();
        }
    },[id]);

    function backToProducts(){
        router('/products');
    }

    return (
        <div className='product-container'>
        <div className='product-image-div black-border'>
            <img src={product.image}/>
        </div>
        <div className='product-info-div black-border'>
            <h2>{product.name}</h2>
            {/* <h4 className='product-rating'>Rating ({product.rating.count}) : <span>{product.rating.rate}</span></h4> */}
            {/* <h4 className='product-rating'>Rating ({productRatingCount}) : <span>{productRating}</span></h4> */}
            <br/>
            <div>
                <h2>${product.price}</h2>
                <button className='add-to-cart-btn' onClick={() => {addToCart(id)}}>Add to cart</button>
            </div>
            <br/>
            <h4>{product.category}</h4>
            <button className='back-button' onClick={backToProducts}>Back to products</button>
        </div>
    </div>
  )
}
    


export default SingleProduct