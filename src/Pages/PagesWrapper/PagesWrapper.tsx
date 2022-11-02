import React from "react";
import { Outlet } from "react-router";

import Header from "../../Components/Header";
import styles from "./PagesWrapper.module.css";

const PagesWrapper = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
      {/*<Footer />*/}
    </div>
  );
};

export default PagesWrapper;
