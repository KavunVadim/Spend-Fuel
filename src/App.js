import React, { useState, useEffect, lazy , Suspense} from "react";
import { Routes, Route} from "react-router-dom";

import "./App.css";
import ArrCars from "./db/arrCars.json";
import storage from "./helpers/storage";

const LazyChoceMarcCar = lazy(()=> import("./Components/ChoceMarcCar/ChoceMarcCar"))
const LazyInputRun = lazy(()=> import("./Components/InputRun/InputRun"))
const LazyTotalTable = lazy(()=> import("./Components/TotalTable/TotalTable"))

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
        <Route path="/" element={<Suspense fallback='...Loading'><LazyChoceMarcCar arrCars={ArrCars} getCarMarc={getCarMarc} /></Suspense>} />
        <Route path="inputRun" element={<Suspense fallback='...Loading'><LazyInputRun car={car} carTotalAll={carTotalAll} /></Suspense>} />
        <Route path="totalTable" element={<Suspense fallback='...Loading'><LazyTotalTable finishTotal={finishTotal} /></Suspense>} />
      </Routes>     
    </>
  );
}

export default App;
