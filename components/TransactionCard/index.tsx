import React from "react";
import style from "./style.module.css";

export default function TransactionCard({ createdAt, items, total }: any) {
  const formatDate = (dateString: string) => {
    const temp = new Date(Date.parse(dateString));
    return temp.toLocaleString();
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.header_container}>
          <h5 className="text-white-200 font-bold">{formatDate(createdAt)}</h5>
          <h5 className="text-secondary-500">₱{total}.00</h5>
        </div>
        <div className={style.items_container}>
          {items.map((e: any) => {
            return (
              <div key={e._id} className={style.item_container}>
                <p className="text-secondary-500">
                  {e.name} <span>{e.quantity}x</span>
                </p>
                <p className="text-secondary-500">
                  + ₱{e.price * e.quantity}.00
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
