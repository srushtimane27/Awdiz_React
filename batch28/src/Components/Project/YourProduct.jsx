import React, { useContext, useEffect, useState } from 'react'
import api from '../AxiosConfig';
import { AuthContext } from '../AuthContext/AuthContextComponent';

const YourProduct = () => {
    const {state} = useContext(AuthContext);
    const [allProducts, setAllProducts] = useState([]);

    useEffect(()=>{
      async function getProducts(){
          try {
            const response = await api.post("/api/v1/product/get-products-by-seller",{userId: state?.user?._id})
            if(response?.data?.success){
              setAllProducts(response.data.products)
            }
          } catch (error) {
            console.log(error)
          }

        }

        getProducts();
    },[state])
    
  return (
    <div>
        <h1>Your Added Products</h1>

{allProducts.length? 
<div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-around' }}>
{allProducts.map((productObj) => (
    <div style={{ width: "18%", border: "2px solid black", height: "250px" }}>
    <h1>{productObj.name}</h1>
    <p>Category : {productObj.category}</p>
    <p>Prics :{productObj.price}/-</p>
    <p>Quantity : {productObj.quantity}</p>
    <p>Tags : {productObj.tags}</p>
    </div>
))}
</div> : <div>Loading...</div>}
</div>
  )
}

export default YourProduct