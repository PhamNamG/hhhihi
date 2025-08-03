import { create } from "zustand";

export const useCategoryStore = create((set: any) => ({
  categorys: [],
  setCategory: (data: any) => set({ categorys: data }),
}));
