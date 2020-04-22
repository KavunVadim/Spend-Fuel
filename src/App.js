import React from "react";
import "./App.css";
import ChoceMarcCar from "./Components/ChoceMarcCar/ChoceMarcCar";
import ArrCars from "./db/arrCars.json";
import InputRun from "./Components/InputRun/InputRun";

function App() {
  return (
    <>
      <ChoceMarcCar arrCars={ArrCars} />

      {/* <InputRun /> */}
    </>
  );
}

export default App;
