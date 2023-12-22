import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AllProducts = () => {

    const [products, setProducts] = useState([]);
    console.log(products, "products")

    const router = useNavigate();


    async function getData() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            // console.log(response.data, "response.data")
            setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    function Routing(id) {
        // toast(id) // 1,2,3,4,5
        router(`/single-product/${id}`); // /single-product/18
    }

    useEffect(() => {
        // toast.success("Component rendered on browser...")
        getData();
    }, [])

    return (
        <div>
            {products?.length ? <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {products.map((product) => (
                    <div onClick={() => Routing(product.id)} style={{ height: '500px', width: "23%", border: '2px solid black', marginBottom: '30px', cursor: 'pointer' }}>
                        <img style={{ height: "200px", margin: 'auto' }} src={product.image} />
                        <h1>{product.title}</h1>
                        <h3>${product.price}/-</h3>
                    </div>
                ))}
            </div> : <div>Loading..</div>}
        </div>
    )
}

export default AllProducts














































// import React, { useEffect, useState } from 'react'
// import toast from 'react-hot-toast'
// import axios from 'axios'
// import './../../Styles/Allproducts.css'

// const AllProducts = () => {

//     const [fake, setFake] = useState([]);
//     console.log(fake);



//     async function getData() {
//         try {
//             const response = await axios.get('https://fakestoreapi.com/products')
//             console.log(response.data, "response.data")
//             setFake(response.data);
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         toast.success("Component rendered on browser...")
//         getData();
//     }, [])


//     return (
//         <div>
//             <h1 className='title'>Fake Store API</h1>
//             {fake.map(values => (
                
//                 <div className='container'>
//                     <div className='box'>
//                         <h3>{values.title}</h3>
//                         <p>{values.description}</p>
//                         <img className='img' src={values.image} alt="" />
//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default AllProducts