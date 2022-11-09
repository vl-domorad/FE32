import React from "react";

import { MoonIcon, SunIcon } from "../../Assets";
//@ts-ignore
import styles from "./ThemeSwitcher.module.css";
import classNames from "classnames";
import { useThemeContext } from "../../Context/Theme";
import { Theme } from "../../Constants/@types";

const ThemeSwitcher = () => {
  const { theme, onChangeTheme } = useThemeContext();

  const onThemeClick = (value: Theme)  => () => onChangeTheme(value) //пример использования каррирования

  return (
    <div className={styles.container}>
      <div
        className={classNames(styles.iconButton, {
          [styles.activeButton]: theme === Theme.Light,
        })}
        onClick={onThemeClick(Theme.Light)}
      >
        <SunIcon />
      </div>
      <div
        className={classNames(styles.iconButton, {
          [styles.activeButton]: theme === Theme.Dark,
        })}
        onClick={onThemeClick(Theme.Dark)}
      >
        <MoonIcon />
      </div>
    </div>
  );
};

export default ThemeSwitcher;
