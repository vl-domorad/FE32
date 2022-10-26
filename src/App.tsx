import React from "react";

//@ts-ignore
import styles from "./App.module.css";
// import SignIn from "./Pages/SignIn";
// import SignUp from "./Pages/SignUp";
import Card from "./Components/Card";
import { CardSize } from "./Components/Card/Card";

const MOCK_CARD = {
  id: 0,
  image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
  text: "Тут будет какое-то описание поста",
  date: "2021-12-12",
  lesson_num: 0,
  title: "А вот тут будет заголовок",
  author: 0,
};

const MOCK_CARDS_LIST = [
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
  MOCK_CARD,
];

const App = () => {
  return (
    <div className={styles.container}>
      <Card card={MOCK_CARD} size={CardSize.Small} />
    </div>
  );
};

export default App;
