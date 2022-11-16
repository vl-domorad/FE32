import React, { FC } from "react";

import { CardsListType } from "../../Constants/@types";
import Card from "../Card";
import { CardSize } from "../Card/Card";
//@ts-ignore
import styles from "./CardsList.module.css";

type CardsListProps = {
  cardsList: CardsListType;
};

const CardsList: FC<CardsListProps> = ({ cardsList }) => {
  return cardsList && cardsList.length > 0 ? (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <Card card={cardsList[0]} size={CardSize.Large} />
        <div className={styles.mediumContainer}>
          {cardsList.map((card, index) => {
            if (index > 0 && index < 5) {
              return <Card key={index} card={card} size={CardSize.Medium} />;
            }
          })}
        </div>
      </div>
      <div className={styles.rightSide}>
        {cardsList.map((card, index) => {
          if (index > 5) {
            return <Card key={index} card={card} size={CardSize.Small} />;
          }
        })}
      </div>
    </div>
  ) : null;
};

export default CardsList;
