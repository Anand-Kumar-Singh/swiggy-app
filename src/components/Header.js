import React from "react";
import { ReactDOM } from "react-dom/client";
import logo from "../../images/food-logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <>
      <Link to="/">
        <img src={logo} alt="logo" className="h-16 rounded-full ml-2" />
      </Link>
    </>

  );
};

const Header = () => {
  const [isLogged, setIsLogged] = useState(true);
  const [isClicked, setIsClicked] = useState(true);

  const cartItems = useSelector(store => store.cart.items);

  console.log(cartItems);

  return (
    <>
      <nav className="flex justify-between bg-slate-600 p-2 shadow-lg static">
        <Title />

        <ul className="max-sm:hidden flex mt-5 text-white">
          <Link to="/">
            <li className="mx-2 sm:mx-5">Home</li>
          </Link>
          <Link to="/about">
            <li className="mx-2 sm:mx-5">About</li>
          </Link>
          <Link to="/contact">
            <li className="mx-2 sm:mx-5">Contact</li>
          </Link>
          <Link to="/cart">
            <li className="mx-2 sm:mx-5">Cart - {cartItems.length}</li>
          </Link>
          <div>
            {isLogged ? (
              <button
                className="mx-2 sm:mx-5 rounded-md text-green-600"
                onClick={() => setIsLogged(false)}
              >
                Login
              </button>
            ) : (
              <button
                className="mx-2 sm:mx-5 rounded-md text-red-600"
                onClick={() => setIsLogged(true)}
              >
                Logout
              </button>
            )}
          </div>
        </ul>
        <div
          className="sm:hidden mt-5 mr-5 cursor-pointer"
          onClick={() => {
            setIsClicked(!isClicked);
          }}
        >
          {isClicked && (
            <div>
              <div className="h-1 w-8 bg-white rounded-full mb-1"></div>
              <div className="h-1 w-8 bg-white rounded-full mb-1"></div>
              <div className="h-1 w-8 bg-white rounded-full"></div>
            </div>
          )}
          {!isClicked && (
            <div className="mr-8 m-2">
              <div className="h-1 w-8  bg-white absolute -rotate-45 rounded-full mb-1 "></div>
              {/* <div className="h-1 w-8 bg-white relative rounded-full mb-1"></div> */}
              <div className="h-1 w-8 bg-white absolute rotate-45 rounded-full "></div>
            </div>
          )}
        </div>
      </nav>
      {!isClicked && (
        <ul className="sm:hidden visible float-right bg-slate-600 text-white w-72 h-screen bg-opacity-90 transition-all absolute scroll ">
          <li className=" p-4 hover:bg-slate-900">Home</li>
          <li className=" p-4 hover:bg-slate-900">About</li>
          <li className=" p-4 hover:bg-slate-900">Contact</li>
        </ul>
      )}
    </>
  );
};

export default Header;
