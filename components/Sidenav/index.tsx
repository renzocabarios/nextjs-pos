"use client";
import React from "react";
import style from "./style.module.css";
import { useTransactionsStore } from "@/states";
import Button from "../Button";
export default function Sidenav({ children }: any) {
  const { items } = useTransactionsStore() as any;
  const { createTransaction } = useTransactionsStore() as any;

  const checkout = () => {
    createTransaction(items);
  };

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
        <div className={`${style.details_container}`}>
          <div className={`${style.header_container}  `}>
            <h5 className="text-white-900">Total</h5>
            <h5 className="text-secondary-500">
              ₱
              {items.reduce(
                (acc: any, curr: any) => curr.quantity * curr.price + acc,
                0
              )}
              .00
            </h5>
          </div>

          <Button onClick={checkout}>Checkout</Button>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.divider}></div>
        <div className={style.content}>{children}</div>
      </div>
    </>
  );
}
