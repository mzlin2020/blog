"use client";
import Sider from "@/components/sider/Sider";
import useConfigStore from "@/store/config";
import { ConfigProvider } from "antd";
import { debounce } from "lodash";
import React, { useEffect } from "react";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  const { antdToken, pageToken, updateBreakpoint, updateScreenWidth } = useConfigStore();

  // 根据屏幕尺寸判断断点
  useEffect(() => {
    const handleResize = () => {
      let screenWidth = window.innerWidth;
      const breakpoints = [1536, 1280, 1024, 768, 640, 480, 0];
      const breakpointsMap = ["2xl", "xl", "lg", "md", "sm", "xs", ""];
      let index = breakpoints.findIndex((width) => screenWidth >= width);
      updateBreakpoint(breakpointsMap[index] as Breakpoint);
      updateScreenWidth(screenWidth);
    };
    handleResize();
    window.addEventListener("resize", debounce(handleResize, 150));
    return () => {
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: { ...antdToken },
      }}
    >
      <div id="app">
        <Sider />
        <main>{children}</main>
        <footer style={{ backgroundColor: pageToken.fbg, height: pageToken.fHeight }} className="relative z-10">
          Footer
        </footer>
      </div>
    </ConfigProvider>
  );
}
