import React from "react";

//@ts-ignore
import styles from "./App.module.css";
// import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

const App = () => {
  return (
    <div className={styles.container}>
        <SignUp />
    </div>
  );
};

export default App;
