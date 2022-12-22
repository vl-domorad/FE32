import React, { useEffect } from "react";

import { BookmarkIcon, DislikeIcon, LikeIcon } from "../../Assets";
import Button, { ButtonTypes } from "../../Components/Button";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PathNames } from "../Router/Router";
import postsSelectors from "../../Redux/Selectors/postsSelectors";
import { getSinglePost } from "../../Redux/Reducers/postsReducer";

import styles from "./ContentPage.module.css";
import AuthSelectors from "../../Redux/Selectors/authSelectors";

const ContentPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (id) {
      dispatch(getSinglePost(id));
    }
  }, []);

  const card = useSelector(postsSelectors.getSinglePost);
  const userId = useSelector(AuthSelectors.getUserId);

  const onEditPost = () => {
    navigate(`/content/${id}/edit`);
  };

  const navigateHome = () => {
    navigate(PathNames.Home);
  };

  return card ? (
    <div className={styles.container}>
      <div>
        <div className={styles.headerContainer}>
          <div className={styles.homeLink} onClick={navigateHome}>
            {"Home"}
          </div>
          <span>|</span>
          <div className={styles.post}>{"Post 14278"}</div>
        </div>

        <h1 className={styles.title} onClick={() => navigate(PathNames.Home)}>
          {card?.title}
        </h1>
      </div>

      <img src={card?.image} alt={"image"} className={styles.image} />

      <div className={styles.description}>{card?.text}</div>

      <div className={styles.buttonContainer}>
        <div className={styles.likeContainer}>
          {card.author === userId && (
            <Button
              title={"EditPost"}
              type={ButtonTypes.Primary}
              onClick={onEditPost}
            />
          )}
          <Button title={<LikeIcon />} type={ButtonTypes.Secondary} />
          <Button title={<DislikeIcon />} type={ButtonTypes.Secondary} />
        </div>

        <Button
          title={
            <div>
              <BookmarkIcon /> {"Add to favorites"}
            </div>
          }
          type={ButtonTypes.Secondary}
        />
      </div>
    </div>
  ) : null;
};

export default ContentPage;
