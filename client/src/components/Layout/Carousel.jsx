import React from "react";
import f1 from "../../asset/f1.png";
import f2 from "../../asset/f2.png";
import f3 from "../../asset/f3.png";
export default function Carousel() {
  return (
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
  );
}
