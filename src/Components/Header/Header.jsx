import React from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartShopping,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";

const routs = ["Menu", "Stack", "Delivery", "Contact", "Review"];

const Header = ({setSearchText}) => {
  return (
    <div className=" bg-[#0C0B0A] sticky top-0 left-0 z-50">
      <div className="container px-8 mx-auto  py-2 flex items-center justify-between ">
        <div className="flex items-center justify-start space-x-6">
          <img src={logo} alt="" className="w-24" />
          <div className="flex items-center justify-between space-x-4">
            {routs.map((rout, index) => (
              <a
                key={index++}
                href="#"
                className="text-[#FAFAFA] font-cursive text-xl"
              >
                {rout}
              </a>
            ))}
          </div>
        </div>
        <div className="border rounded-full border-orange-400 py-2 px-4">
          <input onChange={(e)=>setSearchText(e.target.value)} type="search" placeholder="search by first latter" name="" id="" className="bg-transparent focus:outline-none"/>
             <button type="button"> <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon></button>
        </div>
        <div className="flex items-center justify-start space-x-4">
          <div className="relative">
            <button
              type="button"
              className="text-[#FAFAFA] font-cursive w-12 h-12 flex items-center justify-center border border-orange-400 rounded-full"
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </button> 
            <div className="badge bg-orange-500 text-white absolute -top-3 -right-4 ">+99</div>
          </div>

          <a href="#" className="text-[#FAFAFA] font-cursive ">
            <span className="mr-2 text-orange-500 text-xl">
              <FontAwesomeIcon icon={faPhoneSquareAlt} />
            </span>
            <span>+8801999678190</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
