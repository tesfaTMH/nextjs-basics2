import React from "react";
import classes from "./page.module.css";
import { communityLinks } from "@/data/data";
import Image from "next/image";

const CommunityPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          One shared passion: <span className={classes.highlight}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={classes.main}>
        <h2>Community Perks</h2>

        <ul className={classes.perks}>
          {communityLinks.map(({ commnityIcon, commnityText, alt }, index) => (
            <li key={index}>
              <Image alt={alt} src={commnityIcon} />
              <p>{commnityText}</p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default CommunityPage;
