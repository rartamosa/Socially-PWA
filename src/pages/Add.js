import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { postFeed } from "../reducers/feed";
import { PrimaryButton } from "../styled-components/Buttons";

const Add = () => {
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(postFeed(image, navigate));
  };

  return (
    <div className="screen-layout__screen">
      <div className="add__form-input">
        <form onSubmit={onFormSubmit}>
          <div className="add__img-preview_container">
            <label htmlFor="image">
              <input
                type="file"
                onChange={onImageChange}
                id="image"
                accept="image/*"
              />
              <img
                src={
                  image
                    ? URL.createObjectURL(image)
                    : "/assets/upload_placeholder.png"
                }
                alt="Preview"
                className={image ? "add__uploaded-img" : ""}
              />
            </label>
          </div>
          <div className="add__button-container">
            <PrimaryButton type="submit">
              <span>Upload</span>
            </PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
