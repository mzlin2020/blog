"use client";
import useConfigStore from "@/store/config";
import { Drawer, FloatButton } from "antd";
import { useState } from "react";

const Sider = () => {
  const [open, setOpen] = useState(false);
  const { pageToken, screenWidth } = useConfigStore();

  return (
    <>
      <FloatButton
        className="left-5 top-5"
        icon={<span className="iconfont text-lg">&#xe610;</span>}
        onClick={() => setOpen(true)}
      />
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
