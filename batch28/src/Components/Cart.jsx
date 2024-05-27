import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext/AuthContextComponent';
import api from './AxiosConfig';

const Cart = () => {
    const {state} = useContext(AuthContext);

    const [cartItems, setCartItems] = useState([]);
    console.log(cartItems, "cartItems");
    const [loadingCart, setLoadingCart] = useState(true);

    useEffect(() => {
        async function fetchCart(){
            if(state?.user?._id){
                try {
                    const response = await api.post('/api/v1/user/show-cart', {
                        userId: state?.user?._id,
                    });
                    if(response.data.success){
                        setCartItems(response.data.cart);
                    }
                } catch (error) {
                    console.log(error);
                } finally{
                    setLoadingCart(false);
                }
            }
        }
        fetchCart();
    }, [state?.user?._id]);

    async function removeFromCart(productId){
        try {
            const response = await api.post('/api/v1/user/remove-from-cart', {
                userId: state.user._id,
                productId: productId
            });
            if(response.data.success){
                setCartItems(response.data.cart);
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <h2>Cart Items</h2>
    {loadingCart? (
        <div>Loading Cart...</div>
    ) : cartItems.length ? (
        <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-around' }}>
            {cartItems.map((productObj) => (
                <div key={productObj._id} style={{ width: "18%", border: "2px solid black", height: "300px" }}>
                    <h1>{productObj.name}</h1>
                    <p>Category: {productObj.category}</p>
                    <p>Price: {productObj.price}/-</p>
                    <p>Quantity: {productObj.quantity}</p>
                    <p>Tags: {productObj.tags}</p>
                    <button onClick={()=>removeFromCart(productObj._id)}>Remove Item From Cart</button>
                </div>
   ))}
   </div>
    ) : (
        <div>No item in cart</div>
    )}
    </div>
  )
}

export default Cart