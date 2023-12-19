import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import './../../Styles/Allproducts.css'

const AllProducts = () => {

    const [fake, setFake] = useState([]);
    console.log(fake);



    async function getData() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            console.log(response.data, "response.data")
            setFake(response.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        toast.success("Component rendered on browser...")
        getData();
    }, [])


    return (
        <div>
            <h1 className='title'>Fake Store API</h1>
            {fake.map(values => (
                
                <div className='container'>
                    <div className='box'>
                        <h3>{values.title}</h3>
                        <p>{values.description}</p>
                        <img className='img' src={values.image} alt="" />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AllProducts