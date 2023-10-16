"use client";
import React from "react";
import style from "./style.module.css";
import { useTransactionsStore } from "@/states";

export default function Sidenav({ children }: any) {
  const { items } = useTransactionsStore() as any;

  return (
    <>
      <div className={style.sidenav}>
        {items.map((e: any) => {
          return (
            <div className={style.item_container} key={e._id}>
              <div className={style.row}>
                <h5 className="text-white-900">{e.name}</h5>
                <p className="text-secondary-500">{e.quantity}x</p>
              </div>
              <h5 className="text-secondary-500">₱{e.price}.00</h5>
            </div>
          );
        })}
      </div>
      <div className={style.container}>
        <div className={style.divider}></div>
        <div className={style.content}>{children}</div>
      </div>
    </>
  );
}
