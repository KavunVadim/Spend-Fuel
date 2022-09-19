import React, { useState, useEffect } from "react";
import "./App.css";
import ChoceMarcCar from "./Components/ChoceMarcCar/ChoceMarcCar";
import ArrCars from "./db/arrCars.json";
import InputRun from "./Components/InputRun/InputRun";
import TotalTable from "./Components/TotalTable/TotalTable";
import { Routes, Route} from "react-router-dom";
import storage from "./helpers/storage";


function App() {
  const [car, setCar] = useState({});
  const [finishTotal, setFinishTotal] = useState({});  

  const getCarMarc = (marc) => {   
    setCar(marc);    
  };

  const carTotalAll = (totalCar) => {
    setFinishTotal({ ...totalCar });
    
  };

  useEffect(() => {
    const car = storage.get("car");
    if (!car) {
      storage.save("car", []);
      return;
    }
    setCar(car);
  }, []);

  useEffect(() => {
    storage.save("car", { ...car });
  }, [car]);

  return (
    <>
     <Routes>
        <Route path="/" element={ <ChoceMarcCar arrCars={ArrCars} getCarMarc={getCarMarc} />} />
        <Route path="inputRun" element={<InputRun car={car} carTotalAll={carTotalAll} />} />
        <Route path="inputRun/totalTable" element={<TotalTable finishTotal={finishTotal} />} />
      </Routes>     
    </>
  );
}

export default App;
