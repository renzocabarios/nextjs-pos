"use client";
import React from "react";
import style from "./style.module.css";
import { Button } from "@/components";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const router = useRouter();

  return (
    <>
      <div className={style.container}>
        <Button onClick={() => router.push("/")}>Create Transactions</Button>{" "}
        <Button onClick={() => router.push("/transactions")}>
          Transactions
        </Button>
      </div>
      <div className={style.divider}></div>
    </>
  );
}
