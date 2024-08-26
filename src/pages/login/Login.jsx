import React, { useContext } from "react";
import img from "../../../src/assets/images/login/login.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire("You have logged in!");
        console.log("successful", user);
      })
      .catch((error) => Swal.fire("Something error occured " + error));
  };
  return (
    <div className="hero bg-white  min-h-screen">
      <div className="hero-content flex-col lg:flex-row space-y-4">
        <div className="text-center lg:text-left text-black">
          <div className="text-center w-full px-6">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="card bg-[#e8e8e8] text-black w-full max-w-sm shrink-0 shadow-2xl">
          <div className=" px-4 pt-4 font-bold text-2xl w-full text-center">
            <h3>Login</h3>
          </div>
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
