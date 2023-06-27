import React from "react";
import Layout from "../../components/Layout/Layout";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Perform validation
    const validationErrors = {};

    if (user.name.trim() === "") {
      validationErrors.name = "Name is required";
    }

    if (user.email.trim() === "") {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(user.email)) {
      validationErrors.email = "Invalid email format";
    }

    if (user.password.trim() === "") {
      validationErrors.password = "Password is required";
    }

    if (user.password.length < 8) {
      validationErrors.password = "Minimum length should be 8";
    }

    if (user.confirm_password.trim() === "") {
      validationErrors.confirm_password = "Confirm Password is required";
    } else if (user.password !== user.confirm_password) {
      validationErrors.confirm_password = "Passwords do not match";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post("/api/register", user);
        console.log("Data sent " + response);

        navigate("/login");
        setErrors({});
      } catch (error) {
        console.log(error);
      }

      setUser({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
      });
    }
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <>
      <Layout>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-md-7 intro-section">
              <div className="intro-content-wrapper">
                <h1 className="intro-title mt-">Welcome to website !</h1>
                <p className="intro-text mt-5">
                  Welcome to Khana Khazana, your ultimate destination for
                  culinary delights! Indulge your taste buds with a diverse
                  range of flavors, spices, and aromas from around the world.
                  Our website is a treasure trove of delicious recipes, cooking
                  tips, and culinary inspiration.
                </p>
                <a href="#!" className="btn btn-read-more">
                  Read more
                </a>
              </div>
            </div>
            <div className="col-sm-6 col-md-5 form-section">
              <div className="login-wrapper">
                <h2 className="login-title">Sign up</h2>
                <form onSubmit={handleSubmit}>
                  <div className="form-group mb-3">
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      onChange={handleChange}
                      value={user.name}
                      type="text"
                      name="name"
                      id="name"
                      className="form-control border border-dark border-1"
                      placeholder="Name"
                      required
                    />
                    {errors.name && (
                      <p className="error-message">{errors.name}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      onChange={handleChange}
                      value={user.email}
                      type="email"
                      name="email"
                      id="email"
                      className="form-control border border-dark"
                      placeholder="Email"
                      required
                    />
                    {errors.email && (
                      <p className="error-message">{errors.email}</p>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      onChange={handleChange}
                      value={user.password}
                      type="password"
                      name="password"
                      id="password"
                      className="form-control border border-dark border-1"
                      placeholder="Password"
                      required
                    />
                    {errors.password && (
                      <p className="error-message">{errors.password}</p>
                    )}
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="confirm_password" className="sr-only">
                      Confirm password
                    </label>
                    <input
                      onChange={handleChange}
                      value={user.confirm_password}
                      type="password"
                      name="confirm_password"
                      id="confirm_password"
                      className="form-control border border-dark border-1"
                      placeholder="Confirm Password"
                      required
                    />
                    {errors.confirm_password && (
                      <p className="error-message">{errors.confirm_password}</p>
                    )}
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <input
                      name="login"
                      id="login"
                      className="btn login-btn"
                      type="submit"
                      value="Register"
                    />
                  </div>
                </form>
                <p className="login-wrapper-footer-text">
                  Need an account?{" "}
                  <a href="#!" className="text-reset">
                    Signup here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
