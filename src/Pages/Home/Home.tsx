import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardsList from "../../Components/CardsList";
import SelectedPostModal from "./SelectedPostModal";
import TabsList from "../../Components/TabsList";
import PostsSelectors from "../../Redux/Selectors/postsSelectors";
import { Tabs } from "../../Constants/@types";
import styles from "./Home.module.css";
import AuthSelectors from "../../Redux/Selectors/authSelectors";
import Loader from "../../Components/Loader";
import { getPosts } from "../../Redux/Reducers/postsReducer";

const Home = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(Tabs.All);
  const onTabClick = (tab: Tabs) => {
    setActiveTab(tab);
  };

  const likedPosts = useSelector(PostsSelectors.getLikedPosts);
  const savedPosts = useSelector(PostsSelectors.getSavedPosts);
  const isLoading = useSelector(PostsSelectors.getPostsLoading);
  const postsList = useSelector(PostsSelectors.getPostsList);

  const isLoggedIn = useSelector(AuthSelectors.getLoggedIn);

  const cardsArray = () => {
    if (activeTab === Tabs.Popular) {
      return likedPosts;
    } else if (activeTab === Tabs.Favourites) {
      return savedPosts;
    } else if (activeTab === Tabs.MyPosts) {
      return [];
    } else {
      return postsList;
    }
  };

  useEffect(() => {
    dispatch(getPosts({}));
  }, []);

  const TABS_NAMES = useMemo(
    () => [
      { name: "All", key: Tabs.All },
      ...(isLoggedIn
        ? [
            { name: "My Posts", key: Tabs.MyPosts },
            { name: "My Favourites", key: Tabs.Favourites },
          ]
        : []),
      { name: "Popular", key: Tabs.Popular },
    ],
    [isLoggedIn]
  );
  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>{"Blog"}</div>
      {!isLoading ? (
        <>
          <TabsList
            activeTab={activeTab}
            onSelectTab={onTabClick}
            tabsList={TABS_NAMES}
          />
          <CardsList cardsList={cardsArray()} />
          <SelectedPostModal />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
