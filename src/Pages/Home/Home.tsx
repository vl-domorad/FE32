import React from "react";

import CardsList from "../../Components/CardsList";
import styles from "./Home.module.css";
import SelectedPostModal from "./SelectedPostModal";

const MOCK_CARDS_LIST = [
  {
    id: 0,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    text: "Тут будет какое-то описание поста",
    date: "2021-12-12",
    lesson_num: 0,
    title: "А вот тут будет заголовок",
    author: 0,
  },
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    text: "Тут еще описание поста",
    date: "2021-12-13",
    lesson_num: 0,
    title: "А вот тут ываыва будет заголовок",
    author: 0,
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    text: "Тут еще описывавыавыаание поста",
    date: "2021-12-13",
    lesson_num: 0,
    title: "А вот туыват будет заголовок",
    author: 0,
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    text: "Тут еще описаниываВЫАЦУАе поста",
    date: "2021-12-13",
    lesson_num: 0,
    title: "А вот тут будет зЫВАВЫАВЫАаголовок",
    author: 0,
  },
  {
    id: 4,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    text: "Тут еще описание пываваываываоста",
    date: "2021-12-13",
    lesson_num: 0,
    title: "А вот тываывавыаут будет заголовок",
    author: 0,
  },
  {
    id: 5,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    text: "Тут еще описаыавывавыние поста",
    date: "2021-12-13",
    lesson_num: 0,
    title: "А вот тут ываываываываыбудет заголовок",
    author: 0,
  },
  {
    id: 6,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    text: "Тут еще описанцукцукуцкфие поста",
    date: "2021-12-13",
    lesson_num: 0,
    title: "А вот тут будеычфычфыст заголовок",
    author: 0,
  },
  {
    id: 7,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    text: "Тут еще описанифысфысе поста",
    date: "2021-12-13",
    lesson_num: 0,
    title: "А вот тут будфысцкамфет заголовок",
    author: 0,
  },
  {
    id: 8,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    text: "Тут еще описфсываицфсфсание поста",
    date: "2021-12-13",
    lesson_num: 0,
    title: "А вот тут бсуцсукпйсудет заголовок",
    author: 0,
  },
  {
    id: 9,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    text: "Тут еще описфвй3кание поста",
    date: "2021-12-13",
    lesson_num: 0,
    title: "А вот тут бфцуфсудет заголовок",
    author: 0,
  },
  {
    id: 10,
    image:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
    text: "Тут еще описа1234ние поста",
    date: "2021-12-13",
    lesson_num: 0,
    title: "А вот тут б1234удет заголовок",
    author: 0,
  },
];

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>{"Blog"}</div>
      {/*<TabsList /> TODO - вставить компонент табин*/}
      <CardsList cardsList={MOCK_CARDS_LIST} />
      <SelectedPostModal />
    </div>
  );
};

export default Home;
