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
  addItems: (items: any) =>
    set((state: any) => {
      items.quantity = 1;
      return { items: [...state.items, items] };
    }),
  createTransaction: async (items: any[]) => {
    const response = (await post("transactions/", { items })).data;
    alert(response);
    set(() => {
      return { items: [] };
    });
  },
}));
