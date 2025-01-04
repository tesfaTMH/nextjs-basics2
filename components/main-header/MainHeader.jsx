import Image from "next/image";
import Link from "next/link";
import React from "react";
import imgLogo from "@/assets/logo.png";
import { foodLinks } from "@/data/data";
import classes from "./mainHeader.module.css";
import MainHeaderBackground from "./MainHeaderBackground";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image src={imgLogo} alt="logo" priority /> NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            {foodLinks.map(({ urlName, urlLink }) => (
              <li key={urlName}>
                <Link href={urlLink}>{urlName}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
