"use client";
import React from "react";
import style from "./style.module.css";

export default function Sidenav({ children }: any) {
  return (
    <>
      <div className={style.sidenav}></div>
      <div className={style.container}>
        <div className={style.divider}></div>
        <div className={style.content}>{children}</div>
      </div>
    </>
  );
}
