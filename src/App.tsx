import React, { useState } from "react";
import classNames from "classnames";

import Button, { ButtonTypes } from "./Components/Button";
import { CloseIcon, BurgerClosedIcon } from "./Assets/icons";
import UserName from "./Components/UserName";
//@ts-ignore
import styles from "./App.module.css";
import Input from "./Components/Input";

enum Tabs {
  All = "all",
  Favourites = "myFavourites",
  Popular = "popular",
}

const TABS_NAMES = [
  { name: "All", key: Tabs.All },
  { name: "My Favourites", key: Tabs.Favourites },
  { name: "Popular", key: Tabs.Popular },
];

const App = () => {
  const [isOpened, setOpened] = useState(false); // 1 click => isOpened === true; 2 click => isOpened = false

  const [activeTab, setActiveTab] = useState(Tabs.All);

  // const [userData, setUserData] = useState({ name: "", surname: "" });
  //
  // const onChangeUserData = (value: string, field: string) => {
  //   setUserData((prevValue) => ({ ...prevValue, [field]: value }));
  // };
  //
  // onChangeUserData("Andropov", "surname");
  // onChangeUserData("Vasya", "name");
  // console.log(userData.name + "  " + userData.surname);

  const onTabClick = (tab: Tabs) => {
    setActiveTab(tab);
  };

  const [inputValue, setInputValue] = useState("");

  const onChange = (value: string) => {
    setInputValue(value);
  };

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
      <Button
        title={!isOpened ? <BurgerClosedIcon /> : <CloseIcon />}
        type={ButtonTypes.Primary}
        className={styles.burgerButton}
        onClick={() => setOpened(!isOpened)} // 1. !false => true 2. !true => false
      />
      <UserName username={"Artem_Malkin"} />
      <div>
        {TABS_NAMES.map((tab) => {
          return (
            <div
              key={tab.key}
              onClick={() => onTabClick(tab.key)}
              className={classNames({
                [styles.activeTab]: tab.key === activeTab,
              })}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      <Input
        value={inputValue}
        onChange={onChange}
        placeholder={"Вот он"}
        // disabled={false}
        // title={"Какое-то название инпута"}
        // error={"Error text"}
      />
      <div>{inputValue}</div>
    </div>
  );
};

export default App;
