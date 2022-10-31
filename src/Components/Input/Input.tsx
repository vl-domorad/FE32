import React, { FC, ChangeEvent, forwardRef } from "react";

//@ts-ignore
import styles from "Input.module.css";

type InputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  title?: string;
  error?: string;
  onDefaultClick?: () => void;
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
  } = props;
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      {title && <div>{title}</div>}
      <input
        ref={ref}
        value={value}
        onChange={onChangeInput}
        placeholder={placeholder}
        disabled={disabled}
        onClick={onDefaultClick}
      />
      {error && <div>{error}</div>}
    </div>
  );
});

export default Input;

// input.on('change', (event) => {event.target.value})
