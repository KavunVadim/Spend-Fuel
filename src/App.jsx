import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import storage from './helpers/storage';
import Navigation from './Components/Navigation/Navigation';
// import { useDispatch } from 'react-redux';

// import { changeCarMarc } from './store/sliceChoiceMarcCar/sliceChoiceMarcCar';

const LazyChoiceMarcCar = lazy(() =>
  import('./pages/ChoiceMarcCar/ChoiceMarcCar')
);
const LazyInputRun = lazy(() => import('./pages/InputRun/InputRun'));
const LazyTotalTable = lazy(() => import('./pages/TotalTable/TotalTable'));

function App() {
  // const dispatch = useDispatch();
  const [finishTotal, setFinishTotal] = useState({
    age: '',
    oldMileage: '',
    newMileage: '',
    minusMilagecustom: '',
    baseRate: '',
    operationInKiev: '',
    operationalAllowance: '',
  });

  const carTotalAll = (totalCar) => {
    if (totalCar !== finishTotal) setFinishTotal({ ...totalCar });
  };

  useEffect(() => {
    const car = storage.get('car');
    const totalCar = storage.get('totalCar');
    if (!car) return storage.save('car', {});
    if (!totalCar) return storage.save('totalCar', {});
    // setCar(car);
    // dispatch(changeCarMarc(car));
    setFinishTotal(totalCar);
  }, []);

  // useEffect(() => {
  //   storage.save('car', { ...car });
  //   storage.save('totalCar', { ...finishTotal });
  // }, [car, finishTotal]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback="...Loading">
              <LazyChoiceMarcCar />
            </Suspense>
          }
        />
        <Route
          path="inputRun"
          element={
            <Suspense fallback="...Loading">
              <LazyInputRun carTotalAll={carTotalAll} />
            </Suspense>
          }
        />
        <Route
          path="totalTable"
          element={
            <Suspense fallback="...Loading">
              <LazyTotalTable finishTotal={finishTotal} />
            </Suspense>
          }
        />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
      <Navigation />
    </>
  );
}

export default App;
