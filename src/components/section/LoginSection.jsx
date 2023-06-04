import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../reducers/authReducer";

const LoginSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
    toggleMenu()
  }
  const token = localStorage.getItem("token")

  return (
    <div className="flex space-x-8">
      <div className="text-sm ">
        <button
          onClick={toggleMenu}
          className="group space-x-1 flex items-center cursor-grabbing "
        >
          <AiOutlineUser className="group-hover:fill-primaryColor" />

          <div className="group-hover:text-primaryColor">
            {token ? "Hesabım" : "Giriş Yap"}
          </div>
        </button>
       {isMenuOpen?<div className="">
       { token ? (
          <div className="absolute top-16 -ml-24 my-2 bg-white rounded border p-4 z-20">
            <ul className="list-none">
              <Link to="/login" >
                <li className="cursor-pointer">
                  <button onClick={handleLogout} className=" w-36 h-10 rounded-md bg-primaryColor text-white">
                    Çıkış Yap
                  </button>
                </li>
              </Link>
            </ul>
          </div>
        ) : (
          <div className="absolute top-16 -ml-24 my-2 bg-white rounded border p-4 z-20 ">
            <ul className="list-none">
              <Link to="/login">
                <li className="cursor-pointer">
                  <button  className=" w-36 h-10 rounded-md bg-primaryColor text-white">
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
       </div>:""}
      </div>
    
    </div>
  );
};

export default LoginSection;
