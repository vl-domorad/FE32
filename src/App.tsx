import React from "react";

//@ts-ignore
import styles from "./App.module.css";
import Button, { ButtonTypes } from "./Components/Button";

const App = () => {
  return (
    <div className={styles.container}>
      <Button
        title={"Primary"}
        type={ButtonTypes.Primary}
        onClick={() => alert("Primary")}
      />
      <Button
        title={"Secondary"}
        type={ButtonTypes.Secondary}
        onClick={() => alert("Secondary")}
      />
      <Button
        title={"Error"}
        type={ButtonTypes.Error}
        onClick={() => alert("Error")}
      />
    </div>
  );
};

export default App;
