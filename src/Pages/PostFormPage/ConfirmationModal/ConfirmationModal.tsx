import React, { FC } from "react";

import Modal from "../../../Components/Modal";
import Button, { ButtonTypes } from "../../../Components/Button";
import styles from "./ConfirmationModal.module.css";

type ConfirmationModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

const ConfirmationModal: FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  return (
    <Modal isOpen={isOpen}>
      <div>
        <div className={styles.title}>
          {"Are you sure you want to delete post?"}
        </div>
        <div className={styles.buttons}>
          <Button
            type={ButtonTypes.Secondary}
            title={"Cancel"}
            onClick={onClose}
          />
          <Button
            type={ButtonTypes.Error}
            title={"Delete"}
            onClick={onSubmit}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
