import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUploading, { ImageListType } from "react-images-uploading";
import classNames from "classnames";
import { useDispatch } from "react-redux";

import Input from "../../Components/Input";
import Button, { ButtonTypes } from "../../Components/Button";

import styles from "./PostFormPage.module.css";
import { addNewPost } from "../../Redux/Reducers/postsReducer";
import { PathNames } from "../Router/Router";

const PostFormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [lessonNumber, setLessonNumber] = useState("");
  const [text, setText] = useState("");
  const [images, setImages] = React.useState<ImageListType>([]);

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

  const onSave = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    formData.append("lesson_num", lessonNumber);
    formData.append("image", images[0].file as Blob);

    dispatch(
      addNewPost({ formData, callback: () => navigate(PathNames.Home) })
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.pageTitle}>{"Add Post"}</div>
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
          disabled
          type={ButtonTypes.Error}
          onClick={() => {}}
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
            title={"Add Post"}
          />
        </div>
      </div>
    </div>
  );
};

export default PostFormPage;
