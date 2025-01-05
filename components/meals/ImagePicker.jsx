"use client";
import React, { useRef } from "react";
import classes from "./imagePicker.module.css";

const ImagePicker = ({ label, name }) => {
  const refImagePickerInput = useRef();
  const handleImagePick = () => {
    refImagePickerInput.current.click();
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          className={classes.input}
          ref={refImagePickerInput}
        />
        <button
          type="button"
          className={classes.button}
          onClick={handleImagePick}
        >
          Choose Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
