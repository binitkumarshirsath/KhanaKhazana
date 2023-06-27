import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import f1 from "../../asset/f1.png";
import f2 from "../../asset/f2.png";
import f3 from "../../asset/f3.png";
import axios from "axios";
import Card from "./Card/Card";

export default function Menu() {
//store data from backend
    const [menuItems, setMenuItems] = useState();
//used for searching .include
  const [searchTerm, setSearchTerm] = useState("");
//get data from backend
  async function getDataFromBackend() {
    const foodDB = await axios.post("/api/foodDB");
    setMenuItems(foodDB.data[0]);
  }
//call getdatafrombackend only once
  useEffect(() => {
    getDataFromBackend();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterItems = (items) => {
    if (searchTerm === "") {
      return items;
    }

    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <>
      <Layout>
      <div id="carouselExampleFade" className="carousel slide carousel-fade m-2 ">
      <div className="carousel-inner" style={{maxHeight:"550px"}}>
        <div
          className="carousel-caption mb-5"
          style={{ zIndex: "2", alignContent: "center" }}
        >
          <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button
            className="btn btn-outline-success text-white bg-success"
            type="submit"
          >
            Search
          </button>
        </form>
        </div>
        <div className="carousel-item active">
          <img
            src={f2}
            className="d-block w-100"
            style={{
              filter: "brightness(45%)",
            }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src={f1}
            className="d-block w-100"
            style={{
              filter: "brightness(45%)",
            }}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src={f3}
            className="d-block w-100"
            style={{
              filter: "brightness(45%)",
            }}
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
        {/* Obj entries returns array of objects with key and value  */}
        {menuItems
          ? Object.entries(menuItems).map(([heading, items]) => {
              if (heading !== "_id") {
                const filteredItems = filterItems(items);
                if (filteredItems.length > 0) {
                  return (
                    <Card
                      key={heading}
                      heading={heading}
                      items={filteredItems}
                    />
                  );
                }
              }
              return null;
            })
          : "Loading..."}
      </Layout>
    </>
  );
}
