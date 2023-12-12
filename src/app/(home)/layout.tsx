"use client";
import Sider from "@/components/sider/Sider";
import useConfigStore from "@/store/config";
import { ConfigProvider, Layout } from "antd";
import React, { useEffect } from "react";
const { Footer, Content } = Layout;

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
      <Layout>
        <Layout>
          <Sider />
          <Content>{children}</Content>
        </Layout>
        <Footer style={{ backgroundColor: pageToken.fbg, height: pageToken.fHeight }}>Footer</Footer>
      </Layout>
    </ConfigProvider>
  );
}
