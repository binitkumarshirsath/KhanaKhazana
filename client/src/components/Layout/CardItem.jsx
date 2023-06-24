import React from "react";
import './CardItem.css'
export default function CardItem({ filteredFood }) {
console.log(filteredFood.name);
  const handleQuantityChange = (event) => {
    // Handle quantity change event
  };

  const handleSizeChange = (event) => {
    // Handle size change event
  };


  return (
    <div className="card my-3 zoom-effect" style={{ maxWidth: "18rem", marginRight: "20px"  }}>
      <img
       style={{ width: "100%", height: "200px", objectFit: "cover" }}
        className="card-img-top"
        src={filteredFood.img}
        alt="Card cap"
      />
      <div className="card-body">
        <h5 className="card-title">{filteredFood.name}</h5>
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
              onChange={handleQuantityChange}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="sizeSelect">Size:</label>
            <select
              className="form-control"
              id="sizeSelect"
              onChange={handleSizeChange}
            >
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div>
            <p className="mb-0">Price: 10.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}
