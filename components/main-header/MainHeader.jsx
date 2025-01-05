import Image from "next/image";
import React from "react";
import imgLogo from "@/assets/logo.png";
import { foodLinks } from "@/data/data";
import classes from "./mainHeader.module.css";
import MainHeaderBackground from "./MainHeaderBackground";
import NavLink from "./NavLink";
import Link from "next/link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image src={imgLogo} alt="logo" priority />
          <p>NextLevel Food</p>
        </Link>

        <nav className={classes.nav}>
          <ul>
            {foodLinks.map(({ urlName, urlLink }) => (
              <li key={urlName}>
                <NavLink href={urlLink}>{urlName}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
