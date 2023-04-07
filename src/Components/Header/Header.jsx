import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCartShopping,
  faPhoneSquareAlt,
  faHamburger,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const routs = ["Menu", "Stack", "Delivery", "Contact", "Review"];

const Header = ({ setSearchText }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className=" bg-[#0C0B0A] sticky top-0 left-0 z-50">
      <div className="container px-8 mx-auto  py-1 flex items-center justify-between ">
        {/* left logo and nav link on desktop mode */}
        <div className="flex items-center justify-start space-x-6">
          <Link to='/'><img src={logo} alt="" className="w-24" /></Link>
          {/* hide nav link on medium device */}
          <div className="hidden lg:flex items-center justify-between space-x-4">
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

        {/* middle search button hide on mobile device */}
        <div className="border rounded-full border-orange-400 py-2 px-4 hidden sm:block">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="search"
            placeholder="search by first latter"
            name=""
            id=""
            className="bg-transparent focus:outline-none"
          />
          <button type="button">
            {" "}
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </button>
        </div>

        <div className="flex items-center justify-start space-x-4">
          <div className="relative">
            <button
              type="button"
              className="text-[#FAFAFA] font-cursive w-12 h-12 flex items-center justify-center border border-orange-400 rounded-full"
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
            <div className="badge bg-orange-500 text-white absolute -top-3 -right-4 ">
              +99
            </div>
          </div>

          <a href="#" className="text-[#FAFAFA] font-cursive ">
            <span className="mr-2 text-orange-500 text-xl">
              <FontAwesomeIcon icon={faPhoneSquareAlt} />
            </span>
            <span>+8801999678190</span>
          </a>
          <button
            onClick={() => setToggle((prev) => !prev)}
            type="button"
            className="lg:hidden"
          >
            <FontAwesomeIcon icon={faHamburger} />
          </button>
        </div>
      </div>
      {toggle && (
        <div className="absolute bg-slate-800 w-10/12 left-1/2 -translate-x-1/2 top-20 py-8 rounded-b-lg space-y-2">
          {routs.map((rout, index) => (
            <a
              key={index++}
              href="#"
              className="text-[#FAFAFA] font-cursive text-xl block hover:bg-slate-700 px-6 py-2"
            >
              {rout}
            </a>
          ))}
          <div className=" sm:hidden px-8">
            <div className="border rounded-full border-orange-400 py-2 px-4 flex items-center gap-3">
              <input
                onChange={(e) => setSearchText(e.target.value)}
                type="search"
                placeholder="search by first latter"
                name=""
                id=""
                className="bg-transparent focus:outline-none flex-1"
              />
              <button type="button">
                {" "}
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
