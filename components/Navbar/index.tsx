"use client";
import React from "react";
import style from "./style.module.css";
import { Button } from "@/components";

export default function Sidenav() {
  return (
    <>
      <div className={style.container}>
        <h4>POS</h4>

        <div className={style.links_container}>
          <p>Marketplace</p>
          <p>Community</p>
          <p>Events</p>
        </div>

        <div className={style.links_container}>
          <Button outlined>Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </div>
      <div className={style.divider}></div>
    </>
  );
}
