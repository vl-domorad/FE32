import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../../Components/Header";
import styles from "./PagesWrapper.module.css";
import { PathNames } from "../Router/Router";
import Home from "../Home";
import { useThemeContext } from "../../Context/Theme";

const PagesWrapper = () => {
  const { pathname } = useLocation();
  const { theme } = useThemeContext();

  return (
    <div className={styles.container}>
      <Header />
      {pathname === PathNames.Home ? <Home /> : <Outlet />}
      {/*<Footer />*/}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
    </div>
  );
};

export default PagesWrapper;
