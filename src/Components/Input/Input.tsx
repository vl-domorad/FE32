import React, { ChangeEvent, forwardRef } from "react";

import styles from "./Input.module.css";
import classNames from "classnames";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  title?: string;
  error?: string;
  onDefaultClick?: () => void;
  className?: string;
  containerClassName?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    value,
    onChange,
    placeholder,
    disabled,
    title,
    error,
    onDefaultClick,
    className,
    containerClassName,
  } = props;
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={containerClassName}>
      {title && <div className={styles.title}>{title}</div>}
      <input
        value={value}
        onChange={onChangeInput}
        placeholder={placeholder}
        disabled={disabled}
        onClick={onDefaultClick}
        ref={ref}
        className={classNames(className, styles.input)}
      />
      {error && <div className={styles.textError}>{error}</div>}
    </div>
  );
});

export default Input;

// input.on('change', (event) => {event.target.value})
