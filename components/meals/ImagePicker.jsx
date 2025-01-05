"use client";
import React, { useRef, useState } from "react";
import classes from "./imagePicker.module.css";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const refImagePickerInput = useRef();
  const [pickerImage, setPickerImage] = useState();

  const handleImagePick = () => {
    refImagePickerInput.current.click();
  };

  const handleImagePickChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickerImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickerImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickerImage && <p>No image picked yet</p>}
          {pickerImage && (
            <Image src={pickerImage} fill alt="Image picked by user" />
          )}
        </div>
        <input
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          className={classes.input}
          ref={refImagePickerInput}
          onChange={handleImagePickChange}
          required
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
