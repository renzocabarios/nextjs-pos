import { create } from "zustand";
import { get, post } from "@/services/api";

export const useItemsStore = create((set) => ({
  data: [],
  getItems: async () => {
    const response = (await get("items/")).data;
    return set(() => ({ data: response.data }));
  },
}));

export const useTransactionsStore = create((set) => ({
  items: [],
  transactions: [],
  getTransactions: async () => {
    const response = (await get("transactions/")).data;
    return set(() => ({ transactions: response.data }));
  },
  addItems: (items: any) =>
    set((state: any) => {
      items.quantity = 1;
      return { items: [...state.items, items] };
    }),
  createTransaction: async (items: any[]) => {
    (await post("transactions/", { items })).data;
    set(() => {
      return { items: [] };
    });
  },
}));
