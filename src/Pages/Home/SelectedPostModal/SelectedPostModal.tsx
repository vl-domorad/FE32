import React from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../../Components/Card";
import { CardSize } from "../../../Components/Card/Card";
import PostsSelectors from "../../../Redux/Selectors/postsSelectors";
import { setSelectedPostModalVisible } from "../../../Redux/Reducers/postsReducer";

const SelectedPostModal = () => {
  const selectedPost = useSelector(PostsSelectors.getSelectedPost);
  const isVisible = useSelector(PostsSelectors.getSelectedPostModalVisible);

  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(setSelectedPostModalVisible(false));
  };

  return (
    selectedPost && (
      <Modal isOpen={isVisible} onRequestClose={onClose}>
        <Card size={CardSize.Large} card={selectedPost} />
      </Modal>
    )
  );
};

export default SelectedPostModal;
