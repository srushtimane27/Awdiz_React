import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const FakeStoreSingleProduct = () => {
    const [productData, setProductData] = useState();
    const { id } = useParams()

    async function getSingleProductData(){
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            // console.log(response, 'response')
            setProductData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if(id){
            getSingleProductData();
        }
    },[id])

  return (
    <div>
        <img style={{height: "200px", width: "200px"}} src={productData?.image} alt='image'/>
        <h1> {productData?.title}</h1>
    </div>
  )
}

export default FakeStoreSingleProduct