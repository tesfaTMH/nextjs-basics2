"use client";
import React, { useActionState } from "react";
import classes from "./page.module.css";
import ImagePicker from "@/components/meals/ImagePicker";
import { shareMeal } from "@/lib/actions";
import SubmitFormButton from "@/components/meals/SubmitFormButton";

const ShareMealPage = () => {
  {
    /*const shareMeal = async (formData) => {
    "use server";

    const meal = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      image: formData.get("image"),
      creator: formData.get("name"),
      creator_email: formData.get("email"),
    };

    console.log(meal);
  };*/
  }

  const [state, formAction] = useActionState(shareMeal, { message: null });

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>

      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>

            <p>
              <label htmlFor="email">Your email</label>
              <input type="text" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            />
          </p>

          <ImagePicker label={"Pick Image"} name={"image"} />
          {state.message && (
            <p className="text-red-500 text-sm">{state.message} </p>
          )}
          <p className={classes.actions}>
            <SubmitFormButton />
          </p>
        </form>
      </main>
    </>
  );
};

export default ShareMealPage;
