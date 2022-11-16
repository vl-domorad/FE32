import React, { FC } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { CardType, LikeStatus } from "../../Constants/@types";
import {
  BookmarkIcon,
  DislikeIcon,
  LikeIcon,
  SettingsIcon,
} from "../../Assets";
import styles from "./Card.module.css";
import {
  setLikeStatus,
  setSelectedPost,
} from "../../Redux/Reducers/postsReducer";
import PostsSelectors from "../../Redux/Selectors/postsSelectors";

export enum CardSize {
  Large = "large",
  Medium = "medium",
  Small = "small",
}

type CardProps = {
  card: CardType;
  size: CardSize;
};

const Card: FC<CardProps> = ({ card, size }) => {
  const { title, text, image, date } = card;

  const dispatch = useDispatch();

  const likedPosts = useSelector(PostsSelectors.getLikedPosts);
  const dislikedPosts = useSelector(PostsSelectors.getDislikedPosts);
  const isLiked = likedPosts.findIndex((post) => post.id === card.id) > -1;
  const isDisliked =
    dislikedPosts.findIndex((post) => post.id === card.id) > -1;

  const isLarge = size === CardSize.Large;
  const isMedium = size === CardSize.Medium;
  const isSmall = size === CardSize.Small;

  const onSettingClick = () => {
    dispatch(setSelectedPost(card));
  };

  const onStatusClick = (likeStatus: LikeStatus) => () => {
    dispatch(setLikeStatus({ card, likeStatus }));
  };

  return (
    <div
      className={classNames(styles.container, {
        [styles.mediumContainer]: isMedium,
        [styles.smallContainer]: isSmall,
      })}
    >
      <div
        className={classNames(styles.bodyContainer, {
          [styles.mediumBodyContainer]: isMedium,
          [styles.smallBodyContainer]: isSmall,
        })}
      >
        <div className={styles.infoContainer}>
          <div className={styles.headerContainer}>
            <div className={styles.date}>{date}</div>
            <div
              className={classNames(styles.title, {
                [styles.smallTitle]: !isLarge,
              })}
            >
              {title}
            </div>
          </div>
          {isLarge && <div className={styles.description}>{text}</div>}
        </div>
        <img
          src={image}
          alt={""}
          className={classNames(styles.image, {
            [styles.mediumImage]: isMedium,
            [styles.smallImage]: isSmall,
          })}
        />
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.iconsContainer}>
          <div
            className={styles.iconButton}
            onClick={onStatusClick(LikeStatus.Like)}
          >
            <LikeIcon /> {isLiked && " 1"}
          </div>
          <div
            className={styles.iconButton}
            onClick={onStatusClick(LikeStatus.Dislike)}
          >
            <DislikeIcon /> {isDisliked && " 1"}
          </div>
        </div>
        <div className={styles.iconsContainer}>
          <div className={styles.iconButton}>
            <BookmarkIcon />
          </div>
          <div className={styles.iconButton} onClick={onSettingClick}>
            <SettingsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
