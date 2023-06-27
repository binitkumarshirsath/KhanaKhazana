import React from 'react';
import './Cart.css';
import { useCart } from '../ContextReducer/CotextReducer';


export default function CartItem({ items , id }) {
  const { cartState, dispatch } = useCart();
  const { item, quantity } = items;
  
  async function handleClick() {
    await dispatch({ type: 'REMOVE', payload: item , id  });
  }

  return (
    <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
      <div className="mr-1">
        <img className="rounded" src={item.image} width={70} alt="" />
      </div>
      <div className="d-flex flex-column align-items-center product-details">
        <span className="font-weight-bold">{item.name}</span>
      </div>
      <div className="d-flex flex-row align-items-center qty">
        <h5 className="text-grey mt-1 mr-1 ml-1">{quantity}</h5>
      </div>
      <div>
        <h5 className="text-grey">${item.price * quantity}</h5>
      </div>
      <div className="d-flex align-items-center" onClick={handleClick}>
        <i className="fa fa-trash mb-1 text-danger" />
      </div>
    </div>
  );
}
