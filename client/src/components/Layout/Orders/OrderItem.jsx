import React from 'react';
import { v4 as uuidv4 } from 'uuid';
const OrderItem = ({ orders }) => {
  return (
    <div className="container">
      <h1 className="text-center mb-5">My Orders</h1>
      {orders.map((order, index) => (
        <div key={uuidv4()} className="my-4">
          <h2 className="mb-4">Order Date: {order[0]}</h2>
          {order.slice(1).map((item) => (
            <div key={uuidv4()} className="card my-2">
              <div className="row g-0">
                <div className="col-md-4">
                  <img

                    src={item.item.image}
                    className="card-img"
                    alt=""
                    style={{ width: "60%", height: "auto", objectFit: "contain" }}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.item.name}</h5>
                    <p className="card-text mb-1">Quantity: {item.quantity}</p>
                    <p className="mb-0">Total Price: $ {item.item.price * item.quantity}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OrderItem;
