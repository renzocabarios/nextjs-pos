import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import image from "@/public/placeholder.png";

export default function ItemCard({ name, price }: any) {
  return (
    <>
      <div className={style.container}>
        <Image src={image} alt="TEST" />
        <p className="text-white-900 font-bold">{name}</p>
        <h5 className="text-secondary-500">₱{price}</h5>
      </div>
    </>
  );
}
