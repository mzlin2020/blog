import { create } from "zustand";

interface notesState {
  isopenNavbar: boolean;
  updateIsOpenNavbar: (params: boolean) => void;
}

const useConfigStore = create<notesState>((set) => ({
  isopenNavbar: false,
  updateIsOpenNavbar: (newVal) => set({ isopenNavbar: newVal }),
}));

export default useConfigStore;
