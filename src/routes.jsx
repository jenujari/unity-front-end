import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));
const Wallet = React.lazy(() => import("./pages/Wallet"));
const Quick = React.lazy(() => import("./pages/QuickBuy"));
const History = React.lazy(() => import("./pages/History"));

const Routee = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        }
        exact
      />
      <Route
        path="/wallet"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Wallet />
          </Suspense>
        }
        exact
      />
      <Route
        path="/history"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <History />
          </Suspense>
        }
        exact
      />
      <Route
        path="/quick"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Quick />
          </Suspense>
        }
        exact
      />
    </Routes>
  );
};

export default Routee;
