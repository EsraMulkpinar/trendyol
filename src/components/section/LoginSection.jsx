import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const LoginSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="flex space-x-8">
      <div className="text-sm ">
        <button
          onClick={toggleMenu}
          className="group space-x-1 flex items-center cursor-grabbing "
        >
          <AiOutlineUser className="group-hover:fill-primaryColor" />
          <div className="group-hover:text-primaryColor">Hesabım</div>
        </button>
        {isMenuOpen && (
          <div className="absolute top-16 -ml-24 my-2 bg-white rounded border p-4 z-20">
            <ul className="list-none">
              <Link to="/login">
                <li className="cursor-pointer">
                  <button className=" w-36 h-10 rounded-md bg-primaryColor text-white">
                    Giriş Yap
                  </button>
                </li>
              </Link>
              <Link to="/signin">
                <li>
                  <button className="w-36 h-10 rounded-md border hover:text-primaryColor border-borderColor">
                    Üye Ol
                  </button>
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
      <a className="flex items-center space-x-1 group cursor-grabbing">
        <MdFavoriteBorder className="group-hover:fill-primaryColor" />
        <div className="text-sm group-hover:text-primaryColor">Favorilerim</div>
      </a>
      <a className="flex items-center space-x-1 group cursor-grabbing">
        <SlBasket className="group-hover:fill-primaryColor" />
        <div className="text-sm group-hover:text-primaryColor">Sepetim</div>
      </a>
    </div>
  );
};

export default LoginSection;
