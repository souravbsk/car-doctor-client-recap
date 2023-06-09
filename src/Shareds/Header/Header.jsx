import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logoBrand from "../../assets/logo.svg"
import { MagnifyingGlassIcon,ShoppingBagIcon } from '@heroicons/react/24/solid'
import { AuthContext } from "../../Providers/AuthProvider";

const Header = () => {

  const {logOut,user} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {

    })
    .catch( err => {
      console.log(err.message);
    })
  }

  const navLink = <>
  <li><Link to="/" className="font-semibold">Home</Link></li>
  <li><Link to="/all-service" className="font-semibold">All Service</Link></li>
  <li><Link to="/add-service" className="font-semibold">Add Services</Link></li>
  <li><Link to="/bookings" className="font-semibold">Bookings</Link></li>
  <li><Link to="/contact" className="font-semibold">Contact</Link></li>
  <li>
    {
      user ? <button className="btn text-white bg-red-600" onClick={handleLogOut}>LogOut</button> :<Link to="/login" className="font-semibold">Login</Link>
    }
  </li>
  </>;

  return (
    <div className="my-8">
      <div className="navbar container bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
                {navLink}
            </ul>
          </div>
          <Link>
          <img className="max-w-full w-28 h-20" src={logoBrand} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-3">
        <button><ShoppingBagIcon className="w-6 h-6"></ShoppingBagIcon></button>
        <button><MagnifyingGlassIcon className="w-6 h-6"></MagnifyingGlassIcon></button>
          <Link className="btn text-red-600 hover:bg-red-600 hover:text-white hover:border-red-600 border-red-600 bg-transparent">Appointment</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
