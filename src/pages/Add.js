import React, { useState } from "react";

import { PrimaryButton } from "../styled-components/Buttons";

const Add = () => {
  const [image, setImage] = useState(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="screen-layout__screen">
      <div className="add__form-input">
        <form>
          <div className="add__img-preview_container">
            <label htmlFor="image">
              <input
                type="file"
                onChange={onImageChange}
                name="image"
                id="image"
                accept="image/*"
              />
              {image ? (
                <img src={image} className="add__uploaded-img" />
              ) : (
                <img src="/assets/upload_placeholder.png" alt="Image" />
              )}
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
