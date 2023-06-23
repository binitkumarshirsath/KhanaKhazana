import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className=" my-5">
      <footer
        className="text-center text-black"
        style={{ backgroundColor: "#F9E0BB" }}
      >
        <div className="container">
          <section className="mt-5">
            <div className="row text-center d-flex justify-content-center pt-5">
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/" className="text-black">
                    About us
                  </Link>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/" className="text-black">
                    Products
                  </Link>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/" className="text-black">
                    Awards
                  </Link>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/" className="text-black">
                    Help
                  </Link>
                </h6>
              </div>

              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/" className="text-black">
                    Contact
                  </Link>
                </h6>
              </div>
            </div>
          </section>

          <hr className="my-5" />
          <section className="mb-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p>
                  Khana Khazana is a renowned food delivery website that offers
                  a delightful culinary experience right at your doorstep. With
                  a wide range of delectable dishes from various cuisines, Khana
                  Khazana caters to all your taste preferences. Whether you
                  crave traditional Indian delicacies, flavorsome Chinese
                  delights, mouthwatering Italian pasta, or sizzling Mexican
                  treats, Khana Khazana has got you covered.
                </p>
              </div>
            </div>
          </section>


        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright Khana Khazana
        </div>
      </footer>
    </div>
  );
}
