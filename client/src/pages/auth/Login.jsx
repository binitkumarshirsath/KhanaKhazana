import React from "react";
import Layout from "../../components/Layout/Layout";

export default function Login() {
  return (
    <>
      <Layout>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-md-7 intro-section">
              
              <div className="intro-content-wrapper">
                <h1 className="intro-title mt-">Welcome to website !</h1>
                <p className="intro-text mt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
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
                      type="password"
                      name="password"
                      id="password"
                      className="form-control border border-dark border-1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <input
                      name="login"
                      id="login"
                      className="btn login-btn"
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
