import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CardItem.css";
import { useCart } from "../../ContextReducer/CotextReducer";


export default function CardItem({ item , id }) {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(item.price);
  const { cartState, dispatch } = useCart();
  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
    const newPrice = item.price * newQuantity;
    setPrice(newPrice);
  };

  const handleAddToCart = async () => {
    try {
      if(!localStorage.getItem('email')){
        return navigate('/login');
      }
      await dispatch({ type: "ADD_TO_CART", payload:{ id , item , quantity} });
      alert('Added to cart');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="card my-3 zoom-effect"
      style={{ maxWidth: "18rem", marginRight: "20px" }}
    >
      <img
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
        className="card-img-top"
        src={item.image ? item.image : "img"}
        alt="Card cap"
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="form-group">
            <label htmlFor="quantitySelect">Quantity:</label>
            <select
              className="form-control"
              id="quantitySelect"
              value={quantity}
              onChange={handleQuantityChange}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <button className="btn btn-success" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
        <p className="mb-0">Price: $ {price}</p>
      </div>
    </div>
  );
}
