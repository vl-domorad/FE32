import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";

import CardsList from "../../Components/CardsList";
import SelectedPostModal from "./SelectedPostModal";
import TabsList from "../../Components/TabsList";
import PostsSelectors from "../../Redux/Selectors/postsSelectors";
import { Tabs } from "../../Constants/@types";
import styles from "./Home.module.css";

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
  const [activeTab, setActiveTab] = useState(Tabs.All);
  const onTabClick = (tab: Tabs) => {
    setActiveTab(tab);
  };

  const likedPosts = useSelector(PostsSelectors.getLikedPosts);
  const savedPosts = useSelector(PostsSelectors.getSavedPosts);

  const cardsArray = () => {
    if (activeTab === Tabs.Popular) {
      return likedPosts;
    } else if (activeTab === Tabs.Favourites) {
      return savedPosts;
    } else {
      return MOCK_CARDS_LIST;
    }
  };

  useEffect(() => {
    //ToDo: вместо того экшена, который засовывает посты мокнутые вызвать тот, который их получает из сервера
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>{"Blog"}</div>
      <TabsList activeTab={activeTab} onSelectTab={onTabClick} />
      <CardsList cardsList={cardsArray()} />
      <SelectedPostModal />
    </div>
  );
};

export default Home;
