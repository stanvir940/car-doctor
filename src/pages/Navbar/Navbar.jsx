import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const nav = [{ to: "/", name: "home" }];
  return (
    <div className="navbar bg-white text-gray-800 h-24 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/"}>Home</Link>{" "}
            </li>
            <li>
              {user?.email ? (
                <>
                  {" "}
                  <button onClick={handleLogout}>Sign out</button>
                </>
              ) : (
                <Link to={"/login"}>Login</Link>
              )}
            </li>
            <li>
              {user?.email ? <Link to={"/bookings"}>My Bookings</Link> : ""}
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl h-20">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Home</Link>{" "}
          </li>
          <li>
            {user?.email ? (
              <>
                {" "}
                <button onClick={handleLogout}>Sign out</button>
              </>
            ) : (
              <Link to={"/login"}>Login</Link>
            )}
          </li>
          <li>
            {user?.email ? <Link to={"/bookings"}>My Bookings</Link> : ""}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline btn-accent">Appointment</a>
      </div>
    </div>
  );
};

export default Navbar;
