import React, { FC } from "react";

//@ts-ignore
import styles from "./UserName.module.css";

type UserNameProps = {
  username: string;
};

const UserName: FC<UserNameProps> = ({ username }) => {
  return (
    <div className={styles.container}>
      <div className={styles.letter}>{username[0]}</div>
      {username}
    </div>
  );
};

export default UserName;
