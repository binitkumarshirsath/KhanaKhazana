import React from "react";
import { useCart } from "../ContextReducer/CotextReducer";
import Layout from "../Layout/Layout";
import { v4 as uuidv4 } from 'uuid';
import "./Cart.css";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function Cart() {
  const { cartState, dispatch } = useCart();
  const navigate = useNavigate();

  async function handleClick(e) {
    e.preventDefault();
    const email = localStorage.getItem('email');
    const data = {
      email : email,
      data : cartState,
      date : new Date().toDateString()
    }

    try {
      const response = await axios.post('/api/orderData',data);
      if(response.status === 200){
        dispatch({type : "DROP"})
      }
    } catch (error) {
      console.log(error);
    }
    
    navigate("/");
  }

  const totalPrice = cartState.reduce((accumulator, cartItem) => {
    const itemPrice = cartItem.item.price;
    const quantity = cartItem.quantity;
    return accumulator + itemPrice * quantity;
  }, 0);

  return (
    <Layout>
      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-center row">
          <div className="col-md-8">
            <div className="p-2">
              <h4>Shopping cart</h4>
            </div>
            {cartState.map((cartItem, i) => {
              
              return <CartItem key={uuidv4()} id = {i} items={cartItem} />;
            })}

            <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded">
              <h4 className="m-3">Total Price : $ {totalPrice}</h4>
              <button
                className="btn btn-warning btn-block btn-lg ml-2 pay-button"
                type="button"
                onClick={handleClick}
              >
                Proceed to Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
