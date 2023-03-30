import React from "react";

const PizzaCart = ({ food, handleBook }) => {
  // console.log(food);
  return (
    <div className="card  bg-slate-50 shadow-xl">
      <figure className="px-4 pt-4">
        <img
          src={food.strMealThumb}
          alt="Shoes"
          className="rounded-full w-36 h-36"
        />
      </figure>
      <div className="card-body items-start justify-end">
        <h2 className="card-title text-orange-500">{food.strMeal}</h2>
        <div className="card-actions w-full">
          <button
            onClick={(e) => handleBook(food.idMeal)}
            className="btn btn-primary w-full rounded-full bg-orange-500 hover:bg-orange-600 border-none duration-300 transition-all"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCart;
