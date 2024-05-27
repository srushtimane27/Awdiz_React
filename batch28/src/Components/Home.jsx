import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext/AuthContextComponent';
import api from './AxiosConfig';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const router = useNavigate();

    const { state } = useContext(AuthContext);
    console.log(state, "state")

    // const { awdiz } = props;
    // console.log(awdiz, "awdiz")

    const [allProducts, setAllProducts] = useState([]);
    console.log(allProducts, "allProducts")

    useEffect(()=>{
      async function getProducts(){
          try {
            const response = await api.get("/api/v1/product/get-all-products")
            if(response?.data?.success){
              setAllProducts(response.data.products)
            }
          } catch (error) {
            console.log(error)
          }

        }
        getProducts();
    },[])

    async function addToCart(productId){
        console.log(state, "state?.user?._id")
        if(state?.user?._id === undefined){
            alert("Please first login to add product into cart")
           router("/login")
        }
        try {
            const response = await api.post('/api/v1/user/add-to-cart', {
                userId: state?.user?._id, 
                productId: productId,
            });
            if(response.data.success){
                alert.success(response.data.message)
            }
        } catch (error) {
            console.log(error)
        }

    }
    
    return (
        <div>
             <h1>Home Page - {state?.user?.name}</h1>
             <h1>AllProducts</h1>

        {allProducts.length? 
        <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-around' }}>
        {allProducts.map((productObj) => (
            <div style={{ width: "18%", border: "2px solid black", height: "300px" }}>
            <h1>{productObj.name}</h1>
            <p>Category : {productObj.category}</p>
            <p>Prics :{productObj.price}/-</p>
            <p>Quantity : {productObj.quantity}</p>
            <p>Tags : {productObj.tags}</p>
            <button onClick={()=>addToCart(productObj?._id)}>Add to cart</button>
            <button>Add to wishlist</button>
            </div>
        ))}
    </div> : <div>Loading...</div>}
        </div>
        
    )
}
export default Home; 