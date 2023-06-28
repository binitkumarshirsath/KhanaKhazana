import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUser((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
  
    // Perform email and password validation
    if (!user.email || !user.password) {
      console.log('i ran');
      alert("Please enter both email and password.");
      return;
    }
  
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    try {
      const response = await axios.post("/api/login", user);
      if (response.data.success === false) {
        alert(response.data.msg);
        return navigate('/');
      }
      const authToken = response.data.token;
      localStorage.setItem("email", user.email);
      localStorage.setItem("authToken", authToken);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  

  return (
    <>
      <Layout>
        <div className="container-fluid">
          <div className="row">
          <div className="col-sm-6 col-md-7 intro-section ">
              <div className="intro-content-wrapper text-center">
                <h1 className="intro-title mt-">Welcome to website!</h1>
                <p className="intro-text ">
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
                <h2 className="login-title">Log in</h2>
                <form action="#!">
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
                    />
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
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <input
                      onClick={handleSubmit}
                      name="login"
                      id="login"
                      className="btn login-btn btn-secondary"
                      type="button"
                      defaultValue="Login"
                    />
                    <a href="#!" className="forgot-password-link">
                      Password [tbi]
                    </a>
                  </div>
                </form>
                <p className="login-wrapper-footer-text">
                  Need an account?{" "}
                  <Link to={'/signup'}><button  className="text-reset" >Sign up</button></Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
