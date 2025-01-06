import React, { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";

export const metadata = {
  title: "All meals",
  description: "Browse meals and check out their recipes",
};

const Meals = async () => {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delcious meals prepared{" "}
          <span className={classes.highlight}>by you</span>
          <p>
            Choose your favorite recipe and cook it yourself. It is easy and
            fun.
          </p>
          <p className={classes.cta}>
            <Link href={"/meals/share"}>Share your Faorite Recipe</Link>
          </p>
        </h1>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Featching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
