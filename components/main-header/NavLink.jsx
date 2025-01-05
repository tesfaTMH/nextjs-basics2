"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classes from "./mainHeader.module.css";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={pathname.startsWith(`${href}`) ? classes.active : ""}
    >
      {children}
    </Link>
  );
};

export default NavLink;
