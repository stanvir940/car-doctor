import React from "react";
import img from "../../../src/assets/images/login/login.svg";
import { Link } from "react-router-dom";
const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div className="hero bg-white  min-h-screen">
      <div className="hero-content flex-col lg:flex-row space-y-4">
        <div className="text-center lg:text-left text-black">
          <div className="text-center w-1/2">
            <img src={img} alt="" />
          </div>
          <h1 className="text-5xl font-bold text-orange-600">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-[#e8e8e8] text-black w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body text-black">
            <div className="form-control text-red-700">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="input input-bordered text-black bg-gray-300"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                name="password"
                className="input input-bordered bg-gray-300"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-black"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Login" className="btn btn-primary" />
            </div>
          </form>
          <div className="px-8 pb-4  w-full text-center">
            <p>
              Don't have any account?{" "}
              <Link to="/signup" className="font-bold text-orange-600">
                Sign Up
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
