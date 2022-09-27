import React, { useState, useEffect } from "react";
import { Routes, Route} from "react-router-dom";

import "./App.css";
import ChoceMarcCar from "./Components/ChoceMarcCar/ChoceMarcCar";
import ArrCars from "./db/arrCars.json";
import InputRun from "./Components/InputRun/InputRun";
import TotalTable from "./Components/TotalTable/TotalTable";
import storage from "./helpers/storage";


function App() {
  const [car, setCar] = useState({
    ageCar: [],
    baseRate: "",
    id: "",
    name: "",
    operationInKiev: "",
    operationalAllowance: ""
  });
  const [finishTotal, setFinishTotal] = useState({
    "age": "",
    "oldMileage": "",
    "newMileage": "",
    "minusMilagecustom": "",
    "baseRate": "",
    "operationInKiev": "",
    "operationalAllowance": ""
});    

  const getCarMarc = (marc) => {   
    if (marc !== car) setCar(marc);        
  };

  const carTotalAll = (totalCar) => {
    if(totalCar !== finishTotal) setFinishTotal({ ...totalCar });   
    
  };

  useEffect(() => {
    const car = storage.get("car");
    const totalCar = storage.get("totalCar")
    if (!car) return storage.save("car", []);  
    if (!totalCar) return storage.save("totalCar", []);  
    setCar(car);
    setFinishTotal(totalCar);    
  }, []);

  useEffect(() => {
    storage.save("car", { ...car });
    storage.save("totalCar", { ...finishTotal });
  }, [car,finishTotal]);

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
