import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../../Components/Header";
import styles from "./PagesWrapper.module.css";
import { PathNames } from "../Router/Router";
import Home from "../Home";

const PagesWrapper = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      <Header />
      {pathname === PathNames.Home ? <Home /> : <Outlet />}
      {/*<Footer />*/}
    </div>
  );
};

export default PagesWrapper;
