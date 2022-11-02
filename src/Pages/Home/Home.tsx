import React from "react";

import CardsList from "../../Components/CardsList";
import styles from "./Home.module.css";

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
const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>{"Blog"}</div>
      {/*<TabsList /> TODO - вставить компонент табин*/}
      <CardsList cardsList={MOCK_CARDS_LIST} />
    </div>
  );
};

export default Home;
