import React from "react";

import Button, { ButtonTypes } from "./Components/Button";
import UserName from "./Components/UserName";
//@ts-ignore
import styles from "./App.module.css";

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
      <UserName username={'Artem_Malkin'} />
    </div>
  );
};

export default App;
