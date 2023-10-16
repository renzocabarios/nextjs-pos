import { create } from "zustand";
import { get } from "@/services/api";

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
      return { items: [...state.items, items] };
    }),
}));
