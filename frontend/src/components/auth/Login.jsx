import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-component ">
      <div className="login-form rounded p-4 shadow shadow-lg">
        <h2 className="text-center">Login</h2>
        <h5 className="text-center mb-4">Login to your Account</h5>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember me
              </label>
            </div>
            <div>Reset Password ?</div>
          </div>
          <Link to={"/dashboard"}>
            <button type="submit" className="btn btn-primary w-100">
              Sign In
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
