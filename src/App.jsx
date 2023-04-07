import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import PizzaContainer from "./Components/PizzaContainer/PizzaContainer";

function App() {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFood = async () => {
      const url = searchText
        ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        : "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

      const response = await fetch(url);
      const data = await response.json();
      setFoods(data.meals||[]);
    };

    fetchFood();
  }, [searchText]);

  const handleBook = (id)=>{
    console.log(id);
  }
  return (
    <>
      <Header setSearchText={setSearchText}></Header>
      <Hero></Hero>

      <PizzaContainer handleBook={handleBook} foods={foods}></PizzaContainer>
    </>
  );
}

export default App;
