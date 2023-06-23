import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark" style={{ height: "65px" }}>
    <div className="container-fluid">
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
          <Link to="/" className="navbar-brand">Khana Khazana</Link>

          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link to="/signup" className="navbar-link text-decoration-none text-white me-2">Sign up</Link>

          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link to="/login" className="navbar-link text-decoration-none text-white ms-2 ">Log in</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}
