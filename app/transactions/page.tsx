"use client";
import { Sidenav, TransactionCard } from "@/components";
import { useEffect } from "react";
import { useTransactionsStore } from "@/states";
import style from "./style.module.css";

export default function Home() {
  const { getTransactions, transactions } = useTransactionsStore() as any;

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <main>
      <Sidenav>
        <div className={style.container}>
          {transactions.map((e: any) => {
            return (
              <TransactionCard
                key={e._id}
                items={e.items}
                createdAt={e.createdAt}
                total={e.total}
              />
            );
          })}
        </div>
      </Sidenav>
    </main>
  );
}
