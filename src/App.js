import React, { useState } from "react";
import "./App.css";
import ChoceMarcCar from "./Components/ChoceMarcCar/ChoceMarcCar";
import ArrCars from "./db/arrCars.json";
import InputRun from "./Components/InputRun/InputRun";

function App() {
  const [car, setCar] = useState({});
  const [mileageBloc, setMileageBloc] = useState(false);
  const [choceMarcCarBloc, setChoceMarcCarBloc] = useState(true);

  const getCarMarc = (marc) => {
    setCar(marc);
    setMileageBloc(true);
    setChoceMarcCarBloc(false);
  };
  // const carTotalAll = () => {};

  return (
    <>
      {choceMarcCarBloc && (
        <ChoceMarcCar arrCars={ArrCars} getCarMarc={getCarMarc} />
      )}
      {mileageBloc && <InputRun car={car} />}
    </>
  );
}

export default App;
