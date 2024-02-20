import { create } from "zustand";

interface ConfigState {
  antdToken: ThemeToken;
  pageToken: PageToken;
  breakpoint: Breakpoint;
  screenWidth: number;
  updateAntdToken: (params: ThemeToken) => void;
  updatePageToken: (params: PageToken) => void;
  updateBreakpoint: (params: Breakpoint) => void;
  updateScreenWidth: (params: number) => void;
}

const useConfigStore = create<ConfigState>((set) => ({
  pageToken: {
    cbg: "#EDEFF3",
    fHeight: "60px",
    fbg: "#7DBCEA",
    sPlacement: "left",
    sWidth: "280px",
    sMobileWidth: "240px",
  },
  antdToken: {
    colorPrimary: "#393E46",
  },
  breakpoint: "", //断点
  screenWidth: 0, //尺寸

  updateAntdToken: (antdToken) => set({ antdToken }),
  updatePageToken: (pageToken) => set({ pageToken }),
  updateBreakpoint: (breakpoint) => set({ breakpoint }),
  updateScreenWidth: (screenWidth) => set({ screenWidth }),
}));

export default useConfigStore;
