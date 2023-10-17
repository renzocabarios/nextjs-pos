"use client";
import React from "react";
import style from "./style.module.css";
import { Button } from "@/components";

export default function Navbar() {
  return (
    <>
      <div className={style.container}>
        <Button>Transactions</Button>
        <div></div>
        <div></div>
      </div>
      <div className={style.divider}></div>
    </>
  );
}
