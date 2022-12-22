import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImageUploading, { ImageListType } from "react-images-uploading";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import Input from "../../Components/Input";
import Button, { ButtonTypes } from "../../Components/Button";

import styles from "./PostFormPage.module.css";
import {
  addNewPost,
  deletePost,
  editPost,
  getSinglePost,
} from "../../Redux/Reducers/postsReducer";
import { PathNames } from "../Router/Router";
import postsSelectors from "../../Redux/Selectors/postsSelectors";
import AuthSelectors from "../../Redux/Selectors/authSelectors";
import ConfirmationModal from "./ConfirmationModal";

const PostFormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const card = useSelector(postsSelectors.getSinglePost);
  const userId = useSelector(AuthSelectors.getUserId);

  const [title, setTitle] = useState("");
  const [lessonNumber, setLessonNumber] = useState("");
  const [text, setText] = useState("");
  const [images, setImages] = useState<ImageListType>([]);
  const [isOpen, setOpen] = useState(false);

  const isEdit = !!id;

  const pageTitle = isEdit ? "Edit Post" : "Add Post";

  useEffect(() => {
    if (isEdit) {
      dispatch(getSinglePost(id));
    }
  }, [isEdit]);

  useEffect(() => {
    if (card && isEdit) {
      setTitle(card.title);
      setText(card.text);
      setLessonNumber(card.lesson_num.toString());
      setImages([{ data_url: card.image }]);
    }
  }, [card, isEdit]);

  const onCancel = () => {
    navigate("..");
  };

  const onChange = (imageList: any) => {
    setImages(imageList);
  };

  const isValid = useMemo(() => {
    return (
      title.length > 0 &&
      lessonNumber.length > 0 &&
      text.length > 0 &&
      images.length > 0
    );
  }, [title, lessonNumber, text, images]);

  const navigateToHome = () => navigate(PathNames.Home);

  const onSave = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    formData.append("lesson_num", lessonNumber);
    formData.append("image", images[0].file as Blob);

    if (isEdit && userId) {
      formData.append("author", userId.toString());
      dispatch(editPost({ formData, callback: navigateToHome, id }));
    } else {
      dispatch(addNewPost({ formData, callback: navigateToHome }));
    }
  };

  const handleModalVisibility = () => {
    setOpen(!isOpen);
  };

  const onDeletePost = () => {
    if (id) {
      dispatch(deletePost({ id, callback: navigateToHome }));
    }
    handleModalVisibility();
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>{pageTitle}</div>
      <div className={styles.formContainer}>
        <Input
          title={"Title"}
          value={title}
          onChange={setTitle}
          placeholder={"Add your title"}
          containerClassName={styles.inputContainer}
        />
        <Input
          title={"Lesson Number"}
          value={lessonNumber}
          placeholder={"Add your Lesson Number"}
          onChange={setLessonNumber}
          containerClassName={styles.inputContainer}
        />
        <Input
          title={"Text"}
          value={text}
          placeholder={"Add your text"}
          onChange={setText}
          containerClassName={styles.inputContainer}
        />
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={1}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className="upload__image-wrapper">
              {imageList.length < 1 ? (
                <div
                  onClick={onImageUpload}
                  className={classNames(styles.imageDragNDrop, {
                    [styles.dragging]: isDragging,
                  })}
                  {...dragProps}
                >
                  Click or Drop here
                </div>
              ) : (
                <>
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img
                        src={image["data_url"]}
                        alt=""
                        className={styles.image}
                      />
                      <div className={styles.imageButtonsContainer}>
                        <Button
                          type={ButtonTypes.Secondary}
                          title={"Update"}
                          onClick={() => onImageUpdate(index)}
                        />
                        <Button
                          type={ButtonTypes.Primary}
                          title={"Remove"}
                          onClick={() => onImageRemove(index)}
                        />
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          )}
        </ImageUploading>
      </div>
      <div className={styles.buttonsContainer}>
        <Button
          disabled={!isEdit}
          type={ButtonTypes.Error}
          onClick={handleModalVisibility}
          title={"Delete Post"}
        />
        <div className={styles.successButtons}>
          <Button
            type={ButtonTypes.Secondary}
            onClick={onCancel}
            title={"Cancel"}
          />
          <Button
            type={ButtonTypes.Primary}
            disabled={!isValid}
            onClick={onSave}
            title={isEdit ? "Save" : "Add"}
          />
        </div>
      </div>
      <ConfirmationModal
        isOpen={isOpen}
        onClose={handleModalVisibility}
        onSubmit={onDeletePost}
      />
    </div>
  );
};

export default PostFormPage;
