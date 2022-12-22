import React, { FC } from "react";

import ReactModal, { Props } from "react-modal";
import styles from "./Modal.module.css";
import { CloseIcon } from "../../Assets";

const CUSTOM_STYLES = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "23px 76px 53px",
  },
  overlay: {
    backgroundColor: "rgba(38, 34, 47, 0.5)",
  },
};

const Modal: FC<Props> = (props) => {
  return (
    <ReactModal style={{ ...CUSTOM_STYLES, ...props.style }} {...props}>
      <div className={styles.icon} onClick={props.onRequestClose}>
        <CloseIcon />
      </div>

      {props.children}
    </ReactModal>
  );
};

export default Modal;
