import React, { useEffect, useState } from "react";
import PizzaCart from "./PizzaCart/PizzaCart";

const PizzaContainer = ({ foods,handleBook }) => {
  // console.log(foods);
  return (
    <div className=" bg-slate-300">
      <div className="container mx-auto text-slate-900 px-8 py-8">
        <h1 className="text-center font-cursive font-bold text-4xl">
          {" "}
          Choose a Pizza
        </h1>
        <p className="font-quicksand text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta neque
          asperiores quae, totam sint similique quas unde a illum odio modi
          labore corporis? Aperiam error, ut rerum nobis doloremque mollitia!
        </p>
      </div>
      <div className="container mx-auto text-slate-900 px-8 py-8 grid grid-cols-4 gap-4">
        {foods.map((food) => (
          <PizzaCart handleBook={handleBook} key={food.idMeal} food={food} />
        ))}
      </div>
    </div>
  );
};

export default PizzaContainer;
