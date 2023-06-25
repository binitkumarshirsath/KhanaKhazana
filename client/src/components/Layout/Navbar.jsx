import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" style={{ height: "65px" }}>
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Khana Khazana</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/signup" className="nav-link text-decoration-none text-white me-2">Sign up</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link text-decoration-none text-white">Log in</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
