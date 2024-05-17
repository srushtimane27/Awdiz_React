import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext/AuthContextComponent';
import api from './AxiosConfig';

const Home = () => {

    const { state } = useContext(AuthContext);
    console.log(state, "state")

    // const { awdiz } = props;
    // console.log(awdiz, "awdiz")

    const [allProducts, setAllProducts] = useState([]);

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
    
    return (
        <div>
             <h1>Home Page - {state?.user?.name}</h1>
             <h1>AllProducts</h1>

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
export default Home; 