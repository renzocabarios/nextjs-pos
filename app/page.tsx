"use client";
import { Sidenav, ItemCard } from "@/components";
import { useEffect } from "react";
import { useItemsStore } from "@/states";
import style from "./style.module.css";

export default function Home() {
  const { getItems, data } = useItemsStore() as any;

  useEffect(() => {
    getItems();
  });

  return (
    <main>
      <Sidenav>
        <div className={style.container}>
          {data.map((e: any) => {
            return <ItemCard key={e._id} name={e.name} price={e.price} />;
          })}
        </div>
      </Sidenav>
    </main>
  );
}
