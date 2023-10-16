import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import image from "@/public/placeholder.png";

export default function ItemCard({ name, price, onClick }: any) {
  return (
    <>
      <div className={style.container} onClick={onClick ?? (() => {})}>
        <Image src={image} alt="TEST" />
        <p className="text-white-200 font-bold">{name}</p>
        <h5 className="text-secondary-500">₱{price}.00</h5>
      </div>
    </>
  );
}
