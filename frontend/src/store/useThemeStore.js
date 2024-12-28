import { create } from "zustand";
export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-Theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("chat-Theme", theme);
    set({ theme });
  },
}));
