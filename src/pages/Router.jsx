import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';

const LazyChoiceMarcCar = lazy(() => import('./ChoiceMarcCar/ChoiceMarcCar'));
const LazyInputRun = lazy(() => import('./InputRun/InputRun'));
const LazyTotalTable = lazy(() => import('./TotalTable/TotalTable'));

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <LazyChoiceMarcCar />
          </Suspense>
        }
      />
      <Route
        path="inputRun"
        element={
          <Suspense fallback={<Loader />}>
            <LazyInputRun />
          </Suspense>
        }
      />
      <Route
        path="totalTable"
        element={
          <Suspense fallback={<Loader />}>
            <LazyTotalTable />
          </Suspense>
        }
      />
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}

export default Router;
