import React from "react";
import "./App.css";
import ChoceMarcCar from "./Components/ChoceMarcCar/ChoceMarcCar";
import ArrCars from "./db/arrCars.json";

function App() {
  return (
    <>
      <ChoceMarcCar arrCars={ArrCars} />
    </>
  );
}

export default App;
