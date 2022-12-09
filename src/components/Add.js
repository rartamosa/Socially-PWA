import React, { useState } from "react";

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
        <div className="add__img-preview_container">
          <label for="image">
            <input
              type="file"
              onChange={onImageChange}
              name="image"
              id="image"
              accept="image/*"
            />
            {image ? (
              <img src={image} alt="Image" className="add__uploaded-img" />
            ) : (
              <img src="/assets/upload_placeholder.png" alt="Image" />
            )}
          </label>
        </div>
        <div className="add__button-container">
          <div className="add__button-border">
            <button className="add__button">Upload</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
