"use client";
import useConfigStore from "@/store/config";
import { Drawer } from "antd";
import { useState } from "react";

const Sider = () => {
  const [open, setOpen] = useState(false);
  const { pageToken, screenWidth } = useConfigStore();

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="fixed left-5 top-5 z-[999] flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full bg-black text-white opacity-80 outline-0"
      >
        <span className="iconfont">&#xe610;</span>
      </div>
      <Drawer
        placement={pageToken.sPlacement}
        open={open}
        onClose={() => setOpen(false)}
        width={screenWidth < 1024 ? pageToken.sMobileWidth : pageToken.sWidth}
        closable={false}
      ></Drawer>
    </>
  );
};
export default Sider;
