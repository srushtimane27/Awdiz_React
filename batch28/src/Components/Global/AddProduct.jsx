import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContextComponent";
import AuthDirection from "../Redirections/AuthDirection";
import axios from "axios";
import api from "../AxiosConfig";
import SellerProtected from "../Redirections/SellerProtected";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    price: "",
    quantity: "",
    tags: "",
  });
  console.log(productData, "ProductData");
  const handleChange = (event) => {
    setProductData({ ...productData, [event.target.name]: event.target.value });
  };

  const { state } = useContext(AuthContext);
  console.log(state, "state");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await api.post("/api/v1/product/add-product", {
        productData,
        userId: state.user._id
      });
      if (response.data.success) {
        alert(response.data.message);
      }
    } catch (error) {
        alert(error.response.data.message)
    }
  };
  return (
    //<AuthDirection></AuthDirection>
    <SellerProtected>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label>Product Name:</label>
        <br />
        <input required name="name" onChange={handleChange} />
        <br />
        <label>Product Category:</label>
        <br />
        <input required name="category" onChange={handleChange} />
        <br />
        <label>Product Price:</label>
        <br />
        <input required name="price" onChange={handleChange} />
        <br />
        <label>Product Quantity:</label>
        <br />
        <input required name="quantity" onChange={handleChange} />
        <br />
        <label>Product Tags:</label>
        <br />
        <input required name="tags" onChange={handleChange} />
        <br />
        <input type="submit" />
        <br />
      </form>
    </SellerProtected>
  );
};

export default AddProduct;
