import React from "react";
import heroImg from "../../assets/hero.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup, faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className=""
    >
      <div className="container  px-8 mx-auto text-[#FAFAFA]">
        <div className="w-4/12 space-y-8 flex flex-col h-[calc(100vh-6rem)] justify-center">
          <h1 className="text-3xl font-bold font-cursive">
            Delivery of delicious and juicy pizza in 30 minutes
          </h1>
          <p className="font-quicksand">
            it is important for us to please you with what you love and create
            the atmosphere of our pizzeria together with you
          </p>
          <button className="w-3/4 btn  text-center bg-orange-400 hover:bg-orange-600 transition-all duration-500 rounded-full text-[#FAFAFA] font-bold">
            to top
          </button>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border border-white rounded-lg text-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon>
              </div>
              <div className="">
                <p className="text-orange-500"> 2000+</p>
                <p className="text-lg"> customer</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 border border-white rounded-lg text-lg flex items-center justify-center">
                <FontAwesomeIcon icon={faPizzaSlice}></FontAwesomeIcon>
              </div>
              <div className="">
                <p className="text-orange-500"> 1500+</p>
                <p className="text-lg"> Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
