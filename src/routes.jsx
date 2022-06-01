import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { toggleSidebar, toggleProfileBar } from "./store/features/layout";
import { useWindowSize } from "./utils/hooks";

const Home = React.lazy(() => import("./pages/Home"));
const Wallet = React.lazy(() => import("./pages/Wallet"));
const Quick = React.lazy(() => import("./pages/QuickBuy"));
const History = React.lazy(() => import("./pages/History"));
const Docs = React.lazy(() => import("./pages/Documents"));
const Referral = React.lazy(() => import("./pages/Referral"));
const Authenticator = React.lazy(() => import("./pages/2fa"));
const Profile = React.lazy(() => import("./pages/Profile"));

const Routee = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector((state) => state.layout.darkTheme);
  const [screenWidth] = useWindowSize();

  useEffect(() => {
    const rootEle = document.getElementById("root");
    if (rootEle) {
      if (isDarkTheme && rootEle.classList.contains("light")) {
        rootEle.classList.remove("light");
      }

      if (!isDarkTheme && !rootEle.classList.contains("light")) {
        rootEle.classList.add("light");
      }
    }
  }, [isDarkTheme]);

  useEffect(() => {
    if (window.screen.availWidth > 1200) {
      dispatch(toggleSidebar(true));
      dispatch(toggleProfileBar(true));
    } else {
      dispatch(toggleSidebar(false));
      dispatch(toggleProfileBar(false));
    }
  }, [screenWidth]);

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
      <Route
        path="/docs"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Docs />
          </Suspense>
        }
        exact
      />
      <Route
        path="/referral"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Referral />
          </Suspense>
        }
        exact
      />
      <Route
        path="/2fa"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Authenticator />
          </Suspense>
        }
        exact
      />
      <Route
        path="/profile"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <Profile />
          </Suspense>
        }
        exact
      />
    </Routes>
  );
};

export default Routee;
