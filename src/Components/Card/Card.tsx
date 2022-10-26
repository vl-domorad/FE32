import React, { FC } from "react";

import { CardType } from "../../Constants/@types";
import {
  BookmarkIcon,
  DislikeIcon,
  LikeIcon,
  SettingsIcon,
} from "../../Assets";
//@ts-ignore
import styles from "./Card.module.css";
import classNames from "classnames";

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

  const isLarge = size === CardSize.Large;
  const isMedium = size === CardSize.Medium;
  const isSmall = size === CardSize.Small;

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
          <div className={styles.iconButton}>
            <LikeIcon />
          </div>
          <div className={styles.iconButton}>
            <DislikeIcon />
          </div>
        </div>
        <div className={styles.iconsContainer}>
          <div className={styles.iconButton}>
            <BookmarkIcon />
          </div>
          <div className={styles.iconButton}>
            <SettingsIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
